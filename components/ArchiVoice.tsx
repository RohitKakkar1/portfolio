"use client";
// @ts-nocheck

import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function ArchiVoice() {
  return (
    <>
    <div className="px-4 md:px-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full items-stretch justify-center">
             

              <a href="https://www.behance.net/gallery/130195191/Learning-Drive-for-Visually-Impaired">
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[url('/AV1.png')] bg-cover bg-center " >
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Learning Drive for Visually Impaired
            </h2>

          </WobbleCard>
      </a>
      <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('/AV2.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px]"
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
      
      <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('/Porteco1.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Porteco
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-white">
                            A platform designed to simplify and streamline the process of organizing online competitions.
                        </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                            <div>
                                <h2 className="text-3xl md:text-4xl text-white">34%</h2> <p className="text-white">Adoption Rate</p>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl text-white">34%</h2> <p className="text-white">Increase in  TAT</p>
                            </div>
                        </div>
                    
      </WobbleCard>

              <a href="https://www.behance.net/gallery/130195191/Learning-Drive-for-Visually-Impaired">
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[url('/Porteco2.png')] bg-cover bg-center " >
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



    </div>
    </div>
    </>
  );
}
