"use client";
import { StickyScrollRevealDemo } from "./stickScrollDemo";
import { WorldMapDemo } from "./worldmapdemo";
import { GoogleGeminiEffectDemo } from "./googleGeminiEffect";
import HeroSection from "./components/ui/Hero";
import ArchitectHelpComponent from "./components/ui/ArchitectHelpComponent";
import FeaturesShowcaseComponent from "./components/ui/features";
import FloatingNavigation from "./components/ui/FloatingNavigation";
import ContactUsSection from "./components/ui/Contact_us";
import MobileShowcaseComponent from "./components/ui/ask";

export default function Home() {
  return (
    <main className="relative ">

            <FloatingNavigation />


    <div className="h-[80vh] bg-gray-50 py-8">
      <HeroSection />
    </div>

        <div className="h-[100vh] bg-gray-50 py-8">
            <MobileShowcaseComponent />

    </div>

    <div className="min-h-screen bg-gray-50 py-8">
      <ArchitectHelpComponent />
    </div>


    <div className="min-h-screen bg-gray-50">
      <FeaturesShowcaseComponent />
    </div>

      {/* <StickyScrollRevealDemo /> */}
      <GoogleGeminiEffectDemo />

      <ContactUsSection />

      <div className="flex-1 w-[100vw]">
          <img src="Footer.png" alt="Description" className="w-full h-auto" />
      </div>

    </main>
  );
}
