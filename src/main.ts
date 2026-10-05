import './index.css';
import './hud-mobile.css';
import { GlobeScene } from './engine/GlobeScene';
import { CameraManager } from './engine/CameraManager';
import { AircraftModel } from './engine/AircraftModel';
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
  const flightHud = new FlightHud(hudContainer, cameraManager, globeScene);

  // Connect remote camera switching from mobile phone copilot
  telemetry.onCameraCommand((mode) => {
    flightHud.setCameraMode(mode as any);
  });

  // On localhost, unregister any stale service workers and clear cache storage
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const reg of registrations) {
          reg.unregister();
        }
      });
      if ('caches' in window) {
        caches.keys().then((keys) => {
          for (const key of keys) {
            caches.delete(key);
          }
        });
      }
    }
  } else if ('serviceWorker' in navigator) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }

  // Standalone map mode: only auto-enable browser GPS if NOT running on the local laptop relay server
  const isLocalServer = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const appMode = getMode();
  if (appMode === 'map' && !isLocalServer) {
    if ('geolocation' in navigator) {
      telemetry.setSource('browser_gps');
    }
    enableScreenWakeLock();
  }

  // 4. Handle Window and Canvas Container Resizing immediately
  const handleResize = () => {
    const container = document.getElementById('canvas-container') || canvas.parentElement || document.body;
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
      telemetry.broadcastFlightPlan(plan);
      // Auto-fit the 3D model to the aircraft type carried by the flight plan
      // (e.g. "Gulfstream G650ER" -> private jet, "Boeing 787-9" -> widebody).
      flightHud.setAircraftType(AircraftModel.resolveTypeFromAircraftName(plan.aircraftType));
    });

    // Connect remote flight plan changes from mobile copilot
    telemetry.onFlightPlanCommand(async (cmd) => {
      try {
        console.log('[Main] Received remote flight plan command from mobile:', cmd);
        const newPlan = await flightPlanManager.createPlan(
          cmd.from,
          cmd.to,
          cmd.flightNumber || `${cmd.from}-${cmd.to}`,
          cmd.airline || 'rTech Airways',
          cmd.aircraft || 'Airbus A321neo',
          cmd.cruiseAltitude || 37000,
          cmd.cruiseSpeed || 450
        );
        telemetry.setSimulationProgress(0.05);
        cameraManager.frameRouteOverview(newPlan);
      } catch (err) {
        console.warn('[Main] Failed to apply remote flight plan:', err);
      }
    });

    const initialPlan = await flightPlanManager.createPlan(
      'BHX',
      'OTP',
      'W4-3002',
      'Wizz Air',
      'Airbus A321neo',
      37000,
      450
    );

    globeScene.updateFlightPlanVisuals(initialPlan);
    cameraManager.frameRouteOverview(initialPlan);
    telemetry.broadcastFlightPlan(initialPlan);
    console.log('[FlightMap] Default flight plan loaded successfully.');
  } catch (err) {
    console.warn('[FlightMap] Flight plan init warning:', err);
  }
}

bootstrap().catch((err) => {
  console.error('[FlightMap] Fatal bootstrap error:', err);
});
