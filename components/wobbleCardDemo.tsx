"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <div className="px-4 md:px-6">



<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-7xl mx-auto w-full items-stretch justify-center">
             
        <a href="https://www.behance.net/gallery/128381985/Sports-Urban-Design"  target="_blank" rel="noopener noreferrer" className="col-span-1 sm:col-span-3 md:col-span-6 lg:col-span-8 h-full  bg-cover bg-center min-h-[500px] lg:min-h-[300px] sm:max-h-[300px] rounded-2xl">
                    <WobbleCard
containerClassName="col-span-1 lg:col-span-8 h-full bg-[url('/thesis.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl"
                        className=""
                    >
                        <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                            Sports Complex Dwarka
                        </h2>
                       
                        </div>
                    </WobbleCard>
        </a>
      
      <a href="https://www.behance.net/gallery/130547369/Conclast-Jewar-International-Airport-Design"  target="_blank" rel="noopener noreferrer" className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-4 h-full  bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl">

             <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[url('/conclast.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl" />
      </a>
      


      <a href="https://www.behance.net/gallery/130195191/Learning-Drive-for-Visually-Impaired" className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-4 h-full  bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl">
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[url('/blind.png')] bg-cover bg-center " >
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Learning Drive for Visually Impaired
            </h2>

          </WobbleCard>
      </a>

      <a  target="_blank" rel="noopener noreferrer" className="col-span-1 sm:col-span-3 md:col-span-6 lg:col-span-8 h-full  bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl">
              <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('/gamee.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Flip: Play: Release 
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Designed for Millennials, this game makes stress relief enjoyable by turning life’s challenges into a fun, engaging experience.
                    </p>

                    </div>
                    
      </WobbleCard>

            </a>




    </div>
    </div>
    </>
  );
}
