import { useRapier, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import useGame from './stores/useGame.jsx'
import { BlockEnd } from './Level.tsx'
import { scenes } from './Projects/SlideshowP.jsx'
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Html } from '@react-three/drei'
import { Text } from '@react-three/drei';
import { Float, useGLTF } from '@react-three/drei'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })

export default function Player() {

    // POPUpS 
    // to be shown 
    const [showInitialPopup, setShowInitialPopup] = useState(true);

    // Main popups data
    // Main popups data with camera positions
    const mainPopups = [
        { id: 'aboutMe', position: [-10, 0, 8], heading: 'Conclast Airport' },
        { id: 'resume', position: [2, 2, -14], heading: 'Resume' },
        { id: 'projects', position: [10, 0, 8], heading: 'Projects' },
        { id: 'education', position: [-5, 2, -12], heading: 'Education' },
    ];


    function InitialPopup({ onExplore }) {
        return (
            <Html style={popupStyle}>
                <div className="popup-container">
                    <h1>Welcome to My World</h1>
                    <p>Explore the different aspects of my portfolio.</p>
                    <button className="popup-button" onClick={onExplore}>
                        Lets Explore
                    </button>
                </div>
            </Html>
        );
    }

    function MainPopup({ id, position, heading, cameraPosition }) {
        return (
            <Html position={position}>
                <div className="popup-container" onClick={() => handlePopupClick(cameraPosition)}>
                    <h2>{heading}</h2>
                </div>
            </Html>
        );
    }

    // POPUpS 
    // endd


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
    }, [])

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

    return <>

        {
            showInitialPopup ? (
                <InitialPopup onExplore={() => setShowInitialPopup(false)} />
            ) : (
                <>
                    {mainPopups.map((popup) => (
                        <MainPopup
                            key={popup.id}
                            id={popup.id}
                            position={popup.position}
                            heading={popup.heading}
                            cameraPosition={popup.cameraPosition}
                            zIndex={10}
                        />
                    ))}
                </>
            )
        }


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
