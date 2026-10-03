import { AviationMath } from './AviationMath';

export type UnitSystem = 'maritime' | 'metric' | 'imperial';
export type CoordinateFormat = 'dms' | 'decimal';

export interface FormattedSpeed {
  value: number;
  unit: string;
  secondaryValue: number;
  secondaryUnit: string;
  displayStr: string;
}

export interface FormattedDistance {
  value: number;
  unit: string;
  displayStr: string;
}

export interface FormattedAltitude {
  value: number;
  unit: string;
  displayStr: string;
  flightLevelStr: string;
}

export interface FormattedTemperature {
  primaryValue: number;
  primaryUnit: string;
  secondaryValue: number;
  secondaryUnit: string;
  displayStr: string;
}

export class UnitManager {
  private static instance: UnitManager;
  private currentSystem: UnitSystem = 'maritime';
  private coordinateFormat: CoordinateFormat = 'dms';
  private listeners: ((system: UnitSystem) => void)[] = [];

  private static readonly STORAGE_KEY = 'flightmap_unit_system';
  private static readonly COORD_KEY = 'flightmap_coord_format';

  private constructor() {
    try {
      const saved = localStorage.getItem(UnitManager.STORAGE_KEY) as UnitSystem;
      if (saved === 'maritime' || saved === 'metric' || saved === 'imperial') {
        this.currentSystem = saved;
      }
      const savedCoord = localStorage.getItem(UnitManager.COORD_KEY) as CoordinateFormat;
      if (savedCoord === 'dms' || savedCoord === 'decimal') {
        this.coordinateFormat = savedCoord;
      }
    } catch {}
  }

  public static getInstance(): UnitManager {
    if (!UnitManager.instance) {
      UnitManager.instance = new UnitManager();
    }
    return UnitManager.instance;
  }

  public getSystem(): UnitSystem {
    return this.currentSystem;
  }

  public setSystem(system: UnitSystem): void {
    if (this.currentSystem === system) return;
    this.currentSystem = system;
    try {
      localStorage.setItem(UnitManager.STORAGE_KEY, system);
    } catch {}
    for (const cb of this.listeners) {
      try {
        cb(system);
      } catch (e) {
        console.error('[UnitManager] Listener error:', e);
      }
    }
  }

  public cycleSystem(): UnitSystem {
    const next: Record<UnitSystem, UnitSystem> = {
      maritime: 'metric',
      metric: 'imperial',
      imperial: 'maritime'
    };
    const newSystem = next[this.currentSystem];
    this.setSystem(newSystem);
    return newSystem;
  }

  public getCoordinateFormat(): CoordinateFormat {
    return this.coordinateFormat;
  }

  public setCoordinateFormat(format: CoordinateFormat): void {
    this.coordinateFormat = format;
    try {
      localStorage.setItem(UnitManager.COORD_KEY, format);
    } catch {}
    for (const cb of this.listeners) {
      try {
        cb(this.currentSystem);
      } catch (e) {
        console.error('[UnitManager] Listener error:', e);
      }
    }
  }

  public onSystemChange(callback: (system: UnitSystem) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  public getSystemLabel(): string {
    switch (this.currentSystem) {
      case 'metric':
        return 'METRIC';
      case 'imperial':
        return 'IMPERIAL';
      case 'maritime':
      default:
        return 'MARITIME';
    }
  }

  /**
   * Format speed based on active unit system.
   * Input: knots
   */
  public formatSpeed(knots: number): FormattedSpeed {
    switch (this.currentSystem) {
      case 'metric': {
        const kmh = Math.round(knots * AviationMath.KNOTS_TO_KMH);
        const kts = Math.round(knots);
        return {
          value: kmh,
          unit: 'KM/H',
          secondaryValue: kts,
          secondaryUnit: 'KTS',
          displayStr: `${kmh} KM/H`
        };
      }
      case 'imperial': {
        const mph = Math.round(knots * AviationMath.KNOTS_TO_MPH);
        const kmh = Math.round(knots * AviationMath.KNOTS_TO_KMH);
        return {
          value: mph,
          unit: 'MPH',
          secondaryValue: kmh,
          secondaryUnit: 'KM/H',
          displayStr: `${mph} MPH`
        };
      }
      case 'maritime':
      default: {
        const kts = Math.round(knots);
        const kmh = Math.round(knots * AviationMath.KNOTS_TO_KMH);
        return {
          value: kts,
          unit: 'KTS',
          secondaryValue: kmh,
          secondaryUnit: 'KM/H',
          displayStr: `${kts} KTS`
        };
      }
    }
  }

  /**
   * Format distance based on active unit system.
   * Input: nautical miles (NM)
   */
  public formatDistance(distNM: number): FormattedDistance {
    switch (this.currentSystem) {
      case 'metric': {
        const km = Math.round(distNM * AviationMath.KNOTS_TO_KMH);
        return {
          value: km,
          unit: 'KM',
          displayStr: `${km.toLocaleString()} KM`
        };
      }
      case 'imperial': {
        const mi = Math.round(distNM * AviationMath.KNOTS_TO_MPH);
        return {
          value: mi,
          unit: 'MI',
          displayStr: `${mi.toLocaleString()} MI`
        };
      }
      case 'maritime':
      default: {
        const nm = Math.round(distNM);
        return {
          value: nm,
          unit: 'NM',
          displayStr: `${nm.toLocaleString()} NM`
        };
      }
    }
  }

  /**
   * Format altitude based on active unit system.
   * Input: feet (FT)
   */
  public formatAltitude(altFt: number): FormattedAltitude {
    const flNum = Math.round(altFt / 100);
    const flStr = `FL${flNum}`;
    switch (this.currentSystem) {
      case 'metric': {
        const meters = Math.round(altFt / AviationMath.FEET_PER_METER);
        return {
          value: meters,
          unit: 'M',
          displayStr: `${meters.toLocaleString()} M`,
          flightLevelStr: flStr
        };
      }
      case 'imperial':
      case 'maritime':
      default: {
        const ft = Math.round(altFt);
        return {
          value: ft,
          unit: 'FT',
          displayStr: `${ft.toLocaleString()} FT`,
          flightLevelStr: flStr
        };
      }
    }
  }

  /**
   * Format outside air temperature based on active unit system.
   */
  public formatTemperature(tempC: number, tempF: number): FormattedTemperature {
    if (this.currentSystem === 'imperial') {
      return {
        primaryValue: Math.round(tempF),
        primaryUnit: '°F',
        secondaryValue: Math.round(tempC),
        secondaryUnit: '°C',
        displayStr: `${Math.round(tempF)}°F`
      };
    }
    return {
      primaryValue: Math.round(tempC),
      primaryUnit: '°C',
      secondaryValue: Math.round(tempF),
      secondaryUnit: '°F',
      displayStr: `${Math.round(tempC)}°C`
    };
  }
}
