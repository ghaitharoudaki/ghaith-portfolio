import { useEffect, useRef } from "react";

/**
 * Interactive Three.js UFO used as a decorative hero visual.
 */
export default function Ufo3dShape() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let disposed = false;
    let cleanup = () => {};

    void (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      const scene = new THREE.Scene();
      const isCompact = window.matchMedia("(max-width: 767px)").matches;
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
      camera.position.set(0, isCompact ? -0.15 : 0, isCompact ? 13.8 : 12.8);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);

      const ufoGroup = new THREE.Group();
      ufoGroup.position.y = isCompact ? 1.9 : 1.72;
      ufoGroup.scale.setScalar(isCompact ? 0.88 : 1.12);

      const darkMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a,
        roughness: 0.8,
        metalness: 0.2,
      });
      const redMaterial = new THREE.MeshStandardMaterial({
        color: 0xef5350,
        roughness: 0.4,
        metalness: 0.1,
      });

      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.3,
          metalness: 0.1,
        }),
      );
      dome.position.y = 0.7;
      ufoGroup.add(dome);

      const upperRing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.75, 1.1, 0.3, 48),
        darkMaterial,
      );
      upperRing.position.y = 0.55;
      ufoGroup.add(upperRing);

      const saucerTop = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 2.8, 0.4, 64),
        redMaterial,
      );
      saucerTop.position.y = 0.2;
      ufoGroup.add(saucerTop);

      const saucerBottom = new THREE.Mesh(
        new THREE.CylinderGeometry(2.8, 1.4, 0.3, 64),
        redMaterial,
      );
      saucerBottom.position.y = -0.15;
      ufoGroup.add(saucerBottom);

      const lowerBase = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.1, 0.25, 48),
        darkMaterial,
      );
      lowerBase.position.y = -0.425;
      ufoGroup.add(lowerBase);

      const lightsGroup = new THREE.Group();
      const bulbGeometry = new THREE.SphereGeometry(0.12, 16, 16);
      const bulbMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const lightCount = 8;

      for (let index = 0; index < lightCount; index += 1) {
        const angle = (index / lightCount) * Math.PI * 2;
        const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
        bulb.position.set(Math.cos(angle) * 2, -0.22, Math.sin(angle) * 2);
        bulb.scale.set(1.2, 0.4, 1.2);
        bulb.rotation.y = -angle;
        bulb.rotation.z = -0.25;
        lightsGroup.add(bulb);
      }
      ufoGroup.add(lightsGroup);

      const beamCanvas = document.createElement("canvas");
      beamCanvas.width = 2;
      beamCanvas.height = 256;
      const context = beamCanvas.getContext("2d");

      if (context) {
        const gradient = context.createLinearGradient(0, 0, 0, 256);
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.25)");
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)");
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, 2, 256);
      }

      const beamMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.CanvasTexture(beamCanvas),
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const beamHeight = isCompact ? 3.7 : 4.2;
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 2.2, beamHeight, 48, 1, true),
        beamMaterial,
      );
      beam.position.y = -0.55 - beamHeight / 2;
      ufoGroup.add(beam);

      scene.add(ufoGroup);
      scene.add(new THREE.AmbientLight(0xffffff, 1.4));

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(-6, 8, 6);
      scene.add(directionalLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
      fillLight.position.set(6, -2, 4);
      scene.add(fillLight);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        const rect = currentMount.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / currentMount.clientWidth) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / currentMount.clientHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const clock = new THREE.Clock();
      let animationFrameId = 0;

      const animate = () => {
        const elapsed = clock.getElapsedTime();
        ufoGroup.rotation.y = elapsed * 0.3 + mouseX * 0.15;
        ufoGroup.rotation.z = Math.sin(elapsed * 1.5) * 0.03 + mouseY * 0.05;
        ufoGroup.rotation.x = Math.cos(elapsed * 1.1) * 0.02 - mouseY * 0.05;
        ufoGroup.position.y =
          (isCompact ? 1.9 : 1.72) + Math.sin(elapsed * 1.8) * 0.15;
        beamMaterial.opacity = 0.8 + Math.sin(elapsed * 3) * 0.2;
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        const nextWidth = currentMount.clientWidth;
        const nextHeight = currentMount.clientHeight;
        camera.aspect = nextWidth / nextHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(nextWidth, nextHeight);
      };

      window.addEventListener("resize", handleResize);

      cleanup = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        beamMaterial.map?.dispose();
        beamMaterial.dispose();
        bulbMaterial.dispose();
        darkMaterial.dispose();
        redMaterial.dispose();
        renderer.dispose();

        if (currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="ufo-three-scene"
      aria-label="Interactive 3D UFO illustration"
      role="img"
    />
  );
}
