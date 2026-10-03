import * as THREE from 'three';
import { GlobeScene } from './GlobeScene';
import { AviationMath } from '../telemetry/AviationMath';
import { FlightPlanData } from '../telemetry/FlightPlan';

export type CameraMode = 'cockpit' | 'wing' | 'chase' | 'orbit' | 'tactical';

export class CameraManager {
  public camera: THREE.PerspectiveCamera;
  private mode: CameraMode = 'orbit';
  private globeScene: GlobeScene;

  // Aircraft-follow orbit control state
  private orbitDistance: number = 205; // distance from globe centre (view altitude)
  private orbitTheta: number = 0; // azimuth around the aircraft's local vertical
  private orbitTilt: number = 0.42; // tilt from straight-down (0) toward the horizon
  private smoothedForward: THREE.Vector3 = new THREE.Vector3(0, 0, 1); // damped flight direction
  private isDragging: boolean = false;
  private prevMouseX: number = 0;
  private prevMouseY: number = 0;

  constructor(globeScene: GlobeScene, canvas: HTMLCanvasElement) {
    this.globeScene = globeScene;
    this.camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      2000
    );

    this.initEventListeners(canvas);
  }

  public getMode(): CameraMode {
    return this.mode;
  }

  public setMode(mode: CameraMode): void {
    this.mode = mode;

    if (mode === 'orbit') {
      this.orbitDistance = Math.min(260, Math.max(160, this.orbitDistance));
    } else if (mode === 'tactical') {
      this.orbitDistance = 140;
    }
  }

  /**
   * Settles the follow-orbit camera over a new flight plan: picks a view
   * altitude that suits the route length, applies a pleasant default tilt,
   * and leans the view "behind" the initial route bearing so the camera
   * naturally faces along the flight path.
   */
  public frameRouteOverview(plan: FlightPlanData): void {
    this.mode = 'orbit';

    // Dynamic camera distance based on flight route length (NM)
    // Short haul (500nm) -> ~175, Medium haul (1500nm) -> ~195, Long haul (5000nm+) -> ~240
    const distNM = plan.totalDistanceNM || 1500;
    let targetDistance = Math.min(255, Math.max(175, 165 + (distNM / 6000) * 75));
    if (this.camera.aspect < 1.0) {
      targetDistance *= Math.min(1.22, 1.08 / Math.max(0.55, this.camera.aspect));
    }
    this.orbitDistance = targetDistance;

    // Standard forward-looking follow angle
    this.orbitTilt = 0.42;

    // Orient the view behind the initial takeoff bearing (camera trails the jet)
    try {
      const waypoints = plan.waypoints || [];
      const probe = waypoints.length > 0
        ? waypoints[Math.min(waypoints.length - 1, Math.max(1, Math.floor(waypoints.length * 0.08)))]
        : plan.destination;
      const bearing = AviationMath.calculateBearing(
        { lat: plan.origin.lat, lon: plan.origin.lon },
        { lat: probe.lat, lon: probe.lon }
      );
      this.orbitTheta = -(bearing * Math.PI) / 180;
    } catch {
      this.orbitTheta = 0;
    }
  }

  private initEventListeners(canvas: HTMLCanvasElement): void {
    canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;

      const deltaX = e.clientX - this.prevMouseX;
      const deltaY = e.clientY - this.prevMouseY;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;

      if (this.mode === 'orbit' || this.mode === 'tactical') {
        this.orbitTheta -= deltaX * 0.005;
        this.orbitTilt = Math.max(0.02, Math.min(1.35, this.orbitTilt + deltaY * 0.005));
      }
    });

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomSpeed = 0.05;
      if (this.mode === 'orbit' || this.mode === 'tactical') {
        this.orbitDistance = Math.max(115, Math.min(450, this.orbitDistance + e.deltaY * zoomSpeed));
      }
    }, { passive: false });

    // Touch controls for mobile/tablets with native browser zoom prevention
    let initialTouchDist = 0;
    canvas.addEventListener('touchstart', (e) => {
      if (e.cancelable) e.preventDefault();
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.prevMouseX = e.touches[0].clientX;
        this.prevMouseY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        initialTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      if (e.cancelable) e.preventDefault();
      if (e.touches.length === 1 && this.isDragging) {
        const deltaX = e.touches[0].clientX - this.prevMouseX;
        const deltaY = e.touches[0].clientY - this.prevMouseY;
        this.prevMouseX = e.touches[0].clientX;
        this.prevMouseY = e.touches[0].clientY;

        if (this.mode === 'orbit' || this.mode === 'tactical') {
          this.orbitTheta -= deltaX * 0.006;
          this.orbitTilt = Math.max(0.02, Math.min(1.35, this.orbitTilt + deltaY * 0.006));
        }
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = initialTouchDist - dist;
        initialTouchDist = dist;
        if (this.mode === 'orbit' || this.mode === 'tactical') {
          this.orbitDistance = Math.max(115, Math.min(450, this.orbitDistance + diff * 0.25));
        }
      }
    }, { passive: false });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  public update(): void {
    const aircraft = this.globeScene.aircraft.group;
    const planePos = aircraft.position.clone();

    // Local forward, up, and right vectors of aircraft
    const localForward = new THREE.Vector3(0, 0, 1).applyQuaternion(aircraft.quaternion).normalize();
    const localUp = new THREE.Vector3(0, 1, 0).applyQuaternion(aircraft.quaternion).normalize();
    const localRight = new THREE.Vector3(1, 0, 0).applyQuaternion(aircraft.quaternion).normalize();

    let targetPos = new THREE.Vector3();
    let lookTarget = new THREE.Vector3();

    switch (this.mode) {
      case 'cockpit': {
        // Cockpit view: looking forward through windshield
        targetPos.copy(planePos)
          .addScaledVector(localForward, 3.2)
          .addScaledVector(localUp, 0.45);
        lookTarget.copy(targetPos)
          .addScaledVector(localForward, 50.0);
        this.camera.position.copy(targetPos);
        this.camera.up.copy(localUp);
        this.camera.lookAt(lookTarget);
        return;
      }

      case 'wing': {
        // Wing cam: seated just behind left wing, looking across left engine at Earth
        targetPos.copy(planePos)
          .addScaledVector(localRight, -4.5)
          .addScaledVector(localForward, -1.2)
          .addScaledVector(localUp, 0.8);
        lookTarget.copy(planePos)
          .addScaledVector(localForward, 8.0)
          .addScaledVector(localRight, -1.5);
        this.camera.position.copy(targetPos);
        this.camera.up.copy(localUp);
        this.camera.lookAt(lookTarget);
        return;
      }

      case 'chase': {
        // Chase cam: trailing behind and slightly elevated
        targetPos.copy(planePos)
          .addScaledVector(localForward, -14.0)
          .addScaledVector(localUp, 4.2);
        lookTarget.copy(planePos)
          .addScaledVector(localForward, 12.0);

        // Smooth camera follow
        this.camera.position.lerp(targetPos, 0.1);
        this.camera.up.lerp(localUp, 0.1);
        this.camera.lookAt(lookTarget);
        return;
      }

      case 'tactical': {
        // Top-down 2D tactical moving map
        const normal = planePos.clone().normalize();
        targetPos.copy(planePos).addScaledVector(normal, 35.0);
        lookTarget.copy(planePos);

        this.camera.position.lerp(targetPos, 0.1);
        this.camera.up.lerp(localForward, 0.1); // Track-up orientation
        this.camera.lookAt(lookTarget);
        return;
      }

      case 'orbit':
      default: {
        // Aircraft-following orbit: the camera rides with the jet so the globe
        // glides beneath it (classic moving-map feel). Dragging looks around
        // the aircraft, wheel/pinch changes altitude, and the camera keeps the
        // jet centred with a subtle look-ahead along the flight path.
        const normal = planePos.clone().normalize();

        // Local geographic basis at the aircraft (north/east tangent vectors)
        const latLon = AviationMath.vector3ToLatLon(
          planePos.x,
          planePos.y,
          planePos.z,
          Math.max(0.001, planePos.length())
        );
        const northRef = AviationMath.latLonToVector3(Math.min(89.9, latLon.lat + 0.35), latLon.lon, 1);
        const northVec = new THREE.Vector3(northRef.x, northRef.y, northRef.z).sub(normal).normalize();
        const eastVec = new THREE.Vector3().crossVectors(northVec, normal).normalize();
        northVec.crossVectors(normal, eastVec).normalize();

        // Orbit offset direction: tilt away from straight-down toward the
        // horizon, then rotate the azimuth around the local vertical.
        const camDir = normal
          .clone()
          .applyAxisAngle(eastVec, this.orbitTilt)
          .applyAxisAngle(normal, this.orbitTheta);

        // Keep the same apparent altitude as the classic orbit (distance from globe centre)
        const distFromPlane = Math.max(4, this.orbitDistance - planePos.length());
        targetPos.copy(planePos).addScaledVector(camDir, distFromPlane);

        // Look slightly ahead along the flight direction for a cinematic lead
        const forwardVec = new THREE.Vector3(0, 0, 1).applyQuaternion(aircraft.quaternion).normalize();
        this.smoothedForward.lerp(forwardVec, 0.06).normalize();
        const lookLead = Math.min(12, distFromPlane * 0.09);
        lookTarget.copy(planePos).addScaledVector(this.smoothedForward, lookLead);

        this.camera.position.lerp(targetPos, 0.1);

        // Blend the up vector: north-up over the aircraft when near-overhead,
        // easing to radial (sky-up) as the camera tilts toward the horizon.
        const upBlend = Math.min(1, this.orbitTilt / 1.2);
        const upVec = northVec.clone().lerp(normal, upBlend).normalize();
        this.camera.up.lerp(upVec, 0.15).normalize();
        this.camera.lookAt(lookTarget);
        return;
      }
    }
  }

  public onResize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
