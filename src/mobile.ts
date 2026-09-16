import './mobile.css';

class MobileController {
  private ws: WebSocket | null = null;
  private isWsConnected: boolean = false;
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
  private packetsSent: number = 0;

  // Simulated flight progress for testing
  private simLat: number = 51.47;
  private simLon: number = -0.45;
  private simAlt: number = 41000;
  private simSpeed: number = 495;
  private simHdg: number = 285;

  constructor() {
    this.render();
    this.initWebSocket();
    this.initEvents();
    this.checkSecureContext();
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

        <!-- Header -->
        <header class="mobile-header">
          <div class="mobile-title">
            <span>FLIGHTMAP COPILOT</span>
            <h1>Mobile GPS Relay</h1>
          </div>
          <div class="conn-badge">
            <span class="conn-dot" id="ws-dot"></span>
            <span id="ws-status-text">OFFLINE</span>
          </div>
        </header>

        <button class="switch-mode-btn" id="btn-switch-mode">\u{1F9ED} Switch Mode</button>

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
              <span class="unit">KTS</span>
            </div>
          </div>

          <div class="metric-box">
            <span class="label">GPS ALTITUDE</span>
            <div class="val-row">
              <span class="big-val" id="disp-alt">--</span>
              <span class="unit">FT</span>
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
        </div>
      </div>
    `;
  }

  private initWebSocket(): void {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws/telemetry`;

    const connect = () => {
      try {
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          this.isWsConnected = true;
          this.updateConnectionStatus(true);
        };

        this.ws.onclose = () => {
          this.isWsConnected = false;
          this.updateConnectionStatus(false);
          setTimeout(connect, 3000);
        };
      } catch (err) {
        this.updateConnectionStatus(false);
      }
    };

    connect();
  }

  private updateConnectionStatus(online: boolean): void {
    const dot = document.getElementById('ws-dot');
    const text = document.getElementById('ws-status-text');
    if (dot && text) {
      if (online) {
        dot.className = 'conn-dot online';
        text.textContent = 'CONNECTED';
      } else {
        dot.className = 'conn-dot';
        text.textContent = 'OFFLINE';
      }
    }
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

    // Remote camera buttons
    document.querySelectorAll('.cam-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const cam = (e.currentTarget as HTMLElement).dataset.cam;
        if (this.ws && this.isWsConnected) {
          this.ws.send(JSON.stringify({ type: 'set_camera', mode: cam }));
        }
      });
    });
  }

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
        // Fallback to coarse position
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
      // Simulate steady cruise
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

    setText('disp-acc', `±${this.lastAccuracy}`);
    setText('disp-speed', this.lastSpeed.toString());
    setText('disp-alt', this.lastAlt.toLocaleString());
    setText('disp-heading', `${this.lastHeading}°`);
    setText('disp-coords', `${this.lastLat.toFixed(5)}°, ${this.lastLon.toFixed(5)}°`);
    setText('disp-fix-type', `✓ ${fixType} active`);

    const txCounter = document.getElementById('tx-counter');
    if (txCounter) {
      txCounter.textContent = `Packets Sent to Laptop: ${this.packetsSent}`;
    }
  }

  private requestDeviceOrientation(): void {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
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
    if (!this.ws || !this.isWsConnected) return;

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

    this.ws.send(JSON.stringify(payload));
  }
}

new MobileController();
