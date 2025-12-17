import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  // Slightly smaller scale on mobile to reduce GPU load
  const scale = isMobile ? 1.8 : 2.5;

  return (
    <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (event) => setPrefersReducedMotion(event.matches);
    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className='w-full h-full rounded-2xl bg-gradient-to-br from-[#0b1224] via-[#111827] to-[#1f2937] flex items-center justify-center text-secondary text-sm px-4 text-center'>
        3D background is paused to honor reduced-motion settings.
      </div>
    );
  }

  return (
    <Canvas
      shadows={false}
      frameloop='demand'
      dpr={[1, isMobile ? 1 : 1.5]}
      gl={{ preserveDrawingBuffer: false, powerPreference: "high-performance", antialias: false, alpha: true, stencil: false, depth: true }}
      camera={{
        fov: 42,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.6}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;