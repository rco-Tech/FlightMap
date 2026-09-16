/**
 * Aviation Navigation & Atmospheric Mathematics Engine
 * Handles Great-Circle Geodesics, International Standard Atmosphere (ISA),
 * Speed/Mach conversions, and 3D spherical coordinates.
 */

export interface LatLon {
  lat: number;
  lon: number;
  altitude?: number; // in feet
}

export interface CartesianCoord {
  x: number;
  y: number;
  z: number;
}

export interface ISAAtmosphere {
  temperatureC: number;
  temperatureF: number;
  speedOfSoundKnots: number;
  pressureHpa: number;
  mach: number;
}

export class AviationMath {
  public static readonly EARTH_RADIUS_NM = 3440.065;
  public static readonly EARTH_RADIUS_KM = 6371.0;
  public static readonly FEET_PER_METER = 3.28084;
  public static readonly KNOTS_TO_KMH = 1.852;
  public static readonly KNOTS_TO_MPH = 1.15078;

  /**
   * Convert Latitude/Longitude to 3D Cartesian coordinates on a sphere of radius R.
   * Three.js convention: Y is up, X is East (90 deg lon), -Z is Prime Meridian (0 deg lon).
   */
  public static latLonToVector3(lat: number, lon: number, radius: number): CartesianCoord {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    return {
      x: -(radius * Math.sin(phi) * Math.cos(theta)),
      z: radius * Math.sin(phi) * Math.sin(theta),
      y: radius * Math.cos(phi)
    };
  }

  /**
   * Convert 3D Cartesian vector back to Latitude/Longitude.
   */
  public static vector3ToLatLon(x: number, y: number, z: number, radius: number): LatLon {
    const lat = 90 - (Math.acos(y / radius) * 180) / Math.PI;
    const lon = ((Math.atan2(z, -x) * 180) / Math.PI) - 180;
    return {
      lat: Math.max(-90, Math.min(90, lat)),
      lon: ((lon + 540) % 360) - 180
    };
  }

  /**
   * Calculate Great-Circle distance between two points in Nautical Miles.
   */
  public static calculateDistanceNM(from: LatLon, to: LatLon): number {
    const lat1 = (from.lat * Math.PI) / 180;
    const lon1 = (from.lon * Math.PI) / 180;
    const lat2 = (to.lat * Math.PI) / 180;
    const lon2 = (to.lon * Math.PI) / 180;

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return this.EARTH_RADIUS_NM * c;
  }

  /**
   * Calculate initial true bearing (heading) from origin to destination in degrees (0-360).
   */
  public static calculateBearing(from: LatLon, to: LatLon): number {
    const lat1 = (from.lat * Math.PI) / 180;
    const lon1 = (from.lon * Math.PI) / 180;
    const lat2 = (to.lat * Math.PI) / 180;
    const lon2 = (to.lon * Math.PI) / 180;

    const dLon = lon2 - lon1;

    const y = Math.sin(dLon) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let brng = (Math.atan2(y, x) * 180) / Math.PI;
    return (brng + 360) % 360;
  }

  /**
   * Intermediate point along great circle arc at fraction f (0.0 to 1.0).
   */
  public static intermediatePoint(from: LatLon, to: LatLon, f: number): LatLon {
    const lat1 = (from.lat * Math.PI) / 180;
    const lon1 = (from.lon * Math.PI) / 180;
    const lat2 = (to.lat * Math.PI) / 180;
    const lon2 = (to.lon * Math.PI) / 180;

    const d = 2 * Math.asin(
      Math.sqrt(
        Math.pow(Math.sin((lat1 - lat2) / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon1 - lon2) / 2), 2)
      )
    );

    if (d === 0) return { lat: from.lat, lon: from.lon };

    const a = Math.sin((1 - f) * d) / Math.sin(d);
    const b = Math.sin(f * d) / Math.sin(d);

    const x = a * Math.cos(lat1) * Math.cos(lon1) + b * Math.cos(lat2) * Math.cos(lon2);
    const y = a * Math.cos(lat1) * Math.sin(lon1) + b * Math.cos(lat2) * Math.sin(lon2);
    const z = a * Math.sin(lat1) + b * Math.sin(lat2);

    const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const lon = Math.atan2(y, x);

    return {
      lat: (lat * 180) / Math.PI,
      lon: (lon * 180) / Math.PI
    };
  }

  /**
   * Generate an array of points along a Great Circle route with simulated altitude profile.
   */
  public static generateFlightArcWaypoints(
    from: LatLon,
    to: LatLon,
    cruiseAltitudeFt: number = 38000,
    steps: number = 100
  ): LatLon[] {
    const waypoints: LatLon[] = [];
    const fromAlt = from.altitude || 0;
    const toAlt = to.altitude || 0;

    for (let i = 0; i <= steps; i++) {
      const f = i / steps;
      const pt = this.intermediatePoint(from, to, f);

      // Parabolic / trapezoidal altitude profile (climb, cruise, descent)
      let alt: number;
      if (f < 0.15) {
        // Climb phase (0% - 15%)
        const t = f / 0.15;
        alt = fromAlt + (cruiseAltitudeFt - fromAlt) * Math.sin((t * Math.PI) / 2);
      } else if (f > 0.85) {
        // Descent phase (85% - 100%)
        const t = (1 - f) / 0.15;
        alt = toAlt + (cruiseAltitudeFt - toAlt) * Math.sin((t * Math.PI) / 2);
      } else {
        // Cruise phase (15% - 85%)
        alt = cruiseAltitudeFt;
      }

      waypoints.push({
        lat: pt.lat,
        lon: pt.lon,
        altitude: alt
      });
    }

    return waypoints;
  }

  /**
   * Calculate International Standard Atmosphere (ISA) parameters at altitude.
   * Gives realistic outside air temperature, speed of sound, and Mach number.
   */
  public static calculateAtmosphere(altitudeFt: number, trueAirspeedKnots: number): ISAAtmosphere {
    const alt = Math.max(0, altitudeFt);
    let tempC: number;

    if (alt <= 36089) {
      // Troposphere: standard lapse rate -1.98°C / 1000 ft
      tempC = 15.0 - 0.0019812 * alt;
    } else if (alt <= 65617) {
      // Lower Stratosphere: isothermal at -56.5°C
      tempC = -56.5;
    } else {
      // Upper Stratosphere
      tempC = -56.5 + 0.0003048 * (alt - 65617);
    }

    const tempK = tempC + 273.15;
    const tempF = (tempC * 9) / 5 + 32;

    // Speed of sound in air (knots): a = 38.967 * sqrt(T_Kelvin)
    const speedOfSound = 38.967 * Math.sqrt(tempK);
    const mach = speedOfSound > 0 ? trueAirspeedKnots / speedOfSound : 0;

    // Barometric pressure approximation (hPa / mbar)
    const pressureHpa = 1013.25 * Math.pow(1 - 0.0000068756 * Math.min(36089, alt), 5.2559);

    return {
      temperatureC: Math.round(tempC),
      temperatureF: Math.round(tempF),
      speedOfSoundKnots: Math.round(speedOfSound),
      pressureHpa: Math.round(pressureHpa),
      mach: parseFloat(mach.toFixed(2))
    };
  }

  /**
   * Format degrees/minutes/seconds for coordinates HUD display.
   */
  public static formatDMS(deg: number, isLat: boolean): string {
    const absolute = Math.abs(deg);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    const direction = isLat ? (deg >= 0 ? 'N' : 'S') : deg >= 0 ? 'E' : 'W';
    const degPadded = isLat ? String(degrees).padStart(2, '0') : String(degrees).padStart(3, '0');
    return `${degPadded}°${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"${direction}`;
  }

  /**
   * Format seconds remaining into HH:MM or MM:SS string.
   */
  public static formatDuration(totalSeconds: number): string {
    if (isNaN(totalSeconds) || totalSeconds < 0) return '--:--';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;
  }
}
