"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

import { navItems } from "@/data";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { WobbleCardDemo } from "@/components/wobbleCardDemo";
import Word from "@/components/ui/Word";

import ExploreChooser, { Persona } from "@/components/sections/ExploreChooser";
import WhatIDo from "@/components/sections/WhatIDo";
import ProfessionalSpace from "@/components/sections/ProfessionalSpace";
import ThreeDProjects from "@/components/sections/ThreeDProjects";
import DataScienceProjects from "@/components/sections/DataScienceProjects";
import Educator from "@/components/sections/Educator";
import Personal from "@/components/sections/Personal";

// The 3D hero relies on react-three-fiber, so it must not run during SSR.
const Hero3D = dynamic(() => import("@/components/sections/Hero3D"), {
  ssr: false,
  loading: () => (
    <section className="flex h-screen w-full items-center justify-center bg-[#f0f0f0]">
      <span className="animate-pulse text-sm uppercase tracking-widest text-neutral-500">
        Loading experience…
      </span>
    </section>
  ),
});

const paragraphAcademic =
  "I trained as an architect at SPA Delhi, then did my Master's in UX Design at IIT Kanpur — and taught myself data science, front-end, and React Three Fibre along the way (this site is the proof).";

// Professional persona = the full body of work.
const Professional = () => (
  <>
    <ProfessionalSpace />
    <WhatIDo />
    <ThreeDProjects />
    <DataScienceProjects />

    {/* Academic roots */}
    <section
      className="flex items-center justify-center p-4 md:p-6 lg:p-10"
      id="academic"
    >
      <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-gray-100 p-4 md:w-[70vw] md:p-8 lg:p-10">
        <h1 className="heading text-center text-lg text-black-200 md:text-xl lg:text-3xl">
          Where I <span className="text-purple">trained</span>
        </h1>
        <div className="mt-3 w-full text-sm md:mt-4 md:text-base lg:mt-6 lg:text-lg">
          <Word paragraph={paragraphAcademic} />
        </div>
      </div>
    </section>

    <section className="w-full py-8 md:py-12">
      <WobbleCardDemo />
    </section>
  </>
);

const Home = () => {
  const [persona, setPersona] = useState<Persona>("professional");

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
      </div>

      <div className="flex w-full flex-col items-center justify-start">
        {/* Hero */}
        <Hero3D />

        {/* Persona chooser */}
        <ExploreChooser active={persona} onChange={setPersona} />

        {/* Persona content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={persona}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex w-full flex-col items-center"
          >
            {persona === "professional" && <Professional />}
            {persona === "educator" && <Educator />}
            {persona === "personal" && <Personal />}
          </motion.div>
        </AnimatePresence>

        {/* Contact */}
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
