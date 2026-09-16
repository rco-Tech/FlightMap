import * as THREE from 'three';

/**
 * Custom WebGL Shaders for Earth Atmosphere, Day/Night illumination, and Flight Path Arc
 */

export const AtmosphereShader = {
  uniforms: {
    glowColor: { value: new THREE.Color(0x00a8ff) },
    coefficient: { value: 0.72 },
    power: { value: 3.2 },
    sunDirection: { value: new THREE.Vector3(1, 0, 0) }
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vWorldNormal;
    uniform vec3 glowColor;
    uniform float coefficient;
    uniform float power;
    uniform vec3 sunDirection;

    void main() {
      // Limb intensity based on view normal
      float intensity = pow(max(0.0, coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0))), power);

      // Solar lighting modulation: atmosphere shines brightest on the sun-facing hemisphere
      float sunDot = dot(vWorldNormal, normalize(sunDirection));
      float sunIllum = smoothstep(-0.25, 0.35, sunDot);

      // Warm twilight scattering rim (golden/crimson dawn & dusk)
      float twilight = smoothstep(-0.18, 0.02, sunDot) * smoothstep(0.22, 0.02, sunDot);
      vec3 scatterColor = mix(glowColor * 0.3, glowColor, sunIllum);
      scatterColor += vec3(0.95, 0.42, 0.12) * (twilight * 0.75);

      gl_FragColor = vec4(scatterColor, intensity * (0.25 + 0.65 * sunIllum));
    }
  `
};

export const EarthDayNightShader = {
  uniforms: {
    dayTexture: { value: null as THREE.Texture | null },
    nightTexture: { value: null as THREE.Texture | null },
    specularMap: { value: null as THREE.Texture | null },
    bumpMap: { value: null as THREE.Texture | null },
    sunDirection: { value: new THREE.Vector3(1, 0, 0) },
    mapStyle: { value: 0 },         // 0: Satellite Realistic, 1: Regular Cartographic
    reliefStrength: { value: 1.0 }, // 1.0: 3D Elevation Relief, 0.0: Flat / No Relief
    illuminationMode: { value: 0 }  // 0: Auto Solar, 1: Force Day, 2: Force Night
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;
    uniform vec3 sunDirection;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vSunDir = normalize(sunDirection);
      vViewDir = normalize(cameraPosition - worldPosition.xyz);
      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,
  fragmentShader: `
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform sampler2D specularMap;
    uniform sampler2D bumpMap;
    uniform int mapStyle;
    uniform float reliefStrength;
    uniform int illuminationMode;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;

    void main() {
      // Elevation bump relief perturbation (controlled by reliefStrength)
      vec3 perturbedNormal = vNormal;
      if (reliefStrength > 0.01) {
        float hCenter = texture2D(bumpMap, vUv).r;
        float hEast = texture2D(bumpMap, vUv + vec2(0.00030, 0.0)).r;
        float hNorth = texture2D(bumpMap, vUv + vec2(0.0, 0.00045)).r;
        vec3 delta = vec3((hCenter - hEast) * 4.2, (hCenter - hNorth) * 4.2, 0.0) * reliefStrength;
        perturbedNormal = normalize(vNormal + delta);
      }

      float sunDot = dot(perturbedNormal, vSunDir);
      float smoothSunDot = dot(vNormal, vSunDir);

      // Terminator transition with illuminationMode overrides
      float dayFactor;
      float nightFactor;
      float twilight = 0.0;

      if (illuminationMode == 1) {
        // Force Day
        dayFactor = 1.0;
        nightFactor = 0.0;
      } else if (illuminationMode == 2) {
        // Force Night
        dayFactor = 0.0;
        nightFactor = 1.0;
      } else {
        // Real-time Astronomical Solar Terminator
        dayFactor = smoothstep(-0.06, 0.14, smoothSunDot);
        nightFactor = smoothstep(0.06, -0.08, smoothSunDot);
        twilight = smoothstep(-0.10, 0.03, smoothSunDot) * smoothstep(0.16, 0.03, smoothSunDot);
      }

      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv);
      vec4 specMask = texture2D(specularMap, vUv);
      float isWater = smoothstep(0.35, 0.65, specMask.r);

      // Crisp pinpoint incandescent city lights
      vec3 cityLuma = pow(nightColor.rgb, vec3(1.30));
      vec3 nightCity = cityLuma * 3.1 * nightFactor;

      // --- REGULAR CARTOGRAPHIC MAP (Clean Geopolitical Navigation Map, No Relief) ---
      if (mapStyle == 1) {
        // Clean cartographic Day palette: elegant neutral continent with subtle terrain tone, sapphire ocean
        vec3 landDay = mix(vec3(0.20, 0.23, 0.27), dayColor.rgb * 0.60 + vec3(0.12, 0.14, 0.16), 0.35);
        vec3 oceanDay = vec3(0.06, 0.17, 0.32);
        vec3 cartoDay = mix(landDay, oceanDay, isWater);

        // Soft solar illumination modulation on regular map
        if (illuminationMode == 0) {
          cartoDay *= clamp(dot(vNormal, vSunDir) * 0.45 + 0.65, 0.30, 1.0);
        }

        // Clean cartographic Night palette: tactical dark slate continent, abyss indigo ocean
        vec3 landNight = vec3(0.035, 0.050, 0.070);
        vec3 oceanNight = vec3(0.012, 0.020, 0.040);
        vec3 cartoNight = mix(landNight, oceanNight, isWater);

        // Pinpoint night lights over land
        cartoNight += cityLuma * 3.2 * (1.0 - isWater) * nightFactor;

        // Blend Day and Night
        vec3 regularColor = mix(cartoNight, cartoDay, dayFactor);

        // Twilight scattering rim along terminator
        if (illuminationMode == 0) {
          regularColor += vec3(0.95, 0.42, 0.12) * (twilight * 0.35);
        }

        gl_FragColor = vec4(regularColor, 1.0);
        return;
      }

      // --- REALISTIC SATELLITE MAP (NASA Blue Marble + Elevation Relief) ---
      float diffuse = clamp(sunDot * 0.85 + 0.15, 0.08, 1.0);
      vec3 dayLighting = dayColor.rgb * diffuse * dayFactor;
      vec3 twilightGlow = vec3(0.95, 0.42, 0.12) * (twilight * 0.45);

      // Specular ocean sheen on the sunlit hemisphere
      if (smoothSunDot > 0.0 && dayFactor > 0.01) {
        vec3 halfVector = normalize(vSunDir + vViewDir);
        float specAngle = max(dot(vNormal, halfVector), 0.0);
        float specular = pow(specAngle, 36.0) * isWater * 0.70;
        dayLighting += vec3(specular * 0.85, specular * 0.92, specular) * dayFactor;
      }

      vec3 finalColor = dayLighting + nightCity + twilightGlow;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};
