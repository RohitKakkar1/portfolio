import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import SettingsPopup from "./SettingsPopup";
import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "@/components/3d/Lights.tsx"
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import MultiStepperModal from "./MultiStepperModal";
import React from "react";
import { useRef } from "react";
import { FaTimes, FaPlus } from "react-icons/fa"; // Import icons
import usecamerastore from './stores/usecamerastore'
import Image from 'next/image';
import Emergency from "./Emergency";



export const slideAtom = atom(0);


export const OverlayProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Default to false

  useEffect(() => {
    // Open the modal after 2 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);
  const buttonRef = useRef(null);

  const steps = [
    {
      id: "step1",
      title: "Choose Your Destination",
      description: "Where would you like to go?",
      options: ["Mountains", "Beaches", "Cities"],
    },
    {
      id: "step2",
      title: "Choose Your Activity",
      description: "What activity are you most interested in?",
      options: ["Hiking", "Swimming", "Sightseeing"],
    },
    {
      id: "step3",
      title: "Choose Your Travel Time",
      description: "How long do you plan to travel?",
      options: ["1-3 days", "4-7 days", "Over a week"],
    },
  ];

  const [activeScene, setActiveScene] = useState('scene1'); // 'scene1', 'scene2', or 'scene3'

  const handleFocused = () => setActiveScene('scene2');


  return (
    <>

      <div
        className={`fixed z-10 top-0 left-0 right-0 pointer-events-none flex flex-row justify-between items-center text-black p-4 transition-opacity duration-1000`}
      >

        <div className="flex items-center justify-center">
          <Image
            src="/RK1.png"  // Ensure this is the correct path, and you can use a relative path from the public folder
            alt="Profile"
            className="object-cover" // object-cover still applies for maintaining the aspect ratio
            width={150}   // Set the width to 50px
            height={150}  // Set the height to 50px
          />

        </div>

        <div className="flex flex-row gap-0">
          <div className="flex justify-center items-center p-4 pointer-events-auto">
            <SettingsPopup />
          </div>

          <div className="flex justify-center items-center p-4 pointer-events-auto">
            <Emergency />
          </div>


          {/* <div className="flex justify-center items-center p-4 pointer-events-auto">
            <button className="px-6 py-3 bg-black text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white hover:text-black hover:shadow-xl focus:outline-none">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>


    </>
  );
};

export function BlockStep({ position = [0, 0, 0], speed = 0.5 }) {
  const hamburger = useGLTF('/models/Robot.glb')


  return (
    <group>
      <RigidBody
        type="fixed"
        colliders="hull"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={1}
        restitution={0.2}
        friction={0}
      >
        <primitive object={hamburger.scene} scale={0.4} receiveShadow castShadow />
      </RigidBody>
    </group>
  )
}
