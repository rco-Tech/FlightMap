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
  private currentAircraftType: AircraftType = 'widebody_airliner';

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
            <span class="airline-tag" id="hud-airline">British Airways</span>
            <span class="flight-no" id="hud-flight-no">BA-886</span>
          </div>

          <div class="route-tracker">
            <div class="airport-origin">
              <span class="iata" id="hud-origin-iata">LHR</span>
              <span class="city" id="hud-origin-city">London</span>
            </div>

            <div class="progress-track-wrapper">
              <div class="progress-track">
                <div class="progress-fill" id="hud-progress-fill" style="width: 0%;"></div>
                <div class="progress-airplane" id="hud-progress-plane" style="left: 0%;">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="#00e5ff" style="transform: rotate(90deg);"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                </div>
              </div>
              <div class="route-metrics">
                <span class="metric" id="hud-distance-traveled">0 NM</span>
                <span class="metric center" id="hud-ete-time">ETE --:--</span>
                <span class="metric right" id="hud-distance-remaining">1,135 NM</span>
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
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61.42.53 1.13.79 1.8.64.67-.15 1.23-.67 1.23-1.37v-1.38c0-.83.67-1.5 1.5-1.5h1.5c2.76 0 5-2.24 5-5 0-3.31-2.69-6-6-6zm-4.5 9c-.83 0-1.5-.67-1.5-1.5S6.67 9 7.5 9s1.5.67 1.5 1.5S8.33 12 7.5 12zm3-4c-.83 0-1.5-.67-1.5-1.5S9.67 5 10.5 5s1.5.67 1.5 1.5S11.33 8 10.5 8zm3 0c-.83 0-1.5-.67-1.5-1.5S12.67 5 13.5 5s1.5.67 1.5 1.5S14.33 8 13.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S15.67 9 16.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </span>
              <span id="theme-btn-label">THEME</span>
            </button>

            <!-- Aircraft Type Switcher -->
            <button class="hud-pill-btn" id="btn-toggle-aircraft" title="Toggle Aircraft Type">
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
              </span>
              <span id="aircraft-btn-label">AIRLINER</span>
            </button>

            <button class="hud-pill-btn" id="btn-open-route" title="Change Route & Airport">
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M10.18 9L2.5 5.16v1.94l6.09 3.05-6.09 3.04v1.94L10.18 11.2V19l2 1 2-1v-7.8l7.68 3.84v-1.94L15.77 9.1l6.09-3.04V4.12L14.18 8V2.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9h-1z"/></svg>
              </span>
              <span>Flight Plan</span>
            </button>
            <button class="hud-pill-btn" id="btn-open-gps" title="Connect Phone GPS or Hardware">
              <span class="pulse-dot" id="gps-status-dot"></span>
              <span id="gps-source-label">SIMULATION</span>
            </button>
            <button class="hud-pill-btn" id="btn-toggle-solar" title="Day/Night Map & Solar Terminator Controls">
              <span class="btn-icon" id="solar-btn-icon">☀️</span>
              <span id="solar-btn-label">SUN: UTC</span>
            </button>
            <button class="hud-pill-btn" id="btn-map-tier" title="Map Layers, Styles (Satellite / Regular) & Resolution (4K/8K)">
              <span class="btn-icon">🌐</span>
              <span id="tier-btn-label">MAP: ${this.globeScene.getMapModeLabel()}</span>
            </button>
            <button class="hud-pill-btn" id="btn-open-about" title="System Specifications & About">
              <span class="btn-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </span>
              <span>ABOUT</span>
            </button>
            <button class="hud-icon-btn" id="btn-switch-mode" title="Switch Mode (Map / GPS Relay)">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
            </button>
            <button class="hud-icon-btn" id="btn-toggle-fs" title="Toggle Fullscreen">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
            </button>
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
              <span class="cam-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2h2v5h-2V6zm-6 0h4v5H5V6zm0 7h4v5H5v-5zm6 5v-5h2v5h-2zm8 0h-4v-5h4v5zm0-7h-4V6h4v5z"/></svg>
              </span>
              <span>Cockpit</span>
            </button>
            <button class="cam-btn" data-cam="wing">
              <span class="cam-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21 3L3 10.53v2.13l8.03 2.68L13.71 21h2.13L21 3z"/></svg>
              </span>
              <span>Wing Cam</span>
            </button>
            <button class="cam-btn" data-cam="chase">
              <span class="cam-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
              </span>
              <span>Chase Cam</span>
            </button>
            <button class="cam-btn active" data-cam="orbit">
              <span class="cam-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </span>
              <span>Globe Orbit</span>
            </button>
            <button class="cam-btn" data-cam="tactical">
              <span class="cam-icon">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>
              </span>
              <span>2D Tactical</span>
            </button>
          </div>

          <!-- Simulation Quick Controls -->
          <div class="sim-quick-bar" id="sim-quick-bar">
            <button class="sim-ctrl-btn" id="btn-sim-pause" title="Pause / Resume">
              <svg id="sim-pause-icon" viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </button>
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
              <span class="unit">&deg;C</span>
              <span class="sub-val" id="val-oat-f">-61&deg;F</span>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="label">TRUE TRACK / HEADING</span>
            <div class="value-row">
              <span class="big-val" id="val-heading">285&deg;</span>
              <span class="unit">TRUE</span>
              <span class="sub-val" id="val-pitch-roll">+1.5&deg; / 0.0&deg;</span>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="label">COORDINATES</span>
            <div class="value-row">
              <span class="coord-val" id="val-coordinates">51°28'12"N 000°27'42"W</span>
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
            <div class="clock-col solar-col" id="col-solar-status" title="Local Solar Phase & Elevation Angle (Click to configure Day/Night map)" style="cursor: pointer;">
              <span class="label">SOLAR / LOCAL</span>
              <span class="clock-val solar-badge" id="val-solar-status">☀️ DAY</span>
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
      this.modalDialogs.showAboutModal(this.globeScene);
    });

    document.getElementById('btn-map-tier')?.addEventListener('click', () => {
      this.modalDialogs.showMapLayersModal(this.globeScene, () => this.updateMapTierButtonLabel());
    });

    document.getElementById('btn-toggle-solar')?.addEventListener('click', () => {
      this.modalDialogs.showSolarModal(this.globeScene);
    });

    document.getElementById('col-solar-status')?.addEventListener('click', () => {
      this.modalDialogs.showSolarModal(this.globeScene);
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
      const icon = document.getElementById('sim-pause-icon');
      if (icon) {
        icon.innerHTML = isPaused
          ? '<path d="M8 5v14l11-7z"/>'
          : '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
      }
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

    // Compact distance readouts (avoids overlapping on mobile)
    setText('hud-distance-traveled', `${Math.round(state.distanceTraveledNM).toLocaleString()} NM`);
    setText('hud-ete-time', `ETE ${AviationMath.formatDuration(state.eteSeconds)}`);
    setText('hud-distance-remaining', `${Math.round(state.distanceRemainingNM).toLocaleString()} NM`);

    // Telemetry strip
    setText('val-groundspeed', state.groundSpeed.toString());
    setText('val-speed-kmh', `${Math.round(state.groundSpeed * AviationMath.KNOTS_TO_KMH)} KM/H`);

    setText('val-oat-c', `${state.atmosphere.temperatureC}`);
    setText('val-oat-f', `${state.atmosphere.temperatureF}°F`);

    setText('val-heading', `${Math.round(state.heading)}°`);
    const pitchSign = state.pitch >= 0 ? '+' : '';
    const rollSign = state.roll >= 0 ? '+' : '';
    setText('val-pitch-roll', `${pitchSign}${state.pitch.toFixed(1)}° / ${rollSign}${state.roll.toFixed(1)}°`);

    const latDms = AviationMath.formatDMS(state.lat, true);
    const lonDms = AviationMath.formatDMS(state.lon, false);
    setText('val-coordinates', `${latDms} ${lonDms}`);

    // Telemetry source indicator & dot
    const srcDot = document.getElementById('gps-status-dot');
    const srcLabel = document.getElementById('gps-source-label');
    if (srcDot && srcLabel) {
      if (state.source === 'mobile_gps') {
        srcDot.className = 'pulse-dot active-green';
        srcLabel.textContent = `PHONE GPS (±${state.gpsAccuracyMeters.toFixed(1)}m)`;
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

    const plan = this.flightPlanManager.getActivePlan();
    if (plan) {
      const origOffsetHours = plan.origin.lon / 15;
      const destOffsetHours = plan.destination.lon / 15;

      const origDate = new Date(now.getTime() + origOffsetHours * 3600 * 1000);
      const destDate = new Date(now.getTime() + destOffsetHours * 3600 * 1000);

      setText('val-origin-clock', `${String(origDate.getUTCHours()).padStart(2, '0')}:${String(origDate.getUTCMinutes()).padStart(2, '0')}`);
      setText('val-dest-clock', `${String(destDate.getUTCHours()).padStart(2, '0')}:${String(destDate.getUTCMinutes()).padStart(2, '0')}`);
    }

    // Live Astronomical Solar Telemetry
    const solarInfo = this.globeScene.currentSolarInfo;
    const solarBtnLabel = document.getElementById('solar-btn-label');
    const solarBtnIcon = document.getElementById('solar-btn-icon');

    if (solarBtnLabel) {
      if (this.globeScene.solarMode === 'utc') {
        solarBtnLabel.textContent = 'SUN: UTC';
      } else if (this.globeScene.solarMode === 'local_noon') {
        solarBtnLabel.textContent = 'SUN: NOON';
      } else if (this.globeScene.solarMode === 'sim') {
        solarBtnLabel.textContent = 'SUN: SIM';
      } else {
        solarBtnLabel.textContent = 'SUN: MANUAL';
      }
    }

    if (solarInfo) {
      if (solarBtnIcon) {
        solarBtnIcon.textContent = solarInfo.phaseIcon;
      }
      const elevSign = solarInfo.elevationDeg > 0 ? '+' : '';
      setText('val-solar-status', `${solarInfo.phaseIcon} ${solarInfo.phase === 'day' ? 'DAY' : solarInfo.phase === 'night' ? 'NIGHT' : 'TWILIGHT'} (${elevSign}${solarInfo.elevationDeg}°)`);
    }
  }

  public updateMapTierButtonLabel(): void {
    const label = document.getElementById('tier-btn-label');
    if (label) {
      label.textContent = `MAP: ${this.globeScene.getMapModeLabel()}`;
    }
  }
}
