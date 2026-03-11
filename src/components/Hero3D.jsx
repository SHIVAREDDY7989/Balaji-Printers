import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef();
  
  // Create randomized CMYK-ish materials
  const colors = ['#00f2fe', '#ff0844', '#f59e0b', '#0ea5e9', '#ec4899'];
  const shapeConfigs = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 5
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      ],
      scale: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      geometry: Math.random() > 0.5 ? 'box' : (Math.random() > 0.5 ? 'sphere' : 'torus')
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.2;
      groupRef.current.rotation.x = Math.cos(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {shapeConfigs.map((config, i) => (
        <Float key={i} speed={1.5} rotationIntensity={2} floatIntensity={3}>
          <mesh position={config.position} rotation={config.rotation} scale={config.scale}>
            {config.geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
            {config.geometry === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
            {config.geometry === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
            
            <meshStandardMaterial 
              color={config.color} 
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00f2fe" />
      <pointLight position={[0, 0, 5]} intensity={2} color="#ff0844" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <FloatingShapes />
      
      {/* Background Environment for reflections */}
      <Environment preset="city" />
    </Canvas>
  );
}
