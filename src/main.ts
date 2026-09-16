import './index.css';
import './hud-mobile.css';
import { GlobeScene } from './engine/GlobeScene';
import { CameraManager } from './engine/CameraManager';
import { TelemetryManager } from './telemetry/TelemetryManager';
import { FlightPlanManager } from './telemetry/FlightPlan';
import { AirportDatabase } from './telemetry/AirportDatabase';
import { FlightHud } from './ui/FlightHud';
import { getMode } from './mode';

// Prevent mobile browser page zoom/scroll shifts to ensure HUD instruments stay locked in place
window.addEventListener('scroll', () => {
  if (window.scrollX !== 0 || window.scrollY !== 0) {
    window.scrollTo(0, 0);
  }
});

if (window.visualViewport) {
  const lockViewportScroll = () => {
    if (window.scrollX !== 0 || window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  };
  window.visualViewport.addEventListener('resize', lockViewportScroll);
  window.visualViewport.addEventListener('scroll', lockViewportScroll);
}

document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());

/**
 * Keep the display awake while the map is on screen (essential on a flight
 * where the phone is the moving-map display). Re-acquires on tab refocus.
 */
function enableScreenWakeLock(): void {
  let sentinel: { release: () => Promise<void> } | null = null;

  const acquire = async () => {
    try {
      if ('wakeLock' in navigator) {
        sentinel = await (navigator as unknown as {
          wakeLock: { request: (type: string) => Promise<{ release: () => Promise<void> }> };
        }).wakeLock.request('screen');
      }
    } catch {
      // Wake Lock unsupported or denied - non-fatal.
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') acquire();
    else if (sentinel) {
      sentinel.release().catch(() => {});
      sentinel = null;
    }
  });

  acquire();
}

async function bootstrap() {
  console.log('[FlightMap] Initializing In-Flight Moving Map System...');

  const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
  const hudContainer = document.getElementById('hud-overlay') as HTMLElement;

  if (!canvas || !hudContainer) {
    throw new Error('Required DOM containers not found');
  }

  // 1. Initialize 3D WebGL Globe & Camera Engine immediately
  const globeScene = new GlobeScene(canvas);
  const cameraManager = new CameraManager(globeScene, canvas);

  // 2. Connect Telemetry Engine to 3D Aircraft
  const telemetry = TelemetryManager.getInstance();
  telemetry.subscribe((state) => {
    globeScene.updateAircraftTelemetry(state);
  });

  // 3. Initialize In-Flight Entertainment (IFE) HUD UI immediately
  new FlightHud(hudContainer, cameraManager, globeScene);

  // Standalone map mode: use this device's own GNSS and keep the screen awake.
  const appMode = getMode();
  if (appMode === 'map') {
    if ('geolocation' in navigator) {
      telemetry.setSource('browser_gps');
    }
    enableScreenWakeLock();
  }

  // 4. Handle Window and Canvas Container Resizing immediately
  const handleResize = () => {
    const container = document.getElementById('canvas-container') || canvas.parentElement || document.body;
    const bottomConsole = document.querySelector('.hud-bottom-console') as HTMLElement;

    // Dynamically update CSS custom property in portrait mobile so WebGL and CSS stay in pixel-perfect sync
    if (bottomConsole && window.innerWidth <= 768 && window.matchMedia('(orientation: portrait)').matches) {
      const bHeight = bottomConsole.getBoundingClientRect().height;
      if (bHeight > 0) {
        document.documentElement.style.setProperty('--mobile-bottom-console-height', `${Math.round(bHeight)}px`);
      }
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    globeScene.onResize(width, height);
    cameraManager.onResize(width, height);
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', () => {
    setTimeout(handleResize, 120);
  });

  const canvasContainer = document.getElementById('canvas-container');
  if (canvasContainer && typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => {
      handleResize();
    });
    ro.observe(canvasContainer);
  }

  handleResize();

  // 5. Start High-Performance Render Loop immediately (Never block on network)
  let lastTime = performance.now();
  const animate = () => {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // Update active camera perspective (cockpit, wing, chase, orbit, tactical)
    cameraManager.update();

    // Update 3D scene elements (aircraft lights, clouds, adaptive zoom scale)
    globeScene.update(dt, cameraManager.camera);

    // Render WebGL frame
    globeScene.render(cameraManager.camera);

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
  console.log('[FlightMap] WebGL render loop and HUD initialized.');

  // 6. Asynchronously Load Airport Database and Initial Flight Plan
  try {
    const airportDb = AirportDatabase.getInstance();
    await airportDb.load();

    const flightPlanManager = FlightPlanManager.getInstance();
    flightPlanManager.onPlanChanged((plan) => {
      globeScene.updateFlightPlanVisuals(plan);
    });

    const initialPlan = await flightPlanManager.createPlan(
      'LHR',
      'OTP',
      'BA-886',
      'British Airways',
      'Boeing 787-9 Dreamliner',
      38000,
      485
    );

    globeScene.updateFlightPlanVisuals(initialPlan);
    cameraManager.frameRouteOverview(initialPlan);
    console.log('[FlightMap] Default flight plan loaded successfully.');
  } catch (err) {
    console.warn('[FlightMap] Flight plan init warning:', err);
  }
}

bootstrap().catch((err) => {
  console.error('[FlightMap] Fatal bootstrap error:', err);
});
