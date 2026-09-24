"use client";
// @ts-nocheck

import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function JioWobble() {
  return (
    <>

        <div className="px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full items-stretch justify-center">   
      <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('/JioZone1.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                            JioCX Zone
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-black">
                            Public Wi-fi and captive Portal helping cafes improve their user retention and  marketers personalize content.
                        </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                            <div>
                                <h2 className="text-3xl md:text-4xl text-black">34%</h2> <p className="text-black">Adoption Rate</p>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl text-black">34%</h2> <p className="text-black">Increase in  TAT</p>
                            </div>
                        </div>
                    
      </WobbleCard>

              <a href="https://www.behance.net/gallery/130195191/Learning-Drive-for-Visually-Impaired">
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[url('/JioZone2.png')] bg-cover bg-center " >
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Learning Drive for Visually Impaired
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-white">
              <div>
                <h2 className="text-3xl md:text-4xl">34%</h2> <p>Adoption Rate</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl">34%</h2> <p>Increase in  TAT</p>
              </div>
            </div>
          </WobbleCard>
      </a>

      
      
      <a href="https://www.behance.net/gallery/156207085/Porteco-Competition-Evaluation-Portal-UI-Design"  target="_blank" rel="noopener noreferrer" className="col-span-1 lg:col-span-1 h-full bg-[url('/porteco2.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl">

             <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[url('/JioAlerts1.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl" />
      </a>
      

     <a href="https://www.behance.net/gallery/155998411/Porteco-Competition-Evaluation-Portal-UX-Study"  
   target="_blank"  
   rel="noopener noreferrer"  
   className="col-span-1 lg:col-span-2 h-full bg-[url('/porteco1.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl">
    <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('/JioAlerts2.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl"
        className=""
    >
        <div className="max-w-xs ml-auto text-right">
            <h2 className="text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                JioCX Alerts
            </h2>
            <p className="mt-4 text-right text-base/6 text-neutral-200">
                JioCX Alerts enhances employee safety with fast, multi-channel emergency notifications for effective crisis response.
            </p>
        </div>
        
        <div className="flex flex-wrap justify-end gap-x-8 gap-y-4 pt-4 text-right">
            <div>
                <h2 className="text-3xl md:text-4xl">34%</h2>
                <p>Adoption Rate</p>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl">34%</h2>
                <p>Increase in TAT</p>
            </div>
        </div>
    </WobbleCard>
</a>







    </div>
    </div>
    </>
  );
}
