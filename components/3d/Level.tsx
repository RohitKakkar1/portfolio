// @ts-nocheck

import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text, useGLTF } from '@react-three/drei'
import { TrimeshCollider } from '@react-three/rapier'
import { CapsuleCollider } from '@react-three/rapier'
import { ThreeWorld } from '../portal/ThreeWorld'
import { MonsterStage } from '../portal/ThreeWorld'
import { Group, Pi } from 'lucide-react'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { useMatcapTexture, Center, Text3D } from '@react-three/drei'
import { useEffect } from 'react'
import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useAtom } from "jotai";
import useGame from './stores/useGame.jsx'
import { Html } from '@react-three/drei'
import { useModalStore } from './stores/useModalStore'
import About from './components/About/About'
import Project from './components/projects/projects'
import { TrafficSimulation } from './TrafficSimulation'
import { Road } from './TrafficSimulation'
import { Police } from './TrafficSimulation'
import { Select } from "@react-three/postprocessing";
import { EffectComposer, Selection, Outline } from "@react-three/postprocessing";
import { Sky, Bvh } from "@react-three/drei";


const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const torusGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 50);

const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
const floor3Material = new THREE.MeshStandardMaterial({ color: 'black' })

const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' })
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered' })
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })
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


    const characterRefs = useRef([]);

    const TextCharacters = ({ text, onClick }) => {

        const characterSpacing = 0.9; // Adjust this value as needed
        const characters = text.split('');

        return (
            <>
                {characters.map((char, index) => (
                    <RigidBody
                        key={index} // Use index as a unique key
                        colliders="cuboid"
                        type="dynamic"
                        ref={(ref) => (characterRefs.current[index] = ref)} // Assign each ref dynamically
                        onClick={() => onClick(char)} // Pass the character to the onClick handler
                    >
                        <Center position={[index * characterSpacing, 0, 0]}>
                            <Text3D
                                material={material}
                                font="/fonts/helvetiker_regular.typeface.json"
                                size={0.75}
                                height={0.2}
                                curveSegments={12}
                                bevelEnabled
                                bevelThickness={0.02}
                                bevelSize={0.02}
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

export function Portal({ position = [0, 0, 0] }) {


    return <group position={position}>

        {/* <mesh geometry={boxGeometry} material={floor1Material} position={[0, - 0.1, 0]} scale={[10, 0.2, 10]} receiveShadow /> */}

        <RigidBody colliders={false} type="fixed" name="void">
            <mesh
                geometry={boxGeometry}
                material={floor3Material}
                position={[0.5, 0.5, -10]}  // Start the void sensor in the center or wherever you want
                scale={[0.1, 1, 0.1]}       // Standard scale (can be changed for visual purposes)
                receiveShadow
            />
            <mesh
                geometry={boxGeometry}
                material={floor3Material}
                position={[-0.5, 0.5, -10]}  // Start the void sensor in the center or wherever you want
                scale={[0.1, 1, 0.1]}       // Standard scale (can be changed for visual purposes)
                receiveShadow
            />
            <mesh
                geometry={boxGeometry}
                material={floor3Material}
                position={[0, 1, -10]}  // Start the void sensor in the center or wherever you want
                scale={[1, 0.1, 0.1]}       // Standard scale (can be changed for visual purposes)
                receiveShadow
            />




            <CuboidCollider
                position={[0, 0.5, -10]}
                sensor
                args={[0.5, 0.1, 0.3]}         // Size of the cuboid (adjust if necessary)
            />
        </RigidBody>


    </group>
}

export function BlockStep({ position = [0, 0, 0], speed = 0.5 }) {
    const model = useGLTF('/models/Car.glb');
    const groupRef = useRef();

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = model.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [model.scene]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.position.z += speed * delta; // Move upward at a constant speed
        }
    });

    return (
        <group ref={groupRef} position={position}>
            <RigidBody
                type="fixed"
                colliders="hull"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={0.1}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={0.1} receiveShadow castShadow />
            </RigidBody>
        </group>
    );
}

export function RCITY({ position = [0, 0, 0] }) {
    const comp = useGLTF('/models/RCITY.glb');

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
                rotation={[0, 0, 0]}
                scale={1}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>
        </group>
    );
}

export function CruiseShip({ initialPosition = [0, 0, 0], speed = 0.01 }) {
    const comp = useGLTF("/models/CruiseShip.glb");
    const shipRef = useRef();

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = comp.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [comp.scene]);

    // Add slow movement using useFrame
    useFrame(() => {
        if (shipRef.current) {
            // Update the position on the X axis
            shipRef.current.position.z += speed;

            // Reset the position when it exceeds a threshold for looping effect
            if (shipRef.current.position.z > 10) {
                shipRef.current.position.z = -10;
            }
        }
    });

    return (
        <group ref={shipRef} position={initialPosition} dispose={null}>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={0.6}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={0.2} receiveShadow castShadow />
            </RigidBody>
        </group>
    );
}


export function SkyScraper({ position = [0, 0, 0] }) {
    const [hovered, setHovered] = useState(false); // Track hover state
    const skyscraper = useGLTF("/models/Skyscraper.glb");

    // Clone the scene and ensure shadows are enabled
    const clonedScene = useMemo(() => {
        const clone = skyscraper.scene.clone();
        clone.children.forEach((mesh) => {
            // @ts-ignore

            if (mesh.isMesh) {
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }
        });
        return clone;
    }, [skyscraper.scene]);

    const { openModal } = useModalStore();

    const projectNames = {
        one: "Hero",
        two: "Zero",
        three: "Salt",
        four: "Bae",
    };

    const handleClick = (elementID) => {
        if (elementID === "about") {
            openModal("About me", <About />, elementID);
        } else {
            openModal(projectNames[elementID], <Project projectID={elementID} />, elementID);
        }
    };

    return (
        <group
            position={position}
            dispose={null}
            onPointerOver={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setHovered(true); // Enable hover state
            }}
            onPointerOut={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setHovered(false); // Disable hover state
            }}
            onClick={() => handleClick("four")} // Handle click event
        >
            <Select enabled={hovered}>
                <RigidBody
                    type="fixed"
                    colliders="trimesh"
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                    restitution={0.2}
                    friction={0}
                >
                    <primitive object={clonedScene} scale={1} receiveShadow castShadow />
                </RigidBody>
            </Select>
        </group>
    );
}

export function TownHouse({ position = [0, 0, 0] }) {
    const TownHouse = useGLTF('/models/Town House.glb');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = TownHouse.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [TownHouse.scene]);

    const { openModal } = useModalStore();

    const projectNames = {
        one: "Hero",
        two: "zero",
        three: "salt",
        four: "bae",
    };

    const handleClick = (elementID) => {
        if (elementID === "about") {
            openModal("About me", <About />, elementID)
        } else {
            openModal(projectNames[elementID], <Project projectID={elementID} />, elementID)
        }
    }



    return (
        <group
            position={position}
            dispose={null}
            onClick={() => handleClick("four")} // Add the onClick here
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, Math.PI * 0.5, 0]}
                scale={0.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}
export function House({ position = [0, 0, 0] }) {
    const TownHouse = useGLTF('/models/House.gltf');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = TownHouse.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [TownHouse.scene]);

    const { openModal } = useModalStore();

    const projectNames = {
        one: "Hero",
        two: "zero",
        three: "salt",
        four: "bae",
    };

    const handleClick = (elementID) => {
        if (elementID === "about") {
            openModal("About me", <About />, elementID)
        } else {
            openModal(projectNames[elementID], <Project projectID={elementID} />, elementID)
        }
    }



    return (
        <group
            position={position}
            dispose={null}
            onClick={() => handleClick("four")} // Add the onClick here
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, Math.PI * 0.5, 0]}
                scale={0.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}

export function Library({ position = [0, 0, 0] }) {
    const Library = useGLTF('/models/library.glb');

    // Memoize the cloned scene
    const clonedScene = useMemo(() => {
        const clone = Library.scene.clone(); // Clone the scene to create a new instance
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [Library.scene]);

    const { openModal } = useModalStore();

    const projectNames = {
        one: "Hero",
        two: "zero",
        three: "salt",
        four: "bae",
    };

    const handleClick = (elementID) => {
        if (elementID === "about") {
            openModal("About me", <About />, elementID)
        } else {
            openModal(projectNames[elementID], <Project projectID={elementID} />, elementID)
        }
    }



    return (
        <group
            position={position}
            dispose={null}
            onClick={() => handleClick("four")} // Add the onClick here
        >
            <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={1.5}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={1} receiveShadow castShadow />
            </RigidBody>

        </group>
    );
}

export function BlockSpinner({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [speed] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? - 1 : 1))

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
    })

    return <group position={position}>
        <mesh geometry={boxGeometry} material={floor2Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[3.5, 0.3, 0.3]} castShadow receiveShadow />
        </RigidBody>
    </group>
}

export function BlockLimbo({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const y = Math.sin(time + timeOffset) + 1.15
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2] })
    })

    return <group position={position}>
        <mesh geometry={boxGeometry} material={floor2Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[3.5, 0.3, 0.3]} castShadow receiveShadow />
        </RigidBody>
    </group>
}

export function BlockAxe({ position = [0, 0, 0] }) {
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const x = Math.sin(time + timeOffset) * 1.25
        obstacle.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1] + 0.75, z: position[2] })
    })

    return <group position={position}>
        <mesh geometry={boxGeometry} material={floor2Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <mesh geometry={boxGeometry} material={obstacleMaterial} scale={[1.5, 1.5, 0.3]} castShadow receiveShadow />
        </RigidBody>
    </group>
}

function Bounds({ length = 1 }) {
    return <>
        <RigidBody type="fixed" restitution={0.2} friction={0}>
            <CuboidCollider
                type="fixed"
                args={[30, 0.1, 2 * length]}
                position={[-15, -0.1, - 15]}
                restitution={0.2}
                friction={1}
                userData={{ isCollider: true }}

            />
        </RigidBody>
    </>
}

export function ProjectPop({ elementID }) {
    const { openModal } = useModalStore();

    const projectNames = {
        one: "Hero",
        two: "zero",
        three: "salt",
        four: "bae",
    };

    const handleClick = (elementID) => {
        if (elementID === "about") {
            openModal("About me", <About />, elementID)
        } else {
            openModal(projectNames[elementID], <Project projectID={elementID} />, elementID)
        }
    }


    return <>
        <RigidBody type="fixed">
            <mesh
                geometry={new THREE.BoxGeometry(1, 1, 1)}
                material={new THREE.MeshStandardMaterial({ color: 'red' })}
                onClick={() => handleClick("about")}
                position={[0, 0, 10]}
            >
                {/* Optionally, add children like text or additional visuals */}
            </mesh>

            <mesh castShadow>
                {["one", "two", "three", "four"].map((projectID, index) => (
                    <mesh
                        key={projectID}
                        geometry={new THREE.BoxGeometry(1, 1, 1)}
                        material={new THREE.MeshStandardMaterial({ color: 'blue' })}
                        position={[index * 2, 0, 0]} // Spread meshes along the X-axis, 2 units apart
                        onClick={() => handleClick(projectID)}
                    >
                        {/* Optionally, add children like text or additional visuals */}
                    </mesh>
                ))}
            </mesh>
        </RigidBody>


    </>
}

export function Level({
    count = 5,
    types = [BlockSpinner, BlockAxe, BlockLimbo],
    seed = 0
}) {
    const blocks = useMemo(() => {
        const blocks = []

        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)]
            blocks.push(type)
        }

        return blocks
    }, [count, types])


    return <>
        {/* <Portal position={[0, 0, 0]} /> 
        <ThreeDText position={[-5, 0.5, 5]} rotation={[ - Math.PI / 2 , 0 , Math.PI / 4]} textt="ROHIT KAKKAR" />

        <ThreeDText position={[0, 0.5, -3]} textt="PROJECTS" />

        <ThreeDText position={[3, 0.5, -5]} rotation={[0, Math.PI / 2 ,0]} textt="PLAYGROUND" />  */}

        <ThreeDText position={[-3, 0.5, -10]} rotation={[0, Math.PI / 2, 0]} textt="WORKEX" />
        <ThreeDText position={[15, 0.5, 5]} rotation={[- Math.PI / 2, Math.PI / 2, Math.PI / 2]} textt="ROHIT KAKKAR" />

        <RCITY position={[0, 0, 10]} />

            <Selection>
                <Effects />
                <SkyScraper position={[11, 0, 4]} />
            </Selection>

        <TownHouse position={[11, 0, 0]} />
                <TownHouse position={[11, 0, -5]} />


        <SkyScraper position={[13, 0, 4]} />
        <Library position={[2, 0.5, -13]} />
        <CruiseShip initialPosition={[-8, -1.5, 0]} speed={0.009} />




        {/* {blocks.map((Block, index) => <Block key={index} position={[-12, 0, - (index + 1) * 4]} />)} */}

        {/* <BlockEnd position={[0, 0, - (count + 1) * 2]} /> */}
        {/* <Road />
        <Police speed={0.5} /> */}




        {/* <ProjectPop /> */}
        {/* <TrafficSimulation /> */}

              
        {/* <Bounds length={count + 5} /> */}




    </>
    function Effects() {
        return (
            <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
                <Outline visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} blur edgeStrength={10} />
            </EffectComposer>
        );
    }

}
