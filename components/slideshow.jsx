import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./3d/Experience";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Interface from "./3d/Interface";
import { GizmoViewport } from "@react-three/drei";
import { GizmoHelper } from "@react-three/drei";
import { Grid } from "@react-three/drei";
import Bubbles from "./3d/Bubbles";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Popups from "./3d/Bubbles";
import { FloatingDockDemo } from "./3d/floatingdockDemo"
import AccordionUsage from './3d/accordion'
import ModeToggleButton from "./3d/modeToggle";
import useCameraStore from './3d/stores/usecamerastore';
import useModeStore from './3d/stores/usemodestore';
import { PerspectiveCamera } from "@react-three/drei";
import Modal from "./3d/components/modals/modal";
import Project from './3d/components/projects/projects'
import SecondScreen from "./3d/screens/second";
import FirstScreen from "./3d/screens/first";

function Slideshow() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="h-[100vh] w-[100vw] relative ">
        {/* Screen 1 - Static Image Placeholder */}
        {/* Screen 1 */}
        {!isActive && (
          <FirstScreen setIsActive={setIsActive} />
        )}

        {/* Preloaded Canvas */}
        <div
          id="root"
          className={`h-full transition-opacity duration-300 `}
        >
          <KeyboardControls
            map={[
              { name: "forward", keys: ["ArrowUp", "KeyW"] },
              { name: "backward", keys: ["ArrowDown", "KeyS"] },
              { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
              { name: "rightward", keys: ["ArrowRight", "KeyD"] },
              { name: "jump", keys: ["Space"] },
              { name: "toggleCamera", keys: ["CapsLock"] },
              { name: "SwitchProjects", keys: ["KeyP"] },
              { name: "Origin", keys: ["KeyO"] },
              { name: "CameraL", keys: ["KeyQ"] },
              { name: "CameraR", keys: ["KeyW"] },
              { name: "Top", keys: ["KeyT"] },
            ]}
          >
            <Modal>
              <Project />
            </Modal>
            <Experience />
          </KeyboardControls>
        </div>
      </div>
    </>
  );
}

export default Slideshow;