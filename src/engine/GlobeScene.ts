import * as THREE from 'three';
import { AircraftModel, AircraftType } from './AircraftModel';
import { AtmosphereShader, EarthDayNightShader } from './Shaders';
import { AviationMath } from '../telemetry/AviationMath';
import { FlightPlanData } from '../telemetry/FlightPlan';
import { TelemetryState } from '../telemetry/TelemetryManager';
import { ThemeManager, ThemePalette } from '../ui/ThemeManager';
import { TextureTierManager, TextureTier } from './TextureTier';
import { SolarCalculator, LocalSolarInfo } from '../telemetry/SolarCalculator';

export class GlobeScene {
  public scene: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  public earthMesh!: THREE.Mesh;
  public atmosphereMesh!: THREE.Mesh;
  public cloudsMesh!: THREE.Mesh;
  public earthShaderMat!: THREE.ShaderMaterial;
  public atmosShaderMat!: THREE.ShaderMaterial;
  public aircraft: AircraftModel;
  public flightPathGroup: THREE.Group;
  public bordersGroup: THREE.Group;
  public countryLabelsGroup: THREE.Group;
  public sunLight!: THREE.DirectionalLight;
  public ambientLight!: THREE.AmbientLight;
  public textureTier!: TextureTier;
  public textureBase!: string;

  // Map Style, Relief & Illumination Mode
  public static readonly MAP_STYLE_STORAGE_KEY = 'flightmap_map_style';
  public static readonly RELIEF_STORAGE_KEY = 'flightmap_relief_enabled';
  public static readonly ILLUM_STORAGE_KEY = 'flightmap_illum_mode';

  public mapStyle: 'satellite' | 'regular' = 'satellite';
  public reliefEnabled: boolean = true;
  public illuminationMode: 'auto' | 'day' | 'night' = 'auto';

  // Solar & Day/Night state
  public solarMode: 'utc' | 'sim' | 'local_noon' | 'manual' = 'utc';
  public manualSolarDate: Date = new Date();
  public currentSunPosition: THREE.Vector3 = new THREE.Vector3(250, 60, 150);
  public currentSolarInfo: LocalSolarInfo | null = null;

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

    // Pick the texture tier the device can handle (8K on desktop, 4K on phones).
    this.textureTier = TextureTierManager.resolve(this.renderer.capabilities.maxTextureSize);
    this.textureBase = TextureTierManager.basePath(this.textureTier);

    // Restore saved map display preferences
    try {
      const savedStyle = localStorage.getItem(GlobeScene.MAP_STYLE_STORAGE_KEY);
      if (savedStyle === 'satellite' || savedStyle === 'regular') this.mapStyle = savedStyle;
      const savedRelief = localStorage.getItem(GlobeScene.RELIEF_STORAGE_KEY);
      if (savedRelief !== null) this.reliefEnabled = savedRelief === '1';
      const savedIllum = localStorage.getItem(GlobeScene.ILLUM_STORAGE_KEY);
      if (savedIllum === 'auto' || savedIllum === 'day' || savedIllum === 'night') this.illuminationMode = savedIllum;
    } catch {}

    // High-DPI support: On mobile screens (DPR 2.5 - 3.5), cap at 2.0 to ensure
    // razor-sharp lines and textures without wasteful 3.0+ fragment overhead.
    const maxPixelRatio = Math.min(window.devicePixelRatio || 1, 2.0);
    this.renderer.setPixelRatio(maxPixelRatio);
    console.log(
      `[GlobeScene] Texture tier: ${this.textureTier} (maxTextureSize=${this.renderer.capabilities.maxTextureSize}, pixelRatio=${maxPixelRatio}, mapStyle=${this.mapStyle})`
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
    this.updateSunPosition();
    this.loadCountryBorders();
    this.initThemeListener();
  }

  public setAircraftType(type: AircraftType): void {
    this.aircraft.setAircraftType(type);
  }

  public setSolarMode(mode: 'utc' | 'sim' | 'local_noon' | 'manual'): void {
    this.solarMode = mode;
    this.updateSunPosition();
  }

  public setManualSolarDate(date: Date): void {
    this.manualSolarDate = date;
    this.updateSunPosition();
  }

  public updateSunPosition(referenceDate?: Date): void {
    const R = 350;
    let targetDate = referenceDate || new Date();

    if (this.solarMode === 'manual') {
      targetDate = this.manualSolarDate;
    }

    let sunPos: { x: number; y: number; z: number };

    if (this.solarMode === 'local_noon') {
      // Position the sun directly overhead the aircraft for daytime visibility
      const planePos = this.aircraft.group.position;
      const planeRadius = planePos.length();
      if (planeRadius > 0.1) {
        const latLon = AviationMath.vector3ToLatLon(planePos.x, planePos.y, planePos.z, planeRadius);
        sunPos = AviationMath.latLonToVector3(latLon.lat, latLon.lon, R);
      } else {
        sunPos = AviationMath.latLonToVector3(51.5, -0.1, R);
      }
    } else {
      // Astronomical subsolar point computation
      const sub = SolarCalculator.getSubsolarPoint(targetDate);
      sunPos = AviationMath.latLonToVector3(sub.lat, sub.lon, R);
    }

    this.currentSunPosition.set(sunPos.x, sunPos.y, sunPos.z);
    if (this.sunLight) {
      this.sunLight.position.copy(this.currentSunPosition);
    }

    const sunDirNorm = this.currentSunPosition.clone().normalize();
    if (this.earthShaderMat && this.earthShaderMat.uniforms.sunDirection) {
      (this.earthShaderMat.uniforms.sunDirection.value as THREE.Vector3).copy(sunDirNorm);
    }
    if (this.atmosShaderMat && this.atmosShaderMat.uniforms.sunDirection) {
      (this.atmosShaderMat.uniforms.sunDirection.value as THREE.Vector3).copy(sunDirNorm);
    }

    // Update local solar info at aircraft position
    const planePos = this.aircraft.group.position;
    const planeRadius = planePos.length();
    if (planeRadius > 0.1) {
      const planeLatLon = AviationMath.vector3ToLatLon(planePos.x, planePos.y, planePos.z, planeRadius);
      this.currentSolarInfo = SolarCalculator.getLocalSolarInfo(planeLatLon.lat, planeLatLon.lon, targetDate);
    }
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

    // Astronomical directional sun light
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.85);
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
    this.earthShaderMat = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: dayTex },
        nightTexture: { value: nightTex },
        specularMap: { value: specTex },
        bumpMap: { value: bumpTex },
        sunDirection: { value: this.sunLight.position.clone().normalize() },
        mapStyle: { value: this.mapStyle === 'regular' ? 1 : 0 },
        reliefStrength: { value: (this.mapStyle === 'regular' || !this.reliefEnabled) ? 0.0 : 1.0 },
        illuminationMode: { value: this.illuminationMode === 'day' ? 1 : (this.illuminationMode === 'night' ? 2 : 0) }
      },
      vertexShader: EarthDayNightShader.vertexShader,
      fragmentShader: EarthDayNightShader.fragmentShader
    });

    this.earthMesh = new THREE.Mesh(earthGeom, this.earthShaderMat);
    this.scene.add(this.earthMesh);
  }

  private initAtmosphere(): void {
    const shellSegments = this.textureTier === 'mobile' ? 40 : 64;
    const atmosGeom = new THREE.SphereGeometry(GlobeScene.GLOBE_RADIUS * 1.025, shellSegments, shellSegments);
    this.atmosShaderMat = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x00a8ff) },
        coefficient: { value: 0.72 },
        power: { value: 3.2 },
        sunDirection: { value: this.sunLight.position.clone().normalize() }
      },
      vertexShader: AtmosphereShader.vertexShader,
      fragmentShader: AtmosphereShader.fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    this.atmosphereMesh = new THREE.Mesh(atmosGeom, this.atmosShaderMat);
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
    if (this.mapStyle === 'regular') {
      this.cloudsMesh.visible = false;
    }
    this.scene.add(this.cloudsMesh);
  }

  private async loadCountryBorders(): Promise<void> {
    try {
      const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
      const response = await fetch(`${base}/assets/data/countries.geojson`);
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
    // Clear any previous country labels
    while (this.countryLabelsGroup.children.length > 0) {
      const child = this.countryLabelsGroup.children[0] as THREE.Sprite;
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
      this.countryLabelsGroup.remove(child);
    }

    // Elevate slightly above terrain surface (0.6% above R=100) to prevent any z-fighting
    const R = GlobeScene.GLOBE_RADIUS * 1.006;

    for (const feature of features) {
      const p = feature.properties;
      if (!p || !p.NAME || typeof p.LABEL_Y !== 'number' || typeof p.LABEL_X !== 'number') continue;

      const countryName = p.NAME.toUpperCase();
      const labelRank = typeof p.LABELRANK === 'number' ? p.LABELRANK : (typeof p.scalerank === 'number' ? p.scalerank : 3);
      const popRank = typeof p.POP_RANK === 'number' ? p.POP_RANK : 10;

      // Offscreen canvas dynamically tailored to exact text width
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) continue;

      const fontSize = 48;
      ctx.font = `bold ${fontSize}px "Segoe UI", -apple-system, Roboto, sans-serif`;
      const textMetrics = ctx.measureText(countryName);
      const textWidth = Math.ceil(textMetrics.width);

      // Symmetrical padding ensuring crisp readability and correct aspect ratio
      const padX = 36;
      const padY = 20;
      const width = Math.max(140, textWidth + padX * 2);
      const height = fontSize + padY * 2;

      canvas.width = width;
      canvas.height = height;

      // Re-apply typography properties after canvas dimension allocation
      ctx.font = `bold ${fontSize}px "Segoe UI", -apple-system, Roboto, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const cx = width / 2;
      const cy = height / 2;

      // Dark drop shadow / outer outline for 100% legibility on any terrain (desert, snow, ocean, forest, night lights)
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'rgba(2, 6, 23, 0.96)';
      ctx.strokeText(countryName, cx, cy);

      // Inner subtle contrast outline
      ctx.lineWidth = 4.5;
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeText(countryName, cx, cy);

      // Clean luminous text
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(countryName, cx, cy);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = true;

      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.0,
        depthTest: true,
        depthWrite: false
      });

      const sprite = new THREE.Sprite(spriteMat);
      // Anchor sprite near the bottom so text hovers naturally above ground
      sprite.center.set(0.5, 0.1);

      const pos = AviationMath.latLonToVector3(p.LABEL_Y, p.LABEL_X, R);
      sprite.position.set(pos.x, pos.y, pos.z);

      // Base world scale matched 1:1 to text aspect ratio (baseHeight = 0.80 units)
      const baseHeight = 0.80;
      const baseWidth = baseHeight * (width / height);
      sprite.scale.set(baseWidth, baseHeight, 1.0);

      sprite.userData = {
        name: countryName,
        labelRank,
        popRank,
        lat: p.LABEL_Y,
        lon: p.LABEL_X,
        normal: new THREE.Vector3(pos.x, pos.y, pos.z).normalize(),
        baseWidth,
        baseHeight,
        aspectRatio: width / height
      };

      this.countryLabelsGroup.add(sprite);
    }
    console.log(`[GlobeScene] Created ${this.countryLabelsGroup.children.length} autozoomable 3D country labels.`);
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

      // Update astronomical sun position and illumination dynamically
      this.updateSunPosition();

      // Country labels & Airport beacons horizon culling & autozoom scaling
      const camPos = camera.position;
      const totalCamDist = camPos.length();
      const isLowAltitudeCam = totalCamDist < 125; // Close-up camera (Chase, Cockpit, Wing, or close surface zoom)

      // Screen-space anti-collision decimation for global orbit view
      const screenOccupied: { x: number; y: number; rank: number }[] = [];
      const canvasW = this.renderer.domElement.clientWidth || window.innerWidth;
      const canvasH = this.renderer.domElement.clientHeight || window.innerHeight;
      const tempVec = new THREE.Vector3();

      for (let i = 0; i < this.countryLabelsGroup.children.length; i++) {
        const sprite = this.countryLabelsGroup.children[i] as THREE.Sprite;
        const normal = sprite.userData.normal as THREE.Vector3;
        if (!normal) continue;

        const toCam = camPos.clone().sub(sprite.position);
        const distToCam = toCam.length();
        const toCamDir = toCam.normalize();
        const glanceDot = normal.dot(toCamDir);

        let targetOpacity = 0;

        if (isLowAltitudeCam) {
          // In close-up views (Chase, Cockpit, Wing), horizon distance from aircraft is ~22 units.
          if (distToCam > 32 || distToCam < 4.5 || glanceDot < 0.12) {
            targetOpacity = 0;
          } else {
            const distanceFade = Math.min(1.0, Math.max(0.0, (32 - distToCam) / 10));
            targetOpacity = distanceFade * 0.90;

            const scale = Math.min(1.0, Math.max(0.48, distToCam / 22));
            sprite.scale.set(
              sprite.userData.baseWidth * scale,
              sprite.userData.baseHeight * scale,
              1
            );
          }
        } else {
          // Orbit / Tactical Global View
          // Check if facing camera (limb culling)
          if (glanceDot < 0.16) {
            targetOpacity = 0;
          } else {
            const rank = sprite.userData.labelRank as number;
            let tierAlpha = 0;

            // Multi-level cartographic LOD based on camera orbit distance
            if (rank <= 2) {
              // Top-tier global sovereign nations (USA, UK, France, Germany, Japan, etc.)
              tierAlpha = 1.0;
            } else if (rank === 3) {
              // Tier 2: smooth fade-in between 245 and 210
              tierAlpha = Math.min(1.0, Math.max(0.0, (245 - totalCamDist) / 35));
            } else if (rank === 4) {
              // Tier 3: smooth fade-in between 205 and 170
              tierAlpha = Math.min(1.0, Math.max(0.0, (205 - totalCamDist) / 35));
            } else if (rank === 5) {
              // Tier 4: smooth fade-in between 165 and 138
              tierAlpha = Math.min(1.0, Math.max(0.0, (165 - totalCamDist) / 27));
            } else {
              // Tier 5 (all small nations / microstates): smooth fade-in under 140
              tierAlpha = Math.min(1.0, Math.max(0.0, (140 - totalCamDist) / 20));
            }

            if (tierAlpha <= 0.01) {
              targetOpacity = 0;
            } else {
              // True distance-adaptive autozooming (Scale Invariance)
              // Keeps the country names readable, sleek, and sharp across all zoom distances
              const distRatio = distToCam / 95;
              const autoZoomScale = Math.min(1.35, Math.max(0.40, Math.pow(distRatio, 0.72)));
              sprite.scale.set(
                sprite.userData.baseWidth * autoZoomScale,
                sprite.userData.baseHeight * autoZoomScale,
                1
              );

              // Glance fade near the horizon rim
              const limbFade = Math.min(1.0, (glanceDot - 0.16) * 4.5);
              targetOpacity = 0.88 * tierAlpha * limbFade;

              // Screen-space anti-collision decimation when zoomed out
              if (targetOpacity > 0.15 && totalCamDist > 140) {
                tempVec.copy(sprite.position).project(camera);
                if (tempVec.z < 1.0) {
                  const screenX = ((tempVec.x + 1) * 0.5) * canvasW;
                  const screenY = ((-tempVec.y + 1) * 0.5) * canvasH;

                  let collides = false;
                  const minPixelDist = totalCamDist > 200 ? 50 : 36;

                  for (let c = 0; c < screenOccupied.length; c++) {
                    const occ = screenOccupied[c];
                    const dx = occ.x - screenX;
                    const dy = occ.y - screenY;
                    if (dx * dx + dy * dy < minPixelDist * minPixelDist) {
                      if (occ.rank <= rank) {
                        collides = true;
                        break;
                      }
                    }
                  }

                  if (collides) {
                    targetOpacity = 0;
                  } else {
                    screenOccupied.push({ x: screenX, y: screenY, rank });
                  }
                }
              }
            }
          }
        }

        // Smooth continuous opacity interpolation (zero popping!)
        const currentOp = sprite.material.opacity;
        const newOp = THREE.MathUtils.lerp(currentOp, targetOpacity, 0.2);
        sprite.material.opacity = newOp;
        sprite.visible = newOp > 0.02;
      }

      // Dynamic Airport Label scaling & close-up culling
      if (this.airportLabelSprites.length > 0) {
        const camDistToPlane = camPos.distanceTo(this.aircraft.group.position);
        const isCloseUpCam = camDistToPlane < 25;

        for (const sprite of this.airportLabelSprites) {
          const pinPos = sprite.userData.worldPos as THREE.Vector3;
          if (!pinPos) continue;

          const distToCam = camPos.distanceTo(pinPos);
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

  public switchTextureTier(tier: TextureTier): void {
    if (this.textureTier === tier && this.earthMesh) return;
    this.textureTier = tier;
    this.textureBase = TextureTierManager.basePath(tier);
    TextureTierManager.setOverride(tier);

    console.log(`[GlobeScene] Switching to texture tier: ${tier} (${this.textureBase})`);
    const textureLoader = new THREE.TextureLoader();
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

    if (this.earthShaderMat) {
      this.earthShaderMat.uniforms.dayTexture.value = dayTex;
      this.earthShaderMat.uniforms.nightTexture.value = nightTex;
      this.earthShaderMat.uniforms.specularMap.value = specTex;
      this.earthShaderMat.uniforms.bumpMap.value = bumpTex;
      this.earthShaderMat.needsUpdate = true;
    }

    if (this.cloudsMesh && this.cloudsMesh.material) {
      const cloudTex = textureLoader.load(`${this.textureBase}/earth_clouds.jpg`);
      (this.cloudsMesh.material as THREE.MeshStandardMaterial).map = cloudTex;
      (this.cloudsMesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
    }
  }

  public setMapStyle(style: 'satellite' | 'regular'): void {
    this.mapStyle = style;
    try { localStorage.setItem(GlobeScene.MAP_STYLE_STORAGE_KEY, style); } catch {}
    if (this.earthShaderMat) {
      this.earthShaderMat.uniforms.mapStyle.value = style === 'regular' ? 1 : 0;
      if (style === 'regular') {
        this.earthShaderMat.uniforms.reliefStrength.value = 0.0;
      } else {
        this.earthShaderMat.uniforms.reliefStrength.value = this.reliefEnabled ? 1.0 : 0.0;
      }
      this.earthShaderMat.needsUpdate = true;
    }
    if (this.cloudsMesh) {
      this.cloudsMesh.visible = style === 'satellite';
    }
    if (this.bordersGroup.children.length > 0) {
      const borderLines = this.bordersGroup.children[0] as THREE.LineSegments;
      if (borderLines && borderLines.material) {
        (borderLines.material as THREE.LineBasicMaterial).opacity = style === 'regular' ? 0.95 : 0.85;
      }
    }
  }

  public setReliefEnabled(enabled: boolean): void {
    this.reliefEnabled = enabled;
    try { localStorage.setItem(GlobeScene.RELIEF_STORAGE_KEY, enabled ? '1' : '0'); } catch {}
    if (this.earthShaderMat) {
      if (this.mapStyle === 'regular') {
        this.earthShaderMat.uniforms.reliefStrength.value = 0.0;
      } else {
        this.earthShaderMat.uniforms.reliefStrength.value = enabled ? 1.0 : 0.0;
      }
      this.earthShaderMat.needsUpdate = true;
    }
  }

  public setIlluminationMode(mode: 'auto' | 'day' | 'night'): void {
    this.illuminationMode = mode;
    try { localStorage.setItem(GlobeScene.ILLUM_STORAGE_KEY, mode); } catch {}
    if (this.earthShaderMat) {
      this.earthShaderMat.uniforms.illuminationMode.value = mode === 'day' ? 1 : (mode === 'night' ? 2 : 0);
      this.earthShaderMat.needsUpdate = true;
    }
  }

  public getMapModeLabel(): string {
    const res = this.textureTier === 'full' ? '8K' : '4K';
    if (this.mapStyle === 'regular') {
      if (this.illuminationMode === 'day') return `REGULAR DAY (${res})`;
      if (this.illuminationMode === 'night') return `REGULAR NIGHT (${res})`;
      return `REGULAR AUTO (${res})`;
    }
    return `SATELLITE ${res}`;
  }

  public onResize(width: number, height: number): void {
    const maxPixelRatio = Math.min(window.devicePixelRatio || 1, 2.0);
    this.renderer.setPixelRatio(maxPixelRatio);
    this.renderer.setSize(width, height);
  }
}


