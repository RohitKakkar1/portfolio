// @ts-nocheck

import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./Counter";
import MugModelContainer from "./mug/MugModelContainer";
import "./services.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import MagicButton from "../MagicButton";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";



const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Once an architect of spaces, now a designer of seamless digital experiences",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Crafting intuitive interactions for digital realms",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Creating immersive experiences that bridge creativity and technology",
    counter: 46,
  },  
  {
    id: 4,
    img: "/service3.png",
    title: "This journey defines me — scroll down to explore my work",
    counter: 46,
  },
];

const headings = [
   {
    id: 1,
    title: "Designing YOUR Path",
    description: "Unfolding the story of an architect turned digital designer, crafting seamless experiences that merge creativity with functionality.",
  },
  {
    id: 2,
    title: "Mapping My Creative Journey",
    description: "From building spaces to designing experiences, this is my story of growth, creativity, and passion for the digital world.",
  },
  {
    id: 3,
    title: "Tracing My Design Footsteps",
    description: "Every design has a story, and here is mine—a blend of creativity, strategy, and the pursuit of exceptional experiences.",
  },
    {
    id: 4,
    title: "fourth",
    description: "fourth description",
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
    const [currentHeadingId, setCurrentHeadingId] = useState(1);
  const scrollLeft = () => {
  setCurrentServiceId((prevId) => (prevId === 1 ? 4 : prevId - 1)); // Go to 4 if at 1, otherwise decrement
};

const scrollRight = () => {
  setCurrentServiceId((prevId) => (prevId === 4 ? 1 : prevId + 1)); // Go to 1 if at 4, otherwise increment
};


  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className=" flex flex-row h-[100%]  justify-center items-center " ref={ref}>

      <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
      </button>

        <div>
            <div className="  h-[70vh] flex flex-row justify-center ">
                {currentServiceId === 1 ? (
                  <>
                      <div className="flex flex-col">
                          <h1 className="heading p-15">
                          <span className="text-blue-900">{headings[0].title}</span>
                          </h1>
                      
                          <p className=" text-blue-900 text-lg text-center p-5">{headings[0].description}</p>
                  <ComputerModelContainer />
                  </div>
                  </>
                ) : currentServiceId === 2 ? ( 
                    <>
                      <div className="flex flex-col">
                          <h1 className="heading p-15">
                          <span className="text-blue-900">{headings[1].title}</span>
                          </h1>
                      
                      <p className=" text-blue-900 text-lg text-center p-5">{headings[1].description}</p>
                  <MugModelContainer />
                  </div>
                  </>
                  
                  
                ) : currentServiceId === 3 ? (
                  <div className="flex flex-col">
                          <h1 className="heading p-15">
                          <span className="text-blue-900">{headings[2].title}</span>
                          </h1>
                      
                          <p className=" text-blue-900 text-lg text-center p-5">{headings[2].description}</p>
                  <ConsoleModelContainer />
                  </div>
                  
                ): (
                  <div className="flex flex-col">
                          <h1 className="heading p-15">
                          <span className="text-blue-900">{headings[3].title}</span>
                          </h1>
                      
                          <p className=" text-blue-900 text-lg text-center p-5">{headings[3].description}</p>
                  <ConsoleModelContainer />
                  </div>
                  
                )}
            </div>

            <div className="flex flex-row justify-center items-center h-fit">
                <div
                  className="flex h-fit flex-row gap-16 justify-center items-center"
                >
                  {services.map((service) => (
                    <div
                      className=" h-fit justify-center items-center gap-24 cursor-pointer "
                      key={service.id}
                      onClick={() => setCurrentServiceId(service.id)}
                    >
                     <button
      className={`h-16 w-16 grid place-items-center text-center text-2xl relative inline-flex w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none shadow-md transition-all duration-300 ease-in-out transform ${
        currentServiceId === service.id
          ? "bg-gradient-to-r from-[#000318] to-[#C6AFF4] scale-110 shadow-xl text-white"
          : "bg-gradient-to-r from-[#00031845] to-[#c6aff447] hover:scale-110 hover:shadow-xl text-gray-300"
      }`}
    >
      {service.id}
    </button>

                    

                    </div>
                  ))}
                </div>
                 <div> 
                                                
                                                
            </div>
            </div>
                                                <Link rel="stylesheet" href="/Projects" passHref legacyBehavior>
                                                    <a target="_blank">
                                                      <MagicButton
                                                        title="My 3d World"
                                                        icon={<FaLocationArrow />}
                                                        position="right"
                                                      />
                                                    </a>
                                                </Link>
                                                <Link rel="stylesheet" href="/slideshow" passHref legacyBehavior>
                                                    <a target="_blank">
                                                      <MagicButton
                                                        title="slideshow"
                                                        icon={<FaLocationArrow />}
                                                        position="right"
                                                      />
                                                    </a>
                                                </Link>

        </div>

      <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
    </div>
  );
};

export default Services;
