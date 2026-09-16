import * as THREE from 'three';
import { GlobeScene } from './GlobeScene';
import { AviationMath } from '../telemetry/AviationMath';
import { FlightPlanData } from '../telemetry/FlightPlan';

export type CameraMode = 'cockpit' | 'wing' | 'chase' | 'orbit' | 'tactical';

export class CameraManager {
  public camera: THREE.PerspectiveCamera;
  private mode: CameraMode = 'orbit';
  private globeScene: GlobeScene;

  // Orbit controls state
  private orbitDistance: number = 205;
  private orbitTheta: number = 0; // azimuthal angle
  private orbitPhi: number = Math.PI / 3; // polar angle
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
   * Smoothly frames the 3D globe view directly over the entire flight route.
   * Centers the camera between origin and destination along the Great Circle arc,
   * scales orbit distance to fit the full route on screen, and rotates the globe directly.
   */
  public frameRouteOverview(plan: FlightPlanData): void {
    this.mode = 'orbit';

    // Calculate midpoint along Great Circle arc
    const mid = AviationMath.intermediatePoint(
      { lat: plan.origin.lat, lon: plan.origin.lon },
      { lat: plan.destination.lat, lon: plan.destination.lon },
      0.5
    );

    // Dynamic camera distance based on flight route length (NM)
    // Short haul (500nm) -> ~175, Medium haul (1500nm) -> ~195, Long haul (5000nm+) -> ~240
    const distNM = plan.totalDistanceNM || 1500;
    let targetDistance = Math.min(255, Math.max(175, 165 + (distNM / 6000) * 75));
    if (this.camera.aspect < 1.0) {
      targetDistance *= Math.min(1.22, 1.08 / Math.max(0.55, this.camera.aspect));
    }
    this.orbitDistance = targetDistance;

    // Target polar angle (phi) and azimuthal angle (theta)
    const targetPhi = Math.max(0.1, Math.min(Math.PI - 0.1, (90 - mid.lat) * (Math.PI / 180)));

    const phi = (90 - mid.lat) * (Math.PI / 180);
    const theta = (mid.lon + 180) * (Math.PI / 180);
    const x = -(Math.sin(phi) * Math.cos(theta));
    const z = Math.sin(phi) * Math.sin(theta);
    const targetTheta = Math.atan2(x, z);

    // Compute shortest angular rotation delta around the globe
    let diffTheta = targetTheta - this.orbitTheta;
    while (diffTheta > Math.PI) diffTheta -= Math.PI * 2;
    while (diffTheta < -Math.PI) diffTheta += Math.PI * 2;

    this.orbitPhi = targetPhi;
    this.orbitTheta = this.orbitTheta + diffTheta;
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
        this.orbitPhi = Math.max(0.1, Math.min(Math.PI - 0.1, this.orbitPhi + deltaY * 0.005));
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
          this.orbitPhi = Math.max(0.1, Math.min(Math.PI - 0.1, this.orbitPhi + deltaY * 0.006));
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
        // Global interactive 3D globe orbit
        const x = this.orbitDistance * Math.sin(this.orbitPhi) * Math.sin(this.orbitTheta);
        const y = this.orbitDistance * Math.cos(this.orbitPhi);
        const z = this.orbitDistance * Math.sin(this.orbitPhi) * Math.cos(this.orbitTheta);

        targetPos.set(x, y, z);
        // Look towards center of globe or smoothly track aircraft
        lookTarget.set(0, 0, 0);

        this.camera.position.lerp(targetPos, 0.1);
        this.camera.up.set(0, 1, 0);
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
