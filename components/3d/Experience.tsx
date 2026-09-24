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
import {OverlayProjects} from './OverlayProjects.jsx'
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
import { Html } from '@react-three/drei'
import Card from '../ProjectCards/ProjectCards.jsx'


// Define props type
interface SceneProps {
  isDay: boolean;
}

const Scene = ({ isDay }: SceneProps) => {
        const setCameraRef = useCameraStore((state) => state.setCameraRef);
        const moveCamera = useCameraStore((state) => state.moveCamera);


        useEffect(() => {
          // Default position on load
          moveCamera('aboutMe');
        }, [moveCamera]);

          return <>
          
          
             <Physics debug={false}>
        <Lights isDay={isDay} />
                      <Level />
              </Physics>
          <PerspectiveCamera
          ref={(ref) => setCameraRef(ref)} // Set camera reference in Zustand store
            makeDefault
            fov={45}
            near={0.1}
            far={200}
            position={[20, 30, 30]}
          />
          <GizmoHelper alignment="top-right">
                <GizmoViewport />
              </GizmoHelper>
           
                                {/* <CameraController /> */}

                                         <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={1} // Reduce this to make it larger
                >
                    {/* <iframe
                        src="https://rohit-kakkar.vercel.app/Projects"
                        style={{
                            width: '1500px', // Set desired width
                            height: '700px', // Set desired height
                            border: 'none'  // Optional: Remove border for a clean look
                        }}
                    /> */}
                </Html>

      </>
}

const Scene2 = ({ isDay }: SceneProps) => {
          return <>
             <Physics debug={false}>
        <Lights isDay={isDay} />
                      <Level />
                      <Bubbles />
              </Physics>                 

              <OrbitControls 
                enablePan={true}       // Allow panning (default: true)
                enableZoom={true}      // Allow zooming (default: true)
                minDistance={5}        // Minimum zoom distance
                maxDistance={50}       // Maximum zoom distance
                maxPolarAngle={Math.PI / 2}  // Limit vertical orbit (in radians)
              />

              <GizmoHelper alignment="top-right">
                <GizmoViewport />
              </GizmoHelper>
              <AccumulativeShadows />

               <PerspectiveCamera
                  makeDefault
                  fov={45}
                  near={0.1}
                  far={200}
                  position={[0, 50, 30]}
                />

      </>
}

const Scene3 = ({ isDay }: SceneProps) => {
          return <>
             <Physics debug={false}>
        <Lights isDay={isDay} />
                       <Player />
                      <Level />
              </Physics>                 
               <PerspectiveCamera
                  makeDefault
                  fov={45}
                  near={0.1}
                  far={200}
                  position={[0, 50, 30]}
                />
      </>
}

const Scene4 = ({ isDay }: SceneProps) => {


          return <>
                 <Physics debug={false}>
        <Lights isDay={isDay} />
                      <Level />
              </Physics>            
      </>
}



export default function Experience() {

    const {isModalOpen} = useModalStore();
      const container = useRef<HTMLElement | null>(null); // Correctly typed ref


    // State to track which scene to display
    const [activeScene, setActiveScene] = useState('scene1'); // 'scene1', 'scene2', or 'scene3'


    // Button click handlers
    const handleOpenWorld = () => setActiveScene('scene1');
    const handleFocused = () => setActiveScene('scene2');
    const handleGameMode = () => setActiveScene('scene3');
const handleUXMode = () => {
    window.open('https://www.google.com', '_blank');
};

    const cctv = () => setActiveScene('scene4');

                const [isDay, setIsDay] = useState(true);

    
    //camera movement
        const setCameraRef = useCameraStore((state) => state.setCameraRef);
        const moveCamera = useCameraStore((state) => state.moveCamera);

        useEffect(() => {
          // Default position on load
          moveCamera('aboutMe');
        }, [moveCamera]);


    //divs to next back 
      const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { 
      heading: 'EcoSphere', 
      description: 'A Smart City Project which aims to provide smart city management system which puts citizens as the central figure with technoloies revolving around people bu integrating Services and technologies and thereby create a system in which a city can react to the day-to-day needs and problems of its people.',
      buttonText: 'Know More',
      buttonAction: () => moveCamera('aboutMe'),
      metricOne: 'Engagement',
      metricOneNumber: '34%',
      metricTwo: 'Att',
      metricTwoNumber: '24%',
      link: 'https://www.behance.net/gallery/128412157/Smart-City-Management-System' // Add the link here
    },
    { 
      heading: 'Project 2', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonText: 'Know More',
      buttonAction: () => moveCamera('firstProject'),
      metricOne: 'incre',
      metricOneNumber: '314%',
      metricTwo: 'wow',
      metricTwoNumber: '4%' ,
      link: 'https://your-ecosystem-project.com' // Add the link here
    },
    { 
      heading: 'Heading 3', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonText: 'Click me 3',
      buttonAction: () => moveCamera('secondProject'),
      metricOne: 'Engagement',
      metricOneNumber: '34%',
      metricTwo: 'Att',
      metricTwoNumber: '24%',
      link: 'https://your-ecosystem-project.com' // Add the link here
    },
    { 
      heading: 'Project 4', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonText: 'Click me 4',
      buttonAction: () => moveCamera('thirdProject'),
      metricOne: 'Engagement',
      metricOneNumber: '34%',
      metricTwo: 'Att',
      metricTwoNumber: '24%',
      link: 'https://your-ecosystem-project.com' // Add the link here
    },
    { 
      heading: 'Project 5', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonText: 'Click me 5',
      buttonAction: () => moveCamera('fourthProject'),
      metricOne: 'Engagement',
      metricOneNumber: '34%',
      metricTwo: 'Att',
      metricTwoNumber: '24%',
      link: 'https://your-ecosystem-project.com' // Add the link here
    },
    { 
      heading: 'Project 6', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      buttonText: 'Click me 6',
      buttonAction: () => moveCamera('fifthProject'),
      metricOne: 'Engagement',
      metricOneNumber: '34%',
      metricTwo: 'Att',
      metricTwoNumber: '24%',
      link: 'https://your-ecosystem-project.com' // Add the link here
    }
  ];

const navigate = (direction: number) => {
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = items.length - 1;
  } else if (newIndex >= items.length) {
    newIndex = 0;
  }

  setCurrentIndex(newIndex);
};

  // next back

  const [selected, setSelected] = useState('Open World');



const handleSelect = (mode: string) => {
  setSelected(mode);
};


const views: {
  x: number;
  y: number;
  width: number;
  height: number;
  position: [number, number, number]; // Explicit tuple type
}[] = [
  { x: 0, y: 2 / 3, width: 1 / 3, height: 1 / 3, position: [-5, 5, -2] },
  { x: 1 / 3, y: 2 / 3, width: 1 / 3, height: 1 / 3, position: [0, 5, 10] },
  { x: 2 / 3, y: 2 / 3, width: 1 / 3, height: 1 / 3, position: [5, 5, 10] },
  { x: 0, y: 1 / 3, width: 1 / 3, height: 1 / 3, position: [-5, 0, 10] },
  { x: 1 / 3, y: 1 / 3, width: 1 / 3, height: 1 / 3, position: [0, 0, 10] },
  { x: 2 / 3, y: 1 / 3, width: 1 / 3, height: 1 / 3, position: [5, 0, 10] },
  { x: 0, y: 0, width: 1 / 3, height: 1 / 3, position: [-15, -5, 10] },
  { x: 1 / 3, y: 0, width: 1 / 3, height: 1 / 3, position: [0, -5, 10] },
  { x: 2 / 3, y: 0, width: 1 / 3, height: 1 / 3, position: [5, 3, 10] },
];

    return <>
          {/* Buttons to toggle between scenes */}
      {/* Dropdown to toggle between scenes */}
            {/* Buttons to toggle between scenes */}

      <OverlayProjects />
      
    <div className="absolute flex flex-row z-10 top-50 left-10" style={{ top: '37px', left: '700px' }}>
      <div>
        <button
          onClick={() => {
            handleSelect('Open World');
            handleOpenWorld();
          }}          
          className={`px-6 py-3 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 focus:outline-none ${selected === 'Open World' ? 'border-2 border-white' : ''}`}
        >
          Projects Mode
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleSelect('Game Mode');
            handleGameMode();
          }}
          className={`px-6 py-3 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 focus:outline-none ${selected === 'Game Mode' ? 'border-2 border-white' : ''}`}
        >
          Game Mode
        </button>
      </div>
     
      
    </div>




     <div className='absolute flex flex-row  z-10'   style={{ top: '37px', right: '300px' }} // Inline styles for precise positioning
>
          <div className="flex justify-center items-center pointer-events-auto">
            <button
              onClick={handleFocused}
              className="px-3 py-3 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none active:bg-white/50 active:text-white active:shadow-xl"
              title="360 View" // Adds a tooltip on hover

            >
              <TbView360Number size={20} /> {/* Icon with a size of 24px */}
            </button>
          </div>
            
          <div className="flex justify-center items-center pointer-events-auto">
            <button
              onClick={cctv}
              className="px-3 py-3 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none active:bg-white/50 active:text-white active:shadow-xl"
              title="CCTV" // Adds a tooltip on hover

            >
              <LuCctv size={20} /> {/* Icon with a size of 24px */}
            </button>
          </div>

           <div className="flex justify-center items-center pointer-events-auto">
                  <button
                    onClick={() => setIsDay((prev) => !prev)}
                      
                      className="px-3 py-3 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 focus:outline-none active:bg-white/50 active:text-white active:shadow-xl"
                      title={`Switch to ${isDay ? "Night" : "Day"} Mode`} // Tooltip

                  >
                    {isDay ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
                  </button>
            </div>
      </div>
     


   
     

      {activeScene === 'scene1' && (
        <>
          <div className="flex flex-row bg-black-100/30 items-center p-4 gap-3 rounded-2xl max-w-[30vw]" style={{ position: 'absolute', bottom: '100px', left: '100px', zIndex: 1 }}>

                  <button className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50" onClick={() => {
                    // Move to the previous item, wrap around if needed
                    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
                    navigate(-1);
                    items[prevIndex].buttonAction();
                  }}>                  <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />

                  </button>
                  <div className='flex flex-col w-[80%] gap-8'>
                    <h2 className="text-xl font-bold">{items[currentIndex].heading}</h2>
                    <p className="">{items[currentIndex].description}</p>
                    <div className="flex flex-row justify-between items-center w-full">
                        {/* Metrics on the left */}
                        <div className="flex flex-row gap-8">
                          <div>
                            <p className="text-white-100 font-medium">{items[currentIndex].metricOne}</p>
                            <p className="text-xl font-bold">{items[currentIndex].metricOneNumber}</p>
                          </div>
                          <div>
                            <p className=" font-medium text-white-100">{items[currentIndex].metricTwo}</p>
                            <p className="text-xl font-bold">{items[currentIndex].metricTwoNumber}</p>
                          </div>
                        </div>

                        {/* Button aligned to the right */}
                        <div>
                          <a 
                            href={items[currentIndex].link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <button className="px-4 py-2 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none">
                              Visit Project
                            </button>
                          </a>
                        </div>
                      </div>

                  </div>
                   <button
                      className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                      onClick={() => {
                        // Move to the next item, wrap around if needed
                        const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
                        navigate(1);
                        items[nextIndex].buttonAction();
                      }}
                    >
                            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />

                    </button>
        {/* <div><div><button onClick={() => moveCamera('aboutMe')}>About Me</button></div><div>Heyy</div></div>
        <div><button onClick={() => moveCamera('firstProject')}>firstProject</button></div>
        <div><button onClick={() => moveCamera('secondProject')}>secondProject</button></div>
         <div><button onClick={() => moveCamera('thirdProject')}>thirdProject</button></div>
         <div><button onClick={() => moveCamera('fourthProject')}>fourthProject</button></div>
         <div><button onClick={() => moveCamera('fifthProject')}>fifthProject</button></div> */}
      </div>
      </>
        )}

        
    <main ref={container}  
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
>

        {/* <color args={['#FEFCF6']} attach="background" /> */}


          {activeScene === 'scene1' && (
          <View style={{ position: 'absolute', width: '100%', height: '100%' }}>

                  <Scene isDay={isDay} /> {/* Pass `isDay` as a prop */}
          </View>
        )}

        {activeScene === 'scene2' && (
          <>
          <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Bubbles />

                  <Scene2 isDay={isDay} /> {/* Pass `isDay` as a prop */}

          </View>
          </>
        )}

        {activeScene === 'scene3' && (
          <>  
          <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                              <Scene3 isDay={isDay} /> {/* Pass `isDay` as a prop */}

             <KeyboardControls
            map={[
              { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
              { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
              { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
              { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
              { name: 'jump', keys: ['Space'] },
              { name: 'toggleCamera', keys: ['CapsLock'] },
              { name: 'SwitchProjects', keys: ['KeyP'] },
              { name: 'Origin', keys: ['KeyO'] },
              { name: 'CameraL', keys: ['KeyQ'] },
              { name: 'CameraR', keys: ['KeyW'] },
              { name: 'Top', keys: ['KeyT'] },
            ]}
          >

            <Interface />
          </KeyboardControls>
          </View>
                    

          </>


        )}

       {activeScene === 'scene4' && (
  <>

    {/* Render Views */}
    {views.map((view, index) => (
      <View
        key={index}
        track={undefined} // We'll rely on the camera inside the View
        style={{
          position: "absolute",
          left: `${view.x * 100}%`,
          bottom: `${view.y * 100}%`,
          width: `${view.width * 100}%`,
          height: `${view.height * 100}%`,
        }}
      >
        
        {/* Unique camera per view */}
        <PerspectiveCamera
          makeDefault
          position={view.position}
          fov={50}
          onUpdate={(self) => console.log(`Camera ${index} position:`, self.position)}
        />
        {/* Render Scene */}
        <Scene4 isDay={isDay} /> {/* Pass `isDay` as a prop */}
        <OrbitControls />
      </View>
    ))}

    {/* Vertical Lines */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "33.33%", // First vertical line at 1/3 width
        width: "3px",
        height: "100%",
        backgroundColor: "white",
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "66.66%", // Second vertical line at 2/3 width
        width: "3px",
        height: "100%",
        backgroundColor: "white",
        zIndex: 10,
      }}
    />

    {/* Horizontal Lines */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: "33.33%", // First horizontal line at 1/3 height
        width: "100%",
        height: "3px",
        backgroundColor: "white",
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 0,
        top: "66.66%", // Second horizontal line at 2/3 height
        width: "100%",
        height: "3px",
        backgroundColor: "white",
        zIndex: 10,
      }}
    />
  </>
        )}






        <Canvas
            shadows
            style={{
              width: '100%',
              height: '100%',
              background: isDay
                ? 'linear-gradient(180deg, #245792, #0A315F)'
                : 'linear-gradient(180deg, #040421, #000000)',
            }}
            eventSource={container.current!} // Non-null assertion
          >
  
              <Leva hidden />

               <View.Port />


              {/* <Popups /> */}
        </Canvas>


        
    </main>
    </>
}

