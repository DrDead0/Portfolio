import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';

// Aesthetic floating particles effect
const ThreeDParticles = () => {
  return (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <Sparkles
          count={80}
          scale={[12, 8, 8]}
          size={3}
          color="#b39ddb"
          speed={0.5}
          noise={2}
        />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDParticles;
