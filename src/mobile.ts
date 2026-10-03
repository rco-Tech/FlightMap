import './mobile.css';
import { FlightPlanManager, type RoutePreset } from './telemetry/FlightPlan';
import { UnitManager, type UnitSystem } from './telemetry/UnitManager';
import { AviationMath } from './telemetry/AviationMath';

type ConnectionState = 'laptop_connected' | 'relay_connected' | 'connecting' | 'offline';

class MobileController {
  private ws: WebSocket | null = null;
  private isWsConnected: boolean = false;
  private isLaptopOnline: boolean = false;
  private unitManager: UnitManager = UnitManager.getInstance();
  private targetHost: string = '';
  private packetsSent: number = 0;
  private packetsAcked: number = 0;
  private lastLatencyMs: number | null = null;
  private pingTimer: number | null = null;
  private reconnectTimer: number | null = null;

  private isTransmitting: boolean = false;
  private isSimulating: boolean = false;
  private simTimer: number | null = null;
  private watchId: number | null = null;
  private wakeLock: any = null;

  // Gyroscope attitude
  private syncOrientation: boolean = false;
  private currentPitch: number = 0;
  private currentRoll: number = 0;

  // Last GPS coordinates
  private lastLat: number = 0;
  private lastLon: number = 0;
  private lastAlt: number = 0;
  private lastSpeed: number = 0;
  private lastHeading: number = 0;
  private lastAccuracy: number = 0;

  // Simulated flight progress for testing
  private simLat: number = 51.47;
  private simLon: number = -0.45;
  private simAlt: number = 41000;
  private simSpeed: number = 495;
  private simHdg: number = 285;

  // Remote Flight Plan & Route Selector
  private flightPlanManager: FlightPlanManager = FlightPlanManager.getInstance();
  private activeRouteKey: string = 'BHX-OTP';
  private isFlightPlanOpen: boolean = false;

  // Remote Simulation Speed Controls
  private remoteSimSpeed: number = 10;
  private remoteSimPaused: boolean = false;

  constructor() {
    this.targetHost = this.resolveTargetHost();
    this.render();
    this.initWebSocket();
    this.initEvents();
    this.renderMobilePresets();
    this.flightPlanManager.onFavoritesChanged(() => {
      this.renderMobilePresets();
    });
    this.checkSecureContext();
  }

  private resolveTargetHost(): string {
    const params = new URLSearchParams(window.location.search);
    const hostFromQuery = params.get('host') || params.get('server');
    if (hostFromQuery) {
      const clean = hostFromQuery.replace(/^[a-z]+:\/\//i, '').replace(/\/.*$/, '');
      localStorage.setItem('flightmap_target_host', clean);
      return clean;
    }

    const saved = localStorage.getItem('flightmap_target_host');
    if (saved) return saved;

    const currentHost = window.location.host;
    // Don't default to github.io since static hosting has no WebSocket relay
    if (currentHost && !currentHost.includes('github.io')) {
      return currentHost;
    }

    return '192.168.1.98:3443';
  }

  private checkSecureContext(): void {
    const isSecure = window.isSecureContext;
    const banner = document.getElementById('insecure-banner');
    if (banner) {
      if (!isSecure && window.location.protocol === 'http:') {
        banner.style.display = 'flex';
      } else {
        banner.style.display = 'none';
      }
    }
  }

  private render(): void {
    const root = document.getElementById('mobile-app')!;
    root.innerHTML = `
      <div class="mobile-root">
        <!-- Insecure Context Warning (Chrome/Safari requirement) -->
        <div class="insecure-banner" id="insecure-banner" style="display: none;">
          <div class="insecure-title">
            <span>⚠️</span>
            <span>HTTPS Required for Mobile GPS</span>
          </div>
          <p class="insecure-desc">
            Mobile Chrome & Safari block hardware GPS on plain HTTP. Switch to our local HTTPS server to grant location access:
          </p>
          <button class="btn-switch-https" id="btn-switch-https">Switch to HTTPS (Port 3443)</button>
        </div>

        <!-- Sticky Header with Real-Time Handshake Status -->
        <header class="mobile-header">
          <div class="mobile-title">
            <span>FLIGHTMAP COPILOT</span>
            <h1>GPS Relay</h1>
          </div>
          <div class="conn-badge" id="btn-header-badge" title="Tap to configure PC Connection">
            <span class="conn-dot" id="ws-dot"></span>
            <span id="ws-status-text">CONNECTING...</span>
          </div>
        </header>

        <!-- Dedicated Handshake & Connection Card -->
        <div class="handshake-card state-connecting" id="handshake-card">
          <div class="handshake-status-banner">
            <div class="handshake-icon" id="hs-status-icon">🔄</div>
            <div class="handshake-info">
              <div class="handshake-title" id="hs-status-title">Connecting to Laptop...</div>
              <div class="handshake-desc" id="hs-status-desc">
                Establishing WebSocket handshake with ${this.targetHost}...
              </div>
            </div>
          </div>

          <!-- 4-Metric Live Handshake Readout -->
          <div class="handshake-metrics-grid">
            <div class="hs-metric">
              <span class="hs-label">TARGET PC HOST</span>
              <span class="hs-val highlight" id="hs-target-host">${this.targetHost}</span>
            </div>
            <div class="hs-metric">
              <span class="hs-label">ROUNDTRIP PING</span>
              <span class="hs-val" id="hs-latency">--</span>
            </div>
            <div class="hs-metric">
              <span class="hs-label">PACKETS TRANSMITTED</span>
              <span class="hs-val" id="hs-packets-sent">0</span>
            </div>
            <div class="hs-metric">
              <span class="hs-label">LAPTOP ACKS</span>
              <span class="hs-val success" id="hs-packets-acked">0</span>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="hs-actions-row">
            <button class="hs-btn-action" id="btn-toggle-ip-drawer">
              <span>⚙️</span>
              <span id="label-toggle-ip">Change PC IP</span>
            </button>
            <button class="hs-btn-action" id="btn-reconnect-now">
              <span>🔄</span>
              <span>Reconnect Now</span>
            </button>
          </div>

          <!-- Inline IP Configuration Drawer -->
          <div class="ip-config-drawer hidden" id="ip-config-drawer">
            <div class="ip-config-title">CONFIGURE LAPTOP IP ADDRESS</div>
            <div class="ip-input-row">
              <input
                type="text"
                class="ip-input"
                id="input-pc-ip"
                value="${this.targetHost}"
                placeholder="e.g. 192.168.1.98:3443"
                autocomplete="off"
                spellcheck="false"
              />
              <button class="btn-save-ip" id="btn-save-ip">Connect</button>
            </div>
            <div class="ip-preset-chips" id="ip-preset-chips">
              <span class="ip-chip" data-host="192.168.1.98:3443">🏠 WiFi (192.168.1.98:3443)</span>
              <span class="ip-chip" data-host="172.20.10.1:3443">📱 iPhone (172.20.10.1:3443)</span>
              <span class="ip-chip" data-host="192.168.43.1:3443">🤖 Android (192.168.43.1:3443)</span>
              <span class="ip-chip" data-host="192.168.137.1:3443">💻 Win Hotspot (192.168.137.1:3443)</span>
              <span class="ip-chip" data-host="192.168.1.98:3000">⚡ HTTP Port 3000</span>
            </div>
          </div>

          <!-- SSL Certificate Acceptance Helper -->
          <div class="ssl-helper-card hidden" id="ssl-helper-card">
            <div class="ssl-helper-text">
              🔒 <strong>First time on local HTTPS?</strong> Mobile Chrome and Safari require accepting our self-signed TLS certificate once before allowing WebSockets:
            </div>
            <a href="https://${this.targetHost}/" target="_blank" class="btn-accept-ssl" id="link-accept-ssl">
              <span>👉 Open Certificate Authorization Page</span>
            </a>
          </div>
        </div>

        <button class="switch-mode-btn" id="btn-switch-mode">🧭 Switch Operating Mode</button>

        <!-- Transmit Button Card -->
        <div class="transmit-card">
          <button class="btn-transmit" id="btn-toggle-transmit">
            <span id="transmit-icon">📡</span>
            <span id="transmit-label">START TRANSMITTING GPS</span>
          </button>
          <p class="transmit-subtext" id="transmit-subtext">
            Streams your phone's hardware satellite GNSS fixes to the laptop 3D flight monitor in real-time.
          </p>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="test-gps-btn" id="btn-test-gps">🧪 Test GPS Simulator</button>
          </div>
          <div class="transmission-counter" id="tx-counter">Packets Sent to Laptop: 0</div>
        </div>

        <!-- Measurement Unit Selector -->
        <div class="mobile-unit-bar">
          <span class="m-unit-lbl">UNITS:</span>
          <div class="m-unit-pills">
            <button class="m-unit-pill ${this.unitManager.getSystem() === 'maritime' ? 'active' : ''}" data-unit="maritime">⚓ MARITIME</button>
            <button class="m-unit-pill ${this.unitManager.getSystem() === 'metric' ? 'active' : ''}" data-unit="metric">🌍 METRIC</button>
            <button class="m-unit-pill ${this.unitManager.getSystem() === 'imperial' ? 'active' : ''}" data-unit="imperial">🚗 IMPERIAL</button>
          </div>
        </div>

        <!-- Real-time GPS Telemetry Grid -->
        <div class="telemetry-mobile-grid">
          <div class="metric-box">
            <span class="label">GPS ACCURACY</span>
            <div class="val-row">
              <span class="big-val" id="disp-acc">--</span>
              <span class="unit">M</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">GROUND SPEED</span>
            <div class="val-row">
              <span class="big-val" id="disp-speed">--</span>
              <span class="unit" id="disp-speed-unit">KTS</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">GPS ALTITUDE</span>
            <div class="val-row">
              <span class="big-val" id="disp-alt">--</span>
              <span class="unit" id="disp-alt-unit">FT</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">COMPASS TRACK</span>
            <div class="val-row">
              <span class="big-val" id="disp-heading">--</span>
              <span class="unit">°</span>
            </div>
          </div>

          <div class="metric-box full-width">
            <span class="label">CURRENT POSITION & STATUS</span>
            <span class="coords" id="disp-coords">Tap "Start Transmitting GPS" to acquire satellite fix</span>
            <div class="fix-type-tag" id="disp-fix-type"></div>
          </div>
        </div>

        <!-- Phone Gyroscope Attitude Sync -->
        <div class="gyro-card">
          <div class="gyro-header">
            <div>
              <div class="gyro-title">Phone Gyro Aircraft Tilt</div>
              <div style="font-size: 11px; color: var(--text-muted);">Hold phone & bank like an aircraft</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="chk-gyro-sync" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="gyro-readout">
            <span id="disp-pitch">PITCH: +0.0°</span>
            <span id="disp-roll">ROLL: 0.0°</span>
          </div>
        </div>

        <!-- Remote Camera Switcher -->
        <div class="remote-cam-card">
          <div class="remote-cam-title">REMOTE LAPTOP CAMERA VIEW</div>
          <div class="cam-grid">
            <button class="cam-pill" data-cam="cockpit">🪟 Cockpit</button>
            <button class="cam-pill" data-cam="wing">🪽 Wing Cam</button>
            <button class="cam-pill" data-cam="chase">🎥 Chase</button>
            <button class="cam-pill" data-cam="orbit">🌐 Globe</button>
            <button class="cam-pill" data-cam="tactical">🗺️ 2D Nav</button>
          </div>

          <!-- Remote Simulation Speed Controls -->
          <div class="remote-sim-speed-section">
            <div class="remote-sim-speed-header">
              <span class="remote-sim-speed-title">LAPTOP SIMULATION SPEED</span>
              <span class="remote-sim-speed-badge" id="m-sim-speed-badge">10x</span>
            </div>
            <div class="remote-sim-speed-row">
              <button class="remote-sim-pause-btn" id="m-btn-sim-pause" title="Pause / Resume Laptop Simulation">
                <span id="m-sim-pause-icon">⏸</span>
                <span id="m-sim-pause-text">PAUSE</span>
              </button>
              <div class="remote-sim-speed-pills" id="m-sim-speed-pills">
                <button class="m-speed-pill" data-speed="1">1x</button>
                <button class="m-speed-pill" data-speed="2">2x</button>
                <button class="m-speed-pill" data-speed="5">5x</button>
                <button class="m-speed-pill active" data-speed="10">10x</button>
                <button class="m-speed-pill" data-speed="25">25x</button>
                <button class="m-speed-pill" data-speed="50">50x</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Collapsible Remote Flight Plan & Route Selector -->
        <div class="remote-fp-card" id="card-remote-flightplan">
          <div class="remote-fp-header" id="btn-toggle-remote-fp">
            <div class="remote-fp-header-left">
              <span class="remote-fp-icon">✈️</span>
              <div>
                <div class="remote-fp-title">FLIGHT PLAN & ROUTE SELECTOR</div>
                <div class="remote-fp-sub" id="disp-active-route">Active: W4 3002 (BHX &rarr; OTP)</div>
              </div>
            </div>
            <span class="remote-fp-chevron" id="chevron-remote-fp">▼</span>
          </div>

          <div class="remote-fp-body collapsed" id="body-remote-fp">
            <div class="remote-fp-section-title">FAVORITE ROUTES & PRESETS</div>
            <div class="remote-fp-presets-grid" id="remote-presets-list">
              <!-- Dynamically populated presets -->
            </div>

            <div class="remote-fp-section-title">CUSTOM ROUTE</div>
            <div class="remote-fp-inputs-row">
              <div class="remote-fp-field">
                <span class="remote-fp-field-tag">ORIGIN</span>
                <input type="text" class="remote-fp-input" id="remote-input-from" placeholder="BHX" value="BHX" maxlength="4" autocomplete="off" spellcheck="false" />
              </div>
              <div class="remote-fp-arrow-wrap">
                <span class="remote-fp-arrow">&rarr;</span>
              </div>
              <div class="remote-fp-field">
                <span class="remote-fp-field-tag">DESTINATION</span>
                <input type="text" class="remote-fp-input" id="remote-input-to" placeholder="OTP" value="OTP" maxlength="4" autocomplete="off" spellcheck="false" />
              </div>
            </div>

            <div class="remote-fp-actions-row">
              <button class="btn-remote-fav" id="btn-mobile-save-fav" title="Save to Favorites">⭐ Save Fav</button>
              <button class="btn-remote-send" id="btn-mobile-send-route" title="Activate Route on Laptop">🚀 Send to Laptop</button>
            </div>
            <div class="remote-fp-feedback" id="remote-fp-feedback"></div>
          </div>
        </div>
      </div>
    `;
  }

  private initWebSocket(): void {
    if (this.ws) {
      try {
        this.ws.onopen = null;
        this.ws.onclose = null;
        this.ws.onerror = null;
        this.ws.onmessage = null;
        this.ws.close();
      } catch (e) {}
      this.ws = null;
    }

    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    const host = this.targetHost.trim();
    const cleanHost = host.replace(/^[a-z]+:\/\//i, '').replace(/\/.*$/, '');
    const protocol = window.location.protocol === 'https:' || cleanHost.includes(':3443') ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${cleanHost}/ws/telemetry`;

    this.updateHandshakeUI('connecting', `Connecting to ${cleanHost}...`);

    try {
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        this.isWsConnected = true;
        console.log('[Mobile] Connected to telemetry relay:', wsUrl);

        // Immediate client hello identifying as phone transmitter
        try {
          this.ws?.send(
            JSON.stringify({
              type: 'client_hello',
              role: 'phone',
              client: 'FlightMap Mobile GNSS Transmitter'
            })
          );
        } catch (e) {}

        this.startHeartbeat();
        this.updateHandshakeUI('relay_connected', `Connected to Relay (${cleanHost})`);
        this.updateTransmitCounter(true);
      };

      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          this.handleServerMessage(msg);
        } catch (e) {
          console.warn('[Mobile] Error parsing message:', e);
        }
      };

      this.ws.onerror = (err) => {
        console.warn('[Mobile] WebSocket error:', err);
      };

      this.ws.onclose = () => {
        this.isWsConnected = false;
        this.isLaptopOnline = false;
        this.stopHeartbeat();
        this.updateHandshakeUI('offline', `Disconnected from ${cleanHost}`);
        this.updateTransmitCounter(false);

        // Auto-reconnect after 3.5s
        this.reconnectTimer = window.setTimeout(() => this.initWebSocket(), 3500);
      };
    } catch (err) {
      this.isWsConnected = false;
      this.isLaptopOnline = false;
      this.updateHandshakeUI('offline', `Failed to open socket to ${cleanHost}`);
      this.updateTransmitCounter(false);
      this.reconnectTimer = window.setTimeout(() => this.initWebSocket(), 4000);
    }
  }

  private handleServerMessage(msg: any): void {
    if (msg.type === 'server_hello' || msg.type === 'hello_ack' || msg.type === 'peer_status') {
      if (msg.serverIp) {
        this.updateDetectedIpChips(msg.serverIp);
      }
      this.isLaptopOnline = Boolean(msg.laptopOnline);

      if (this.isLaptopOnline) {
        this.updateHandshakeUI('laptop_connected', `Connected to Laptop (${this.targetHost})`);
      } else {
        this.updateHandshakeUI('relay_connected', `Relay Online • Waiting for Laptop Map`);
      }
      this.updateTransmitCounter(true);
    }

    if (msg.type === 'pong') {
      if (msg.clientTimestamp) {
        this.lastLatencyMs = Math.max(1, Date.now() - msg.clientTimestamp);
      }
      if (msg.laptopOnline !== undefined) {
        this.isLaptopOnline = Boolean(msg.laptopOnline);
      }
      this.updateHandshakeStats();
      this.updateTransmitCounter(true);
    }

    if (msg.type === 'gps_ack' || msg.type === 'laptop_ack') {
      this.packetsAcked++;
      if (msg.laptopOnline) this.isLaptopOnline = true;
      this.updateHandshakeStats(true); // pulse ACK badge
      this.updateTransmitCounter(true);
    }

    if (msg.type === 'camera_ack' || msg.type === 'camera_active') {
      if (msg.mode) this.setActiveCameraPill(msg.mode);
    }

    if (msg.type === 'flight_plan_active' || msg.type === 'flight_plan_ack') {
      if (msg.from && msg.to) {
        this.activeRouteKey = `${msg.from.toUpperCase()}-${msg.to.toUpperCase()}`;
        const disp = document.getElementById('disp-active-route');
        if (disp) {
          disp.textContent = `Active: ${msg.flightNumber || msg.from + ' → ' + msg.to} (${msg.from} → ${msg.to})`;
        }
        this.renderMobilePresets();
      }
    }

    if (msg.type === 'unit_system' && msg.system) {
      this.unitManager.setSystem(msg.system);
      this.setActiveUnitPill(msg.system);
      this.updateMobileReadouts(this.isSimulating ? 'Simulator' : 'GPS');
    }

    if (msg.type === 'sim_speed_active' || msg.type === 'sim_speed_ack') {
      if (typeof msg.speed === 'number') {
        this.setActiveSimSpeedPill(msg.speed);
      }
      if (typeof msg.isPaused === 'boolean') {
        this.setRemoteSimPauseState(msg.isPaused);
      }
    }

    if (msg.type === 'sim_pause_active' || msg.type === 'sim_pause_ack') {
      if (typeof msg.isPaused === 'boolean') {
        this.setRemoteSimPauseState(msg.isPaused);
      }
      if (typeof msg.speed === 'number') {
        this.setActiveSimSpeedPill(msg.speed);
      }
    }
  }

  private setActiveUnitPill(system: string): void {
    document.querySelectorAll('.m-unit-pill').forEach((btn) => {
      if ((btn as HTMLElement).dataset.unit === system) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.pingTimer = window.setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        try {
          this.ws.send(
            JSON.stringify({
              type: 'ping',
              timestamp: Date.now()
            })
          );
        } catch (e) {}
      }
    }, 2500);
  }

  private stopHeartbeat(): void {
    if (this.pingTimer !== null) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  }

  private updateHandshakeUI(state: ConnectionState, detailText: string): void {
    const card = document.getElementById('handshake-card');
    const dot = document.getElementById('ws-dot');
    const badgeText = document.getElementById('ws-status-text');
    const icon = document.getElementById('hs-status-icon');
    const title = document.getElementById('hs-status-title');
    const desc = document.getElementById('hs-status-desc');
    const sslHelper = document.getElementById('ssl-helper-card');
    const sslLink = document.getElementById('link-accept-ssl') as HTMLAnchorElement;

    if (card) {
      card.className = `handshake-card state-${state}`;
    }

    if (sslHelper && sslLink) {
      if (state === 'offline' && (window.location.protocol === 'https:' || this.targetHost.includes(':3443'))) {
        sslHelper.classList.remove('hidden');
        sslLink.href = `https://${this.targetHost}/`;
      } else {
        sslHelper.classList.add('hidden');
      }
    }

    if (dot && badgeText && icon && title && desc) {
      switch (state) {
        case 'laptop_connected':
          dot.className = 'conn-dot online';
          badgeText.textContent = 'PC SYNCED';
          icon.textContent = '🟢';
          title.textContent = `Connected to Laptop (${this.targetHost})`;
          desc.textContent =
            'Active bi-directional handshake verified! FlightMap 3D cockpit monitor is receiving your live GNSS telemetry.';
          break;

        case 'relay_connected':
          dot.className = 'conn-dot relay';
          badgeText.textContent = 'RELAY READY';
          icon.textContent = '🟡';
          title.textContent = 'Connected to Relay Server';
          desc.textContent = `Connected to FlightMap server at ${this.targetHost}. Open http://localhost:3000 on your laptop to display moving map.`;
          break;

        case 'connecting':
          dot.className = 'conn-dot connecting';
          badgeText.textContent = 'CONNECTING...';
          icon.textContent = '🔄';
          title.textContent = `Connecting to ${this.targetHost}...`;
          desc.textContent = detailText || 'Establishing WebSocket telemetry handshake...';
          break;

        case 'offline':
        default:
          dot.className = 'conn-dot';
          badgeText.textContent = 'PC OFFLINE';
          icon.textContent = '🔴';
          title.textContent = `Disconnected from Laptop (${this.targetHost})`;
          desc.textContent =
            'Cannot reach PC. Ensure phone & PC are on the same Wi-Fi or Hotspot, or tap "Change PC IP" below.';
          break;
      }
    }

    this.updateHandshakeStats();
  }

  private updateHandshakeStats(pulseAck: boolean = false): void {
    const elTarget = document.getElementById('hs-target-host');
    const elLatency = document.getElementById('hs-latency');
    const elSent = document.getElementById('hs-packets-sent');
    const elAcked = document.getElementById('hs-packets-acked');

    if (elTarget) elTarget.textContent = this.targetHost;
    if (elLatency) {
      elLatency.textContent = this.lastLatencyMs !== null ? `${this.lastLatencyMs} ms` : '--';
    }
    if (elSent) elSent.textContent = this.packetsSent.toString();
    if (elAcked) {
      elAcked.textContent = this.packetsAcked.toString();
      if (pulseAck) {
        elAcked.classList.remove('pulse');
        void elAcked.offsetWidth; // trigger reflow
        elAcked.classList.add('pulse');
      }
    }
  }

  private updateDetectedIpChips(serverIp: string): void {
    const chipsContainer = document.getElementById('ip-preset-chips');
    if (!chipsContainer || !serverIp) return;
    const existing = chipsContainer.querySelector(`[data-host="${serverIp}:3443"]`);
    if (!existing) {
      const chip = document.createElement('span');
      chip.className = 'ip-chip';
      chip.setAttribute('data-host', `${serverIp}:3443`);
      chip.textContent = `⚡ Server IP (${serverIp}:3443)`;
      chip.addEventListener('click', () => {
        this.setTargetHost(`${serverIp}:3443`);
      });
      chipsContainer.prepend(chip);
    }
  }

  private setTargetHost(newHost: string): void {
    const clean = newHost.trim().replace(/^[a-z]+:\/\//i, '').replace(/\/.*$/, '');
    if (!clean) return;
    this.targetHost = clean;
    localStorage.setItem('flightmap_target_host', clean);

    const input = document.getElementById('input-pc-ip') as HTMLInputElement;
    if (input) input.value = clean;

    const drawer = document.getElementById('ip-config-drawer');
    if (drawer) drawer.classList.add('hidden');

    this.initWebSocket();
  }

  private initEvents(): void {
    // Return to the mode chooser
    document.getElementById('btn-switch-mode')?.addEventListener('click', () => {
      window.location.href = '/start.html';
    });

    // Switch to HTTPS button
    document.getElementById('btn-switch-https')?.addEventListener('click', () => {
      const httpsUrl = `https://${window.location.hostname}:3443/mobile.html`;
      window.location.href = httpsUrl;
    });

    // Header badge click opens IP configuration drawer
    document.getElementById('btn-header-badge')?.addEventListener('click', () => {
      this.toggleIpDrawer();
    });

    // Toggle IP drawer button
    document.getElementById('btn-toggle-ip-drawer')?.addEventListener('click', () => {
      this.toggleIpDrawer();
    });

    // Reconnect now button
    document.getElementById('btn-reconnect-now')?.addEventListener('click', () => {
      this.initWebSocket();
    });

    // Save & Connect IP button
    document.getElementById('btn-save-ip')?.addEventListener('click', () => {
      const input = document.getElementById('input-pc-ip') as HTMLInputElement;
      if (input && input.value) {
        this.setTargetHost(input.value);
      }
    });

    // Enter key inside IP input
    document.getElementById('input-pc-ip')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const input = document.getElementById('input-pc-ip') as HTMLInputElement;
        if (input && input.value) {
          this.setTargetHost(input.value);
        }
      }
    });

    // Preset IP chips click handlers
    document.querySelectorAll('.ip-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const host = chip.getAttribute('data-host');
        if (host) this.setTargetHost(host);
      });
    });

    // Measurement unit pill toggles
    document.querySelectorAll('.m-unit-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const sys = (e.currentTarget as HTMLElement).dataset.unit as UnitSystem;
        if (!sys) return;
        this.unitManager.setSystem(sys);
        this.setActiveUnitPill(sys);
        this.updateMobileReadouts(this.isSimulating ? 'Simulator' : 'GPS');
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          try {
            this.ws.send(JSON.stringify({
              type: 'unit_system',
              system: sys,
              timestamp: Date.now()
            }));
          } catch (err) {}
        }
      });
    });

    // Transmit button
    const btnTransmit = document.getElementById('btn-toggle-transmit');
    btnTransmit?.addEventListener('click', () => {
      if (this.isTransmitting) {
        this.stopTransmitting();
      } else {
        this.startTransmitting();
      }
    });

    // Test GPS Simulator button
    const btnTestGps = document.getElementById('btn-test-gps');
    btnTestGps?.addEventListener('click', () => {
      if (this.isSimulating) {
        this.stopSimulation();
      } else {
        this.startSimulation();
      }
    });

    // Gyro switch
    const chkGyro = document.getElementById('chk-gyro-sync') as HTMLInputElement;
    chkGyro?.addEventListener('change', () => {
      this.syncOrientation = chkGyro.checked;
      if (this.syncOrientation) {
        this.requestDeviceOrientation();
      }
    });

    // Camera view switcher pills
    document.querySelectorAll('.cam-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-cam');
        if (mode) {
          this.setActiveCameraPill(mode);
          if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type: 'camera_command', mode }));
          }
        }
      });
    });

    // Default active camera to Globe
    this.setActiveCameraPill('orbit');

    // Remote Sim speed pills
    document.querySelectorAll('.m-speed-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const speed = parseInt((e.currentTarget as HTMLElement).dataset.speed || '10', 10);
        this.setActiveSimSpeedPill(speed);
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          try {
            this.ws.send(JSON.stringify({
              type: 'sim_speed_command',
              speed,
              timestamp: Date.now()
            }));
          } catch (err) {}
        }
      });
    });

    // Remote Sim pause button
    document.getElementById('m-btn-sim-pause')?.addEventListener('click', () => {
      const nextPaused = !this.remoteSimPaused;
      this.setRemoteSimPauseState(nextPaused);
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        try {
          this.ws.send(JSON.stringify({
            type: 'sim_pause_command',
            isPaused: nextPaused,
            timestamp: Date.now()
          }));
        } catch (err) {}
      }
    });

    // Toggle collapsible remote flight plan selector
    document.getElementById('btn-toggle-remote-fp')?.addEventListener('click', () => {
      this.isFlightPlanOpen = !this.isFlightPlanOpen;
      const body = document.getElementById('body-remote-fp');
      const chevron = document.getElementById('chevron-remote-fp');
      if (body && chevron) {
        if (this.isFlightPlanOpen) {
          body.classList.remove('collapsed');
          chevron.classList.add('expanded');
        } else {
          body.classList.add('collapsed');
          chevron.classList.remove('expanded');
        }
      }
    });

    // Auto-uppercase IATA inputs on mobile typing
    const fromInput = document.getElementById('remote-input-from') as HTMLInputElement | null;
    const toInput = document.getElementById('remote-input-to') as HTMLInputElement | null;
    fromInput?.addEventListener('input', () => {
      fromInput.value = fromInput.value.toUpperCase();
    });
    toInput?.addEventListener('input', () => {
      toInput.value = toInput.value.toUpperCase();
    });

    // Send custom route button
    document.getElementById('btn-mobile-send-route')?.addEventListener('click', () => {
      const from = (document.getElementById('remote-input-from') as HTMLInputElement)?.value.trim().toUpperCase();
      const to = (document.getElementById('remote-input-to') as HTMLInputElement)?.value.trim().toUpperCase();
      if (!from || !to || from === to) {
        this.showFpFeedback('Please enter valid 3-letter IATA codes (e.g. BHX, OTP)', 'warn');
        return;
      }
      this.sendFlightPlan(from, to, `${from}-${to}`, 'Custom Route', 'Airbus A321neo');
    });

    // Save custom favorite button
    document.getElementById('btn-mobile-save-fav')?.addEventListener('click', () => {
      const from = (document.getElementById('remote-input-from') as HTMLInputElement)?.value.trim().toUpperCase();
      const to = (document.getElementById('remote-input-to') as HTMLInputElement)?.value.trim().toUpperCase();
      if (!from || !to || from === to) {
        this.showFpFeedback('Enter valid IATAs before saving', 'warn');
        return;
      }
      this.flightPlanManager.saveFavoriteRoute({
        from,
        to,
        flightNumber: `${from}-${to}`,
        airline: `${from} &rarr; ${to}`,
        aircraft: 'Airbus A321neo'
      });
      this.showFpFeedback(`✓ Saved ${from} &rarr; ${to} to favorites!`, 'success');
      this.renderMobilePresets();
    });
  }

  private renderMobilePresets(): void {
    const container = document.getElementById('remote-presets-list');
    if (!container) return;
    const routes: RoutePreset[] = this.flightPlanManager.getFavoriteRoutes();
    container.innerHTML = routes
      .map((r) => {
        const key = `${r.from.toUpperCase()}-${r.to.toUpperCase()}`;
        const isActive = this.activeRouteKey === key;
        return `
          <button class="mobile-preset-pill ${isActive ? 'active' : ''} ${r.isCustom ? 'custom-fav' : ''}" data-from="${r.from}" data-to="${r.to}" data-flight="${r.flightNumber}" data-airline="${r.airline}" data-aircraft="${r.aircraft}" data-alt="${r.cruiseAltitudeFt || 37000}" data-speed="${r.cruiseSpeedKnots || 450}">
            <div class="m-pill-top">
              <span class="m-pill-flight">${r.flightNumber}</span>
              ${r.isCustom ? '<span class="m-pill-star">⭐</span>' : ''}
            </div>
            <div class="m-pill-route">${r.from} &rarr; ${r.to}</div>
            <div class="m-pill-airline">${r.airline}</div>
          </button>
        `;
      })
      .join('');

    container.querySelectorAll('.mobile-preset-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const from = target.dataset.from!;
        const to = target.dataset.to!;
        const flightNumber = target.dataset.flight || `${from}-${to}`;
        const airline = target.dataset.airline || 'rTech Airways';
        const aircraft = target.dataset.aircraft || 'Airbus A321neo';
        const alt = parseInt(target.dataset.alt || '37000', 10);
        const speed = parseInt(target.dataset.speed || '450', 10);
        this.sendFlightPlan(from, to, flightNumber, airline, aircraft, alt, speed);
      });
    });
  }

  private sendFlightPlan(from: string, to: string, flightNumber: string, airline: string, aircraft: string, alt: number = 37000, speed: number = 450): void {
    const f = from.trim().toUpperCase();
    const t = to.trim().toUpperCase();
    this.activeRouteKey = `${f}-${t}`;
    this.renderMobilePresets();

    const disp = document.getElementById('disp-active-route');
    if (disp) {
      disp.textContent = `Active: ${flightNumber} (${f} → ${t})`;
    }

    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(
          JSON.stringify({
            type: 'flight_plan_command',
            from: f,
            to: t,
            flightNumber,
            airline,
            aircraft,
            cruiseAltitude: alt,
            cruiseSpeed: speed,
            timestamp: Date.now()
          })
        );
        this.showFpFeedback(`🚀 Sent ${flightNumber} (${f}&rarr;${t}) to Laptop 3D Map!`, 'success');
      } catch (e) {
        this.showFpFeedback('WebSocket transmission failed', 'error');
      }
    } else {
      this.showFpFeedback('Laptop is currently offline; connect to sync', 'warn');
    }
  }

  private showFpFeedback(msg: string, type: 'success' | 'warn' | 'error'): void {
    const el = document.getElementById('remote-fp-feedback');
    if (!el) return;
    el.innerHTML = msg;
    el.className = `remote-fp-feedback ${type}`;
    setTimeout(() => {
      if (el.innerHTML === msg) {
        el.className = 'remote-fp-feedback';
        el.innerHTML = '';
      }
    }, 3500);
  }

  private setActiveCameraPill(mode: string): void {
    document.querySelectorAll('.cam-pill').forEach((b) => {
      if (b.getAttribute('data-cam') === mode) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  private setActiveSimSpeedPill(speed: number): void {
    this.remoteSimSpeed = speed;
    const badge = document.getElementById('m-sim-speed-badge');
    if (badge) {
      badge.textContent = this.remoteSimPaused ? `PAUSED • ${speed}x` : `${speed}x`;
      if (this.remoteSimPaused) {
        badge.classList.add('paused');
      } else {
        badge.classList.remove('paused');
      }
    }

    document.querySelectorAll('.m-speed-pill').forEach((btn) => {
      const pSpeed = parseInt((btn as HTMLElement).dataset.speed || '0', 10);
      if (pSpeed === speed) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  private setRemoteSimPauseState(isPaused: boolean): void {
    this.remoteSimPaused = isPaused;
    const btn = document.getElementById('m-btn-sim-pause');
    const icon = document.getElementById('m-sim-pause-icon');
    const txt = document.getElementById('m-sim-pause-text');
    const badge = document.getElementById('m-sim-speed-badge');

    if (btn && icon && txt) {
      if (isPaused) {
        btn.classList.add('paused');
        icon.textContent = '▶';
        txt.textContent = 'RESUME';
      } else {
        btn.classList.remove('paused');
        icon.textContent = '⏸';
        txt.textContent = 'PAUSE';
      }
    }

    if (badge) {
      badge.textContent = isPaused ? `PAUSED • ${this.remoteSimSpeed}x` : `${this.remoteSimSpeed}x`;
      if (isPaused) {
        badge.classList.add('paused');
      } else {
        badge.classList.remove('paused');
      }
    }
  }

  private toggleIpDrawer(): void {
    const drawer = document.getElementById('ip-config-drawer');
    const label = document.getElementById('label-toggle-ip');
    if (drawer) {
      const isHidden = drawer.classList.contains('hidden');
      if (isHidden) {
        drawer.classList.remove('hidden');
        if (label) label.textContent = 'Close IP Config';
        const input = document.getElementById('input-pc-ip') as HTMLInputElement;
        input?.focus();
      } else {
        drawer.classList.add('hidden');
        if (label) label.textContent = 'Change PC IP';
      }
    }
  }

  // --- Real Hardware Satellite GNSS Geolocation ---
  private async startTransmitting(): Promise<void> {
    if (this.isSimulating) {
      this.stopSimulation();
    }

    if (!navigator.geolocation) {
      this.setStatusMessage('❌ Geolocation is not supported by your mobile browser.');
      return;
    }

    if (!window.isSecureContext && window.location.protocol === 'http:') {
      this.setStatusMessage('⚠️ Mobile browser blocked GPS: HTTPS connection required.');
      const banner = document.getElementById('insecure-banner');
      if (banner) banner.style.display = 'flex';
    }

    try {
      if ('wakeLock' in navigator) {
        this.wakeLock = await (navigator as any).wakeLock.request('screen');
      }
    } catch (e) {}

    this.isTransmitting = true;
    const btn = document.getElementById('btn-toggle-transmit');
    const lbl = document.getElementById('transmit-label');
    const icon = document.getElementById('transmit-icon');
    if (btn && lbl && icon) {
      btn.classList.add('active');
      lbl.textContent = 'TRANSMITTING GPS LIVE (STOP)';
      icon.textContent = '🟢';
    }

    this.setStatusMessage('📡 Requesting hardware GNSS satellite lock from device...');
    this.updateTransmitCounter(this.isWsConnected);

    // Phase 1: Immediate coarse / network fix (<1 sec)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.handlePositionUpdate(pos, 'Network/Cell Fix');
      },
      (err) => {
        console.warn('Initial coarse position:', err.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 10000
      }
    );

    // Phase 2: High-accuracy continuous satellite tracking
    this.watchId = navigator.geolocation.watchPosition(
      (pos) => {
        this.handlePositionUpdate(pos, 'Satellite GNSS Fix');
      },
      (err) => {
        this.handleGpsError(err);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 15000
      }
    );
  }

  private handlePositionUpdate(pos: GeolocationPosition, fixType: string): void {
    const c = pos.coords;
    this.lastLat = c.latitude;
    this.lastLon = c.longitude;
    this.lastAlt = c.altitude !== null ? Math.round(c.altitude * 3.28084) : 41000;
    this.lastSpeed = c.speed !== null ? Math.round((c.speed * 3.6) / 1.852) : 485;
    this.lastHeading = c.heading !== null ? Math.round(c.heading) : 0;
    this.lastAccuracy = Math.round(c.accuracy || 5);

    this.updateMobileReadouts(fixType);
    this.broadcastTelemetry();
  }

  private handleGpsError(err: GeolocationPositionError): void {
    let msg = '';
    switch (err.code) {
      case 1: // PERMISSION_DENIED
        msg = '❌ Location Permission Denied. Please allow location in browser settings & ensure HTTPS is used.';
        break;
      case 2: // POSITION_UNAVAILABLE
        msg = '⚠️ Satellite signal unavailable indoors. Move near window or use "Test GPS Simulator".';
        break;
      case 3: // TIMEOUT
        msg = '⏳ Satellite acquisition timed out. Retrying search...';
        navigator.geolocation.getCurrentPosition(
          (pos) => this.handlePositionUpdate(pos, 'Coarse Network Fix'),
          () => {},
          { enableHighAccuracy: false, timeout: 5000 }
        );
        break;
      default:
        msg = `GPS Error (${err.code}): ${err.message}`;
    }
    this.setStatusMessage(msg);
  }

  private stopTransmitting(): void {
    this.isTransmitting = false;
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }

    if (this.wakeLock) {
      this.wakeLock.release().catch(() => {});
      this.wakeLock = null;
    }

    const btn = document.getElementById('btn-toggle-transmit');
    const lbl = document.getElementById('transmit-label');
    const icon = document.getElementById('transmit-icon');
    if (btn && lbl && icon) {
      btn.classList.remove('active');
      lbl.textContent = 'START TRANSMITTING GPS';
      icon.textContent = '📡';
    }

    this.setStatusMessage('GPS transmission paused.');
    this.updateTransmitCounter(this.isWsConnected);
  }

  // --- Test Simulator (for indoor testing) ---
  private startSimulation(): void {
    if (this.isTransmitting) {
      this.stopTransmitting();
    }

    this.isSimulating = true;
    const btn = document.getElementById('btn-test-gps');
    if (btn) {
      btn.textContent = '⏹ Stop Test GPS';
      btn.style.background = 'rgba(0, 229, 255, 0.3)';
    }

    this.setStatusMessage('🧪 Transmitting simulated flight GPS data to laptop...');

    this.simTimer = window.setInterval(() => {
      this.simLon -= 0.015;
      this.simLat += 0.002;
      this.lastLat = this.simLat;
      this.lastLon = this.simLon;
      this.lastAlt = this.simAlt;
      this.lastSpeed = this.simSpeed;
      this.lastHeading = this.simHdg;
      this.lastAccuracy = 2.5;

      this.updateMobileReadouts('Simulator Active (Cruise)');
      this.broadcastTelemetry();
    }, 1000);
  }

  private stopSimulation(): void {
    this.isSimulating = false;
    if (this.simTimer !== null) {
      clearInterval(this.simTimer);
      this.simTimer = null;
    }

    const btn = document.getElementById('btn-test-gps');
    if (btn) {
      btn.textContent = '🧪 Test GPS Simulator';
      btn.style.background = '';
    }

    this.setStatusMessage('Simulator stopped.');
    this.updateTransmitCounter(this.isWsConnected);
  }

  private setStatusMessage(msg: string): void {
    const el = document.getElementById('disp-coords');
    if (el) el.textContent = msg;
  }

  private updateMobileReadouts(fixType: string): void {
    const setText = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    const speedData = this.unitManager.formatSpeed(this.lastSpeed);
    const altData = this.unitManager.formatAltitude(this.lastAlt);

    setText('disp-acc', `±${this.lastAccuracy}`);
    setText('disp-speed', speedData.value.toString());
    setText('disp-speed-unit', speedData.unit);
    setText('disp-alt', altData.value.toLocaleString());
    setText('disp-alt-unit', altData.unit);
    setText('disp-heading', `${this.lastHeading}°`);

    const latRow = AviationMath.formatCoordinateRow(this.lastLat, true);
    const lonRow = AviationMath.formatCoordinateRow(this.lastLon, false);
    setText('disp-coords', `${latRow.formatted}  •  ${lonRow.formatted}`);
    setText('disp-fix-type', `✓ ${fixType} active`);
  }

  private updateTransmitCounter(connected: boolean): void {
    const txCounter = document.getElementById('tx-counter');
    if (!txCounter) return;

    if (!connected || !this.isWsConnected) {
      txCounter.className = 'transmission-counter offline';
      txCounter.textContent = `⚠️ PC OFFLINE — ${this.packetsSent} fixes sent, but PC is unreachable. Check Handshake Card above.`;
    } else if (!this.isLaptopOnline) {
      txCounter.className = 'transmission-counter warning';
      txCounter.textContent = `🟡 RELAY ONLINE — ${this.packetsSent} fixes sent. Waiting for Laptop 3D Map to open...`;
    } else {
      txCounter.className = 'transmission-counter success';
      txCounter.textContent = `🟢 LIVE TRANSMISSION ACTIVE — ${this.packetsSent} fixes sent • ${this.packetsAcked} ACKed by laptop (${this.lastLatencyMs || '<10'}ms)`;
    }
  }

  private requestDeviceOrientation(): void {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', this.handleOrientation.bind(this));
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('deviceorientation', this.handleOrientation.bind(this));
    }
  }

  private handleOrientation(event: DeviceOrientationEvent): void {
    if (!this.syncOrientation) return;

    const beta = event.beta || 0;
    const gamma = event.gamma || 0;

    this.currentPitch = Math.max(-25, Math.min(25, (beta - 45) * 0.5));
    this.currentRoll = Math.max(-45, Math.min(45, gamma * 0.8));

    const setText = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('disp-pitch', `PITCH: ${this.currentPitch >= 0 ? '+' : ''}${this.currentPitch.toFixed(1)}°`);
    setText('disp-roll', `ROLL: ${this.currentRoll.toFixed(1)}°`);

    this.broadcastTelemetry();
  }

  private broadcastTelemetry(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      this.updateTransmitCounter(false);
      return;
    }

    this.packetsSent++;

    const payload = {
      type: 'gps_update',
      lat: this.lastLat,
      lon: this.lastLon,
      altitude: Math.round(this.lastAlt / 3.28084),
      speed: (this.lastSpeed * 1.852) / 3.6,
      heading: this.lastHeading,
      pitch: this.currentPitch,
      roll: this.currentRoll,
      accuracy: this.lastAccuracy,
      timestamp: Date.now()
    };

    try {
      this.ws.send(JSON.stringify(payload));
      this.updateHandshakeStats();
      this.updateTransmitCounter(true);
    } catch (e) {
      console.warn('[Mobile] Error broadcasting telemetry:', e);
      this.updateTransmitCounter(false);
    }
  }
}

new MobileController();
