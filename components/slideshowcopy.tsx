import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { ExperienceP } from "./Experience";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { KeyboardControls } from "@react-three/drei";

function SlideshowCopy() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>

      <Leva hidden />
      <div className="h-[100%] relative">
        {/* Static Image Placeholder */}
        {!isActive && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10"
            onClick={() => setIsActive(true)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('static-placeholder.jpg')`, // Replace with your static image URL
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <MagicButton
                  title="My 3d World"
                  icon={<FaLocationArrow />}
                  position="right"
                />
                <p className="text-white text-xl font-semibold">Click to Play</p>
                <p className="text-white text-xl font-semibold">This is Rohit Kakkar</p>
                <p className="text-white text-xl font-semibold">Welcome to my 3d World</p>
              </div>
            </div>
          </div>
        )}

        {/* Preloaded Canvas */}
        <div
          className={`h-full transition-opacity duration-300 ${isActive ? "opacity-100 z-20" : "opacity-0 z-0"
            }`}
        >
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <ExperienceP />
          </Canvas>
        </div>
      </div>

    
    </>
  );
}

export default SlideshowCopy;
