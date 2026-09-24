import { useRapier, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import useGame from './stores/useGame.jsx'
import { BlockEnd } from './Level'
import { scenes } from './Projects/SlideshowP.jsx'
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Html } from '@react-three/drei'
import { Text } from '@react-three/drei';
import { Float, useGLTF } from '@react-three/drei'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })

export default function Player() {
    const body = useRef()

    const [subscribeKeys, getKeys] = useKeyboardControls()
    const { rapier, world } = useRapier()
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3())
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())
    const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const restart = useGame((state) => state.restart)
    const [cameraPosition, setCameraPosition] = useState([0, 0, 0]); // Default camera position
    const [cameraTarget, setCameraTarget] = useState([0, 0, 0]); // Default camera target
    const [sideSheetOpen, setSideSheetOpen] = useState(false); // Track side sheet visibility
    const [selectedProject, setSelectedProject] = useState(null); // Store selected project

    const [toggleCamera2, setToggleCamera] = useState(false);  // Track Caps Lock toggle

    const [clicked, setClicked] = useState(false);

    const viewport = useThree((state) => state.viewport);
    const { slideDistance } = useControls({
        slideDistance: {
            value: 1,
            min: 0,
            max: 10,
        },
    });
    const projects = useRef()
    const [topView, setTopView] = useState(false);


    const jump = () => {
        const origin = body.current.translation()
        origin.y -= 0.31
        const direction = { x: 0, y: - 1, z: 0 }
        const ray = new rapier.Ray(origin, direction)
        const hit = world.castRay(ray, 10, true)

        if (hit.timeOfImpact < 0.15) {
            body.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
        }
    }

    const reset = () => {
        body.current.setTranslation({ x: 0, y: 1, z: 0 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    useEffect(() => {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) => {
                if (value === 'ready')
                    reset()
            }
        )

        const unsubscribeJump = subscribeKeys(
            (state) => state.jump,
            (value) => {
                if (value)
                    jump()
            }
        )

        const unsubscribeAny = subscribeKeys(
            () => {
                start()
            }
        )

        return () => {
            unsubscribeReset()
            unsubscribeJump()
            unsubscribeAny()
        }
    }, [jump, start, subscribeKeys])

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if the T key (Top) is pressed
            if (event.code === 'KeyT') {
                setTopView(prevTopView => !prevTopView); // Toggle topView on T key press
            }
        };

        // Add keydown event listener
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array to only run once on mount

    // Reset the clicked state when the Esc key is pressed
    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                setClicked(false); // Reset the clicked state
                setIsTransitioning(false); // Stop the transition when Esc is pressed
                console.log('Esc key pressed. Resetting state...');
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    useFrame((state, delta) => {
        /**
         * Controls
         */
        const { forward, backward, leftward, rightward, toggleCamera, SwitchProjects, Origin, CameraL, CameraR, Top } = getKeys()

        const origin = new THREE.Vector3(0, 0, 0);


        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrength = 0.1 * delta
        const torqueStrength = 0.1 * delta

        if (forward) {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }

        if (rightward) {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }

        if (backward) {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }

        if (leftward) {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

        /**
         * Camera
         */
        const bodyPosition = body.current.translation()

        const cameraPosition = new THREE.Vector3()
        const cameraPositionFar = new THREE.Vector3(bodyPosition.x + 25, bodyPosition.y + 30, bodyPosition.z + 25);
        const cameraTop = new THREE.Vector3(bodyPosition.x, bodyPosition.y + 50, bodyPosition.z);



        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 2.25
        cameraPosition.y += 0.65

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 0.25

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)


        if (toggleCamera) {
            smoothedCameraPosition.lerp(cameraPositionFar, 2 * delta);
            // smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
            smoothedCameraTarget.lerp(cameraTarget, 2 * delta)

            state.camera.position.copy(smoothedCameraPosition)
            state.camera.lookAt(smoothedCameraTarget)

        } else if (topView) {
            smoothedCameraPosition.lerp(cameraTop, 5 * delta);

            // smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
            smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

            state.camera.position.copy(smoothedCameraPosition)
            state.camera.rotation.copy([0, 0, 0])
            state.camera.lookAt(smoothedCameraTarget)

        }

        if (Origin) {
            body.current.setTranslation({ x: 0, y: 3, z: 0 })
            body.current.setLinvel({ x: 0, y: 0, z: 0 })
            body.current.setAngvel({ x: 0, y: 0, z: 0 })
        }

        if (SwitchProjects) {

            body.current.setTranslation({ x: 2, y: 5, z: -23 });
            body.current.setLinvel({ x: 0, y: 0, z: 0 });
            body.current.setAngvel({ x: 0, y: 0, z: 0 });

        }

        if (clicked && isTransitioning) {
            // Example: Do something continuously when clicked
            body.current.setTranslation({ x: 2, y: 2, z: -23 });
            body.current.setLinvel({ x: 0, y: 0, z: 0 });
            body.current.setAngvel({ x: 0, y: 0, z: 0 });

            console.log('Object is being clicked!');

            smoothedCameraPosition.lerp(cameraPosition, 5 * delta);

            // smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
            smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

            state.camera.position.copy(smoothedCameraPosition)
            state.camera.lookAt(smoothedCameraTarget)
        }

        // ROTATE
        const speed = 0.5
        const radius = 5

        if (CameraL) {
            const angle = state.clock.elapsedTime * speed; // Angle increases with time
            const x = radius * Math.cos(angle); // X position
            const z = radius * Math.sin(angle); // Z position

            // Update camera position
            state.camera.position.set(x, 2, z); // 2 is the Y height of the camera
            state.camera.lookAt(bodyPosition.x, bodyPosition.y, bodyPosition.z); // Keep the camera looking at the center

        } else if (CameraR) {
            const angle = state.clock.elapsedTime * speed; // Angle increases with time
            const x = radius * Math.cos(angle); // X position
            const z = radius * Math.sin(angle); // Z position

            // Update camera position
            state.camera.position.set(-x, 2, -z); // 2 is the Y height of the camera
            state.camera.lookAt(bodyPosition.x, bodyPosition.y, bodyPosition.z); // Keep the camera looking at the center
        }

    })

    const positionChange = () => {
        body.current.setTranslation({ x: 0, y: 4, z: -15 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    const openInstagram = () => {
        const url = "https://www.instagram.com/your_instagram_handle"; // Replace with your Instagram URL
        window.open(url, "_blank"); // Opens the link in a new tab
    };


    return <>


        <RigidBody
            ref={body}
            canSleep={false}          // Prevents the object from sleeping (moving too slowly to be considered for physics updates)
            colliders="ball"          // A spherical collider for the icosahedron
            restitution={0.2}         // A bit of bounce when it collides
            friction={1}              // High friction, it won't slip
            linearDamping={0.5}       // Damping (slows down the object)
            angularDamping={0.5}      // Angular damping (slows down rotations)
            position={[3, 5, 0]}         // Starting a bit farther away on the Z-axis
            velocity={[0, 0, 5]}      // Moving along the Z-axis towards the sensor (you can adjust this velocity)
            onIntersectionEnter={({ other }) => {
                if (other.rigidBodyObject.name === "void") {
                    openInstagram();  // Any action you want to trigger here
                }
            }}
        >

            <mesh castShadow>
                <icosahedronGeometry args={[0.3, 1]} />
                <meshStandardMaterial
                    flatShading
                    color="IVORY"
                    opacity={0.5}          // Add opacity here (0 is fully transparent, 1 is fully opaque)
                    transparent={true}    // Set transparent to true to allow opacity to work
                />
            </mesh>



        </RigidBody>





    </>
}
// Popup styling
const popupStyle = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
};
