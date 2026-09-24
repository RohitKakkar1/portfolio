// @ts-nocheck

import { Canvas, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { GizmoViewport } from "@react-three/drei";
import { GizmoHelper } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import CameraControlsCover from './cameraControlsCover'
import { ScrollControls } from "@react-three/drei";
import { AccumulativeShadows } from "@react-three/drei";
import { RandomizedLight } from "@react-three/drei";
import {OverlayCover} from './coverOverlay'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";


function DynamicPlanes() {
    const viewport = useThree((state) => state.viewport);


  return (
    <>
      {/* Top Plane */}
      <mesh position={[0, viewport.height / 2, 0]} receiveShadow>
          <planeGeometry args={[viewport.width, viewport.height]} />
        <meshStandardMaterial color="#6BE6FC" />
      </mesh>

      {/* Bottom Plane (Ground) */}
      <RigidBody type="fixed">
        <mesh position={[0, -viewport.height / 2, 0]} receiveShadow>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshStandardMaterial color="#E7B760" />
        </mesh>
      </RigidBody>
    </>
  );
}

function MovingBall() {
   const ballRef = useRef();
  let angle = useRef(0); // Keeps track of the current angle

  useFrame(() => {
    if (ballRef.current) {
      angle.current += 0.02; // Adjust speed by changing this value
      const radius = 3; // Radius of the circle
      const x = Math.cos(angle.current) * radius;
      const z = Math.sin(angle.current) * radius;

      // Update position to follow the circular path
      ballRef.current.setTranslation({ x, y: 2, z });
    }
  });

  return (
    <RigidBody ref={ballRef} colliders="ball" type="kinematicPosition">
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );

}

function FallingBall() {
  return (
    <RigidBody colliders="ball" restitution={0.6} friction={0.2}>
      <mesh position={[10, 8, 0.75]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
}



export function CanvasComponent() {
     return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <OverlayCover />
      <Canvas
        shadows
        orthographic
        camera={{
          left: -10,
          right: 10,
          top: 10,
          bottom: -10,
          near: 0.1,
          far: 100,
          position: [0, 5, 10],
          zoom: 50,
        }}
      >


        
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.7} />

        {/* Directional Light for Shadows */}
        <directionalLight
          position={[3, 5, 2]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.1}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <Physics gravity={[0, -3.81, 0]}>
          <DynamicPlanes />

          {/* Static Boxes with Shadows */}
          {[...Array(5)].map((_, i) => (
            <RigidBody key={i} type="fixed">
              <mesh position={[i * 3 - 3, 1, 0.1]} castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#FFFFFF" />
              </mesh>
            </RigidBody>
          ))}

        <RigidBody type="fixed" position={[0, -7, 0]} colliders="cuboid">
        <mesh castShadow receiveShadow rotation={[ 0, Math.PI * 0.5 , 0]}>
            <boxGeometry args={[2, 1, 10]} /> 
            <meshStandardMaterial color="orange" />
        </mesh>
        </RigidBody>


          <RCITY />

          {/* Falling Ball */}
          {/* <MovingBall /> */}
          <FallingBall />
        </Physics>
        <GizmoHelper>
              <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
              {/* alternative: <GizmoViewcube /> */}
            </GizmoHelper>
            

      </Canvas>

    </div>
  );


}

export function RCITY({ position = [0, 0, -0.5] }) {
    const comp = useGLTF('/models/cover.glb');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = comp.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [comp.scene]);

    return (
        <group position={position} dispose={null}>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, Math.PI * 0.5, 0]}
                scale={2}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>
        </group>
    );
}


