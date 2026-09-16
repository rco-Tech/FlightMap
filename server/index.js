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
  return {
    ip,
    httpsUrl: `https://${ip}:${HTTPS_PORT}/mobile.html`,
    httpUrl: `http://${ip}:${HTTP_PORT}/mobile.html`
  };
}

let currentPrimaryIp = getPrimaryIp();
let httpsServer = null;

// Serve built frontend assets
const distDir = path.join(rootDir, 'dist');
app.use('/FlightMap', express.static(distDir));
app.use(express.static(distDir));
app.use('/FlightMap/assets', express.static(path.join(distDir, 'assets')));
app.get(['/start.html', '/FlightMap/start.html'], (req, res) => res.sendFile(path.join(distDir, 'start.html')));
app.get(['/mobile.html', '/FlightMap/mobile.html'], (req, res) => res.sendFile(path.join(distDir, 'mobile.html')));
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
  res.sendFile(path.join(distDir, 'mobile.html'));
});

// Fallback SPA routing
app.get('*', (req, res) => {
  if (/\.(js|css|png|jpg|jpeg|svg|json|geojson|woff2|ico|webmanifest)$/i.test(req.path)) {
    return res.status(404).send('Asset not found');
  }
  res.sendFile(path.join(distDir, 'index.html'));
});

// Unified WebSocket Client Set
const clients = new Set();

function setupWebSocket(wss) {
  wss.on('connection', (ws, req) => {
    clients.add(ws);
    console.log(`[WebSocket] Client connected from ${req.socket.remoteAddress} (Active: ${clients.size})`);

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());

        // Broadcast telemetry or camera commands to all other connected clients
        for (const client of clients) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
          }
        }
      } catch (e) {
        console.error('[WebSocket] Message parsing error:', e);
      }
    });

    ws.on('close', () => {
      clients.delete(ws);
      console.log(`[WebSocket] Client disconnected (Active: ${clients.size})`);
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
