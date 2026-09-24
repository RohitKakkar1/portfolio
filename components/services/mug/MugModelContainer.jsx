import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { GizmoHelper } from "@react-three/drei";
import { GizmoViewport } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={10}>
          <MugModel />
          <GizmoHelper alignment="top-right">
            <GizmoViewport />
          </GizmoHelper>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
