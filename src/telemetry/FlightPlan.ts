import { Airport, AirportDatabase } from './AirportDatabase';
import { AviationMath, LatLon } from './AviationMath';

export interface FlightWaypoint extends LatLon {
  name: string;
  fraction: number;
  distanceFromOriginNM: number;
  distanceToDestinationNM: number;
}

export interface FlightPlanData {
  flightNumber: string;
  airline: string;
  aircraftType: string;
  origin: Airport;
  destination: Airport;
  cruiseAltitudeFt: number;
  cruiseSpeedKnots: number;
  totalDistanceNM: number;
  estimatedEnrouteSeconds: number;
  waypoints: FlightWaypoint[];
}

export interface RoutePreset {
  flightNumber: string;
  airline: string;
  aircraft: string;
  from: string;
  to: string;
  cruiseAltitudeFt?: number;
  cruiseSpeedKnots?: number;
  isCustom?: boolean;
}

export class FlightPlanManager {
  private static instance: FlightPlanManager;
  private activePlan: FlightPlanData | null = null;
  private listeners: ((plan: FlightPlanData) => void)[] = [];
  private favoritesListeners: ((routes: RoutePreset[]) => void)[] = [];

  public static readonly FAVORITES_STORAGE_KEY = 'flightmap_favorite_routes';

  public static getInstance(): FlightPlanManager {
    if (!FlightPlanManager.instance) {
      FlightPlanManager.instance = new FlightPlanManager();
    }
    return FlightPlanManager.instance;
  }

  public constructor() {}

  public static readonly DEFAULT_ROUTES: RoutePreset[] = [
    { flightNumber: 'W4 3002', airline: 'Wizz Air', aircraft: 'Airbus A321neo', from: 'BHX', to: 'OTP' },
    { flightNumber: 'W4 3001', airline: 'Wizz Air', aircraft: 'Airbus A321neo', from: 'OTP', to: 'BHX' },
    { flightNumber: 'RT101', airline: 'rTech Airways', aircraft: 'Gulfstream G650ER', from: 'BHX', to: 'OTP' },
    { flightNumber: 'RT102', airline: 'rTech Airways', aircraft: 'Gulfstream G650ER', from: 'OTP', to: 'BHX' },
    { flightNumber: 'BA886', airline: 'British Airways', aircraft: 'Boeing 787-9 Dreamliner', from: 'LHR', to: 'OTP' },
    { flightNumber: 'BA117', airline: 'British Airways', aircraft: 'Boeing 787-9 Dreamliner', from: 'LHR', to: 'JFK' },
    { flightNumber: 'EK215', airline: 'Emirates', aircraft: 'Airbus A380-800', from: 'DXB', to: 'LAX' },
    { flightNumber: 'SQ22', airline: 'Singapore Airlines', aircraft: 'Airbus A350-900ULR', from: 'SIN', to: 'EWR' },
    { flightNumber: 'NH108', airline: 'All Nippon Airways', aircraft: 'Boeing 777-300ER', from: 'HND', to: 'SFO' },
    { flightNumber: 'AF006', airline: 'Air France', aircraft: 'Airbus A350-900', from: 'CDG', to: 'JFK' },
    { flightNumber: 'QF1', airline: 'Qantas Airways', aircraft: 'Boeing 787-9', from: 'SYD', to: 'LHR' }
  ];

  public getFavoriteRoutes(): RoutePreset[] {
    const custom = this.loadCustomFavorites();
    const defaults: RoutePreset[] = FlightPlanManager.DEFAULT_ROUTES.map((r) => ({
      ...r,
      isCustom: false
    }));

    const result: RoutePreset[] = [];

    // Customs first — a saved favorite shadows default presets on the same route.
    const customRouteKeys = new Set<string>();
    for (const r of custom) {
      const key = `${r.from.toUpperCase()}-${r.to.toUpperCase()}`;
      if (!customRouteKeys.has(key)) {
        customRouteKeys.add(key);
        result.push(r);
      }
    }

    // Show every default flight whose route is not already covered by a custom
    // favorite — multiple flights can share a route with different aircraft
    // (e.g. W4 3002 A321neo and RT101 Gulfstream G650ER both fly BHX->OTP).
    for (const r of defaults) {
      const key = `${r.from.toUpperCase()}-${r.to.toUpperCase()}`;
      if (!customRouteKeys.has(key)) {
        result.push(r);
      }
    }

    return result;
  }

  public saveFavoriteRoute(route: RoutePreset): boolean {
    const from = route.from.trim().toUpperCase();
    const to = route.to.trim().toUpperCase();
    if (!from || !to || from === to) return false;

    const list = this.loadCustomFavorites();
    const existingIndex = list.findIndex(
      (r) => r.from.toUpperCase() === from && r.to.toUpperCase() === to
    );

    const newFav: RoutePreset = {
      flightNumber: route.flightNumber?.trim() || `${from}-${to}`,
      airline: route.airline?.trim() || 'Custom Route',
      aircraft: route.aircraft?.trim() || 'Boeing 787-9',
      from,
      to,
      cruiseAltitudeFt: route.cruiseAltitudeFt || 38000,
      cruiseSpeedKnots: route.cruiseSpeedKnots || 485,
      isCustom: true
    };

    if (existingIndex >= 0) {
      list[existingIndex] = newFav;
    } else {
      list.unshift(newFav);
    }

    this.saveCustomFavorites(list);
    this.notifyFavoritesListeners();
    return true;
  }

  public removeFavoriteRoute(from: string, to: string): boolean {
    const f = from.trim().toUpperCase();
    const t = to.trim().toUpperCase();
    const list = this.loadCustomFavorites();
    const filtered = list.filter((r) => !(r.from.toUpperCase() === f && r.to.toUpperCase() === t));
    if (filtered.length !== list.length) {
      this.saveCustomFavorites(filtered);
      this.notifyFavoritesListeners();
      return true;
    }
    return false;
  }

  public onFavoritesChanged(callback: (routes: RoutePreset[]) => void): () => void {
    this.favoritesListeners.push(callback);
    callback(this.getFavoriteRoutes());
    return () => {
      this.favoritesListeners = this.favoritesListeners.filter((cb) => cb !== callback);
    };
  }

  private notifyFavoritesListeners(): void {
    const all = this.getFavoriteRoutes();
    for (const cb of this.favoritesListeners) cb(all);
  }

  private loadCustomFavorites(): RoutePreset[] {
    try {
      const raw = localStorage.getItem(FlightPlanManager.FAVORITES_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.map((item) => ({ ...item, isCustom: true }));
        }
      }
    } catch (e) {}
    return [];
  }

  private saveCustomFavorites(list: RoutePreset[]): void {
    try {
      localStorage.setItem(FlightPlanManager.FAVORITES_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  public async createPlan(
    originCode: string,
    destinationCode: string,
    flightNumber: string = 'RT-101',
    airline: string = 'rTech Airways',
    aircraftType: string = 'Boeing 787-9 Dreamliner',
    cruiseAltitudeFt: number = 38000,
    cruiseSpeedKnots: number = 485
  ): Promise<FlightPlanData> {
    const db = AirportDatabase.getInstance();
    await db.load();

    const origin = db.getByCode(originCode);
    const destination = db.getByCode(destinationCode);

    if (!origin || !destination) {
      throw new Error(`Invalid airport code: ${!origin ? originCode : destinationCode}`);
    }

    const totalDistanceNM = Math.round(
      AviationMath.calculateDistanceNM(
        { lat: origin.lat, lon: origin.lon },
        { lat: destination.lat, lon: destination.lon }
      )
    );

    // Calculate approximate ETE (hours = distance / speed) + 20 min for climb/descent
    const flightHours = totalDistanceNM / cruiseSpeedKnots + 0.33;
    const estimatedEnrouteSeconds = Math.round(flightHours * 3600);

    // Generate waypoints along Great-Circle path (120 sampled points for high-res 3D arc)
    const rawWaypoints = AviationMath.generateFlightArcWaypoints(
      { lat: origin.lat, lon: origin.lon, altitude: origin.elevation },
      { lat: destination.lat, lon: destination.lon, altitude: destination.elevation },
      cruiseAltitudeFt,
      120
    );

    const waypoints: FlightWaypoint[] = rawWaypoints.map((pt, index) => {
      const fraction = index / (rawWaypoints.length - 1);
      const distanceFromOrigin = Math.round(totalDistanceNM * fraction);
      const distanceToDest = Math.round(totalDistanceNM * (1 - fraction));

      let name = `WAYPOINT ${index}`;
      if (index === 0) name = origin.iata;
      else if (index === rawWaypoints.length - 1) name = destination.iata;
      else if (index === Math.round(rawWaypoints.length * 0.15)) name = 'TOP OF CLIMB (TOC)';
      else if (index === Math.round(rawWaypoints.length * 0.5)) name = 'MIDPOINT';
      else if (index === Math.round(rawWaypoints.length * 0.85)) name = 'TOP OF DESCENT (TOD)';

      return {
        lat: pt.lat,
        lon: pt.lon,
        altitude: pt.altitude,
        fraction,
        distanceFromOriginNM: distanceFromOrigin,
        distanceToDestinationNM: distanceToDest,
        name
      };
    });

    const plan: FlightPlanData = {
      flightNumber,
      airline,
      aircraftType,
      origin,
      destination,
      cruiseAltitudeFt,
      cruiseSpeedKnots,
      totalDistanceNM,
      estimatedEnrouteSeconds,
      waypoints
    };

    this.activePlan = plan;
    this.notifyListeners(plan);
    return plan;
  }

  public getActivePlan(): FlightPlanData | null {
    return this.activePlan;
  }

  public onPlanChanged(callback: (plan: FlightPlanData) => void): () => void {
    this.listeners.push(callback);
    if (this.activePlan) callback(this.activePlan);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  private notifyListeners(plan: FlightPlanData): void {
    for (const listener of this.listeners) {
      listener(plan);
    }
  }
}
