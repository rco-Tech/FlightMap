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
    sunDirection: { value: new THREE.Vector3(1, 0, 0) }
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

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vSunDir;
    varying vec3 vViewDir;

    void main() {
      // Elevation bump relief perturbation (scaled for high-density 4K normal delta)
      float hCenter = texture2D(bumpMap, vUv).r;
      float hEast = texture2D(bumpMap, vUv + vec2(0.00030, 0.0)).r;
      float hNorth = texture2D(bumpMap, vUv + vec2(0.0, 0.00045)).r;
      vec3 perturbedNormal = normalize(vNormal + vec3((hCenter - hEast) * 4.2, (hCenter - hNorth) * 4.2, 0.0));

      float sunDot = dot(perturbedNormal, vSunDir);
      float smoothSunDot = dot(vNormal, vSunDir);

      // Smooth terminator transition
      float dayFactor = smoothstep(-0.06, 0.14, smoothSunDot);
      float nightFactor = smoothstep(0.06, -0.08, smoothSunDot);

      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv);
      vec4 specMask = texture2D(specularMap, vUv);

      // Crisp pinpoint night city lights: power curve eliminates dark noise floor
      // and concentrates luminescence into incandescent urban centers
      vec3 cityLuma = pow(nightColor.rgb, vec3(1.30));
      vec3 nightCity = cityLuma * 3.1 * nightFactor;

      // Realistic daylight with terrain slope diffuse shading
      float diffuse = clamp(sunDot * 0.85 + 0.15, 0.08, 1.0);
      vec3 dayLighting = dayColor.rgb * diffuse * dayFactor;

      // Golden/Amber dusk & dawn atmospheric scattering along the terminator
      float twilight = smoothstep(-0.10, 0.03, smoothSunDot) * smoothstep(0.16, 0.03, smoothSunDot);
      vec3 twilightGlow = vec3(0.95, 0.42, 0.12) * (twilight * 0.45);

      // Specular ocean sheen on the sunlit hemisphere
      if (smoothSunDot > 0.0) {
        vec3 halfVector = normalize(vSunDir + vViewDir);
        float specAngle = max(dot(vNormal, halfVector), 0.0);
        float isWater = specMask.r; // water mask is high over oceans
        float specular = pow(specAngle, 36.0) * isWater * 0.70;
        dayLighting += vec3(specular * 0.85, specular * 0.92, specular) * dayFactor;
      }

      vec3 finalColor = dayLighting + nightCity + twilightGlow;
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};
