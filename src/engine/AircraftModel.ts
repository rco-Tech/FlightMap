import * as THREE from 'three';

export type AircraftType = 'business_jet' | 'widebody_airliner';

export class AircraftModel {
  public group: THREE.Group;
  private currentType: AircraftType = 'business_jet';
  private modelGroup: THREE.Group;

  private navLights: THREE.PointLight[] = [];
  private strobeLights: THREE.PointLight[] = [];
  private strobeMeshes: THREE.Mesh[] = [];
  private strobeTimer: number = 0;

  constructor(type: AircraftType = 'business_jet') {
    this.group = new THREE.Group();
    this.modelGroup = new THREE.Group();
    this.group.add(this.modelGroup);
    this.setAircraftType(type);
  }

  public getAircraftType(): AircraftType {
    return this.currentType;
  }

  public setAircraftType(type: AircraftType): void {
    this.currentType = type;
    while (this.modelGroup.children.length > 0) {
      this.modelGroup.remove(this.modelGroup.children[0]);
    }
    this.navLights = [];
    this.strobeLights = [];
    this.strobeMeshes = [];

    if (type === 'business_jet') {
      this.buildPrivateBusinessJet();
    } else {
      this.buildWidebodyAirliner();
    }
  }

  /**
   * High-Fidelity Private Business Jet (Gulfstream G650ER / Bombardier Global 7500)
   * Smooth aerodynamic fuselage with continuous profile, raked swept wings,
   * flush rear-mounted twin turbofans with chrome intake lips, and elegant T-tail.
   */
  private buildPrivateBusinessJet(): void {
    const pearlWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf5f8fb,
      roughness: 0.16,
      metalness: 0.2
    });

    const darkGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0a1420,
      roughness: 0.04,
      metalness: 0.95
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd8e4ed,
      roughness: 0.1,
      metalness: 0.92
    });

    const darkTrimMat = new THREE.MeshStandardMaterial({
      color: 0x162232,
      roughness: 0.3,
      metalness: 0.55
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.2,
      metalness: 0.75
    });

    // 1. Smooth Aerodynamic Fuselage (Continuous Lathe Profile)
    const points: THREE.Vector2[] = [
      new THREE.Vector2(0.001, 4.3),
      new THREE.Vector2(0.12, 4.18),
      new THREE.Vector2(0.24, 3.9),
      new THREE.Vector2(0.35, 3.5),
      new THREE.Vector2(0.42, 3.0),
      new THREE.Vector2(0.44, 2.3),
      new THREE.Vector2(0.44, 0.0),
      new THREE.Vector2(0.44, -1.8),
      new THREE.Vector2(0.40, -2.6),
      new THREE.Vector2(0.32, -3.4),
      new THREE.Vector2(0.19, -4.0),
      new THREE.Vector2(0.07, -4.25),
      new THREE.Vector2(0.001, -4.3)
    ];

    const fuselageGeom = new THREE.LatheGeometry(points, 36);
    fuselageGeom.rotateX(Math.PI / 2);
    fuselageGeom.computeVertexNormals();
    const fuselage = new THREE.Mesh(fuselageGeom, pearlWhiteMat);
    this.modelGroup.add(fuselage);

    // 2. Sleek Wraparound Cockpit Visor
    const visorGeom = new THREE.CylinderGeometry(0.444, 0.444, 0.75, 32, 1, false, -Math.PI / 3.2, (2 * Math.PI) / 3.2);
    visorGeom.rotateX(Math.PI / 2);
    const visor = new THREE.Mesh(visorGeom, darkGlassMat);
    visor.position.set(0, 0.03, 3.25);
    this.modelGroup.add(visor);

    // Chrome Cockpit Windscreen Frame
    const frameGeom = new THREE.CylinderGeometry(0.447, 0.447, 0.06, 32, 1, false, -Math.PI / 3.2, (2 * Math.PI) / 3.2);
    frameGeom.rotateX(Math.PI / 2);
    const frame = new THREE.Mesh(frameGeom, chromeMat);
    frame.position.set(0, 0.03, 3.6);
    this.modelGroup.add(frame);

    // 3. Cabin Windows Ribbon & Gold Luxury Cheatline
    const cheatlineGeom = new THREE.CylinderGeometry(0.443, 0.443, 4.4, 32, 1, true);
    cheatlineGeom.rotateX(Math.PI / 2);
    const cheatline = new THREE.Mesh(cheatlineGeom, goldAccentMat);
    cheatline.scale.set(1.002, 0.035, 1.0);
    cheatline.position.set(0, 0.05, 0.2);
    this.modelGroup.add(cheatline);

    // 4. Modern Swept Wings with Compound Sweep & Winglets
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 1.0);
    wingShape.lineTo(0.8, 0.9); // root strake
    wingShape.lineTo(5.8, -1.6); // swept leading edge
    wingShape.lineTo(5.6, -2.1); // raked wingtip
    wingShape.lineTo(1.1, -1.0); // swept trailing edge
    wingShape.lineTo(0, -0.6); // root fairing
    wingShape.closePath();

    const wingGeom = new THREE.ExtrudeGeometry(wingShape, {
      depth: 0.07,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    });
    wingGeom.rotateX(Math.PI / 2);
    wingGeom.computeVertexNormals();

    // Starboard (Right) Wing with aerodynamic dihedral
    const rightWing = new THREE.Mesh(wingGeom, pearlWhiteMat);
    rightWing.position.set(0.2, -0.08, 0.3);
    rightWing.rotation.z = -0.05;
    this.modelGroup.add(rightWing);

    // Port (Left) Wing
    const leftWingGeom = wingGeom.clone();
    leftWingGeom.scale(-1, 1, 1);
    const leftWing = new THREE.Mesh(leftWingGeom, pearlWhiteMat);
    leftWing.position.set(-0.2, -0.08, 0.3);
    leftWing.rotation.z = 0.05;
    this.modelGroup.add(leftWing);

    // Swept Winglets
    const wingletShape = new THREE.Shape();
    wingletShape.moveTo(0, 0);
    wingletShape.lineTo(0.15, 0.7);
    wingletShape.lineTo(-0.1, 0.7);
    wingletShape.lineTo(-0.2, 0);
    wingletShape.closePath();

    const wingletGeom = new THREE.ExtrudeGeometry(wingletShape, { depth: 0.04, bevelEnabled: false });

    const rightWinglet = new THREE.Mesh(wingletGeom, darkTrimMat);
    rightWinglet.position.set(5.75, 0.12, -1.8);
    rightWinglet.rotation.z = -0.3;
    rightWinglet.rotation.y = -0.08;
    this.modelGroup.add(rightWinglet);

    const leftWingletGeom = wingletGeom.clone();
    leftWingletGeom.scale(-1, 1, 1);
    const leftWinglet = new THREE.Mesh(leftWingletGeom, darkTrimMat);
    leftWinglet.position.set(-5.75, 0.12, -1.8);
    leftWinglet.rotation.z = 0.3;
    leftWinglet.rotation.y = 0.08;
    this.modelGroup.add(leftWinglet);

    // 5. Rear Fuselage-Mounted Twin Turbofans (Signature Business Jet Layout)
    const buildEngine = (isRight: boolean) => {
      const engGroup = new THREE.Group();

      // Nacelle body
      const nacelleGeom = new THREE.CylinderGeometry(0.26, 0.23, 1.8, 24);
      nacelleGeom.rotateX(Math.PI / 2);
      const nacelle = new THREE.Mesh(nacelleGeom, pearlWhiteMat);
      engGroup.add(nacelle);

      // Chrome intake lip
      const lipGeom = new THREE.TorusGeometry(0.25, 0.03, 16, 24);
      const lip = new THREE.Mesh(lipGeom, chromeMat);
      lip.position.set(0, 0, 0.9);
      engGroup.add(lip);

      // Dark intake interior with fan spinner
      const fanGeom = new THREE.CircleGeometry(0.24, 24);
      const fan = new THREE.Mesh(fanGeom, darkTrimMat);
      fan.position.set(0, 0, 0.75);
      engGroup.add(fan);

      const spinnerGeom = new THREE.ConeGeometry(0.08, 0.22, 16);
      spinnerGeom.rotateX(-Math.PI / 2);
      const spinner = new THREE.Mesh(spinnerGeom, chromeMat);
      spinner.position.set(0, 0, 0.85);
      engGroup.add(spinner);

      // Titanium exhaust nozzle
      const exhaustGeom = new THREE.CylinderGeometry(0.21, 0.17, 0.35, 24);
      exhaustGeom.rotateX(Math.PI / 2);
      const exhaust = new THREE.Mesh(exhaustGeom, darkTrimMat);
      exhaust.position.set(0, 0, -1.0);
      engGroup.add(exhaust);

      // Mounting pylon
      const pylonGeom = new THREE.BoxGeometry(0.35, 0.08, 0.9);
      const pylon = new THREE.Mesh(pylonGeom, darkTrimMat);
      pylon.position.set(isRight ? -0.22 : 0.22, 0, 0);
      engGroup.add(pylon);

      engGroup.position.set(isRight ? 0.72 : -0.72, 0.22, -2.1);
      return engGroup;
    };

    this.modelGroup.add(buildEngine(true));
    this.modelGroup.add(buildEngine(false));

    // 6. T-Tail Empennage (Vertical Fin with High Horizontal Stabilizer)
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(-1.6, 2.3);
    finShape.lineTo(-2.2, 2.3);
    finShape.lineTo(-1.6, 0);
    finShape.closePath();

    const finGeom = new THREE.ExtrudeGeometry(finShape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSize: 0.015,
      bevelThickness: 0.015
    });
    finGeom.rotateY(Math.PI / 2);
    const fin = new THREE.Mesh(finGeom, darkTrimMat);
    fin.position.set(-0.03, 0.25, -3.2);
    this.modelGroup.add(fin);

    // Horizontal T-Tail mounted atop vertical fin
    const hTailShape = new THREE.Shape();
    hTailShape.moveTo(0, 0);
    hTailShape.lineTo(1.8, -0.6);
    hTailShape.lineTo(1.6, -0.9);
    hTailShape.lineTo(0, -0.4);
    hTailShape.closePath();

    const hTailGeom = new THREE.ExtrudeGeometry(hTailShape, { depth: 0.05, bevelEnabled: false });
    hTailGeom.rotateX(Math.PI / 2);

    const rightHTail = new THREE.Mesh(hTailGeom, pearlWhiteMat);
    rightHTail.position.set(0.02, 2.52, -4.8);
    this.modelGroup.add(rightHTail);

    const leftHTailGeom = hTailGeom.clone();
    leftHTailGeom.scale(-1, 1, 1);
    const leftHTail = new THREE.Mesh(leftHTailGeom, pearlWhiteMat);
    leftHTail.position.set(-0.02, 2.52, -4.8);
    this.modelGroup.add(leftHTail);

    // 7. Navigation & Anti-Collision Strobe Lights
    // Port Wingtip (Red)
    const portLight = new THREE.PointLight(0xff0033, 1.2, 6);
    portLight.position.set(-5.75, 0.1, -1.8);
    this.modelGroup.add(portLight);
    this.navLights.push(portLight);

    // Starboard Wingtip (Green)
    const stbdLight = new THREE.PointLight(0x00ff66, 1.2, 6);
    stbdLight.position.set(5.75, 0.1, -1.8);
    this.modelGroup.add(stbdLight);
    this.navLights.push(stbdLight);

    // Tail White Light
    const tailLight = new THREE.PointLight(0xffffff, 1.0, 5);
    tailLight.position.set(0, 2.55, -5.3);
    this.modelGroup.add(tailLight);
    this.navLights.push(tailLight);

    // Anti-collision Strobes
    const strobeLight = new THREE.PointLight(0xffffff, 2.5, 8);
    strobeLight.position.set(0, 0.46, 0.2);
    this.modelGroup.add(strobeLight);
    this.strobeLights.push(strobeLight);

    const strobeGeom = new THREE.SphereGeometry(0.05, 8, 8);
    const strobeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const strobeMesh = new THREE.Mesh(strobeGeom, strobeMat);
    strobeMesh.position.set(0, 0.46, 0.2);
    this.modelGroup.add(strobeMesh);
    this.strobeMeshes.push(strobeMesh);
  }

  /**
   * Commercial Widebody Twin-Aisle Airliner (Boeing 787-9 Dreamliner style)
   * Curved radome, high-aspect-ratio swept flex wings with raked tips,
   * underwing high-bypass turbofans with nacelle chevrons, and airline tail livery.
   */
  private buildWidebodyAirliner(): void {
    const pearlWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf5f8fb,
      roughness: 0.15,
      metalness: 0.18
    });

    const darkGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0a1420,
      roughness: 0.04,
      metalness: 0.95
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd8e4ed,
      roughness: 0.1,
      metalness: 0.92
    });

    const darkBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0f2744,
      roughness: 0.25,
      metalness: 0.45
    });

    // 1. Smooth Widebody Fuselage (Boeing 787 continuous aerodynamic loft)
    const points: THREE.Vector2[] = [
      new THREE.Vector2(0.001, 5.0),
      new THREE.Vector2(0.18, 4.88),
      new THREE.Vector2(0.34, 4.52),
      new THREE.Vector2(0.46, 4.0),
      new THREE.Vector2(0.52, 3.2),
      new THREE.Vector2(0.52, 0.0),
      new THREE.Vector2(0.52, -2.4),
      new THREE.Vector2(0.48, -3.4),
      new THREE.Vector2(0.38, -4.2),
      new THREE.Vector2(0.22, -4.8),
      new THREE.Vector2(0.08, -5.15),
      new THREE.Vector2(0.001, -5.2)
    ];

    const fuselageGeom = new THREE.LatheGeometry(points, 36);
    fuselageGeom.rotateX(Math.PI / 2);
    fuselageGeom.computeVertexNormals();
    const fuselage = new THREE.Mesh(fuselageGeom, pearlWhiteMat);
    this.modelGroup.add(fuselage);

    // Cockpit Windows (787 signature curved 4-panel windshield)
    const cockpitGeom = new THREE.CylinderGeometry(0.523, 0.523, 0.85, 32, 1, false, -Math.PI / 3.4, (2 * Math.PI) / 3.4);
    cockpitGeom.rotateX(Math.PI / 2);
    const cockpit = new THREE.Mesh(cockpitGeom, darkGlassMat);
    cockpit.position.set(0, 0.04, 4.0);
    this.modelGroup.add(cockpit);

    // Airline Blue Belly / Cheatline
    const bellyGeom = new THREE.CylinderGeometry(0.524, 0.524, 5.2, 32, 1, true, Math.PI / 3, (4 * Math.PI) / 3);
    bellyGeom.rotateX(Math.PI / 2);
    const belly = new THREE.Mesh(bellyGeom, darkBlueMat);
    belly.position.set(0, -0.05, 0.2);
    this.modelGroup.add(belly);

    // 2. High-Aspect-Ratio 787 Swept Flex Wings with Raked Wingtips
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 1.3);
    wingShape.lineTo(1.2, 1.15); // root glove
    wingShape.lineTo(6.6, -1.8); // swept LE
    wingShape.lineTo(6.4, -2.35); // raked tip
    wingShape.lineTo(1.4, -1.2); // swept TE
    wingShape.lineTo(0, -0.8);
    wingShape.closePath();

    const wingGeom = new THREE.ExtrudeGeometry(wingShape, {
      depth: 0.09,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.025,
      bevelThickness: 0.025
    });
    wingGeom.rotateX(Math.PI / 2);
    wingGeom.computeVertexNormals();

    // Starboard Wing with positive dihedral
    const rightWing = new THREE.Mesh(wingGeom, pearlWhiteMat);
    rightWing.position.set(0.3, -0.12, 0.4);
    rightWing.rotation.z = -0.06;
    this.modelGroup.add(rightWing);

    // Port Wing
    const leftWingGeom = wingGeom.clone();
    leftWingGeom.scale(-1, 1, 1);
    const leftWing = new THREE.Mesh(leftWingGeom, pearlWhiteMat);
    leftWing.position.set(-0.3, -0.12, 0.4);
    leftWing.rotation.z = 0.06;
    this.modelGroup.add(leftWing);

    // 3. Underwing Twin Turbofans with 787 Chevrons
    const buildUnderwingEngine = (isRight: boolean) => {
      const engGroup = new THREE.Group();

      // Cowling
      const cowlGeom = new THREE.CylinderGeometry(0.38, 0.35, 2.0, 28);
      cowlGeom.rotateX(Math.PI / 2);
      const cowl = new THREE.Mesh(cowlGeom, pearlWhiteMat);
      engGroup.add(cowl);

      // Chrome inlet lip ring
      const lipGeom = new THREE.TorusGeometry(0.36, 0.035, 16, 28);
      const lip = new THREE.Mesh(lipGeom, chromeMat);
      lip.position.set(0, 0, 1.0);
      engGroup.add(lip);

      // Fan disc & spinner cone
      const fanGeom = new THREE.CircleGeometry(0.35, 24);
      const fan = new THREE.Mesh(fanGeom, darkBlueMat);
      fan.position.set(0, 0, 0.85);
      engGroup.add(fan);

      const spinnerGeom = new THREE.ConeGeometry(0.1, 0.28, 16);
      spinnerGeom.rotateX(-Math.PI / 2);
      const spinner = new THREE.Mesh(spinnerGeom, chromeMat);
      spinner.position.set(0, 0, 0.95);
      engGroup.add(spinner);

      // Titanium exhaust nozzle with 787 chevrons
      const exhaustGeom = new THREE.CylinderGeometry(0.31, 0.24, 0.4, 24);
      exhaustGeom.rotateX(Math.PI / 2);
      const exhaust = new THREE.Mesh(exhaustGeom, darkBlueMat);
      exhaust.position.set(0, 0, -1.1);
      engGroup.add(exhaust);

      // Underwing pylon
      const pylonGeom = new THREE.BoxGeometry(0.1, 0.35, 1.1);
      const pylon = new THREE.Mesh(pylonGeom, darkBlueMat);
      pylon.position.set(0, 0.3, 0);
      engGroup.add(pylon);

      engGroup.position.set(isRight ? 2.0 : -2.0, -0.62, 0.5);
      return engGroup;
    };

    this.modelGroup.add(buildUnderwingEngine(true));
    this.modelGroup.add(buildUnderwingEngine(false));

    // 4. Swept Vertical Stabilizer (Airline Tail)
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(-1.8, 2.7);
    finShape.lineTo(-2.5, 2.7);
    finShape.lineTo(-2.0, 0);
    finShape.closePath();

    const finGeom = new THREE.ExtrudeGeometry(finShape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.02 });
    finGeom.rotateY(Math.PI / 2);
    const fin = new THREE.Mesh(finGeom, darkBlueMat);
    fin.position.set(-0.04, 0.35, -3.6);
    this.modelGroup.add(fin);

    // Low-Set Horizontal Tailplanes
    const hTailShape = new THREE.Shape();
    hTailShape.moveTo(0, 0);
    hTailShape.lineTo(2.3, -0.8);
    hTailShape.lineTo(2.1, -1.2);
    hTailShape.lineTo(0, -0.5);
    hTailShape.closePath();

    const hTailGeom = new THREE.ExtrudeGeometry(hTailShape, { depth: 0.06, bevelEnabled: false });
    hTailGeom.rotateX(Math.PI / 2);

    const rightHTail = new THREE.Mesh(hTailGeom, pearlWhiteMat);
    rightHTail.position.set(0.15, 0.1, -4.5);
    rightHTail.rotation.z = -0.06;
    this.modelGroup.add(rightHTail);

    const leftHTailGeom = hTailGeom.clone();
    leftHTailGeom.scale(-1, 1, 1);
    const leftHTail = new THREE.Mesh(leftHTailGeom, pearlWhiteMat);
    leftHTail.position.set(-0.15, 0.1, -4.5);
    leftHTail.rotation.z = 0.06;
    this.modelGroup.add(leftHTail);

    // 5. Navigation & Strobe Lights
    const portLight = new THREE.PointLight(0xff0033, 1.2, 6);
    portLight.position.set(-6.5, 0.1, -2.1);
    this.modelGroup.add(portLight);
    this.navLights.push(portLight);

    const stbdLight = new THREE.PointLight(0x00ff66, 1.2, 6);
    stbdLight.position.set(6.5, 0.1, -2.1);
    this.modelGroup.add(stbdLight);
    this.navLights.push(stbdLight);

    const tailLight = new THREE.PointLight(0xffffff, 1.0, 5);
    tailLight.position.set(0, 2.9, -5.8);
    this.modelGroup.add(tailLight);
    this.navLights.push(tailLight);

    const strobeLight = new THREE.PointLight(0xffffff, 2.5, 10);
    strobeLight.position.set(0, 0.55, 0.2);
    this.modelGroup.add(strobeLight);
    this.strobeLights.push(strobeLight);

    const strobeGeom = new THREE.SphereGeometry(0.06, 8, 8);
    const strobeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const strobeMesh = new THREE.Mesh(strobeGeom, strobeMat);
    strobeMesh.position.set(0, 0.55, 0.2);
    this.modelGroup.add(strobeMesh);
    this.strobeMeshes.push(strobeMesh);
  }

  public update(dt: number): void {
    this.strobeTimer += dt;
    const flash = (this.strobeTimer % 1.2 < 0.08) || (this.strobeTimer % 1.2 > 0.16 && this.strobeTimer % 1.2 < 0.24);
    for (const light of this.strobeLights) {
      light.intensity = flash ? 3.0 : 0.0;
    }
    for (const mesh of this.strobeMeshes) {
      mesh.visible = flash;
    }
  }
}
