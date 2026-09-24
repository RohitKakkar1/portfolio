"use client";
import React from "react";
import { SecondContainerScroll } from "./secondd-continarer-scroll-animation";
import Image from "next/image";
import Link from "next/link";

export function SecondHeroScrollDemo() {
  return (
    <div className="flex flex-col h-[80vh] w-[90vw] overflow-hidden">
    <SecondContainerScroll
  titleComponent={<h1 className="text-3xl text-black">A few of my 3d Projects</h1>}
  cards={[
    { content:  <div className="bg-white shadow-lg rounded-xl flex flex-col items-center space-y-4 w-96 h-fit pb-6">
                            <img 
                              src="/background3d.png" 
                              alt="3D Experience"
                              className="w-full h-50 object-cover rounded-lg"
                            />
                            <p className="text-lg text-black font-semibold">Scrollable 3d</p>
                            <p className="text-sm text-black pl-6 pr-6">A scrollable 3D experience that seamlessly guides users through projects, featuring interactive visuals, animations, and rich immersive storytelling.</p>

                            <Link href="/ux-projects" target="_blank" >

                              <button className="bg-white text-black border border-black px-4 py-2 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
                              Scrollable 3d
                              </button>
                            </Link>

                      </div>
    },
    { content:  <div className="bg-white shadow-lg rounded-xl flex flex-col items-center space-y-4 w-96 h-fit pb-6">
                            <img 
                              src="/background3d.png" 
                              alt="3D Experience"
                              className="w-full h-50 object-cover rounded-lg"
                            />
                            <p className="text-lg text-black font-semibold">EcoSphere Smart City</p>
                            <p className="text-sm text-black pl-6 pr-6">A Smart City Project focused on citizen-centric management, integrating services and technology to create a responsive system that adapts to daily needs and challenges.</p>

                            <Link href="/Projects" target="_blank" >

                              <button className="bg-white text-black border border-black px-4 py-2 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
                              EcoSphere
                              </button>
                            </Link>

                      </div> },
  ]}
/>

    </div>
  );
}
