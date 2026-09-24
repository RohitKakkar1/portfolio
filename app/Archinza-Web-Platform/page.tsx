"use client";
import { StickyScrollRevealDemo } from "./stickScrollDemo";
import { WorldMapDemo } from "./worldmapdemo";
import { GoogleGeminiEffectDemo } from "./googleGeminiEffect";
import AllInOnePlaceComponent from "./components/ui/Hero";
import ArchitectHelpComponent from "./components/ui/ArchitectHelpComponent";
import FeaturesShowcaseComponent from "./components/ui/features";
import FloatingNavigation from "./components/ui/FloatingNavigation";
import ContactUsSection from "./components/ui/Contact_us";
import HeroSectionOne from "@/components/hero-section-demo-1";
import { BentoGridDemo } from "./bento";
import MobileShowcaseComponent from "./components/ui/ask";
import Features from "./components/ui/features";
import { useState } from "react";
import FeaturesUser from "./components/ui/FeaturesUser";
import TypeStrip from "./components/ui/typing";
import AnimatedFeatureShowcase from "./components/ui/Animated_journey";



export default function Home() {

  const [userType, setUserType] = useState("business");


  return (
    <main className="relative ">

            {/* <FloatingNavigation /> */}


    {/* <div className="h-[80vh] bg-gray-50 py-32">
      <AllInOnePlaceComponent />
    </div> */}

    <TypeStrip />



<div className="h-[100vh] ">

     <AnimatedFeatureShowcase />

    </div>



<div className="h-[100vh] bg-white py-8">
            <MobileShowcaseComponent />

    </div>

        <div className="h-[100vh] bg-white py-8">
      {/* Heading + Dropdown */}
      <div className="text-center ">
              <div className="inline-flex items-center justify-center text-4xl font-bold text-gray-900 gap-2">
                <span>Get started as a</span>
               <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1">
                      <button
                        onClick={() => setUserType("business")}
                        className={`px-5 py-2 rounded-full text-lg font-semibold transition ${
                          userType === "business"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-white"
                        }`}
                      >
                        Business
                      </button>
                      <button
                        onClick={() => setUserType("individual")}
                        className={`px-5 py-2 rounded-full text-lg font-semibold transition ${
                          userType === "individual"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-white"
                        }`}
                      >
                        Individual
                      </button>
                    </div>


              </div>
            </div>

      {/* Conditional Component */}
      {userType === "business" ? <Features /> : <FeaturesUser />}
    </div>
{/* 
      <ContactUsSection /> */}

      <div className="flex-1 w-[100vw]">
          <img src="FAQ.png" alt="Description" className="w-full h-auto" />
      </div>

      

    </main>
  );
}
