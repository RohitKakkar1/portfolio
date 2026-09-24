import { Physics } from '@react-three/rapier'
import useGame from '../../components/3d/stores/useGame.jsx'
import Lights from "../../components/3d/Lights.jsx"
import { Level } from "../../components/3d/Level.jsx"
import Player from '../../components/3d/Player.jsx'
import Orbit from '../../components/3d/Orbit.jsx'
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Interface from "../../components/3d/Interface.jsx";
import { GizmoViewport } from "@react-three/drei";
import { GizmoHelper } from "@react-three/drei";
import { Grid } from "@react-three/drei";
import Bubbles from "../../components/3d/Bubbles.jsx";
import Link from "next/link";
import Popups from "../../components/3d/Bubbles.jsx";
import { FloatingDockDemo } from "../../components/3d/floatingdockDemo.jsx"
import AccordionUsage from '../../components/3d/accordion.jsx'
import ModeToggleButton from "../../components/3d/modeToggle.jsx";
import useCameraStore from '../../components/3d/stores/usecamerastore.jsx';
import useModeStore from '../../components/3d/stores/usemodestore.jsx';
import { PerspectiveCamera } from "@react-three/drei";
import { useModalStore } from '../../components/3d/stores/useModalStore.jsx'
import { View } from '@react-three/drei'
import create from 'zustand'
import { OrthographicCamera } from '@react-three/drei'
import { forwardRef } from 'react'
import { useEffect } from 'react'
import { Vector3 } from 'three';  // Import Vector3 from 'three'
import {OverlayProjects} from '../../components/3d/Projects/OverlayProjects.jsx'
import { AccumulativeShadows } from '@react-three/drei'
// import CameraController from './CameraController.tsx'
import usecamerastore from '../../components/3d/stores/usecamerastore.jsx'
import { TbView360Number } from "react-icons/tb";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { LuCctv } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { SlideshowP } from '../../components/3d/Projects/SlideshowP.jsx'
import { ScrollControls } from '@react-three/drei'
import { Overlay } from './OverlayUX.jsx'
import {Office}  from './Office.jsx'
import { useScroll } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber'
import React from 'react'
import CameraControls from './cameraControls.jsx'

export default function UXExperience() {
    return <>
    <Canvas
        style={{
              width: '100vw',
              height: '100vh',
              background: "linear-gradient(180deg, #245792, #0A315F)",
            }}
      >
      <ambientLight intensity={2} />
      <directionalLight intensity={2} position={[5, 5, 5]} />
      
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={4} damping={0.25}>
      <CameraControls />


        <Overlay />
        <Office />
      </ScrollControls>
          <GizmoHelper>
              <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
              {/* alternative: <GizmoViewcube /> */}
            </GizmoHelper>



      </Canvas>
    </>
}

