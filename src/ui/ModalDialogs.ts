import { AirportDatabase } from '../telemetry/AirportDatabase';
import { FlightPlanManager } from '../telemetry/FlightPlan';
import { TelemetryManager } from '../telemetry/TelemetryManager';
import { GlobeScene } from '../engine/GlobeScene';
import { SolarCalculator } from '../telemetry/SolarCalculator';
import { APP_RELEASE_STRING } from '../version';

export class ModalDialogs {
  private static instance: ModalDialogs;
  private flightPlanManager: FlightPlanManager;
  private telemetryManager: TelemetryManager;

  constructor() {
    this.flightPlanManager = FlightPlanManager.getInstance();
    this.telemetryManager = TelemetryManager.getInstance();
  }

  public static getInstance(): ModalDialogs {
    if (!ModalDialogs.instance) {
      ModalDialogs.instance = new ModalDialogs();
    }
    return ModalDialogs.instance;
  }

  /**
   * Show Flight Route Selector Dialog
   */
  public showRouteModal(): void {
    const existing = document.getElementById('route-modal');
    if (existing) existing.remove();

    const db = AirportDatabase.getInstance();
    const modal = document.createElement('div');
    modal.id = 'route-modal';
    modal.className = 'modal-backdrop';

    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">✈</span>
            <span>Flight Plan & Route Selector</span>
          </div>
          <button class="modal-close" id="btn-close-route">&times;</button>
        </div>

        <div class="modal-body">
          <div class="preset-section">
            <div class="section-label">POPULAR LONG-HAUL PRESETS</div>
            <div class="presets-grid" id="presets-container">
              ${FlightPlanManager.DEFAULT_ROUTES.map(
                (r) => `
                <button class="preset-btn" data-from="${r.from}" data-to="${r.to}" data-flight="${r.flightNumber}" data-airline="${r.airline}" data-aircraft="${r.aircraft}">
                  <span class="preset-flight">${r.flightNumber}</span>
                  <span class="preset-route">${r.from} &rarr; ${r.to}</span>
                  <span class="preset-meta">${r.airline}</span>
                </button>
              `
              ).join('')}
            </div>
          </div>

          <div class="custom-route-section">
            <div class="section-label">CUSTOM AIRPORT SEARCH (7,900+ WORLD AIRPORTS)</div>
            <div class="search-inputs-grid">
              <div class="input-group">
                <label>ORIGIN (IATA/CITY)</label>
                <input type="text" id="input-origin" placeholder="e.g. LHR or London" value="LHR" autocomplete="off" />
                <div class="search-results" id="results-origin"></div>
              </div>
              <div class="input-group">
                <label>DESTINATION (IATA/CITY)</label>
                <input type="text" id="input-dest" placeholder="e.g. OTP or Bucharest" value="OTP" autocomplete="off" />
                <div class="search-results" id="results-dest"></div>
              </div>
            </div>

            <div class="route-meta-grid">
              <div class="input-group">
                <label>FLIGHT NUMBER</label>
                <input type="text" id="input-flight-no" value="RT-101" />
              </div>
              <div class="input-group">
                <label>CRUISE ALTITUDE</label>
                <select id="select-altitude">
                  <option value="36000">FL360 (36,000 FT)</option>
                  <option value="38000" selected>FL380 (38,000 FT)</option>
                  <option value="40000">FL400 (40,000 FT)</option>
                  <option value="43000">FL430 (43,000 FT)</option>
                </select>
              </div>
              <div class="input-group">
                <label>CRUISE SPEED</label>
                <select id="select-speed">
                  <option value="460">Mach 0.78 (460 KTS)</option>
                  <option value="485" selected>Mach 0.82 (485 KTS)</option>
                  <option value="510">Mach 0.86 (510 KTS)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-secondary" id="btn-cancel-route">Cancel</button>
          <button class="btn-primary" id="btn-apply-route">Activate Flight Plan</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Wire up events
    document.getElementById('btn-close-route')?.addEventListener('click', () => modal.remove());
    document.getElementById('btn-cancel-route')?.addEventListener('click', () => modal.remove());

    // Preset buttons
    modal.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const target = (e.currentTarget as HTMLElement);
        const from = target.dataset.from!;
        const to = target.dataset.to!;
        const flight = target.dataset.flight!;
        const airline = target.dataset.airline!;
        const aircraft = target.dataset.aircraft!;

        await this.flightPlanManager.createPlan(from, to, flight, airline, aircraft);
        this.telemetryManager.setSimulationProgress(0.05);
        modal.remove();
      });
    });

    // Airport autocomplete helper
    const setupAutocomplete = (inputId: string, resultsId: string) => {
      const input = document.getElementById(inputId) as HTMLInputElement;
      const resultsDiv = document.getElementById(resultsId) as HTMLElement;

      input?.addEventListener('input', () => {
        const q = input.value.trim();
        if (q.length < 2) {
          resultsDiv.innerHTML = '';
          return;
        }

        const hits = db.search(q, 5);
        resultsDiv.innerHTML = hits
          .map(
            (h) => `
          <div class="result-item" data-code="${h.iata}">
            <span class="code">${h.iata}</span>
            <span class="name">${h.name}</span>
            <span class="location">${h.city}, ${h.country}</span>
          </div>
        `
          )
          .join('');

        resultsDiv.querySelectorAll('.result-item').forEach((item) => {
          item.addEventListener('click', (e) => {
            const code = (e.currentTarget as HTMLElement).dataset.code!;
            input.value = code;
            resultsDiv.innerHTML = '';
          });
        });
      });
    };

    setupAutocomplete('input-origin', 'results-origin');
    setupAutocomplete('input-dest', 'results-dest');

    // Apply button
    document.getElementById('btn-apply-route')?.addEventListener('click', async () => {
      const origin = (document.getElementById('input-origin') as HTMLInputElement).value.trim().toUpperCase();
      const dest = (document.getElementById('input-dest') as HTMLInputElement).value.trim().toUpperCase();
      const flightNo = (document.getElementById('input-flight-no') as HTMLInputElement).value.trim();
      const alt = parseInt((document.getElementById('select-altitude') as HTMLSelectElement).value, 10);
      const spd = parseInt((document.getElementById('select-speed') as HTMLSelectElement).value, 10);

      try {
        await this.flightPlanManager.createPlan(origin, dest, flightNo, 'rTech Airways', 'Boeing 787-9 Dreamliner', alt, spd);
        this.telemetryManager.setSimulationProgress(0.05);
        modal.remove();
      } catch (err: any) {
        alert(err.message);
      }
    });
  }

  /**
   * Show GPS & Mobile Sync Modal
   */
  public async showGpsModal(): Promise<void> {
    const existing = document.getElementById('gps-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'gps-modal';
    modal.className = 'modal-backdrop';

    const currentSource = this.telemetryManager.getSource();

    // Fetch local IP & mobile URL from server
    let mobileUrl = `${window.location.origin}/mobile.html`;
    try {
      const resp = await fetch('/api/mobile-url');
      if (resp.ok) {
        const data = await resp.json();
        if (data.url) mobileUrl = data.url;
      }
    } catch (e) {
      // Offline fallback
    }

    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">📡</span>
            <span>GPS Sensor & Mobile Cross-Device Pairing</span>
          </div>
          <button class="modal-close" id="btn-close-gps">&times;</button>
        </div>

        <div class="modal-body">
          <div class="gps-sources-grid">
            <!-- Mobile GPS Relay Card -->
            <div class="source-card ${currentSource === 'mobile_gps' ? 'active' : ''}" id="card-mobile-gps">
              <div class="source-header">
                <span class="source-badge">PHONE SATELLITE GNSS</span>
                <span class="source-title">Mobile GPS Transmitter</span>
              </div>
              <p class="source-desc">
                Smartphones have dedicated GNSS chips that receive satellite signals through airplane windows. Connect your phone to your laptop Wi-Fi/Hotspot and scan this QR code:
              </p>
              <div class="qr-container">
                <img id="qr-code-img" src="/api/pair-qr" alt="Mobile Pairing QR" onerror="this.style.display='none'" />
                <div class="qr-url"><a href="${mobileUrl}" target="_blank">${mobileUrl}</a></div>
              </div>
              <div class="source-status" id="mobile-gps-status">
                ${currentSource === 'mobile_gps' ? '🟢 Actively receiving phone telemetry' : '⚪ Waiting for phone connection'}
              </div>
            </div>

            <!-- Laptop Browser Geolocation -->
            <div class="source-card ${currentSource === 'browser_gps' ? 'active' : ''}" id="card-browser-gps">
              <div class="source-header">
                <span class="source-badge">LAPTOP LOCATION</span>
                <span class="source-title">Browser Geolocation API</span>
              </div>
              <p class="source-desc">
                Use this machine's built-in Windows location service (effective when laptop has cellular/GPS modem or connected to aircraft Wi-Fi).
              </p>
              <button class="btn-action" id="btn-enable-browser-gps">
                ${currentSource === 'browser_gps' ? '✓ Currently Active' : 'Switch to Laptop GPS'}
              </button>
            </div>

            <!-- USB Serial NMEA GPS -->
            <div class="source-card ${currentSource === 'serial_nmea' ? 'active' : ''}" id="card-serial-gps">
              <div class="source-header">
                <span class="source-badge">USB / BLUETOOTH</span>
                <span class="source-title">External NMEA GPS Puck</span>
              </div>
              <p class="source-desc">
                Connect an external USB or Bluetooth GPS receiver (e.g. Garmin GLO, u-blox USB dongle) via the browser Web Serial API.
              </p>
              <button class="btn-action" id="btn-connect-serial">Connect USB GPS Dongle</button>
            </div>

            <!-- Offline Simulation Controls -->
            <div class="source-card ${currentSource === 'simulation' ? 'active' : ''}" id="card-simulation">
              <div class="source-header">
                <span class="source-badge">DEMO / AISLE SEAT</span>
                <span class="source-title">Offline Flight Simulator</span>
              </div>
              <p class="source-desc">
                Realistic autonomous flight physics along the active Great-Circle flight plan.
              </p>
              <div class="sim-speed-controls">
                <span>SIM SPEED:</span>
                <button class="speed-pill" data-speed="1">1x</button>
                <button class="speed-pill" data-speed="5">5x</button>
                <button class="speed-pill active" data-speed="10">10x</button>
                <button class="speed-pill" data-speed="25">25x</button>
                <button class="speed-pill" data-speed="50">50x</button>
              </div>
              <button class="btn-action" id="btn-enable-simulation">
                ${currentSource === 'simulation' ? '✓ Currently Active' : 'Switch to Flight Simulation'}
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span style="margin-right:auto; align-self:center; font-size:10.5px; color:#7f93ad;">
            Earth imagery &copy; Solar System Scope, NASA-derived, CC BY 4.0
          </span>
          <button class="btn-primary" id="btn-close-gps-footer">Done</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('btn-close-gps')?.addEventListener('click', () => modal.remove());
    document.getElementById('btn-close-gps-footer')?.addEventListener('click', () => modal.remove());

    // Switch to Browser GPS
    document.getElementById('btn-enable-browser-gps')?.addEventListener('click', () => {
      this.telemetryManager.setSource('browser_gps');
      modal.remove();
    });

    // Switch to Serial NMEA
    document.getElementById('btn-connect-serial')?.addEventListener('click', async () => {
      const ok = await this.telemetryManager.connectSerialGps();
      if (ok) modal.remove();
    });

    // Switch to Simulation
    document.getElementById('btn-enable-simulation')?.addEventListener('click', () => {
      this.telemetryManager.setSource('simulation');
      modal.remove();
    });

    // Sim speed pills
    modal.querySelectorAll('.speed-pill').forEach((pill) => {
      pill.addEventListener('click', (e) => {
        modal.querySelectorAll('.speed-pill').forEach((p) => p.classList.remove('active'));
        const target = (e.currentTarget as HTMLElement);
        target.classList.add('active');
        const speed = parseInt(target.dataset.speed || '10', 10);
        this.telemetryManager.setSimulationSpeed(speed);
      });
    });
  }

  /**
   * Show System Specifications & About Dialog
   */
  public showAboutModal(globeScene?: GlobeScene): void {
    const existing = document.getElementById('about-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'about-modal';
    modal.className = 'modal-backdrop';

    // Query WebGL hardware info
    let glRenderer = 'WebGL 2.0 Hardware Accelerated';
    let glVendor = 'Standard GPU Vendor';
    let maxTextureSize = '4096 x 4096';
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          glVendor = (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) as string) || glVendor;
          glRenderer = (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string) || glRenderer;
        }
        const texSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        maxTextureSize = `${texSize} x ${texSize}`;
      }
    } catch {
      // Fallback
    }

    const currentSource = this.telemetryManager.getSource();
    const activeTier = globeScene ? globeScene.textureTier : 'mobile';

    modal.innerHTML = `
      <div class="modal-card about-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">✈️</span>
            <span>rTech Systems // FlightMap Control Center</span>
          </div>
          <button class="modal-close" id="btn-close-about">&times;</button>
        </div>

        <div class="modal-body">
          <div class="about-hero">
            <div class="about-logo-badge">rTech</div>
            <div class="about-hero-text">
              <h2>FlightMap 3D // In-Flight Entertainment (IFE)</h2>
              <span class="about-version-tag">${APP_RELEASE_STRING}</span>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">CARTOGRAPHIC TEXTURE RESOLUTION & FIDELITY</div>
            <div class="tier-selector" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px;">
              <button class="preset-btn ${activeTier === 'mobile' ? 'active' : ''}" id="btn-select-tier-4k" style="padding: 10px; text-align: left;">
                <span class="preset-flight" style="display: flex; align-items: center; justify-content: space-between;">
                  <span>4K HIGH DEFINITION</span>
                  <span style="font-size: 10px; color: #38bdf8;">${activeTier === 'mobile' ? '● ACTIVE' : ''}</span>
                </span>
                <span class="preset-route" style="font-size: 11px;">4096 &times; 2048 Sharp Textures</span>
                <span class="preset-meta" style="font-size: 10px; opacity: 0.75;">Optimized for Mobile & OLED • Fast PWA Caching</span>
              </button>
              <button class="preset-btn ${activeTier === 'full' ? 'active' : ''}" id="btn-select-tier-8k" style="padding: 10px; text-align: left;">
                <span class="preset-flight" style="display: flex; align-items: center; justify-content: space-between;">
                  <span>8K ULTRA HD</span>
                  <span style="font-size: 10px; color: #38bdf8;">${activeTier === 'full' ? '● ACTIVE' : ''}</span>
                </span>
                <span class="preset-route" style="font-size: 11px;">8192 &times; 4096 Master Resolution</span>
                <span class="preset-meta" style="font-size: 10px; opacity: 0.75;">Extreme Detail • High-VRAM & Desktop Tier</span>
              </button>
            <div style="margin-top: 10px;">
              <button class="preset-btn" id="btn-open-layers-from-about" style="width: 100%; padding: 8px 12px; display: flex; align-items: center; justify-content: space-between;">
                <span style="display: flex; align-items: center; gap: 8px;">
                  <span>🗺️</span>
                  <span style="font-weight: 600;">Configure Map Layers, Regular Map & Day/Night</span>
                </span>
                <span style="color: #38bdf8; font-size: 11px;">${globeScene ? globeScene.getMapModeLabel() : ''} &rarr;</span>
              </button>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">SYSTEM ARCHITECTURE & CAPABILITIES</div>
            <div class="about-specs-grid">
              <div class="about-spec-item">
                <span class="spec-name">3D Graphic Engine</span>
                <span class="spec-value">Three.js WebGL2 (Double-Buffered, 60 FPS)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Cartographic Textures</span>
                <span class="spec-value">${activeTier === 'full' ? '8K Ultra HD (8192x4096)' : '4K High Definition (4096x2048)'} Blue Marble</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Geopolitical Vectors</span>
                <span class="spec-value">Natural Earth 50m (97,981 Segments, Single GPU Draw)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Country Annotations</span>
                <span class="spec-value">242 3D Canvas Billboards with Horizon Occlusion Culling</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Flight Dynamics</span>
                <span class="spec-value">Slerp Great-Circle Orthodromic Navigation</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Active Telemetry Mode</span>
                <span class="spec-value">${currentSource.toUpperCase().replace('_', ' ')}</span>
              </div>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">HARDWARE ACCELERATION & RENDERER</div>
            <div class="about-specs-grid">
              <div class="about-spec-item">
                <span class="spec-name">GPU Vendor</span>
                <span class="spec-value">${glVendor}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Graphics Device</span>
                <span class="spec-value">${glRenderer}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Max Texture Resolution</span>
                <span class="spec-value">${maxTextureSize} (16x Anisotropic Filtering)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Color Depth & Palettes</span>
                <span class="spec-value">6 Synchronized HUD Aviation Themes</span>
              </div>
            </div>
          </div>

          <div class="about-section">
            <div class="section-label">MOBILE TELEMETRY & CROSS-DEVICE GNSS RELAY</div>
            <p class="about-desc">
              FlightMap features zero-install cross-device satellite GNSS streaming. Scan the QR code from any smartphone on your local hotspot to relay raw GPS satellite fixes through aircraft windows into your laptop's moving map in real-time.
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <div class="about-footer-copy">&copy; 2026 rTech Systems. All rights reserved.</div>
          <button class="btn-primary" id="btn-close-about-footer">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('btn-select-tier-4k')?.addEventListener('click', () => {
      globeScene?.switchTextureTier('mobile');
      this.showAboutModal(globeScene);
    });
    document.getElementById('btn-select-tier-8k')?.addEventListener('click', () => {
      globeScene?.switchTextureTier('full');
      this.showAboutModal(globeScene);
    });

    document.getElementById('btn-open-layers-from-about')?.addEventListener('click', () => {
      modal.remove();
      if (globeScene) this.showMapLayersModal(globeScene);
    });

    document.getElementById('btn-close-about')?.addEventListener('click', () => modal.remove());
    document.getElementById('btn-close-about-footer')?.addEventListener('click', () => modal.remove());
  }

  /**
   * Show Map Layers, Styles (Satellite / Regular) & Day/Night Switcher Dialog
   */
  public showMapLayersModal(globeScene: GlobeScene, onUpdate?: () => void): void {
    const existing = document.getElementById('map-layers-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'map-layers-modal';
    modal.className = 'modal-backdrop';

    const isSat = globeScene.mapStyle === 'satellite';
    const isReg = globeScene.mapStyle === 'regular';
    const isDay = globeScene.illuminationMode === 'day';
    const isNight = globeScene.illuminationMode === 'night';
    const isAuto = globeScene.illuminationMode === 'auto';
    const isRelief = globeScene.reliefEnabled && isSat;
    const is4K = globeScene.textureTier === 'mobile';
    const is8K = globeScene.textureTier === 'full';

    modal.innerHTML = `
      <div class="modal-card about-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">🗺️</span>
            <span>Map Layers & Cartographic Display</span>
          </div>
          <button class="modal-close" id="btn-close-layers">&times;</button>
        </div>

        <div class="modal-body">
          <!-- PRESET QUICK MODES -->
          <div class="about-section">
            <div class="section-label">QUICK MAP VIEW PRESETS</div>
            <div class="presets-grid" style="grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
              <button class="preset-btn ${isSat ? 'active' : ''}" id="preset-sat-relief">
                <span class="preset-flight">🛰️ Satellite 3D</span>
                <span class="preset-route">NASA Blue Marble</span>
                <span class="preset-meta">Photorealistic • Clouds & Relief</span>
              </button>

              <button class="preset-btn ${isReg && isDay ? 'active' : ''}" id="preset-reg-day">
                <span class="preset-flight">☀️ Regular (Day)</span>
                <span class="preset-route">Clean Day Cartography</span>
                <span class="preset-meta">No Relief • Crisp Geopolitical Nav</span>
              </button>

              <button class="preset-btn ${isReg && isNight ? 'active' : ''}" id="preset-reg-night">
                <span class="preset-flight">🌙 Regular (Night)</span>
                <span class="preset-route">Tactical Dark + Lights</span>
                <span class="preset-meta">No Relief • Incandescent Clusters</span>
              </button>

              <button class="preset-btn ${isReg && isAuto ? 'active' : ''}" id="preset-reg-auto">
                <span class="preset-flight">🌗 Regular (Auto)</span>
                <span class="preset-route">Astronomical Terminator</span>
                <span class="preset-meta">No Relief • Realtime UTC Cycle</span>
              </button>
            </div>
          </div>

          <!-- MAP STYLE -->
          <div class="about-section">
            <div class="section-label">CARTOGRAPHIC STYLE</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
              <button class="preset-btn ${isSat ? 'active' : ''}" id="btn-style-sat">
                <span class="preset-flight">🛰️ Satellite Imagery</span>
                <span class="preset-meta">NASA Blue Marble Texture</span>
              </button>
              <button class="preset-btn ${isReg ? 'active' : ''}" id="btn-style-reg">
                <span class="preset-flight">🗺️ Regular Cartographic</span>
                <span class="preset-meta">Smooth Flat Geopolitical Map</span>
              </button>
            </div>
          </div>

          <!-- ILLUMINATION / DAY & NIGHT -->
          <div class="about-section">
            <div class="section-label">ILLUMINATION / DAY & NIGHT VERSION</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; margin-top: 6px;">
              <button class="preset-btn ${isDay ? 'active' : ''}" id="btn-illum-day">
                <span class="preset-flight" style="font-size: 11px;">☀️ Day</span>
                <span class="preset-meta" style="font-size: 9px;">Worldwide Daylight</span>
              </button>
              <button class="preset-btn ${isNight ? 'active' : ''}" id="btn-illum-night">
                <span class="preset-flight" style="font-size: 11px;">🌙 Night</span>
                <span class="preset-meta" style="font-size: 9px;">City Lights On</span>
              </button>
              <button class="preset-btn ${isAuto ? 'active' : ''}" id="btn-illum-auto">
                <span class="preset-flight" style="font-size: 11px;">🌗 Solar Auto</span>
                <span class="preset-meta" style="font-size: 9px;">Astronomical UTC</span>
              </button>
            </div>
          </div>

          <!-- 3D ELEVATION RELIEF -->
          <div class="about-section">
            <div class="section-label">EARTH 3D ELEVATION RELIEF (BUMP)</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
              <button class="preset-btn ${isRelief ? 'active' : ''}" id="btn-relief-on" ${isReg ? 'disabled style="opacity: 0.45; cursor: not-allowed;"' : ''}>
                <span class="preset-flight">⛰️ 3D Relief ON</span>
                <span class="preset-meta">Elevation Bump Shading</span>
              </button>
              <button class="preset-btn ${!isRelief ? 'active' : ''}" id="btn-relief-off">
                <span class="preset-flight">🌐 No Relief (Flat Surface)</span>
                <span class="preset-meta">Smooth Spherical Surface</span>
              </button>
            </div>
          </div>

          <!-- TEXTURE RESOLUTION SWITCHER -->
          <div class="about-section">
            <div class="section-label">TEXTURE RESOLUTION TIER</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
              <button class="preset-btn ${is4K ? 'active' : ''}" id="btn-layers-res-4k">
                <span class="preset-flight">4K HIGH DEFINITION</span>
                <span class="preset-meta">4096x2048 • Fast, Low VRAM</span>
              </button>
              <button class="preset-btn ${is8K ? 'active' : ''}" id="btn-layers-res-8k">
                <span class="preset-flight">8K ULTRA HD</span>
                <span class="preset-meta">8192x4096 • Extreme Detail</span>
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-close-layers-footer">Done</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const refreshModal = () => {
      if (onUpdate) onUpdate();
      this.showMapLayersModal(globeScene, onUpdate);
    };

    // Quick Presets
    document.getElementById('preset-sat-relief')?.addEventListener('click', () => {
      globeScene.setMapStyle('satellite');
      globeScene.setReliefEnabled(true);
      globeScene.setIlluminationMode('auto');
      refreshModal();
    });
    document.getElementById('preset-reg-day')?.addEventListener('click', () => {
      globeScene.setMapStyle('regular');
      globeScene.setIlluminationMode('day');
      refreshModal();
    });
    document.getElementById('preset-reg-night')?.addEventListener('click', () => {
      globeScene.setMapStyle('regular');
      globeScene.setIlluminationMode('night');
      refreshModal();
    });
    document.getElementById('preset-reg-auto')?.addEventListener('click', () => {
      globeScene.setMapStyle('regular');
      globeScene.setIlluminationMode('auto');
      refreshModal();
    });

    // Style
    document.getElementById('btn-style-sat')?.addEventListener('click', () => {
      globeScene.setMapStyle('satellite');
      refreshModal();
    });
    document.getElementById('btn-style-reg')?.addEventListener('click', () => {
      globeScene.setMapStyle('regular');
      refreshModal();
    });

    // Illumination
    document.getElementById('btn-illum-day')?.addEventListener('click', () => {
      globeScene.setIlluminationMode('day');
      refreshModal();
    });
    document.getElementById('btn-illum-night')?.addEventListener('click', () => {
      globeScene.setIlluminationMode('night');
      refreshModal();
    });
    document.getElementById('btn-illum-auto')?.addEventListener('click', () => {
      globeScene.setIlluminationMode('auto');
      refreshModal();
    });

    // Relief
    document.getElementById('btn-relief-on')?.addEventListener('click', () => {
      globeScene.setReliefEnabled(true);
      refreshModal();
    });
    document.getElementById('btn-relief-off')?.addEventListener('click', () => {
      globeScene.setReliefEnabled(false);
      refreshModal();
    });

    // Resolution
    document.getElementById('btn-layers-res-4k')?.addEventListener('click', () => {
      globeScene.switchTextureTier('mobile');
      refreshModal();
    });
    document.getElementById('btn-layers-res-8k')?.addEventListener('click', () => {
      globeScene.switchTextureTier('full');
      refreshModal();
    });

    // Close
    document.getElementById('btn-close-layers')?.addEventListener('click', () => modal.remove());
    document.getElementById('btn-close-layers-footer')?.addEventListener('click', () => modal.remove());
  }

  /**
   * Show Day/Night & Astronomical Solar Terminator Dialog
   */
  public showSolarModal(globeScene: GlobeScene): void {
    const existing = document.getElementById('solar-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'solar-modal';
    modal.className = 'modal-backdrop';

    const currentMode = globeScene.solarMode;
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const currentMinuteOfDay = utcHours * 60 + utcMinutes;

    const subsolar = SolarCalculator.getSubsolarPoint(now);
    const solarInfo = globeScene.currentSolarInfo;

    modal.innerHTML = `
      <div class="modal-card solar-modal-card">
        <div class="modal-header">
          <div class="modal-title">
            <span class="icon">☀️</span>
            <span>Day / Night Map & Solar Illumination Controls</span>
          </div>
          <button class="modal-close" id="btn-close-solar">&times;</button>
        </div>

        <div class="modal-body">
          <div class="about-hero" style="margin-bottom: 20px;">
            <div class="about-logo-badge" style="background: linear-gradient(135deg, #f59e0b, #ef4444); color: white;">SUN</div>
            <div class="about-hero-text">
              <h2>Astronomical Day / Night Terminator Engine</h2>
              <span class="about-version-tag">EARTH ILLUMINATION • TWILIGHT SCATTERING • CITY NIGHT LIGHTS</span>
            </div>
          </div>

          <!-- Mode Selectors Grid -->
          <div class="solar-modes-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
            <button class="solar-mode-btn ${currentMode === 'utc' ? 'active' : ''}" id="mode-btn-utc" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px; border-radius: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid ${currentMode === 'utc' ? '#00e5ff' : 'rgba(255, 255, 255, 0.1)'}; color: #f8fafc; cursor: pointer; text-align: left;">
              <span style="font-weight: 700; font-size: 14px; color: ${currentMode === 'utc' ? '#00e5ff' : '#94a3b8'};">⏱️ REAL-TIME UTC</span>
              <span style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">Matches current world time and coordinates. Shows true day and night worldwide.</span>
            </button>

            <button class="solar-mode-btn ${currentMode === 'local_noon' ? 'active' : ''}" id="mode-btn-noon" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px; border-radius: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid ${currentMode === 'local_noon' ? '#00e5ff' : 'rgba(255, 255, 255, 0.1)'}; color: #f8fafc; cursor: pointer; text-align: left;">
              <span style="font-weight: 700; font-size: 14px; color: ${currentMode === 'local_noon' ? '#00e5ff' : '#94a3b8'};">☀️ LOCAL NOON (DAYLIGHT)</span>
              <span style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">Positions Sun overhead the flight route for clear daytime visibility everywhere.</span>
            </button>

            <button class="solar-mode-btn ${currentMode === 'sim' ? 'active' : ''}" id="mode-btn-sim" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 14px; border-radius: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid ${currentMode === 'sim' ? '#00e5ff' : 'rgba(255, 255, 255, 0.1)'}; color: #f8fafc; cursor: pointer; text-align: left;">
              <span style="font-weight: 700; font-size: 14px; color: ${currentMode === 'sim' ? '#00e5ff' : '#94a3b8'};">⏩ SIMULATION SYNC</span>
              <span style="font-size: 12px; color: #cbd5e1; line-height: 1.4;">Terminator advances with accelerated flight speed (10x, 20x).</span>
            </button>
          </div>

          <!-- Manual 24-Hour Solar Scrubber -->
          <div class="solar-scrubber-section" style="background: rgba(15, 23, 42, 0.5); padding: 16px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: #94a3b8;">MANUAL 24-HOUR SOLAR TIME SCRUBBER</span>
              <span id="slider-time-readout" style="font-family: monospace; font-size: 14px; font-weight: 700; color: #00e5ff;">${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')} UTC</span>
            </div>
            <input type="range" id="solar-time-slider" min="0" max="1439" value="${currentMinuteOfDay}" style="width: 100%; cursor: pointer; accent-color: #00e5ff;" />
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: #64748b; margin-top: 4px;">
              <span>00:00 (Midnight)</span>
              <span>06:00 (Dawn)</span>
              <span>12:00 (Noon)</span>
              <span>18:00 (Dusk)</span>
              <span>23:59</span>
            </div>
          </div>

          <!-- Telemetry Specs Readout -->
          <div class="about-section">
            <div class="section-label">LIVE SOLAR TELEMETRY & ASTRONOMICAL STATUS</div>
            <div class="about-specs-grid">
              <div class="about-spec-item">
                <span class="spec-name">Aircraft Solar Phase</span>
                <span class="spec-value" id="modal-solar-phase">${solarInfo ? `${solarInfo.phaseIcon} ${solarInfo.phaseLabel}` : '☀️ DAYLIGHT'}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Sun Elevation Angle</span>
                <span class="spec-value" id="modal-solar-elevation">${solarInfo ? `${solarInfo.elevationDeg > 0 ? '+' : ''}${solarInfo.elevationDeg}°` : '+45.0°'}</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Subsolar Declination</span>
                <span class="spec-value">${subsolar.declinationDeg > 0 ? '+' : ''}${subsolar.declinationDeg.toFixed(2)}° (${subsolar.declinationDeg > 0 ? 'Northern' : 'Southern'} Summer)</span>
              </div>
              <div class="about-spec-item">
                <span class="spec-name">Subsolar Longitude</span>
                <span class="spec-value">${subsolar.lon.toFixed(2)}° (${subsolar.lon >= 0 ? 'East' : 'West'})</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" id="btn-close-solar-footer">Done</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => modal.remove();
    document.getElementById('btn-close-solar')?.addEventListener('click', closeModal);
    document.getElementById('btn-close-solar-footer')?.addEventListener('click', closeModal);

    const updateActiveButton = (activeId: string) => {
      ['mode-btn-utc', 'mode-btn-noon', 'mode-btn-sim'].forEach((id) => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.classList.toggle('active', id === activeId);
          btn.style.borderColor = id === activeId ? '#00e5ff' : 'rgba(255, 255, 255, 0.1)';
        }
      });
    };

    document.getElementById('mode-btn-utc')?.addEventListener('click', () => {
      globeScene.setSolarMode('utc');
      updateActiveButton('mode-btn-utc');
    });

    document.getElementById('mode-btn-noon')?.addEventListener('click', () => {
      globeScene.setSolarMode('local_noon');
      updateActiveButton('mode-btn-noon');
    });

    document.getElementById('mode-btn-sim')?.addEventListener('click', () => {
      globeScene.setSolarMode('sim');
      updateActiveButton('mode-btn-sim');
    });

    // Time slider
    const slider = document.getElementById('solar-time-slider') as HTMLInputElement;
    const readout = document.getElementById('slider-time-readout');

    if (slider && readout) {
      slider.addEventListener('input', () => {
        const minutes = parseInt(slider.value, 10);
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        readout.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} UTC`;

        const scrubDate = new Date();
        scrubDate.setUTCHours(h, m, 0, 0);

        globeScene.setSolarMode('manual');
        globeScene.setManualSolarDate(scrubDate);
        updateActiveButton('');
      });
    }
  }
}
