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
// npm install three @react-three/fiber @react-three/drei

// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrthographicCamera, OrbitControls, useTexture } from "@react-three/drei";

// function Globe() {
//   const meshRef = useRef();

//   // Load earth texture (public folder)
//   const texture = useTexture("/earth-map.jpg");

//   // Optional slow rotation
//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.002;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[2, 64, 64]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// }

// export default function OrthographicGlobe() {
//   return (
//     <div className="w-screen h-screen bg-gray-900">
//       <Canvas>
//         {/* Orthographic Camera */}
//         <OrthographicCamera
//           makeDefault
//           position={[5, 5, 5]}
//           zoom={120}
//         />

//         {/* Lights */}
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 5, 5]} />

//         {/* Globe */}
//         <Globe />

//         {/* Controls */}
//         <OrbitControls enableZoom={true} />
//       </Canvas>
//     </div>
//   );
// }
{/* <mesh position={[x, y, z]}>
  <sphereGeometry args={[0.05]} />
  <meshStandardMaterial color="red" />
</mesh> */}
{/* <OrbitControls enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}

// i want clickable countries
// 📍 location markers with lat/long
// 🛰️ real-time data overlays (weather, flights)
// 🗺️ flat map → globe animation