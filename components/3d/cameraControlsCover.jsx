// Camera.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { OrthographicCamera } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";



// straight line
const CameraControlsCover = () => {
    const scroll = useScroll();
    const cameraRef2 = useRef();

    // Define a smooth, linear path for the camera
    const path = new THREE.LineCurve3(
        new THREE.Vector3(0, 10, 10),
        new THREE.Vector3(0, -14, 10)
    );

    // Define a parallel path for the camera to look at
    const lookAtPath = new THREE.LineCurve3(
        new THREE.Vector3(0, 10, 0),
        new THREE.Vector3(0, -14, 0)
    );

    useFrame(() => {
        if (cameraRef2.current) {
            const t = scroll.offset; // Get scroll offset (0 to 1)

            // Get smoothly interpolated position along the path
            const position = new THREE.Vector3();
            path.getPoint(t, position);

            // Get smoothly interpolated lookAt position along the parallel path
            const lookAtPosition = new THREE.Vector3();
            lookAtPath.getPoint(t, lookAtPosition);

            // Apply position and lookAt
            cameraRef2.current.position.copy(position);
            cameraRef2.current.lookAt(lookAtPosition);
        }
    });


    return (
        < PerspectiveCamera
            ref={cameraRef2}
            makeDefault
            position={[0, 5, 10]}
            fov={75} // Set Field of View (optional)
            near={0.1} // Near clipping plane (optional)
            far={1000} // Far clipping plane (optional)
        />

    );
};



export default CameraControlsCover;
