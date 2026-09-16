/**
 * Airport Database Service
 * Loads and caches 7,900+ world commercial airports for offline search and flight planning.
 */

export interface Airport {
  iata: string;
  icao: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  elevation: number;
  tz: string;
}

export class AirportDatabase {
  private static instance: AirportDatabase;
  private airports: Airport[] = [];
  private airportMap: Map<string, Airport> = new Map();
  private isLoaded: boolean = false;
  private loadPromise: Promise<void> | null = null;

  private constructor() {}

  public static getInstance(): AirportDatabase {
    if (!AirportDatabase.instance) {
      AirportDatabase.instance = new AirportDatabase();
    }
    return AirportDatabase.instance;
  }

  public async load(): Promise<void> {
    if (this.isLoaded) return;
    if (this.loadPromise) return this.loadPromise;

    this.loadPromise = (async () => {
      try {
        const response = await fetch('/assets/data/airports.json');
        if (!response.ok) {
          throw new Error(`Failed to load airports.json: ${response.status}`);
        }
        this.airports = await response.json();
        this.airportMap.clear();

        for (const apt of this.airports) {
          if (apt.iata) this.airportMap.set(apt.iata.toUpperCase(), apt);
          if (apt.icao) this.airportMap.set(apt.icao.toUpperCase(), apt);
        }

        this.isLoaded = true;
        console.log(`[AirportDatabase] Successfully loaded ${this.airports.length} airports.`);
      } catch (err) {
        console.error('[AirportDatabase] Error loading airports:', err);
        // Fallback to essential major international hubs
        this.populateFallbackAirports();
      }
    })();

    return this.loadPromise;
  }

  public getByCode(code: string): Airport | undefined {
    return this.airportMap.get(code.toUpperCase());
  }

  public search(query: string, limit: number = 10): Airport[] {
    const q = query.trim().toUpperCase();
    if (!q) return [];

    // Exact matches first
    const exact = this.airportMap.get(q);
    const results: Airport[] = [];
    if (exact) results.push(exact);

    for (const apt of this.airports) {
      if (results.length >= limit) break;
      if (results.includes(apt)) continue;

      if (
        apt.iata.toUpperCase().includes(q) ||
        apt.icao.toUpperCase().includes(q) ||
        apt.city.toUpperCase().includes(q) ||
        apt.name.toUpperCase().includes(q) ||
        apt.country.toUpperCase().includes(q)
      ) {
        results.push(apt);
      }
    }

    return results;
  }

  public getAll(): Airport[] {
    return this.airports;
  }

  private populateFallbackAirports(): void {
    const fallbacks: Airport[] = [
      { iata: 'LHR', icao: 'EGLL', name: 'London Heathrow', city: 'London', country: 'United Kingdom', lat: 51.4700, lon: -0.4543, elevation: 83, tz: 'Europe/London' },
      { iata: 'JFK', icao: 'KJFK', name: 'John F. Kennedy Intl', city: 'New York', country: 'United States', lat: 40.6413, lon: -73.7781, elevation: 13, tz: 'America/New_York' },
      { iata: 'DXB', icao: 'OMDB', name: 'Dubai International', city: 'Dubai', country: 'United Arab Emirates', lat: 25.2532, lon: 55.3657, elevation: 62, tz: 'Asia/Dubai' },
      { iata: 'LAX', icao: 'KLAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'United States', lat: 33.9416, lon: -118.4085, elevation: 125, tz: 'America/Los_Angeles' },
      { iata: 'SIN', icao: 'WSSS', name: 'Singapore Changi', city: 'Singapore', country: 'Singapore', lat: 1.3644, lon: 103.9915, elevation: 22, tz: 'Asia/Singapore' },
      { iata: 'HND', icao: 'RJTT', name: 'Tokyo Haneda', city: 'Tokyo', country: 'Japan', lat: 35.5494, lon: 139.7798, elevation: 21, tz: 'Asia/Tokyo' },
      { iata: 'CDG', icao: 'LFPG', name: 'Paris Charles de Gaulle', city: 'Paris', country: 'France', lat: 49.0097, lon: 2.5479, elevation: 392, tz: 'Europe/Paris' },
      { iata: 'SYD', icao: 'YSSY', name: 'Sydney Kingsford Smith', city: 'Sydney', country: 'Australia', lat: -33.9399, lon: 151.1753, elevation: 21, tz: 'Australia/Sydney' }
    ];

    for (const apt of fallbacks) {
      this.airports.push(apt);
      this.airportMap.set(apt.iata, apt);
      this.airportMap.set(apt.icao, apt);
    }
    this.isLoaded = true;
  }
}
