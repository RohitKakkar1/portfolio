// Camera.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

const CameraControls = () => {
    const scroll = useScroll();
    const cameraRef2 = useRef();

    // Define the path for the camera to follow
    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(2, 4, -1),
        new THREE.Vector3(2, 3, 2),
        new THREE.Vector3(3, 2, 3),
        new THREE.Vector3(6, 5, 6),
    ]);

    // Define an array of look-at points corresponding to the path
    const lookAtPoints = [
        new THREE.Vector3(-1, 4, -5), // Look at here when the camera is at point 0
        new THREE.Vector3(0, 1, 0), // Look at here when the camera is at point 1
        new THREE.Vector3(1, -1, 3), // Look at here when the camera is at point 2
        new THREE.Vector3(0, 0, 0), // Look at here when the camera is at point 3
    ];

    const targetRef = useRef(new THREE.Vector3(0, 2, 5)); // Initial lookAt target

    useFrame(() => {
        if (cameraRef2.current) {
            const t = scroll.offset; // Get scroll offset, from 0 to 1
            const point = path.getPointAt(t); // Get the current point on the curve

            cameraRef2.current.position.set(point.x, point.y, point.z);

            // Map the scroll position to the lookAt points
            const lookAtIndex = Math.floor(t * (lookAtPoints.length - 1)); // Calculate the index for lookAt

            // Smoothly interpolate to the next lookAt point
            targetRef.current.lerp(lookAtPoints[lookAtIndex], 0.1); // Lerp towards the target

            // Set the camera to look at the interpolated target
            cameraRef2.current.lookAt(targetRef.current);
            console.log('heyy')
        }
    });

    return (
        <PerspectiveCamera
            ref={cameraRef2}
            makeDefault
            position={[0, 5, 3]}
            fov={75} // Set Field of View (optional)
            near={0.1} // Near clipping plane (optional)
            far={1000} // Far clipping plane (optional)
        />
    );
};

export default CameraControls;
