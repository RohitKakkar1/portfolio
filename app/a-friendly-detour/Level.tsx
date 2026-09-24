// @ts-nocheck

import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import {Experience} from "@/components/projects/Experience";
import { Overlay } from "@/components/projects/Overlay";
import UXExperience from "./UXExperience";
import { useRef } from "react";
import { useEffect } from "react";
import * as THREE from 'three'
import { RigidBody } from "@react-three/rapier";
import { useMatcapTexture, Center, Text3D } from '@react-three/drei'
import { Physics } from "@react-three/rapier";
import { MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

const material = new THREE.MeshMatcapMaterial()


export function ThreeDText({ position = [0, 0, 0], rotation = [0, 0, 0], textt = " " }) {
    const project = useRef()

    const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)


    useEffect(() => {
        matcapTexture.colorSpace = THREE.SRGBColorSpace;
        matcapTexture.needsUpdate = true;

        material.matcap = matcapTexture;
        material.needsUpdate = true;
    });  // Include matcapTexture and material as dependencies

    const blackMaterial = new MeshStandardMaterial({ color: "blue" });



    const characterRefs = useRef([]);

    const TextCharacters = ({ text, onClick }) => {

        const characterSpacing = 0.25; // Adjust this value as needed
        const characters = text.split('');

        return (
            <>
                {characters.map((char, index) => (
                    <RigidBody
                        key={index} // Use index as a unique key
                        colliders="cuboid"
                        type="fixed"
                        ref={(ref) => (characterRefs.current[index] = ref)} // Assign each ref dynamically
                    >
                        <Center position={[index * characterSpacing, 0, 0]}>
                            <Text3D
  material={blackMaterial}
                                font="/fonts/helvetiker_regular.typeface.json"
                                size={0.2}
                                height={0.02}
                                curveSegments={12}
                                bevelEnabled
                                bevelThickness={0.01}
                                bevelSize={0.01}
                                bevelOffset={0}
                                bevelSegments={5}
                                position={[index * characterSpacing, characterSpacing, 0]} // Position each character along the x-axis
                            >
                                {char}
                            </Text3D>
                        </Center>
                    </RigidBody>
                ))}
            </>
        );
    };

    return <group position={position} rotation={rotation}>
        <TextCharacters text={textt} />
    </group>

}

export function TownHouse({ position = [0, 0, 0] }) {
    const TownHouse = useGLTF('/models/model-19.gltf');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = TownHouse.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [TownHouse.scene]);

    return (
        <group
            position={position}
            dispose={null}
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, Math.PI * 0.2, 0]}
                scale={0.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}

export function Teddy({ position = [0, 0, 0] }) {
    const TownHouse = useGLTF('/models/model-20.gltf');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = TownHouse.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [TownHouse.scene]);

    return (
        <group
            position={position}
            dispose={null}
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, Math.PI * 0.2, 0]}
                scale={0.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}
export function Teddy2({ position = [0, 0, 0] }) {
    const TownHouse = useGLTF('/models/model-21.gltf');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = TownHouse.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [TownHouse.scene]);

    return (
        <group
            position={position}
            dispose={null}
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, - Math.PI * 0.2, 0]}
                scale={0.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}
export function Teddy3({ position = [0, 0, 0] }) {
    const TownHouse = useGLTF('/models/model-28.gltf');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = TownHouse.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [TownHouse.scene]);

    return (
        <group
            position={position}
            dispose={null}
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, - Math.PI * 0.2, 0]}
                scale={0.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}

const Level = () => {
  return (
    <>
        <Physics>
        {/* <ThreeDText position={[-0.5, -0.25, 10]} rotation={[0, 0, 0]} textt="KIRAN NARVEKAR" /> */}

                <TownHouse position={[0, 0, 10]} />
                 <Teddy position={[0, 0, -2]} />
                                  <Teddy2 position={[1, 0, -2]} />
                                                                    <Teddy3 position={[2, 0, -2]} />



        </Physics>

    </>
  );
};


export default Level;
