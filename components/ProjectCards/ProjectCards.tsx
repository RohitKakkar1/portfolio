'use client'
import Image from 'next/image';
import { WobbleCard } from '../ui/wobble-card';

const Card = ({ title, description, src, url, color, stat1, stat2, i }) => {
  return (
    <div className="flex items-center justify-center sticky top-[80px] z-0">
      {/* Sticky behavior, top-[80px] keeps it below the fixed heading */}
      <div
        className="relative flex flex-col h-fit w-[80%] items-center justify-center rounded-[25px] transform-origin-top"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="flex flex-row gap-3 h-fit">
          <div className="flex flex-col p-4 rounded-3xl gap-5 bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="flex flex-row gap-3 h-fit">
              <div className="w-[66.5%] h-fit">
                <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-[20vh] bg-[url('/JioZone1.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl" />
              </div>
              <div className="w-[33.5%]">
                <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-[url('/JioZone2.png')] bg-cover bg-center min-h-[500px] lg:min-h-[300px] rounded-2xl" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                  {title}
                </h2>
                <p className="mt-4 text-left text-base/6 text-black-200">{description}</p>
              </div>
              <div className="flex pt-4 text-black-200">
                <div className="mr-8">
                  <h2 className="text-4xl">34%</h2>
                  <p>{stat1}</p>
                </div>
                <div>
                  <h2 className="text-4xl">34%</h2>
                  <p>{stat2}</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
