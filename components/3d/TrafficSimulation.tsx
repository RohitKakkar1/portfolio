// @ts-nocheck

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';


export function Police({ speed = 0.5 }) {
    const police = useGLTF('/models/police.glb');
    const groupRef = useRef();
    const progress = useRef(0); // Track progress along the road path (0 to 1)

    // Memoize the police car scene
    const clonedScene = useMemo(() => {
        const clone = police.scene.clone();
        clone.children.forEach((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
        return clone;
    }, [police.scene]);

    // Define a road path
    const roadPath = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, -10),
            new THREE.Vector3(-5, 0, 0),
            new THREE.Vector3(0, 0, 10),
            new THREE.Vector3(5, 0, 0),
            new THREE.Vector3(10, 0, -10),
        ]);
    }, []);

    // Update car position along the road
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Increment progress along the path
            progress.current = (progress.current + speed * delta * 0.1) % 1;

            // Get position and orientation on the road path
            const position = roadPath.getPointAt(progress.current);
            const tangent = roadPath.getTangentAt(progress.current);

            groupRef.current.position.copy(position); // Update position
            groupRef.current.lookAt(position.clone().add(tangent)); // Orient along the path
        }
    });

    return (
        <group ref={groupRef}>
            <RigidBody
                type="fixed"
                colliders="hull"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={1}
                restitution={0.2}
                friction={0}
            >
                <primitive object={clonedScene} scale={0.27} receiveShadow castShadow />
            </RigidBody>
        </group>
    );
}

// Debug the road path
export function Road() {
    const roadPath = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, -10),
            new THREE.Vector3(-5, 0, 5),
            new THREE.Vector3(0, 0, 5),
            new THREE.Vector3(5, 0, 0),
            new THREE.Vector3(10, 0, -10),
        ]);
    }, []);

    const lineGeometry = useMemo(() => {
        const points = roadPath.getPoints(100); // Generate points along the path
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [roadPath]);

    return (
        <line>
            <primitive object={lineGeometry} attach="geometry" />
            <lineBasicMaterial color="black" linewidth={2} />
        </line>
    );
}

// Create a Road Network with a Square Path
const createSquareRoadNetwork = () => {
    return [
        new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, -10),
            new THREE.Vector3(-10, 0, 0),
            new THREE.Vector3(-10, 0, 10),
            new THREE.Vector3(0, 0, 15),
            new THREE.Vector3(10, 0, 10),
            new THREE.Vector3(10, 0, 0),
            new THREE.Vector3(10, 0, -10),
            new THREE.Vector3(10, 0, -20),
            new THREE.Vector3(0, 0, -25),
            new THREE.Vector3(-10, 0, -10),
            new THREE.Vector3(-20, 0, -20), // Close the loop
        ]),
    ];
};

// Road Network Visualization Component
export function RoadNetwork() {
    const roads = useMemo(() => createSquareRoadNetwork(), []); // Memoize the road data

    return (
        <>
            {roads.map((road, index) => (
                <line key={index}>
                    <bufferGeometry
                        attach="geometry"
                        setFromPoints={road.getPoints(100)} // Get 100 points along the curve
                    />
                    <lineBasicMaterial attach="material" color="gray" />
                </line>
            ))}
        </>
    );
}

// Car Component
export function Car({ path, speed = 0.5, startProgress = 0 }) {
    const groupRef = useRef();
    const progress = useRef(startProgress); // Track the car's position on the path

    // Load the car model and clone it for each car
    const model = useGLTF('/models/Car.glb');
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
            // Increment progress along the path
            progress.current = (progress.current + speed * delta * 0.1) % 1;

            // Get position and orientation on the path
            const position = path.getPointAt(progress.current);
            const tangent = path.getTangentAt(progress.current);

            // Update car's position and rotation
            groupRef.current.position.copy(position);
            groupRef.current.lookAt(position.clone().add(tangent));
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={clonedScene} scale={0.01} receiveShadow castShadow />
        </group>
    );
}

// Traffic Simulation Component
export function TrafficSimulation() {
    const roads = useMemo(() => createSquareRoadNetwork(), []); // Memoize the road data

    // Define cars with their paths and speeds
    const cars = [
        { path: roads[0], speed: 0.3, startProgress: 0 },
        { path: roads[0], speed: 0.3, startProgress: 0.25 },
        { path: roads[0], speed: 0.3, startProgress: 0.5 },
        { path: roads[0], speed: 0.3, startProgress: 0.3 },
        { path: roads[0], speed: 0.3, startProgress: 0.1 },
        { path: roads[0], speed: 0.3, startProgress: 0.4 },
                { path: roads[0], speed: 0.3, startProgress: 0.23 },
        { path: roads[0], speed: 0.3, startProgress: 0.15 },
        { path: roads[0], speed: 0.3, startProgress: 0.05 },
        { path: roads[0], speed: 0.3, startProgress: 0.45 },


    ];

    return (
        <>
            <RoadNetwork />
            {cars.map((car, index) => (
                <Car
                    key={index}
                    path={car.path}
                    speed={car.speed}
                    startProgress={car.startProgress}
                />
            ))}
        </>
    );
}