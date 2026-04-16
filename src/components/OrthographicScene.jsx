import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function OrthographicScene() {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <Canvas>
        {/* Orthographic Camera */}
        <OrthographicCamera makeDefault position={[5, 5, 5]} zoom={100} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />

        {/* Object */}
        <Box />

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
