import express from 'express';
import http from 'http';
import https from 'https';
import { WebSocketServer, WebSocket } from 'ws';
import os from 'os';
import path from 'path';
import QRCode from 'qrcode';
import selfsigned from 'selfsigned';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();

const HTTP_PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;

// Detect local IP address (prioritize Wi-Fi / Hotspot for phone pairing)
function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push({
          interface: name,
          address: iface.address
        });
      }
    }
  }

  // Lower score = higher priority. Prefer the adapter the phone can actually reach,
  // then Wi-Fi, and push VPN / virtual adapters (Tailscale, WSL, Hyper-V) to the bottom.
  const score = (iface) => {
    let s = 0;

    // Direct phone-tether / PC-hotspot subnets:
    //   Windows Mobile Hotspot -> 192.168.137.x
    //   Android USB/Wi-Fi tethering -> 192.168.42.x / 192.168.43.x
    //   iPhone personal hotspot -> 172.20.10.x
    if (
      /^192\.168\.137\./.test(iface.address) ||
      /^192\.168\.4[23]\./.test(iface.address) ||
      /^172\.20\.10\./.test(iface.address)
    ) {
      s -= 300;
    }

    if (/wi-?fi|wlan|wireless|hotspot/i.test(iface.interface)) s -= 100;
    if (/tailscale|vpn|wsl|vEthernet|virtual|loopback|bluetooth/i.test(iface.interface)) s += 200;

    if (/^192\.168\./.test(iface.address)) s -= 10;
    else if (/^10\./.test(iface.address)) s -= 5;
    else if (/^172\.(1[6-9]|2\d|3[01])\./.test(iface.address)) s -= 5;

    return s;
  };

  addresses.sort((a, b) => score(a) - score(b) || a.interface.localeCompare(b.interface));

  return addresses;
}

function getPrimaryIp() {
  const addrs = getLocalIpAddresses();
  return addrs.length > 0 ? addrs[0].address : 'localhost';
}

function buildMobileUrls(ip) {
  const hostParam = `${ip}:${HTTPS_PORT}`;
  return {
    ip,
    httpsUrl: `https://${ip}:${HTTPS_PORT}/mobile.html?host=${encodeURIComponent(hostParam)}`,
    httpUrl: `http://${ip}:${HTTP_PORT}/mobile.html?host=${encodeURIComponent(`${ip}:${HTTP_PORT}`)}`
  };
}

let currentPrimaryIp = getPrimaryIp();
let httpsServer = null;

// Serve built frontend assets with strict no-cache for entry HTML and Service Worker
const distDir = path.join(rootDir, 'dist');

app.use((req, res, next) => {
  const p = req.path.toLowerCase();
  if (
    p === '/' ||
    p === '/flightmap' ||
    p === '/flightmap/' ||
    p.endsWith('.html') ||
    p.includes('sw.js') ||
    p.includes('registersw') ||
    p.endsWith('.webmanifest')
  ) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});

app.use('/FlightMap', express.static(distDir));
app.use(express.static(distDir));
app.use('/FlightMap/assets', express.static(path.join(distDir, 'assets')));
app.get(['/start.html', '/FlightMap/start.html'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.sendFile(path.join(distDir, 'start.html'));
});
app.get(['/mobile.html', '/FlightMap/mobile.html'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.sendFile(path.join(distDir, 'mobile.html'));
});
app.use('/assets', express.static(path.join(rootDir, 'public', 'assets')));

// API: Get mobile pairing URLs (recomputed live so it follows Wi-Fi <-> hotspot changes)
app.get('/api/mobile-url', (req, res) => {
  const localIps = getLocalIpAddresses();
  const ip = localIps.length > 0 ? localIps[0].address : 'localhost';
  const { httpsUrl, httpUrl } = buildMobileUrls(ip);
  res.setHeader('Cache-Control', 'no-store');
  res.json({
    url: httpsUrl,
    httpsUrl,
    httpUrl,
    ip,
    httpPort: HTTP_PORT,
    httpsPort: HTTPS_PORT,
    allIps: localIps
  });
});

// API: Generate QR code image for instant mobile camera pairing (points to HTTPS)
app.get('/api/pair-qr', async (req, res) => {
  try {
    const localIps = getLocalIpAddresses();
    const ip = localIps.length > 0 ? localIps[0].address : 'localhost';
    const { httpsUrl } = buildMobileUrls(ip);
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'no-store');
    await QRCode.toFileStream(res, httpsUrl, {
      width: 280,
      margin: 2,
      color: {
        dark: '#00e5ff',
        light: '#030814'
      }
    });
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

// Serve mobile page explicitly
app.get('/mobile.html', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.sendFile(path.join(distDir, 'mobile.html'));
});

// Fallback SPA routing
app.get('*', (req, res) => {
  if (/\.(js|css|png|jpg|jpeg|svg|json|geojson|woff2|ico|webmanifest)$/i.test(req.path)) {
    return res.status(404).send('Asset not found');
  }
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.sendFile(path.join(distDir, 'index.html'));
});

// Unified WebSocket Client Set
const clients = new Set();
let lastGpsLog = 0;

function isLaptopOnline() {
  for (const client of clients) {
    if (client.role === 'laptop' && client.readyState === WebSocket.OPEN) {
      return true;
    }
  }
  return false;
}

function isPhoneOnline() {
  for (const client of clients) {
    if (client.role === 'phone' && client.readyState === WebSocket.OPEN) {
      return true;
    }
  }
  return false;
}

function broadcastPeerStatus() {
  const laptopOnline = isLaptopOnline();
  const phoneOnline = isPhoneOnline();
  const payload = JSON.stringify({
    type: 'peer_status',
    laptopOnline,
    phoneOnline,
    totalClients: clients.size,
    serverIp: getPrimaryIp(),
    timestamp: Date.now()
  });
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      try {
        client.send(payload);
      } catch (e) {}
    }
  }
}

function setupWebSocket(wss) {
  wss.on('connection', (ws, req) => {
    ws.role = 'unknown';
    ws.remoteAddress = req.socket.remoteAddress || 'unknown';
    clients.add(ws);
    console.log(`[WebSocket] Client connected from ${ws.remoteAddress} (Total clients: ${clients.size})`);

    // Immediate server greeting / handshake
    try {
      ws.send(JSON.stringify({
        type: 'server_hello',
        serverIp: getPrimaryIp(),
        httpPort: HTTP_PORT,
        httpsPort: HTTPS_PORT,
        laptopOnline: isLaptopOnline(),
        totalClients: clients.size,
        timestamp: Date.now()
      }));
    } catch (e) {}

    // Announce peer status
    broadcastPeerStatus();

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());

        // Client role identification
        if (data.type === 'client_hello') {
          ws.role = data.role || 'unknown';
          console.log(`[WebSocket] Client identified role: "${ws.role}" from ${ws.remoteAddress}`);
          try {
            ws.send(JSON.stringify({
              type: 'hello_ack',
              role: ws.role,
              laptopOnline: isLaptopOnline(),
              serverIp: getPrimaryIp(),
              timestamp: Date.now()
            }));
          } catch (e) {}
          broadcastPeerStatus();
          return;
        }

        // Heartbeat keepalive ping
        if (data.type === 'ping') {
          try {
            ws.send(JSON.stringify({
              type: 'pong',
              clientTimestamp: data.timestamp,
              serverTimestamp: Date.now(),
              laptopOnline: isLaptopOnline()
            }));
          } catch (e) {}
          return;
        }

        // GPS Telemetry packet from mobile phone
        if (data.type === 'gps_update') {
          ws.role = 'phone';
          const laptopOnline = isLaptopOnline();

          // Immediate ACK to phone transmitter
          try {
            ws.send(JSON.stringify({
              type: 'gps_ack',
              packetId: data.timestamp,
              laptopOnline,
              serverTimestamp: Date.now()
            }));
          } catch (e) {}

          // Throttle telemetry console logging to avoid terminal spam
          const now = Date.now();
          if (now - lastGpsLog > 3000) {
            lastGpsLog = now;
            console.log(`[Telemetry] GNSS fix from phone: ${data.lat?.toFixed(5)}°, ${data.lon?.toFixed(5)}° | Alt: ${data.altitude || 0}m | Spd: ${Math.round(data.speed || 0)}m/s -> ${laptopOnline ? 'Delivered to Laptop 3D Map' : 'Buffered (Laptop display not open yet)'}`);
          }
        }

        if (data.type === 'flight_plan_command') {
          console.log(`[FlightPlan] Remote route command: ${data.from} -> ${data.to} (${data.flightNumber || 'custom'})`);
        }

        if (data.type === 'flight_plan_active') {
          console.log(`[FlightPlan] Active flight plan updated: ${data.from} -> ${data.to} (${data.flightNumber})`);
        }

        if (data.type === 'unit_system') {
          console.log(`[UnitSystem] Active unit system switched to: "${data.system}"`);
        }

        // Broadcast telemetry, camera commands, or flight plans to all other connected clients
        for (const client of clients) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
          }
        }
      } catch (e) {
        console.error('[WebSocket] Message parsing error:', e);
      }
    });

    ws.on('error', (err) => {
      console.warn(`[WebSocket] Client error from ${ws.remoteAddress}:`, err.message);
    });

    ws.on('close', () => {
      clients.delete(ws);
      console.log(`[WebSocket] Client disconnected from ${ws.remoteAddress} (Total clients: ${clients.size})`);
      broadcastPeerStatus();
    });
  });
}

/**
 * Build (or rebuild) the HTTPS listener. A fresh certificate is minted covering
 * every current interface IP, so switching Wi-Fi networks / enabling a phone
 * hotspot keeps the advertised URL and TLS identity valid.
 */
async function createHttpsServer() {
  const localIps = getLocalIpAddresses();
  const primaryIp = localIps.length > 0 ? localIps[0].address : 'localhost';

  const seen = new Set(['127.0.0.1', 'localhost']);
  const altNames = [
    { type: 2, value: 'localhost' },
    { type: 7, ip: '127.0.0.1' }
  ];
  for (const item of [...localIps.map((i) => i.address), primaryIp]) {
    if (!seen.has(item)) {
      seen.add(item);
      altNames.push({ type: 7, ip: item });
    }
  }

  console.log('[HTTPS Setup] Generating self-signed TLS certificate for local network...');
  const pems = await selfsigned.generate(
    [
      { name: 'commonName', value: primaryIp },
      { name: 'organizationName', value: 'FlightMap' }
    ],
    {
      days: 365,
      keySize: 2048,
      algorithm: 'sha256',
      extensions: [
        { name: 'basicConstraints', cA: false },
        { name: 'keyUsage', digitalSignature: true, keyEncipherment: true },
        { name: 'extKeyUsage', serverAuth: true, clientAuth: true },
        { name: 'subjectAltName', altNames }
      ]
    }
  );

  const server = https.createServer({ key: pems.private, cert: pems.cert }, app);
  const wss = new WebSocketServer({ server, path: '/ws/telemetry' });
  setupWebSocket(wss);

  await new Promise((resolve, reject) => {
    const onError = (err) => reject(err);
    server.once('error', onError);
    server.listen(HTTPS_PORT, '0.0.0.0', () => {
      server.removeListener('error', onError);
      resolve();
    });
  });

  server.on('error', (err) => console.error('[HTTPS Server] Runtime error:', err));
  return server;
}

async function printConnectionInfo() {
  const localIps = getLocalIpAddresses();
  const ip = localIps.length > 0 ? localIps[0].address : 'localhost';
  const { httpsUrl, httpUrl } = buildMobileUrls(ip);

  console.log(`[HTTPS Server] Listening on https://localhost:${HTTPS_PORT} and https://${ip}:${HTTPS_PORT}`);
  console.log('\n=============================================================');
  console.log('   FLIGHTMAP // 3D Offline In-Flight Moving Map Server       ');
  console.log('=============================================================');
  console.log(`\n> Laptop Display:  http://localhost:${HTTP_PORT}`);
  console.log(`> Mobile GPS Hub:  ${httpsUrl} (HTTPS for Satellite GPS)`);
  console.log(`> Mobile HTTP:     ${httpUrl}\n`);

  if (localIps.length > 0) {
    console.log('Detected Network Adapters:');
    for (const item of localIps) {
      console.log(`  • ${item.interface.padEnd(16)}: https://${item.address}:${HTTPS_PORT}/mobile.html`);
    }
  }

  try {
    const qrString = await QRCode.toString(httpsUrl, { type: 'terminal', small: true });
    console.log('\nScan with Phone Camera to open Mobile GPS Hub:');
    console.log(qrString);
  } catch (e) {}

  console.log('=============================================================\n');
}

/**
 * Swap the HTTPS listener whenever the primary network IP changes, e.g. when
 * the laptop moves from home Wi-Fi onto a phone hotspot (or vice-versa).
 */
async function refreshHttpsServer() {
  const nextIp = getPrimaryIp();
  if (httpsServer && nextIp === currentPrimaryIp) return;

  if (httpsServer) {
    const old = httpsServer;
    httpsServer = null;
    await new Promise((resolve) => old.close(resolve));
  }

  currentPrimaryIp = nextIp;
  try {
    httpsServer = await createHttpsServer();
  } catch (err) {
    console.error('[HTTPS Server] Error starting HTTPS:', err);
  }
  await printConnectionInfo();
}

async function startServers() {
  // 1. HTTP Server
  const httpServer = http.createServer(app);
  const wssHttp = new WebSocketServer({ server: httpServer, path: '/ws/telemetry' });
  setupWebSocket(wssHttp);

  httpServer.listen(HTTP_PORT, '0.0.0.0', () => {
    console.log(`[HTTP Server]  Listening on http://localhost:${HTTP_PORT} and http://${getPrimaryIp()}:${HTTP_PORT}`);
  });

  // 2. HTTPS Server (Enables Secure Context for Mobile Hardware GPS)
  await refreshHttpsServer();

  // 3. Watch for network transitions (Wi-Fi <-> hotspot / tethering) and
  //    automatically re-issue the certificate + refresh the advertised URL.
  setInterval(async () => {
    const ip = getPrimaryIp();
    if (ip !== currentPrimaryIp) {
      console.log(`[Network] Primary IP changed: ${currentPrimaryIp} -> ${ip}. Rebinding HTTPS...`);
      await refreshHttpsServer();
    }
  }, 5000);
}

startServers();
