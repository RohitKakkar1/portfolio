"use client";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import {Experience} from "@/components/projects/Experience";
import { Overlay } from "@/components/projects/Overlay";


const slideshow = () => {
  return (
  <main className="h-[100vh]">
    <Leva hidden />
      <Overlay />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      </main>

  );
};


export default slideshow;
