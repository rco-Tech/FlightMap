import { AirportDatabase } from '../telemetry/AirportDatabase';
import { FlightPlanManager } from '../telemetry/FlightPlan';
import { TelemetryManager } from '../telemetry/TelemetryManager';

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
  public showAboutModal(): void {
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
              <span class="about-version-tag">RELEASE v1.0.0 STABLE • 64-BIT WEBGL ENGINE</span>
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
                <span class="spec-value">4K NASA Blue Marble + Elevation Normal & Specular Map</span>
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

    document.getElementById('btn-close-about')?.addEventListener('click', () => modal.remove());
    document.getElementById('btn-close-about-footer')?.addEventListener('click', () => modal.remove());
  }
}
