/**
 * Texture Tier Manager
 * Selects the highest-resolution Earth texture set the current GPU/device can
 * comfortably handle. The "mobile" tier carries the same filenames as the full
 * tier, so consumers only need to swap the base URL.
 */

export type TextureTier = 'full' | 'mobile';

export class TextureTierManager {
  public static readonly STORAGE_KEY = 'flightmap_texture_tier';

  /**
   * Resolve the active tier. An explicit localStorage override always wins,
   * which makes manual QA trivial (`localStorage.setItem('flightmap_texture_tier','mobile')`).
   */
  public static resolve(maxTextureSize: number): TextureTier {
    const override = TextureTierManager.getOverride();
    if (override) return override;

    // Critical guard: an 8K texture on a GPU capped below 8192 silently fails.
    if (maxTextureSize < 8192) return 'mobile';

    const coarsePointer =
      typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
    const minDimension = Math.min(window.screen?.width || 0, window.screen?.height || 0);
    const smallScreen = minDimension > 0 && minDimension <= 900;

    const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
    const lowMemory = typeof deviceMemory === 'number' && deviceMemory <= 4;

    return coarsePointer || smallScreen || lowMemory ? 'mobile' : 'full';
  }

  public static getOverride(): TextureTier | null {
    try {
      const value = localStorage.getItem(TextureTierManager.STORAGE_KEY);
      if (value === 'full' || value === 'mobile') return value;
    } catch {
      // localStorage unavailable (private mode) - fall through to auto-detection.
    }
    return null;
  }

  public static setOverride(tier: TextureTier | null): void {
    try {
      if (tier) localStorage.setItem(TextureTierManager.STORAGE_KEY, tier);
      else localStorage.removeItem(TextureTierManager.STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  public static basePath(tier: TextureTier): string {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    return tier === 'mobile' ? `${base}/assets/textures/mobile` : `${base}/assets/textures`;
  }
}
