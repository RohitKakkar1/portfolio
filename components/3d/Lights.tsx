// @ts-nocheck

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, random } from "@react-three/drei";
export default function Lights({ isDay }) {
  const light = useRef();

  useFrame((state) => {
    light.current.position.z = state.camera.position.z + 1 - 4;
    light.current.target.position.z = state.camera.position.z - 4;
    light.current.target.updateMatrixWorld();
  });

  return (
    <>
      {/* Directional Light (Sunlight / Moonlight) */}
      <directionalLight
        ref={light}
        castShadow
        position={[10, 4, 1]}
        intensity={isDay ? 5 : 0.3} // Bright during the day, dim at night
        color={isDay ? "#ffffff" : "#F2F2FF"} // Warm white during day, cool blue at night
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />

      {/* Ambient Light (General illumination) */}
      <ambientLight intensity={isDay ? 0.9 : 0.1} color={isDay ? "#ffffff" : "#060619"} />

      

      {/* Optional: Add a Point Light (Moonlight) */}
      {!isDay && (
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#8888ff" />
      )}

       {/* Streetlight Point Lights */}
      {!isDay &&
        [
          [-5, 1.5, 0], // Example streetlight positions
          [0, 1.5, 5],
          [5, 1.5, 10],
          [-10, 1.5, -5],
          [10, 1.5, -10],
        ].map((position, index) => (
          <pointLight
            key={index}
            position={position}
            intensity={10} // Adjust intensity as needed
            distance={8} // How far the light reaches
            decay={2} // Light decay over distance
            color="#ffd27f" // Warm yellow light
          />
        ))}
    </>
  );
}
