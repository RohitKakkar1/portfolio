import { Physics } from '@react-three/rapier'
import useGame from './stores/useGame.jsx'
import Lights from "./Lights"
import { Level } from "./Level"
import Player from './Player.jsx'
import Orbit from './Orbit.jsx'
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Interface from "./Interface";
import { GizmoViewport } from "@react-three/drei";
import { GizmoHelper } from "@react-three/drei";
import { Grid } from "@react-three/drei";
import Bubbles from "./Bubbles";
import Link from "next/link";
import Popups from "./Bubbles.jsx";
import { FloatingDockDemo } from "./floatingdockDemo.jsx"
import AccordionUsage from './accordion.jsx'
import ModeToggleButton from "./modeToggle.jsx";
import useCameraStore from './stores/usecamerastore.jsx';
import useModeStore from './stores/usemodestore.jsx';
import { PerspectiveCamera } from "@react-three/drei";
import { useModalStore } from './stores/useModalStore.jsx'
import { View } from '@react-three/drei'
import create from 'zustand'
import { OrthographicCamera } from '@react-three/drei'
import { forwardRef } from 'react'
import { useEffect } from 'react'
import { Vector3 } from 'three';  // Import Vector3 from 'three'
import {OverlayProjects} from './Projects/OverlayProjects.jsx'
import { AccumulativeShadows } from '@react-three/drei'
// import CameraController from './CameraController.tsx'
import usecamerastore from './stores/usecamerastore.jsx'
import { TbView360Number } from "react-icons/tb";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { LuCctv } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { SlideshowP } from './Projects/SlideshowP.jsx'



export default function UXExperience() {

    return <>
          <Leva hidden />
      <OverlayProjects />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <SlideshowP />
      </Canvas>
    </>
}

