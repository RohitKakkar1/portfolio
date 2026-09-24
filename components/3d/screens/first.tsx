import React from "react";
import Image from 'next/image';
import {SiNextdotjs, SiBlender } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

interface FirstScreenProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>; // Type for a state setter function
}



const FirstScreen: React.FC<FirstScreenProps> = ({ setIsActive }) => {
  return (
      <div
        className="relative h-[100vh] w-full flex flex-col md:flex-row z-10 bg-black "
        
      >
         {/* Blurred Background Image */}
                      <Image
                src="/background3d.png" // Ensure the path is correct for your static assets
                alt="Background"
                layout="fill"  // Fills the parent container and adjusts based on its size
                className="absolute inset-0 object-cover filter blur-sm opacity-20"  // Retains your original styling for full cover and effects
              />

        {/* RK Image Centered at Top */}
          <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-between p-20">
            {/* Profile Image */}
            <div className="relative flex justify-center items-center z-20 mb-5 opacity-0">
              <Image
                src="/RK.png"
                alt="Profile"
                width={150}
                height={150}
                layout="intrinsic"
              />
            </div>

            {/* Left and Right Columns */}
            <div className="relative flex flex-col md:flex-row justify-center items-center p-6 md:p-10 w-full max-w-screen-xl">
              {/* Right Column */}
              <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-white md:ml-20 ml-8 mb-8 md:mb-0">
                {/* Name and Description */}
                <div className="mb-3 text-left">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">EcoSphere</h1>
                  <p className="text-lg md:text-xl text-gray-300">
                    Creating majestic user experiences
                  </p>
                </div>

{/* Bio/Description */}
<div className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed text-left md:w-3/4">
  <p>
    This project offers a sneak peek into all my work, set within a dynamic 3D city. By blending immersive environments and XR design, I have crafted a creative space that brings my projects to life.
  </p>
  
  {/* Technologies Used */}
  <div className="flex items-center gap-6 mt-4">
    <div className="flex items-center gap-2">
      <FaReact className="text-2xl" />
      <span>React Three Fiber</span>
    </div>
    <div className="flex items-center gap-2">
      <SiNextdotjs className="text-2xl" />
      <span>Next.js</span>
    </div>
    <div className="flex items-center gap-2">
      <SiBlender className="text-2xl" />
      <span>Blender</span>
    </div>
  </div>
</div>


                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-start gap-4 mb-10">
                  <button
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all"
                    onClick={() => setIsActive(true)}
                  >
                    Explore EcoSphere
                  </button>
                  <a href="https://in.docs.wps.com/module/common/aiGuide/?sid=sID2314cwzfLKvQY#1739905787133" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      My Resume
                    </button>
                  </a>
                </div>
              </div>
              
            </div>

            {/* Footer Text Centered at Bottom */}
            <div className="relative inset-x-0 flex justify-center items-center z-30 py-6 w-full">
              <p className="text-sm text-gray-200 opacity-70">
                Designed and developed by Rohit Kakkar
              </p>
            </div>
          </div>


      </div>

  );
};

export default FirstScreen;
