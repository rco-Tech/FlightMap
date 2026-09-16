/**
 * App mode selection.
 *  - "map"   : standalone — the phone renders the full 3D moving map using its own GNSS.
 *  - "relay" : the phone streams its GNSS/gyro to a laptop running the map.
 */

export type AppMode = 'map' | 'relay';

export const MODE_STORAGE_KEY = 'flightmap_mode';

export function getMode(): AppMode | null {
  try {
    const value = localStorage.getItem(MODE_STORAGE_KEY);
    if (value === 'map' || value === 'relay') return value;
  } catch {
    // localStorage unavailable (private mode) - treat as unset.
  }
  return null;
}

export function setMode(mode: AppMode): void {
  try {
    localStorage.setItem(MODE_STORAGE_KEY, mode);
  } catch {
    // ignore
  }
}

/** True when running as an installed/standalone PWA window. */
export function isStandaloneDisplay(): boolean {
  try {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true
    );
  } catch {
    return false;
  }
}
