'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import React from 'react';

function LiquidOrb() {
  return (
    <Sphere args={[1, 64, 64]} scale={1.4}>
      <MeshDistortMaterial
        color={'#7dd3fc'}
        roughness={0.2}
        metalness={0.2}
        envMapIntensity={0.7}
        distort={0.4}
        speed={1.4}
      />
    </Sphere>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full aspect-[16/9] rounded-2xl border border-zinc-800 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 2]}>
        <color attach="background" args={[0.04, 0.04, 0.05]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[4, 5, 3]} intensity={0.9} />
        <directionalLight position={[-4, -3, -2]} intensity={0.4} />
        <LiquidOrb />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}

