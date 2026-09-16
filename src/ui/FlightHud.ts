import { AviationMath } from '../telemetry/AviationMath';
import { FlightPlanData, FlightPlanManager } from '../telemetry/FlightPlan';
import { TelemetryManager, TelemetryState } from '../telemetry/TelemetryManager';
import { CameraManager, CameraMode } from '../engine/CameraManager';
import { GlobeScene } from '../engine/GlobeScene';
import { ModalDialogs } from './ModalDialogs';
import { ThemeManager } from './ThemeManager';
import { AircraftType } from '../engine/AircraftModel';

export class FlightHud {
  private container: HTMLElement;
  private cameraManager: CameraManager;
  private globeScene: GlobeScene;
  private telemetryManager: TelemetryManager;
  private flightPlanManager: FlightPlanManager;
  private modalDialogs: ModalDialogs;
  private themeManager: ThemeManager;
  private currentAircraftType: AircraftType = 'business_jet';

  constructor(container: HTMLElement, cameraManager: CameraManager, globeScene: GlobeScene) {
    this.container = container;
    this.cameraManager = cameraManager;
    this.globeScene = globeScene;
    this.telemetryManager = TelemetryManager.getInstance();
    this.flightPlanManager = FlightPlanManager.getInstance();
    this.modalDialogs = ModalDialogs.getInstance();
    this.themeManager = ThemeManager.getInstance();

    this.renderBaseLayout();
    this.initEventListeners();
    this.subscribeToUpdates();
  }

  private renderBaseLayout(): void {
    this.container.innerHTML = `
      <div class="hud-root">
        <!-- TOP IFE FLIGHT HEADER -->
        <header class="hud-top-bar">
          <div class="flight-badge">
            <span class="airline-tag" id="hud-airline">rTech Airways</span>
            <span class="flight-no" id="hud-flight-no">RT-101</span>
          </div>

          <div class="route-tracker">
            <div class="airport-origin">
              <span class="iata" id="hud-origin-iata">LHR</span>
              <span class="city" id="hud-origin-city">London</span>
            </div>

            <div class="progress-track-wrapper">
              <div class="progress-track">
                <div class="progress-fill" id="hud-progress-fill" style="width: 35%;"></div>
                <div class="progress-airplane" id="hud-progress-plane" style="left: 35%;">âœˆ</div>
              </div>
              <div class="route-metrics">
                <span class="metric" id="hud-distance-traveled">1,200 NM Traveled</span>
                <span class="metric center" id="hud-ete-time">ETE: 04h 38m</span>
                <span class="metric right" id="hud-distance-remaining">2,250 NM Remaining</span>
              </div>
            </div>

            <div class="airport-dest">
              <span class="iata" id="hud-dest-iata">OTP</span>
              <span class="city" id="hud-dest-city">Bucharest</span>
            </div>
          </div>

          <div class="hud-top-actions">
            <!-- Theme Palette Toggle Button -->
            <button class="hud-pill-btn" id="btn-toggle-theme" title="Toggle Theme Palette">
              <span class="btn-icon">ðŸŽ¨</span>
              <span id="theme-btn-label">THEME</span>
            </button>

            <!-- Aircraft Type Switcher -->
            <button class="hud-pill-btn" id="btn-toggle-aircraft" title="Toggle Aircraft Type (Private Jet / Commercial Airliner)">
              <span class="btn-icon">ðŸ›©ï¸</span>
              <span id="aircraft-btn-label">PRIVATE JET</span>
            </button>

            <button class="hud-pill-btn" id="btn-open-route" title="Change Route & Airport">
              <span class="btn-icon">âœˆ</span>
              <span>Flight Plan</span>
            </button>
            <button class="hud-pill-btn" id="btn-open-gps" title="Connect Phone GPS or Hardware">
              <span class="pulse-dot" id="gps-status-dot"></span>
              <span id="gps-source-label">SIMULATION</span>
            </button>
            <button class="hud-pill-btn" id="btn-open-about" title="System Specifications & About">
              <span class="btn-icon">â„¹ï¸</span>
              <span>ABOUT</span>
            </button>
            <button class="hud-icon-btn" id="btn-switch-mode" title="Switch Mode (Map / GPS Relay)">ðŸ§­</button>
            <button class="hud-icon-btn" id="btn-toggle-fs" title="Toggle Fullscreen">â›¶</button>
          </div>
        </header>

        <!-- LEFT FLIGHT INSTRUMENTS TAPES -->
        <div class="hud-left-instruments">
          <!-- Speed Tape -->
          <div class="instrument-tape speed-tape">
            <div class="tape-label">KTS</div>
            <div class="tape-window">
              <div class="tape-readout" id="tape-speed-value">485</div>
            </div>
            <div class="tape-sub-metric" id="tape-mach-value">M 0.82</div>
          </div>

          <!-- Altitude Tape -->
          <div class="instrument-tape altitude-tape">
            <div class="tape-label">ALT / FT</div>
            <div class="tape-window">
              <div class="tape-readout" id="tape-altitude-value">38,000</div>
            </div>
            <div class="tape-sub-metric" id="tape-flightlevel-value">FL380</div>
          </div>

          <!-- Vertical Speed Indicator (VSI) -->
          <div class="vsi-gauge" title="Vertical Speed Indicator">
            <div class="vsi-needle" id="vsi-needle"></div>
            <div class="vsi-center-line"></div>
            <span class="vsi-label">+VSI</span>
            <span class="vsi-readout" id="vsi-readout">0 FPM</span>
          </div>
        </div>

        <!-- RIGHT CAMERA VIEW CONTROLLER -->
        <div class="hud-right-camera-panel">
          <div class="panel-header">CAMERA ANGLE</div>
          <div class="camera-buttons-group">
            <button class="cam-btn" data-cam="cockpit">
              <span class="cam-icon">ðŸªŸ</span>
              <span>Cockpit</span>
            </button>
            <button class="cam-btn" data-cam="wing">
              <span class="cam-icon">ðŸª½</span>
              <span>Wing Cam</span>
            </button>
            <button class="cam-btn" data-cam="chase">
              <span class="cam-icon">ðŸŽ¥</span>
              <span>Chase Cam</span>
            </button>
            <button class="cam-btn active" data-cam="orbit">
              <span class="cam-icon">ðŸŒ</span>
              <span>Globe Orbit</span>
            </button>
            <button class="cam-btn" data-cam="tactical">
              <span class="cam-icon">ðŸ—ºï¸</span>
              <span>2D Tactical</span>
            </button>
          </div>

          <!-- Simulation Quick Controls -->
          <div class="sim-quick-bar" id="sim-quick-bar">
            <button class="sim-ctrl-btn" id="btn-sim-pause" title="Pause / Resume">â¸</button>
            <span class="sim-speed-tag" id="sim-speed-tag">10x</span>
          </div>
        </div>

        <!-- BOTTOM TELEMETRY STRIP -->
        <footer class="hud-bottom-bar">
          <div class="telemetry-card">
            <span class="label">GROUND SPEED</span>
            <div class="value-row">
              <span class="big-val" id="val-groundspeed">485</span>
              <span class="unit">KTS</span>
              <span class="sub-val" id="val-speed-kmh">898 KM/H</span>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="label">OUTSIDE AIR TEMP (OAT)</span>
            <div class="value-row">
              <span class="big-val" id="val-oat-c">-52</span>
              <span class="unit">Â°C</span>
              <span class="sub-val" id="val-oat-f">-61Â°F</span>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="label">TRUE TRACK / HEADING</span>
            <div class="value-row">
              <span class="big-val" id="val-heading">285Â°</span>
              <span class="unit">TRUE</span>
              <span class="sub-val" id="val-pitch-roll">+1.5Â° / 0.0Â°</span>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="label">COORDINATES</span>
            <div class="value-row">
              <span class="coord-val" id="val-coordinates">51Â°28'12"N 000Â°27'42"W</span>
            </div>
          </div>

          <div class="telemetry-card clocks-card">
            <div class="clock-col">
              <span class="label" id="lbl-origin-clock">LHR (ORIGIN)</span>
              <span class="clock-val" id="val-origin-clock">14:15</span>
            </div>
            <div class="clock-col">
              <span class="label">UTC / IN-FLIGHT</span>
              <span class="clock-val" id="val-utc-clock">13:15</span>
            </div>
            <div class="clock-col">
              <span class="label" id="lbl-dest-clock">OTP (DEST)</span>
              <span class="clock-val" id="val-dest-clock">14:45</span>
            </div>
          </div>
        </footer>
      </div>
    `;
  }

  private initEventListeners(): void {
    // Camera buttons
    this.container.querySelectorAll('.cam-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.container.querySelectorAll('.cam-btn').forEach((b) => b.classList.remove('active'));
        const target = (e.currentTarget as HTMLElement);
        target.classList.add('active');
        const mode = target.dataset.cam as CameraMode;
        this.cameraManager.setMode(mode);
        if (mode === 'orbit') {
          const activePlan = this.flightPlanManager.getActivePlan();
          if (activePlan) {
            this.cameraManager.frameRouteOverview(activePlan);
          }
        }
      });
    });

    // Theme Toggle button (cycles through 6 official themes)
    const themeKeys = Object.keys(ThemeManager.THEMES);
    const themeBtn = document.getElementById('btn-toggle-theme');
    const themeLbl = document.getElementById('theme-btn-label');
    if (themeLbl) {
      themeLbl.textContent = this.themeManager.getCurrentTheme().name.split(' ')[0].toUpperCase();
    }

    themeBtn?.addEventListener('click', () => {
      const current = this.themeManager.getCurrentTheme().id;
      const idx = themeKeys.indexOf(current);
      const nextTheme = themeKeys[(idx + 1) % themeKeys.length];
      this.themeManager.setTheme(nextTheme);
      if (themeLbl) {
        themeLbl.textContent = this.themeManager.getCurrentTheme().name.split(' ')[0].toUpperCase();
      }
    });

    // Aircraft Switcher button (toggles Private Jet vs Commercial Airliner)
    const aircraftBtn = document.getElementById('btn-toggle-aircraft');
    const aircraftLbl = document.getElementById('aircraft-btn-label');
    aircraftBtn?.addEventListener('click', () => {
      if (this.currentAircraftType === 'business_jet') {
        this.currentAircraftType = 'widebody_airliner';
        if (aircraftLbl) aircraftLbl.textContent = 'AIRLINER (B787)';
      } else {
        this.currentAircraftType = 'business_jet';
        if (aircraftLbl) aircraftLbl.textContent = 'PRIVATE JET';
      }
      this.globeScene.setAircraftType(this.currentAircraftType);
    });

    // Modals
    document.getElementById('btn-open-route')?.addEventListener('click', () => {
      this.modalDialogs.showRouteModal();
    });

    document.getElementById('btn-open-gps')?.addEventListener('click', () => {
      this.modalDialogs.showGpsModal();
    });

    document.getElementById('btn-open-about')?.addEventListener('click', () => {
      this.modalDialogs.showAboutModal();
    });

    // Mode switcher (returns to the launch chooser)
    document.getElementById('btn-switch-mode')?.addEventListener('click', () => {
      window.location.href = `${import.meta.env.BASE_URL}start.html`;
    });

    // Fullscreen toggle
    document.getElementById('btn-toggle-fs')?.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Sim pause button
    document.getElementById('btn-sim-pause')?.addEventListener('click', () => {
      const isPaused = this.telemetryManager.toggleSimulationPause();
      const btn = document.getElementById('btn-sim-pause');
      if (btn) btn.textContent = isPaused ? 'â–¶' : 'â¸';
    });
  }

  private subscribeToUpdates(): void {
    // Listen for telemetry state updates (60fps / on change)
    this.telemetryManager.subscribe((state) => {
      this.updateHudState(state);
    });

    // Listen for flight plan updates
    this.flightPlanManager.onPlanChanged((plan) => {
      this.updateFlightPlan(plan);
      // Auto-switch to Global Orbit view and frame the route overview
      this.cameraManager.frameRouteOverview(plan);
      this.container.querySelectorAll('.cam-btn').forEach((b) => b.classList.remove('active'));
      this.container.querySelector('[data-cam="orbit"]')?.classList.add('active');
    });
  }

  private updateFlightPlan(plan: FlightPlanData): void {
    const setText = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('hud-airline', plan.airline);
    setText('hud-flight-no', plan.flightNumber);
    setText('hud-origin-iata', plan.origin.iata);
    setText('hud-origin-city', plan.origin.city);
    setText('hud-dest-iata', plan.destination.iata);
    setText('hud-dest-city', plan.destination.city);
    setText('lbl-origin-clock', `${plan.origin.iata} (ORIGIN)`);
    setText('lbl-dest-clock', `${plan.destination.iata} (DEST)`);
  }

  private updateHudState(state: TelemetryState): void {
    const setText = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    // Instrument Tapes
    setText('tape-speed-value', state.groundSpeed.toString());
    setText('tape-mach-value', `M ${state.atmosphere.mach.toFixed(2)}`);
    setText('tape-altitude-value', state.altitude.toLocaleString());
    setText('tape-flightlevel-value', `FL${Math.round(state.altitude / 100)}`);

    // VSI Needle
    const vsiNeedle = document.getElementById('vsi-needle');
    if (vsiNeedle) {
      // Clamp VSI between -3000 and +3000 fpm -> map to -40px to +40px
      const clampedVsi = Math.max(-3000, Math.min(3000, state.verticalSpeed));
      const vsiOffset = -(clampedVsi / 3000) * 36;
      vsiNeedle.style.transform = `translateY(${vsiOffset}px)`;
    }
    const vsiSign = state.verticalSpeed > 0 ? '+' : '';
    setText('vsi-readout', `${vsiSign}${state.verticalSpeed} FPM`);

    // Progress bar
    const progressPercent = (state.progressFraction * 100).toFixed(1);
    const progressFill = document.getElementById('hud-progress-fill');
    const progressPlane = document.getElementById('hud-progress-plane');
    if (progressFill) progressFill.style.width = `${progressPercent}%`;
    if (progressPlane) progressPlane.style.left = `${progressPercent}%`;

    setText('hud-distance-traveled', `${Math.round(state.distanceTraveledNM).toLocaleString()} NM Traveled`);
    setText('hud-ete-time', `ETE: ${AviationMath.formatDuration(state.eteSeconds)}`);
    setText('hud-distance-remaining', `${Math.round(state.distanceRemainingNM).toLocaleString()} NM Remaining`);

    // Telemetry strip
    setText('val-groundspeed', state.groundSpeed.toString());
    setText('val-speed-kmh', `${Math.round(state.groundSpeed * AviationMath.KNOTS_TO_KMH)} KM/H`);

    setText('val-oat-c', `${state.atmosphere.temperatureC}`);
    setText('val-oat-f', `${state.atmosphere.temperatureF}Â°F`);

    setText('val-heading', `${Math.round(state.heading)}Â°`);
    const pitchSign = state.pitch >= 0 ? '+' : '';
    const rollSign = state.roll >= 0 ? '+' : '';
    setText('val-pitch-roll', `${pitchSign}${state.pitch.toFixed(1)}Â° / ${rollSign}${state.roll.toFixed(1)}Â°`);

    const latDms = AviationMath.formatDMS(state.lat, true);
    const lonDms = AviationMath.formatDMS(state.lon, false);
    setText('val-coordinates', `${latDms} ${lonDms}`);

    // Telemetry source indicator & dot
    const srcDot = document.getElementById('gps-status-dot');
    const srcLabel = document.getElementById('gps-source-label');
    if (srcDot && srcLabel) {
      if (state.source === 'mobile_gps') {
        srcDot.className = 'pulse-dot active-green';
        srcLabel.textContent = `PHONE GPS (Â±${state.gpsAccuracyMeters.toFixed(1)}m)`;
      } else if (state.source === 'browser_gps') {
        srcDot.className = 'pulse-dot active-cyan';
        srcLabel.textContent = 'LAPTOP GPS';
      } else if (state.source === 'serial_nmea') {
        srcDot.className = 'pulse-dot active-gold';
        srcLabel.textContent = `USB GPS (${state.satellites} SATS)`;
      } else {
        srcDot.className = 'pulse-dot active-blue';
        srcLabel.textContent = `SIMULATION (${this.telemetryManager.getSimulationSpeed()}x)`;
      }
    }

    // Clocks
    const now = new Date();
    setText('val-utc-clock', `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}`);

    // Approximate local solar time at destination based on longitude: 1 hour per 15 degrees lon
    const plan = this.flightPlanManager.getActivePlan();
    if (plan) {
      const origOffsetHours = plan.origin.lon / 15;
      const destOffsetHours = plan.destination.lon / 15;

      const origDate = new Date(now.getTime() + origOffsetHours * 3600 * 1000);
      const destDate = new Date(now.getTime() + destOffsetHours * 3600 * 1000);

      setText('val-origin-clock', `${String(origDate.getUTCHours()).padStart(2, '0')}:${String(origDate.getUTCMinutes()).padStart(2, '0')}`);
      setText('val-dest-clock', `${String(destDate.getUTCHours()).padStart(2, '0')}:${String(destDate.getUTCMinutes()).padStart(2, '0')}`);
    }
  }
}

