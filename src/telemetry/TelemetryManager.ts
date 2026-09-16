import { AviationMath, ISAAtmosphere } from './AviationMath';
import { FlightPlanManager } from './FlightPlan';
import { getMode } from '../mode';

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
      lat: 51.47,
      lon: -0.45,
      altitude: 38000,
      groundSpeed: 485,
      heading: 285,
      pitch: 1.5,
      roll: 0.0,
      verticalSpeed: 0,
      distanceTraveledNM: 1200,
      distanceRemainingNM: 2250,
      progressFraction: 0.35,
      eteSeconds: 16700,
      eta: new Date(Date.now() + 16700 * 1000),
      source: 'simulation',
      gpsAccuracyMeters: 3.5,
      satellites: 12,
      atmosphere: AviationMath.calculateAtmosphere(38000, 485),
      timestamp: Date.now()
    };

    this.relayEnabled = getMode() !== 'map';
    if (this.relayEnabled) {
      this.initWebSocket();
    } else {
      console.log('[TelemetryManager] Standalone map mode - relay WebSocket disabled.');
    }
    this.startSimulationLoop();
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
        };

        this.ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            if (msg.type === 'gps_update') {
              // Received live GPS fix from mobile phone!
              this.activeSource = 'mobile_gps';
              this.simIsPaused = true;
              this.ingestGpsUpdate({
                lat: msg.lat,
                lon: msg.lon,
                altitude: msg.altitude ? Math.round(msg.altitude * AviationMath.FEET_PER_METER) : undefined,
                groundSpeed: msg.speed ? Math.round(msg.speed * AviationMath.KNOTS_TO_KMH) : undefined, // m/s to knots
                heading: msg.heading !== null && msg.heading !== undefined ? msg.heading : undefined,
                pitch: msg.pitch,
                roll: msg.roll,
                gpsAccuracyMeters: msg.accuracy,
                source: 'mobile_gps'
              });
            }
          } catch (e) {
            console.error('[TelemetryManager] Error parsing WS message:', e);
          }
        };

        this.ws.onclose = () => {
          this.wsConnected = false;
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
