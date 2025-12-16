import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { SRGBColorSpace } from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // Normalize texture to current Three.js API to avoid encoding warnings
  if (decal) {
    decal.colorSpace = SRGBColorSpace;
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {isVisible ? (
        <Canvas
          frameloop='demand'
          dpr={[1, 1]}
          gl={{ 
            preserveDrawingBuffer: true,
            antialias: false,
            powerPreference: "high-performance",
            alpha: true,
            stencil: false,
            depth: true
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default BallCanvas;