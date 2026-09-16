import * as THREE from 'three';
import { AviationMath } from './AviationMath';

export type SolarPhase = 'day' | 'civil_twilight' | 'nautical_twilight' | 'astronomical_twilight' | 'night';

export interface SubsolarPoint {
  lat: number; // degrees [-23.5, 23.5]
  lon: number; // degrees [-180, 180]
  declinationDeg: number;
  equationOfTimeMinutes: number;
}

export interface LocalSolarInfo {
  elevationDeg: number; // angle above (+) or below (-) horizon
  azimuthDeg: number;   // heading to sun from true north (0-360)
  phase: SolarPhase;
  phaseLabel: string;
  phaseIcon: string;
}

/**
 * Astronomical Solar Engine
 * Computes high-precision subsolar coordinates, solar vectors, and local solar elevation
 * based on standard orbital mechanics (accurate to < 0.03 degrees / ~3 km on Earth surface).
 */
export class SolarCalculator {
  /**
   * Calculates the Subsolar Point (geographical point where the Sun is zenith)
   * for a given UTC Date.
   */
  public static getSubsolarPoint(date: Date): SubsolarPoint {
    const time = date.getTime();
    const julianDate = time / 86400000 + 2440587.5;
    const d = julianDate - 2451545.0; // Days since J2000.0 epoch

    // Mean anomaly of the Sun (degrees)
    const g = ((357.529 + 0.98560028 * d) % 360 + 360) % 360;
    const gRad = (g * Math.PI) / 180;

    // Mean longitude of the Sun (degrees)
    const q = ((280.459 + 0.98564736 * d) % 360 + 360) % 360;

    // Geocentric apparent ecliptic longitude (degrees)
    const L = ((q + 1.915 * Math.sin(gRad) + 0.02 * Math.sin(2 * gRad)) % 360 + 360) % 360;
    const LRad = (L * Math.PI) / 180;

    // Mean obliquity of the ecliptic (degrees)
    const e = 23.439 - 0.00000036 * d;
    const eRad = (e * Math.PI) / 180;

    // Solar Declination (latitude of subsolar point: -23.44° to +23.44°)
    const sinDec = Math.sin(eRad) * Math.sin(LRad);
    const declination = Math.asin(sinDec) * (180 / Math.PI);

    // Right Ascension (degrees)
    const rightAscension =
      ((Math.atan2(Math.cos(eRad) * Math.sin(LRad), Math.cos(LRad)) * (180 / Math.PI)) % 360 + 360) % 360;

    // Greenwich Mean Sidereal Time (degrees)
    const gmst = ((280.46061837 + 360.98564736629 * d) % 360 + 360) % 360;

    // Greenwich Hour Angle / Subsolar Longitude (-180° to +180°)
    let lon = (rightAscension - gmst) % 360;
    if (lon > 180) lon -= 360;
    if (lon < -180) lon += 360;

    // Equation of Time in minutes
    const eotMinutes = (q - rightAscension) * 4;

    return {
      lat: declination,
      lon,
      declinationDeg: declination,
      equationOfTimeMinutes: eotMinutes
    };
  }

  /**
   * Returns the normalized 3D unit vector pointing towards the Sun in the 3D globe scene,
   * matched to Three.js coordinate system through AviationMath.latLonToVector3.
   */
  public static getSunVector(date: Date, radius: number = 350): THREE.Vector3 {
    const sub = this.getSubsolarPoint(date);
    const p = AviationMath.latLonToVector3(sub.lat, sub.lon, radius);
    return new THREE.Vector3(p.x, p.y, p.z);
  }

  /**
   * Calculates local solar elevation and azimuth at a specific lat/lon for a given UTC Date.
   */
  public static getLocalSolarInfo(lat: number, lon: number, date: Date): LocalSolarInfo {
    const sub = this.getSubsolarPoint(date);

    const latRad = (lat * Math.PI) / 180;
    const decRad = (sub.lat * Math.PI) / 180;
    const hourAngleDeg = lon - sub.lon;
    const haRad = (hourAngleDeg * Math.PI) / 180;

    // Solar elevation angle above the horizon (degrees)
    const sinElevation =
      Math.sin(latRad) * Math.sin(decRad) + Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
    const elevation = Math.asin(Math.max(-1, Math.min(1, sinElevation))) * (180 / Math.PI);

    // Solar azimuth angle (0° = North, 90° = East, 180° = South, 270° = West)
    const cosElevation = Math.cos(elevation * (Math.PI / 180));
    let azimuth = 180;
    if (Math.abs(cosElevation) > 0.001) {
      const cosAz =
        (Math.sin(decRad) - Math.sin(latRad) * sinElevation) / (Math.cos(latRad) * cosElevation);
      const clampedCosAz = Math.max(-1, Math.min(1, cosAz));
      azimuth = Math.acos(clampedCosAz) * (180 / Math.PI);
      if (Math.sin(haRad) > 0) {
        azimuth = 360 - azimuth;
      }
    }

    // Determine astronomical phase
    let phase: SolarPhase;
    let phaseLabel: string;
    let phaseIcon: string;

    if (elevation > 0) {
      phase = 'day';
      phaseLabel = 'DAYLIGHT';
      phaseIcon = '☀️';
    } else if (elevation > -6) {
      phase = 'civil_twilight';
      phaseLabel = 'CIVIL TWILIGHT';
      phaseIcon = '🌅';
    } else if (elevation > -12) {
      phase = 'nautical_twilight';
      phaseLabel = 'NAUTICAL TWILIGHT';
      phaseIcon = '🌆';
    } else if (elevation > -18) {
      phase = 'astronomical_twilight';
      phaseLabel = 'DUSK / DAWN';
      phaseIcon = '🌌';
    } else {
      phase = 'night';
      phaseLabel = 'NIGHT';
      phaseIcon = '🌙';
    }

    return {
      elevationDeg: Math.round(elevation * 10) / 10,
      azimuthDeg: Math.round(azimuth),
      phase,
      phaseLabel,
      phaseIcon
    };
  }
}
