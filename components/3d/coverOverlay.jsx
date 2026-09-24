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


export const OverlayCover = () => {

    return (
        <>

            <div
                className={`absolute z-10 top-0 left-0 right-0 pointer-events-none flex flex-row justify-between items-center text-black p-4 transition-opacity duration-1000`}
            >

                <div className="flex items-center justify-center">
                    <Image
                        src="/RK.png"  // Ensure this is the correct path, and you can use a relative path from the public folder
                        alt="Profile"
                        className="object-cover" // object-cover still applies for maintaining the aspect ratio
                        width={250}   // Set the width to 50px
                        height={250}  // Set the height to 50px
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

