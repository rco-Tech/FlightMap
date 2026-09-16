import * as THREE from 'three';
import { AircraftModel, AircraftType } from './AircraftModel';
import { AtmosphereShader, EarthDayNightShader } from './Shaders';
import { AviationMath } from '../telemetry/AviationMath';
import { FlightPlanData } from '../telemetry/FlightPlan';
import { TelemetryState } from '../telemetry/TelemetryManager';
import { ThemeManager, ThemePalette } from '../ui/ThemeManager';
import { TextureTierManager, TextureTier } from './TextureTier';

export class GlobeScene {
  public scene: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  public earthMesh!: THREE.Mesh;
  public atmosphereMesh!: THREE.Mesh;
  public cloudsMesh!: THREE.Mesh;
  public aircraft: AircraftModel;
  public flightPathGroup: THREE.Group;
  public bordersGroup: THREE.Group;
  public countryLabelsGroup: THREE.Group;
  public sunLight!: THREE.DirectionalLight;
  public ambientLight!: THREE.AmbientLight;
  public textureTier!: TextureTier;
  public textureBase!: string;

  public static readonly GLOBE_RADIUS = 100;
  private currentFlightPlan: FlightPlanData | null = null;
  private currentTheme: ThemePalette = ThemeManager.getInstance().getCurrentTheme();

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x02040a);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // Pick the texture tier the device can handle (8K on desktop, 2K on phones).
    this.textureTier = TextureTierManager.resolve(this.renderer.capabilities.maxTextureSize);
    this.textureBase = TextureTierManager.basePath(this.textureTier);

    // Cap the render resolution: phones get a lower ceiling to protect battery/thermals.
    const maxPixelRatio = this.textureTier === 'mobile' ? 1.5 : 2;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    console.log(
      `[GlobeScene] Texture tier: ${this.textureTier} (maxTextureSize=${this.renderer.capabilities.maxTextureSize})`
    );

    // Aircraft model (defaults to Private Business Jet)
    this.aircraft = new AircraftModel('business_jet');
    this.scene.add(this.aircraft.group);

    // Groups
    this.flightPathGroup = new THREE.Group();
    this.bordersGroup = new THREE.Group();
    this.countryLabelsGroup = new THREE.Group();
    this.scene.add(this.flightPathGroup);
    this.scene.add(this.bordersGroup);
    this.scene.add(this.countryLabelsGroup);

    this.initLighting();
    this.initStarfield();
    this.initEarth();
    this.initAtmosphere();
    this.initClouds();
    this.loadCountryBorders();
    this.initThemeListener();
  }

  public setAircraftType(type: AircraftType): void {
    this.aircraft.setAircraftType(type);
  }

  private initThemeListener(): void {
    ThemeManager.getInstance().onThemeChanged((theme) => {
      this.currentTheme = theme;
      if (this.atmosphereMesh && this.atmosphereMesh.material) {
        ((this.atmosphereMesh.material as THREE.ShaderMaterial).uniforms.glowColor.value as THREE.Color).setHex(theme.glow3D);
      }
      if (this.currentFlightPlan) {
        this.updateFlightPlanVisuals(this.currentFlightPlan);
      }
      if (this.bordersGroup.children.length > 0) {
        const borderLines = this.bordersGroup.children[0] as THREE.LineSegments;
        if (borderLines && borderLines.material) {
          (borderLines.material as THREE.LineBasicMaterial).color.setHex(theme.hex3D);
        }
      }
    });
  }

  private initLighting(): void {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    this.scene.add(this.ambientLight);

    // Sun light positioned for daylight on Europe / Atlantic
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
    this.sunLight.position.set(250, 60, 150);
    this.scene.add(this.sunLight);
  }

  private initStarfield(): void {
    const starCount = this.textureTier === 'mobile' ? 900 : 1800;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 400 + Math.random() * 300;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const tint = 0.8 + Math.random() * 0.2;
      colors[i * 3] = tint;
      colors[i * 3 + 1] = tint;
      colors[i * 3 + 2] = 1.0;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(stars);
  }

  private initEarth(): void {
    const textureLoader = new THREE.TextureLoader();
    const earthSegments = this.textureTier === 'mobile' ? 64 : 96;
    const earthGeom = new THREE.SphereGeometry(GlobeScene.GLOBE_RADIUS, earthSegments, earthSegments);

    const dayTex = textureLoader.load(`${this.textureBase}/earth_day.jpg`);
    const nightTex = textureLoader.load(`${this.textureBase}/earth_night.jpg`);
    const specTex = textureLoader.load(`${this.textureBase}/earth_specular.png`);
    const bumpTex = textureLoader.load(`${this.textureBase}/earth_bump.jpg`);

    const maxAnisotropy = this.renderer.capabilities.getMaxAnisotropy();
    [dayTex, nightTex, specTex, bumpTex].forEach((tex) => {
      tex.anisotropy = maxAnisotropy;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = true;
    });

    // Shader Material blending Day and Night textures
    const earthMat = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: dayTex },
        nightTexture: { value: nightTex },
        specularMap: { value: specTex },
        bumpMap: { value: bumpTex },
        sunDirection: { value: this.sunLight.position.clone().normalize() }
      },
      vertexShader: EarthDayNightShader.vertexShader,
      fragmentShader: EarthDayNightShader.fragmentShader
    });

    this.earthMesh = new THREE.Mesh(earthGeom, earthMat);
    this.scene.add(this.earthMesh);
  }

  private initAtmosphere(): void {
    const shellSegments = this.textureTier === 'mobile' ? 40 : 64;
    const atmosGeom = new THREE.SphereGeometry(GlobeScene.GLOBE_RADIUS * 1.025, shellSegments, shellSegments);
    const atmosMat = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x00a8ff) },
        coefficient: { value: 0.72 },
        power: { value: 3.2 }
      },
      vertexShader: AtmosphereShader.vertexShader,
      fragmentShader: AtmosphereShader.fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    this.atmosphereMesh = new THREE.Mesh(atmosGeom, atmosMat);
    this.scene.add(this.atmosphereMesh);
  }

  private initClouds(): void {
    const cloudGeom = new THREE.SphereGeometry(GlobeScene.GLOBE_RADIUS * 1.006, this.textureTier === 'mobile' ? 40 : 64, this.textureTier === 'mobile' ? 40 : 64);
    const cloudTex = new THREE.TextureLoader().load(`${this.textureBase}/earth_clouds.jpg`);

    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTex,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    this.cloudsMesh = new THREE.Mesh(cloudGeom, cloudMat);
    this.scene.add(this.cloudsMesh);
  }

  private async loadCountryBorders(): Promise<void> {
    try {
      const response = await fetch('/assets/data/countries.geojson');
      if (!response.ok) return;
      const geojson = await response.json();

      const positions: number[] = [];
      const lineRadius = GlobeScene.GLOBE_RADIUS * 1.0028;

      for (const feature of geojson.features) {
        if (!feature.geometry) continue;
        const geomType = feature.geometry.type;
        const coordinates = feature.geometry.coordinates;

        const processRing = (ring: [number, number][]) => {
          for (let i = 0; i < ring.length - 1; i++) {
            const p1 = AviationMath.latLonToVector3(ring[i][1], ring[i][0], lineRadius);
            const p2 = AviationMath.latLonToVector3(ring[i + 1][1], ring[i + 1][0], lineRadius);
            positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
          }
        };

        if (geomType === 'Polygon') {
          for (const ring of coordinates) {
            processRing(ring);
          }
        } else if (geomType === 'MultiPolygon') {
          for (const poly of coordinates) {
            for (const ring of poly) {
              processRing(ring);
            }
          }
        }
      }

      const borderGeom = new THREE.BufferGeometry();
      borderGeom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const borderMat = new THREE.LineBasicMaterial({
        color: this.currentTheme.hex3D || 0x00e5ff,
        transparent: true,
        opacity: 0.85,
        depthTest: true,
        depthWrite: false
      });

      const borderLines = new THREE.LineSegments(borderGeom, borderMat);
      this.bordersGroup.add(borderLines);
      console.log(`[GlobeScene] Loaded ${positions.length / 6} world country vector boundary segments.`);

      // Create country name labels
      this.createCountryLabels(geojson.features);
    } catch (e) {
      console.warn('[GlobeScene] Could not load country boundaries & names:', e);
    }
  }

  private createCountryLabels(features: any[]): void {
    // Elevate slightly above terrain surface (0.6% above R=100) to prevent any z-fighting
    const R = GlobeScene.GLOBE_RADIUS * 1.006;

    for (const feature of features) {
      const p = feature.properties;
      if (!p || !p.NAME || typeof p.LABEL_Y !== 'number' || typeof p.LABEL_X !== 'number') continue;

      const countryName = p.NAME.toUpperCase();
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;

      ctx.font = 'bold 22px "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Drop shadow / dark outline for 100% legibility on any terrain (desert, snow, ocean, forest)
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(2, 6, 23, 0.95)';
      ctx.strokeText(countryName, 128, 32);

      ctx.fillStyle = '#f8fafc';
      ctx.fillText(countryName, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.85,
        depthTest: true,
        depthWrite: false
      });

      const sprite = new THREE.Sprite(spriteMat);
      // Anchor sprite near the bottom so the text hovers above ground, NEVER penetrating terrain
      sprite.center.set(0.5, 0.1);

      const pos = AviationMath.latLonToVector3(p.LABEL_Y, p.LABEL_X, R);
      sprite.position.set(pos.x, pos.y, pos.z);
      sprite.scale.set(2.6, 0.65, 1.0);
      sprite.userData = {
        name: countryName,
        scaleRank: p.scalerank || 1,
        normal: new THREE.Vector3(pos.x, pos.y, pos.z).normalize(),
        baseWidth: 2.6,
        baseHeight: 0.65
      };

      this.countryLabelsGroup.add(sprite);
    }
    console.log(`[GlobeScene] Created ${this.countryLabelsGroup.children.length} 3D country labels.`);
  }

  private airportLabelSprites: THREE.Sprite[] = [];

  public updateFlightPlanVisuals(plan: FlightPlanData): void {
    this.currentFlightPlan = plan;
    // Clear previous flight path & airport labels
    while (this.flightPathGroup.children.length > 0) {
      const child = this.flightPathGroup.children[0];
      this.flightPathGroup.remove(child);
    }
    this.airportLabelSprites = [];

    const points: THREE.Vector3[] = [];
    const R = GlobeScene.GLOBE_RADIUS;

    for (const wp of plan.waypoints) {
      // Offset flight path ribbon slightly below aircraft cruising altitude (by 0.22 units)
      // so the aircraft flies cleanly above the route line without the tube clipping inside the fuselage/tail!
      const altScale = Math.max(0.08, (((wp.altitude || 0) / 38000) * 2.2) - 0.22);
      const v = AviationMath.latLonToVector3(wp.lat, wp.lon, R + altScale);
      points.push(new THREE.Vector3(v.x, v.y, v.z));
    }

    if (points.length > 1) {
      // 3D Curve Flight Ribbon Arc (slender, luminous airline trajectory)
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeom = new THREE.TubeGeometry(curve, 200, 0.08, 12, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: this.currentTheme.hex3D,
        transparent: true,
        opacity: 0.92
      });
      const tubeMesh = new THREE.Mesh(tubeGeom, tubeMat);
      this.flightPathGroup.add(tubeMesh);

      // Airport Origin & Destination Marker Beacons
      this.addAirportPin(plan.origin.lat, plan.origin.lon, plan.origin.iata, 0x00ff88);
      this.addAirportPin(plan.destination.lat, plan.destination.lon, plan.destination.iata, this.currentTheme.hex3D);
    }
  }

  private addAirportPin(lat: number, lon: number, iata: string, color: number): void {
    const R = GlobeScene.GLOBE_RADIUS;
    const pos = AviationMath.latLonToVector3(lat, lon, R);

    // Subtle sleek ground beacon pin (0.8 units above terrain instead of towering 3.0)
    const tip = AviationMath.latLonToVector3(lat, lon, R + 0.8);
    const pinGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(pos.x, pos.y, pos.z),
      new THREE.Vector3(tip.x, tip.y, tip.z)
    ]);
    const pinLine = new THREE.Line(pinGeom, new THREE.LineBasicMaterial({ color, linewidth: 2 }));
    this.flightPathGroup.add(pinLine);

    // Subtle glowing head sphere
    const headGeom = new THREE.SphereGeometry(0.22, 16, 16);
    const headMat = new THREE.MeshBasicMaterial({ color });
    const headMesh = new THREE.Mesh(headGeom, headMat);
    headMesh.position.set(tip.x, tip.y, tip.z);
    this.flightPathGroup.add(headMesh);

    // Text Label Sprite (wrapped safely)
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(10, 16, 29, 0.9)';
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 4;
        if (typeof (ctx as any).roundRect === 'function') {
          (ctx as any).roundRect(8, 8, 240, 112, 16);
        } else {
          ctx.rect(8, 8, 240, 112);
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 54px "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(iata, 128, 64);

        const spriteTex = new THREE.CanvasTexture(canvas);
        spriteTex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        const spriteMat = new THREE.SpriteMaterial({
          map: spriteTex,
          depthTest: true,
          depthWrite: false,
          transparent: true
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(0.85, 0.42, 1);
        sprite.position.set(tip.x * 1.004, tip.y * 1.004, tip.z * 1.004);
        sprite.userData = {
          isAirportLabel: true,
          worldPos: new THREE.Vector3(tip.x, tip.y, tip.z),
          baseScale: new THREE.Vector2(0.85, 0.42)
        };
        this.flightPathGroup.add(sprite);
        this.airportLabelSprites.push(sprite);
      }
    } catch (e) {
      console.warn('[GlobeScene] Label sprite generation skipped:', e);
    }
  }

  public updateAircraftTelemetry(state: TelemetryState): void {
    const R = GlobeScene.GLOBE_RADIUS;
    const altScale = (state.altitude / 38000) * 2.2;
    const aircraftRadius = R + altScale;

    const pos = AviationMath.latLonToVector3(state.lat, state.lon, aircraftRadius);
    this.aircraft.group.position.set(pos.x, pos.y, pos.z);

    // Align aircraft to Earth normal (up vector) and heading
    const normal = new THREE.Vector3(pos.x, pos.y, pos.z).normalize();
    const northPt = AviationMath.latLonToVector3(Math.min(89.9, state.lat + 0.1), state.lon, aircraftRadius);
    const northVec = new THREE.Vector3(northPt.x, northPt.y, northPt.z).sub(this.aircraft.group.position).normalize();

    // East vector
    const eastVec = new THREE.Vector3().crossVectors(northVec, normal).normalize();

    // Re-orthonormalize north
    const localNorth = new THREE.Vector3().crossVectors(normal, eastVec).normalize();

    // Heading angle in radians from North clockwise towards East
    const hdgRad = (state.heading * Math.PI) / 180;
    const forwardVec = new THREE.Vector3()
      .addScaledVector(localNorth, Math.cos(hdgRad))
      .addScaledVector(eastVec, Math.sin(hdgRad))
      .normalize();

    // Proper right-handed orthonormal basis:
    // local +Z (nose) points along forwardVec
    // local +Y (up) points along planeUpVec (normal)
    // local +X (right wing) points along rightVec
    // In right-handed coords: rightVec x planeUpVec = forwardVec.
    // Therefore: rightVec = normal x forwardVec!
    const rightVec = new THREE.Vector3().crossVectors(normal, forwardVec).normalize();
    const planeUpVec = new THREE.Vector3().crossVectors(forwardVec, rightVec).normalize();

    // Construct basis matrix
    const rotMatrix = new THREE.Matrix4().makeBasis(rightVec, planeUpVec, forwardVec);
    this.aircraft.group.setRotationFromMatrix(rotMatrix);

    // Apply pitch and roll relative to the flight direction
    const pitchRad = (state.pitch * Math.PI) / 180;
    const rollRad = (state.roll * Math.PI) / 180;
    this.aircraft.group.rotateX(pitchRad);
    this.aircraft.group.rotateZ(-rollRad);
  }

  public update(dt: number, camera?: THREE.Camera): void {
    this.aircraft.update(dt);

    // Adaptive aircraft scale based on camera distance (zoom level)
    if (camera) {
      const camDist = camera.position.distanceTo(this.aircraft.group.position);
      let targetScale: number;

      if (camDist < 25) {
        // Close-up modes: Cockpit, Wing Cam, Chase Cam
        targetScale = 0.42;
      } else {
        // Global Orbit / 2D Tactical modes: Adaptive zoom scaling
        // Scales smoothly with zoom distance so it looks like a sleek map marker without covering countries
        targetScale = Math.min(0.24, Math.max(0.08, 0.07 + (camDist / 200) * 0.09));
      }

      const currentScale = this.aircraft.group.scale.x;
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.15);
      this.aircraft.group.scale.setScalar(newScale);

      // Country labels & Airport beacons horizon culling & zoom scaling
      const camPos = camera.position;
      const camNorm = camPos.clone().normalize();
      const totalCamDist = camPos.length();
      const isLowAltitudeCam = totalCamDist < 125; // Close-up camera (Chase, Cockpit, Wing, or low zoom)

      for (let i = 0; i < this.countryLabelsGroup.children.length; i++) {
        const sprite = this.countryLabelsGroup.children[i] as THREE.Sprite;
        const normal = sprite.userData.normal as THREE.Vector3;
        if (!normal) continue;

        const distToCam = camPos.distanceTo(sprite.position);

        if (isLowAltitudeCam) {
          // In close-up views (Chase, Cockpit, Wing), horizon distance from FL380 is ~22 units.
          // Labels farther than 30 units are over the Earth horizon and MUST be hidden so they don't stack on the horizon rim!
          // Also hide labels directly underneath the plane (< 4.5 units) so they don't clip aircraft.
          if (distToCam > 30 || distToCam < 4.5) {
            sprite.visible = false;
            continue;
          }

          // Check glance angle between ground normal and line of sight to camera
          const toCam = camPos.clone().sub(sprite.position).normalize();
          const glanceDot = normal.dot(toCam);
          if (glanceDot < 0.12) {
            // Viewed edge-on over the ground curvature -> hide to prevent terrain clipping/stacking
            sprite.visible = false;
            continue;
          }

          sprite.visible = true;
          // Clean opacity fade based on distance
          const fade = Math.min(1.0, Math.max(0.0, (30 - distToCam) / 10));
          sprite.material.opacity = fade * 0.92;
          // Sleek constant size when near camera
          const scale = Math.min(1.0, Math.max(0.55, distToCam / 22));
          sprite.scale.set(sprite.userData.baseWidth * scale, sprite.userData.baseHeight * scale, 1);
        } else {
          // Orbit / Tactical Global View
          const dot = normal.dot(camNorm);
          if (dot < 0.22) {
            sprite.visible = false;
          } else {
            const rank = sprite.userData.scaleRank || 1;
            if (totalCamDist > 240 && rank > 2) {
              sprite.visible = false;
            } else {
              sprite.visible = true;
              const opacity = Math.min(0.9, (dot - 0.22) * 3.5);
              sprite.material.opacity = opacity;
              const scaleFactor = Math.min(1.2, Math.max(0.6, totalCamDist / 200));
              sprite.scale.set(sprite.userData.baseWidth * scaleFactor, sprite.userData.baseHeight * scaleFactor, 1);
            }
          }
        }
      }

      // Dynamic Airport Label scaling & close-up culling
      if (this.airportLabelSprites.length > 0) {
        const camDistToPlane = camPos.distanceTo(this.aircraft.group.position);
        const isCloseUpCam = camDistToPlane < 25;

        for (const sprite of this.airportLabelSprites) {
          const pinPos = sprite.userData.worldPos as THREE.Vector3;
          if (!pinPos) continue;

          const distToCam = camPos.distanceTo(pinPos);
          // If in close-up mode (cockpit, wing, chase) and near the airport, or within 22 units of the pin,
          // HIDE the label so it NEVER blocks the pilot or aircraft view!
          if ((isCloseUpCam && distToCam < 30) || distToCam < 14) {
            sprite.visible = false;
          } else {
            sprite.visible = true;
            const scaleFactor = Math.min(1.1, Math.max(0.45, totalCamDist / 200));
            const base = sprite.userData.baseScale as THREE.Vector2;
            sprite.scale.set(base.x * scaleFactor, base.y * scaleFactor, 1);
          }
        }
      }
    }

    // Slowly rotate clouds
    if (this.cloudsMesh) {
      this.cloudsMesh.rotation.y += dt * 0.002;
    }
  }

  public render(camera: THREE.Camera): void {
    this.renderer.render(this.scene, camera);
  }

  public onResize(width: number, height: number): void {
    this.renderer.setSize(width, height);
  }
}
