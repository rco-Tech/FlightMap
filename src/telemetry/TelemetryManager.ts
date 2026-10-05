import { AviationMath, ISAAtmosphere } from './AviationMath';
import { FlightPlanManager } from './FlightPlan';
import { UnitManager, UnitSystem } from './UnitManager';

export type TelemetrySource = 'simulation' | 'mobile_gps' | 'browser_gps' | 'serial_nmea';

export interface TelemetryState {
  lat: number;
  lon: number;
  altitude: number; // in feet
  groundSpeed: number; // in knots
  heading: number; // in degrees true (0-360)
  pitch: number; // in degrees (-90 to +90)
  roll: number; // in degrees (-180 to +180)
  verticalSpeed: number; // in feet/min (+ climb, - descent)
  distanceTraveledNM: number;
  distanceRemainingNM: number;
  progressFraction: number; // 0.0 to 1.0
  eteSeconds: number; // estimated time enroute in seconds
  eta: Date; // estimated time of arrival
  source: TelemetrySource;
  gpsAccuracyMeters: number;
  satellites: number;
  atmosphere: ISAAtmosphere;
  timestamp: number;
}

export class TelemetryManager {
  private static instance: TelemetryManager;
  private state: TelemetryState;
  private listeners: ((state: TelemetryState) => void)[] = [];
  private flightPlanManager: FlightPlanManager;

  // Source controllers
  private activeSource: TelemetrySource = 'simulation';
  private simProgress: number = 0.35; // default starting at 35% cruise for immediate beauty
  private simSpeedMultiplier: number = 10.0;
  private simIsPaused: boolean = false;
  private simTimer: number | null = null;
  private lastSimTimestamp: number = performance.now();

  // Browser Geolocation watch id
  private geoWatchId: number | null = null;

  // Serial port
  private serialPort: any = null;
  private serialReader: any = null;

  // WebSocket for mobile GPS sync
  private ws: WebSocket | null = null;
  private wsConnected: boolean = false;
  private relayEnabled: boolean = true;
  private phoneConnected: boolean = false;
  private phoneListeners: ((connected: boolean, active: boolean) => void)[] = [];
  private cameraListeners: ((mode: string) => void)[] = [];
  private flightPlanListeners: ((cmd: any) => void)[] = [];

  public onCameraCommand(callback: (mode: string) => void): () => void {
    this.cameraListeners.push(callback);
    return () => {
      this.cameraListeners = this.cameraListeners.filter((cb) => cb !== callback);
    };
  }

  public broadcastCameraMode(mode: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({
          type: 'camera_active',
          mode,
          timestamp: Date.now()
        }));
      } catch (e) {}
    }
  }

  public onFlightPlanCommand(callback: (cmd: any) => void): () => void {
    this.flightPlanListeners.push(callback);
    return () => {
      this.flightPlanListeners = this.flightPlanListeners.filter((cb) => cb !== callback);
    };
  }

  public broadcastFlightPlan(plan: any): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN && plan) {
      try {
        this.ws.send(JSON.stringify({
          type: 'flight_plan_active',
          from: plan.origin?.iata || plan.from,
          to: plan.destination?.iata || plan.to,
          originCity: plan.origin?.city,
          destCity: plan.destination?.city,
          flightNumber: plan.flightNumber,
          airline: plan.airline,
          aircraft: plan.aircraftType,
          totalDistanceNM: plan.totalDistanceNM,
          destTz: plan.destination?.tz,
          timestamp: Date.now()
        }));
      } catch (e) {}
    }
  }

  public broadcastUnitSystem(system: UnitSystem): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({
          type: 'unit_system',
          system,
          timestamp: Date.now()
        }));
      } catch (e) {}
    }
  }

  public broadcastSimState(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({
          type: 'sim_speed_active',
          speed: this.simSpeedMultiplier,
          isPaused: this.simIsPaused,
          timestamp: Date.now()
        }));
      } catch (e) {}
    }
  }

  /**
   * Periodic snapshot of the flight's progress, mirrored to paired phones so
   * the mobile page can show a live flight status strip (progress bar,
   * distance flown/remaining, ETE and ETA). Sent every 2 seconds.
   */
  public broadcastFlightProgress(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    const plan = this.flightPlanManager.getActivePlan();
    if (!plan) return;
    try {
      this.ws.send(JSON.stringify({
        type: 'flight_progress',
        progressFraction: this.state.progressFraction,
        distanceTraveledNM: this.state.distanceTraveledNM,
        distanceRemainingNM: this.state.distanceRemainingNM,
        eteSeconds: this.state.eteSeconds,
        groundSpeed: this.state.groundSpeed,
        altitude: this.state.altitude,
        source: this.state.source,
        timestamp: Date.now()
      }));
    } catch (e) {}
  }

  public onPhoneStatus(callback: (connected: boolean, active: boolean) => void): () => void {
    this.phoneListeners.push(callback);
    callback(this.phoneConnected, this.activeSource === 'mobile_gps');
    return () => {
      this.phoneListeners = this.phoneListeners.filter((cb) => cb !== callback);
    };
  }

  public isPhoneConnected(): boolean {
    return this.phoneConnected;
  }

  /**
   * Standalone map mode does not talk to a laptop relay, so skip the WebSocket
   * entirely instead of retrying an unreachable hub every 3 seconds forever.
   */
  public setRelayEnabled(enabled: boolean): void {
    this.relayEnabled = enabled;
    if (enabled) {
      this.initWebSocket();
    } else if (this.ws) {
      try {
        this.ws.close();
      } catch {
        // ignore
      }
      this.ws = null;
      this.wsConnected = false;
    }
  }

  public isWebSocketConnected(): boolean {
    return this.wsConnected;
  }

  public stopSimulation(): void {
    if (this.simTimer !== null) {
      cancelAnimationFrame(this.simTimer);
      this.simTimer = null;
    }
  }

  private constructor() {
    this.flightPlanManager = FlightPlanManager.getInstance();

    this.flightPlanManager.onPlanChanged(() => {
      this.simProgress = 0.02;
      this.updateSimulationStep(0);
    });

    // Default initial telemetry
    this.state = {
      lat: 52.4539,
      lon: -1.7480,
      altitude: 37000,
      groundSpeed: 450,
      heading: 110,
      pitch: 1.5,
      roll: 0.0,
      verticalSpeed: 0,
      distanceTraveledNM: 418,
      distanceRemainingNM: 777,
      progressFraction: 0.35,
      eteSeconds: 6200,
      eta: new Date(Date.now() + 6200 * 1000),
      source: 'simulation',
      gpsAccuracyMeters: 3.5,
      satellites: 12,
      atmosphere: AviationMath.calculateAtmosphere(37000, 450),
      timestamp: Date.now()
    };

    // Always enable relay WebSocket on the desktop/laptop map display
    this.relayEnabled = true;
    this.initWebSocket();
    this.startSimulationLoop();

    // Mirror the live flight state to paired phones every 2 seconds
    // (drives the mobile "Live Flight" status strip).
    window.setInterval(() => this.broadcastFlightProgress(), 2000);
  }

  public static getInstance(): TelemetryManager {
    if (!TelemetryManager.instance) {
      TelemetryManager.instance = new TelemetryManager();
    }
    return TelemetryManager.instance;
  }

  public getState(): TelemetryState {
    return this.state;
  }

  public getSource(): TelemetrySource {
    return this.activeSource;
  }

  public setSource(source: TelemetrySource): void {
    if (this.activeSource === source) return;
    this.activeSource = source;

    if (source === 'mobile_gps') {
      if (!this.wsConnected) {
        this.initWebSocket();
      }
    }

    if (source === 'browser_gps') {
      this.startBrowserGeolocation();
    } else {
      this.stopBrowserGeolocation();
    }

    if (source !== 'simulation') {
      this.simIsPaused = true;
    } else {
      this.simIsPaused = false;
    }

    for (const cb of this.phoneListeners) {
      cb(this.phoneConnected, this.activeSource === 'mobile_gps');
    }

    this.state = {
      ...this.state,
      source: this.activeSource
    };
    this.emitState();
  }

  public subscribe(callback: (state: TelemetryState) => void): () => void {
    this.listeners.push(callback);
    callback(this.state);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  public setSimulationSpeed(multiplier: number): void {
    this.simSpeedMultiplier = Math.max(1, Math.min(200, multiplier));
    this.broadcastSimState();
    this.emitState();
  }

  public getSimulationSpeed(): number {
    return this.simSpeedMultiplier;
  }

  public setSimulationProgress(fraction: number): void {
    this.simProgress = Math.max(0, Math.min(1, fraction));
    this.updateSimulationStep(0);
  }

  public toggleSimulationPause(): boolean {
    this.simIsPaused = !this.simIsPaused;
    this.broadcastSimState();
    return this.simIsPaused;
  }

  public isPaused(): boolean {
    return this.simIsPaused;
  }

  public updateManualAttitude(pitch: number, roll: number): void {
    this.state.pitch = pitch;
    this.state.roll = roll;
    this.emitState();
  }

  // --- External Ingestion (Mobile GPS / Server) ---

  public ingestGpsUpdate(data: Partial<TelemetryState>): void {
    const prevAlt = this.state.altitude;
    const now = Date.now();
    const dtSeconds = (now - this.state.timestamp) / 1000;

    const lat = data.lat !== undefined ? data.lat : this.state.lat;
    const lon = data.lon !== undefined ? data.lon : this.state.lon;
    const altitude = data.altitude !== undefined ? data.altitude : this.state.altitude;
    const groundSpeed = data.groundSpeed !== undefined ? data.groundSpeed : this.state.groundSpeed;
    const heading = data.heading !== undefined ? data.heading : this.state.heading;
    const pitch = data.pitch !== undefined ? data.pitch : this.state.pitch;
    const roll = data.roll !== undefined ? data.roll : this.state.roll;

    // Calculate vertical speed (fpm)
    let verticalSpeed = this.state.verticalSpeed;
    if (dtSeconds > 0.5) {
      verticalSpeed = Math.round(((altitude - prevAlt) / dtSeconds) * 60);
    }

    const plan = this.flightPlanManager.getActivePlan();
    let distanceRemainingNM = this.state.distanceRemainingNM;
    let distanceTraveledNM = this.state.distanceTraveledNM;
    let progressFraction = this.state.progressFraction;
    let eteSeconds = this.state.eteSeconds;

    if (plan) {
      distanceRemainingNM = AviationMath.calculateDistanceNM(
        { lat, lon },
        { lat: plan.destination.lat, lon: plan.destination.lon }
      );
      distanceTraveledNM = Math.max(0, plan.totalDistanceNM - distanceRemainingNM);
      progressFraction = plan.totalDistanceNM > 0 ? Math.min(1, distanceTraveledNM / plan.totalDistanceNM) : 0;
      const speedKnots = Math.max(50, groundSpeed);
      eteSeconds = Math.round((distanceRemainingNM / speedKnots) * 3600);
    }

    const atmosphere = AviationMath.calculateAtmosphere(altitude, groundSpeed);

    this.state = {
      lat,
      lon,
      altitude,
      groundSpeed,
      heading,
      pitch,
      roll,
      verticalSpeed,
      distanceTraveledNM,
      distanceRemainingNM,
      progressFraction,
      eteSeconds,
      eta: new Date(now + eteSeconds * 1000),
      source: data.source || this.activeSource,
      gpsAccuracyMeters: data.gpsAccuracyMeters !== undefined ? data.gpsAccuracyMeters : this.state.gpsAccuracyMeters,
      satellites: data.satellites !== undefined ? data.satellites : this.state.satellites,
      atmosphere,
      timestamp: now
    };

    this.emitState();
  }

  // --- WebSocket Connection for Mobile GPS Relay ---

  private initWebSocket(): void {
    if (!this.relayEnabled) return;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws/telemetry`;

    const connect = () => {
      try {
        this.ws = new WebSocket(wsUrl);
        this.ws.onopen = () => {
          this.wsConnected = true;
          console.log('[TelemetryManager] WebSocket connected to relay hub');
          // Announce that the laptop 3D moving map is actively listening
          try {
            this.ws?.send(JSON.stringify({
              type: 'client_hello',
              role: 'laptop',
              name: 'FlightMap 3D Moving Map'
            }));
            const activePlan = this.flightPlanManager.getActivePlan();
            if (activePlan) {
              this.broadcastFlightPlan(activePlan);
            }
            this.broadcastUnitSystem(UnitManager.getInstance().getSystem());
            this.broadcastSimState();
          } catch (e) {}
        };

        this.ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);

            if (msg.type === 'peer_status' || msg.type === 'server_hello') {
              this.phoneConnected = Boolean(msg.phoneOnline);
              if (this.phoneConnected) {
                this.broadcastSimState();
                // Re-send flight context so a freshly paired phone immediately
                // shows the live flight strip, even if it connected after the
                // plan was activated.
                const activePlan = this.flightPlanManager.getActivePlan();
                if (activePlan) {
                  this.broadcastFlightPlan(activePlan);
                }
                this.broadcastFlightProgress();
              }
              for (const cb of this.phoneListeners) {
                cb(this.phoneConnected, this.activeSource === 'mobile_gps');
              }
            }

            if (msg.type === 'gps_update') {
              // Received live GPS fix from mobile phone!
              this.phoneConnected = true;
              this.activeSource = 'mobile_gps';
              this.stopBrowserGeolocation(); // Stop laptop browser location so it does not fight phone GNSS
              this.simIsPaused = true;
              this.ingestGpsUpdate({
                lat: msg.lat,
                lon: msg.lon,
                altitude: msg.altitude ? Math.round(msg.altitude * AviationMath.FEET_PER_METER) : undefined,
                groundSpeed: msg.speed ? Math.round(msg.speed * AviationMath.MPS_TO_KNOTS) : undefined, // m/s to knots
                heading: msg.heading !== null && msg.heading !== undefined ? msg.heading : undefined,
                pitch: msg.pitch,
                roll: msg.roll,
                gpsAccuracyMeters: msg.accuracy,
                source: 'mobile_gps'
              });

              for (const cb of this.phoneListeners) {
                cb(true, true);
              }

              // Send laptop acknowledgement directly back to phone transmitter
              try {
                this.ws?.send(JSON.stringify({
                  type: 'laptop_ack',
                  packetId: msg.timestamp,
                  receivedAt: Date.now()
                }));
              } catch (e) {}
            }

            if (msg.type === 'camera_command' && msg.mode) {
              console.log('[TelemetryManager] Received remote camera command from phone:', msg.mode);
              for (const cb of this.cameraListeners) {
                cb(msg.mode);
              }
              // Send camera acknowledgement back to phone
              try {
                this.ws?.send(JSON.stringify({
                  type: 'camera_ack',
                  mode: msg.mode,
                  timestamp: Date.now()
                }));
              } catch (e) {}
            }

            if (msg.type === 'flight_plan_command' && msg.from && msg.to) {
              console.log('[TelemetryManager] Received remote flight plan command from phone:', msg.from, '->', msg.to);
              for (const cb of this.flightPlanListeners) {
                cb(msg);
              }
              try {
                this.ws?.send(JSON.stringify({
                  type: 'flight_plan_ack',
                  from: msg.from,
                  to: msg.to,
                  flightNumber: msg.flightNumber,
                  timestamp: Date.now()
                }));
              } catch (e) {}
            }

            if (msg.type === 'unit_system' && msg.system) {
              UnitManager.getInstance().setSystem(msg.system);
            }

            if (msg.type === 'sim_speed_command' && msg.speed) {
              console.log('[TelemetryManager] Received remote simulation speed command:', msg.speed);
              this.setSimulationSpeed(msg.speed);
              if (this.activeSource !== 'simulation') {
                this.setSource('simulation');
              }
              // Re-broadcast after a possible source switch — the first broadcast
              // above carries the pre-switch pause flag and would leave the
              // phone stuck on a stale "PAUSED" badge.
              this.broadcastSimState();
            }

            if (msg.type === 'sim_pause_command') {
              console.log('[TelemetryManager] Received remote simulation pause command, isPaused:', msg.isPaused);
              if (typeof msg.isPaused === 'boolean') {
                this.simIsPaused = msg.isPaused;
                this.broadcastSimState();
              } else {
                this.toggleSimulationPause();
              }
              this.emitState();
            }
          } catch (e) {
            console.error('[TelemetryManager] Error parsing WS message:', e);
          }
        };

        this.ws.onclose = () => {
          this.wsConnected = false;
          this.phoneConnected = false;
          for (const cb of this.phoneListeners) {
            cb(false, this.activeSource === 'mobile_gps');
          }
          if (this.relayEnabled) setTimeout(connect, 3000); // auto reconnect
        };
      } catch (e) {
        console.warn('[TelemetryManager] WebSocket connection failed (offline mode):', e);
      }
    };

    connect();
  }

  // --- Browser Geolocation Watch ---

  private startBrowserGeolocation(): void {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    this.stopBrowserGeolocation();
    this.geoWatchId = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = pos.coords;
        const altFt = coords.altitude !== null ? coords.altitude * AviationMath.FEET_PER_METER : 36000;
        const speedKnots = coords.speed !== null ? (coords.speed * 3.6) / AviationMath.KNOTS_TO_KMH : 470;
        const headingDeg = coords.heading !== null ? coords.heading : this.state.heading;

        this.ingestGpsUpdate({
          lat: coords.latitude,
          lon: coords.longitude,
          altitude: Math.round(altFt),
          groundSpeed: Math.round(speedKnots),
          heading: Math.round(headingDeg),
          gpsAccuracyMeters: coords.accuracy,
          source: 'browser_gps'
        });
      },
      (err) => {
        console.warn('[TelemetryManager] Geolocation error:', err.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000
      }
    );
  }

  private stopBrowserGeolocation(): void {
    if (this.geoWatchId !== null) {
      navigator.geolocation.clearWatch(this.geoWatchId);
      this.geoWatchId = null;
    }
  }

  // --- Web Serial NMEA USB GPS ---

  public async connectSerialGps(): Promise<boolean> {
    if (!('serial' in navigator)) {
      alert('Web Serial API is not supported in this browser. Please use Chrome or Edge.');
      return false;
    }

    try {
      // Prompt user to select serial port (USB GPS dongle)
      this.serialPort = await (navigator as any).serial.requestPort();
      await this.serialPort.open({ baudRate: 4800 }); // standard NMEA baud rate

      this.activeSource = 'serial_nmea';
      this.simIsPaused = true;
      this.readSerialStream();
      return true;
    } catch (err) {
      console.error('[TelemetryManager] Serial GPS connection error:', err);
      return false;
    }
  }

  private async readSerialStream(): Promise<void> {
    const textDecoder = new TextDecoderStream();
    this.serialPort.readable.pipeTo(textDecoder.writable);
    this.serialReader = textDecoder.readable.getReader();

    let buffer = '';
    try {
      while (true) {
        const { value, done } = await this.serialReader.read();
        if (done) break;
        buffer += value;
        const lines = buffer.split('\r\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          this.parseNmeaSentence(line);
        }
      }
    } catch (err) {
      console.error('[TelemetryManager] Serial read error:', err);
    }
  }

  private parseNmeaSentence(sentence: string): void {
    // Basic NMEA 0183 parser for $GPRMC and $GPGGA
    if (sentence.startsWith('$GPRMC') || sentence.startsWith('$GNRMC')) {
      const parts = sentence.split(',');
      if (parts[2] === 'A') { // Valid status
        const rawLat = parseFloat(parts[3]);
        const latHem = parts[4];
        const rawLon = parseFloat(parts[5]);
        const lonHem = parts[6];
        const speedKts = parseFloat(parts[7]);
        const trackDeg = parseFloat(parts[8]);

        const lat = (Math.floor(rawLat / 100) + (rawLat % 100) / 60) * (latHem === 'S' ? -1 : 1);
        const lon = (Math.floor(rawLon / 100) + (rawLon % 100) / 60) * (lonHem === 'W' ? -1 : 1);

        this.ingestGpsUpdate({
          lat,
          lon,
          groundSpeed: Math.round(speedKts),
          heading: Math.round(trackDeg || this.state.heading),
          source: 'serial_nmea'
        });
      }
    } else if (sentence.startsWith('$GPGGA') || sentence.startsWith('$GNGGA')) {
      const parts = sentence.split(',');
      const altMeters = parseFloat(parts[9]);
      const sats = parseInt(parts[7], 10);
      if (!isNaN(altMeters)) {
        this.ingestGpsUpdate({
          altitude: Math.round(altMeters * AviationMath.FEET_PER_METER),
          satellites: sats || this.state.satellites,
          source: 'serial_nmea'
        });
      }
    }
  }

  // --- Real-time Flight Simulation Engine ---

  private startSimulationLoop(): void {
    const tick = () => {
      const now = performance.now();
      const dt = (now - this.lastSimTimestamp) / 1000;
      this.lastSimTimestamp = now;

      if (this.activeSource === 'simulation' && !this.simIsPaused) {
        this.updateSimulationStep(dt);
      }

      this.simTimer = requestAnimationFrame(tick);
    };

    this.simTimer = requestAnimationFrame(tick);

    // Background-tab fallback: browsers fully suspend requestAnimationFrame
    // when the tab is hidden, which would otherwise freeze simulation progress
    // (and the phone's live flight strip) whenever the laptop window is in the
    // background. Drive the sim from a low-frequency timer while hidden.
    window.setInterval(() => {
      const now = performance.now();
      if (document.hidden) {
        const dt = (now - this.lastSimTimestamp) / 1000;
        this.lastSimTimestamp = now;
        if (this.activeSource === 'simulation' && !this.simIsPaused) {
          this.updateSimulationStep(dt);
        }
      } else {
        // Keep dt sane for the next rAF frame after a visibility transition.
        this.lastSimTimestamp = now;
      }
    }, 1000);
  }

  private updateSimulationStep(dt: number): void {
    const plan = this.flightPlanManager.getActivePlan();
    if (!plan || plan.waypoints.length < 2) return;

    // Normal flight speed: complete entire route in estimatedEnrouteSeconds
    // Accelerated by simSpeedMultiplier
    const deltaProgress = (dt / plan.estimatedEnrouteSeconds) * this.simSpeedMultiplier;
    this.simProgress = (this.simProgress + deltaProgress) % 1.0;

    const totalWaypoints = plan.waypoints.length;
    const exactIndex = this.simProgress * (totalWaypoints - 1);
    const indexLow = Math.floor(exactIndex);
    const indexHigh = Math.min(totalWaypoints - 1, indexLow + 1);
    const t = exactIndex - indexLow;

    const pt1 = plan.waypoints[indexLow];
    const pt2 = plan.waypoints[indexHigh];

    const currentPt = AviationMath.intermediatePoint(pt1, pt2, t);
    const altitude = Math.round(pt1.altitude! + (pt2.altitude! - pt1.altitude!) * t);
    const heading = Math.round(AviationMath.calculateBearing(pt1, pt2));

    // Dynamic bank/roll in gentle turns
    const prevHeading = this.state.heading;
    let headingDiff = heading - prevHeading;
    if (headingDiff > 180) headingDiff -= 360;
    if (headingDiff < -180) headingDiff += 360;
    const targetRoll = Math.max(-25, Math.min(25, -headingDiff * 2.5));
    const smoothRoll = this.state.roll + (targetRoll - this.state.roll) * 0.05;

    // Pitch proportional to climb/descent
    let verticalSpeed = 0;
    let targetPitch = 1.0;
    if (this.simProgress < 0.15) {
      targetPitch = 3.5;
      verticalSpeed = 1800; // climb
    } else if (this.simProgress > 0.85) {
      targetPitch = -2.0;
      verticalSpeed = -1500; // descent
    }

    const distanceTraveledNM = Math.round(plan.totalDistanceNM * this.simProgress);
    const distanceRemainingNM = Math.max(0, plan.totalDistanceNM - distanceTraveledNM);
    const eteSeconds = Math.round((distanceRemainingNM / plan.cruiseSpeedKnots) * 3600);

    const atmosphere = AviationMath.calculateAtmosphere(altitude, plan.cruiseSpeedKnots);

    this.state = {
      lat: currentPt.lat,
      lon: currentPt.lon,
      altitude,
      groundSpeed: plan.cruiseSpeedKnots,
      heading,
      pitch: targetPitch,
      roll: smoothRoll,
      verticalSpeed,
      distanceTraveledNM,
      distanceRemainingNM,
      progressFraction: this.simProgress,
      eteSeconds,
      eta: new Date(Date.now() + eteSeconds * 1000),
      source: 'simulation',
      gpsAccuracyMeters: 2.1,
      satellites: 14,
      atmosphere,
      timestamp: Date.now()
    };

    this.emitState();
  }

  private emitState(): void {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}
