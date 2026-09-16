export interface ThemePalette {
  id: string;
  name: string;
  accent: string;
  accentDim: string;
  hex3D: number;
  glow3D: number;
}

export class ThemeManager {
  private static instance: ThemeManager;
  private currentThemeId: string = 'cyan';
  private listeners: ((theme: ThemePalette) => void)[] = [];

  public static readonly THEMES: Record<string, ThemePalette> = {
    cyan: {
      id: 'cyan',
      name: 'Cyberpunk Cyan HUD',
      accent: '#00e5ff',
      accentDim: '#0284c7',
      hex3D: 0x00e5ff,
      glow3D: 0x00a8ff
    },
    stealth: {
      id: 'stealth',
      name: 'Stealth Monochrome',
      accent: '#ffffff',
      accentDim: '#94a3b8',
      hex3D: 0xffffff,
      glow3D: 0xc0d0e0
    },
    amber: {
      id: 'amber',
      name: 'Amber CRT Phosphor',
      accent: '#ffb000',
      accentDim: '#d48800',
      hex3D: 0xffb000,
      glow3D: 0xff9900
    },
    emerald: {
      id: 'emerald',
      name: 'Emerald Matrix Green',
      accent: '#00ff66',
      accentDim: '#00cc44',
      hex3D: 0x00ff66,
      glow3D: 0x00dd55
    },
    plasma: {
      id: 'plasma',
      name: 'Ultraviolet Plasma',
      accent: '#bd00ff',
      accentDim: '#a855f7',
      hex3D: 0xbd00ff,
      glow3D: 0x9d00ff
    },
    crimson: {
      id: 'crimson',
      name: 'Solar Crimson Red',
      accent: '#ff2a55',
      accentDim: '#dc2626',
      hex3D: 0xff2a55,
      glow3D: 0xe11d48
    }
  };

  private constructor() {
    const saved = localStorage.getItem('flightmap_theme');
    if (saved && ThemeManager.THEMES[saved]) {
      this.currentThemeId = saved;
    }
    this.applyTheme(this.currentThemeId);
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  public getCurrentTheme(): ThemePalette {
    return ThemeManager.THEMES[this.currentThemeId] || ThemeManager.THEMES.cyan;
  }

  public setTheme(themeId: string): void {
    if (!ThemeManager.THEMES[themeId]) return;
    this.currentThemeId = themeId;
    localStorage.setItem('flightmap_theme', themeId);
    this.applyTheme(themeId);
  }

  private applyTheme(themeId: string): void {
    const theme = ThemeManager.THEMES[themeId] || ThemeManager.THEMES.cyan;
    const root = document.documentElement;

    root.style.setProperty('--accent-cyan', theme.accent);
    root.style.setProperty('--accent-cyan-dim', theme.accentDim);
    root.style.setProperty('--panel-border', `${theme.accent}2e`);
    root.style.setProperty('--panel-glow', `${theme.accent}14`);

    for (const listener of this.listeners) {
      listener(theme);
    }
  }

  public onThemeChanged(callback: (theme: ThemePalette) => void): () => void {
    this.listeners.push(callback);
    callback(this.getCurrentTheme());
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }
}
