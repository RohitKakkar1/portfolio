"use client";

import dynamic from "next/dynamic";

import { navItems } from "@/data";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { WobbleCardDemo } from "@/components/wobbleCardDemo";
import { ArchiVoice } from "@/components/ArchiVoice";
import { JioWobble } from "@/components/JioWobble";
import Word from "@/components/ui/Word";

import About from "@/components/sections/About";
import ThreeDProjects from "@/components/sections/ThreeDProjects";
import Skills from "@/components/sections/Skills";
import DataScienceProjects from "@/components/sections/DataScienceProjects";
import Archinza from "@/components/sections/Archinza";

// The 3D hero relies on react-three-fiber, so it must not run during SSR.
// Lazy-load it with a lightweight fallback so first paint isn't blocked.
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

// First-person, impact-first copy (placeholders in [brackets] to fill later).
const paragraphArchi =
  "Before tech, I grew ArchiVoice into a 140k-strong architecture community — running competitions and workshops, and connecting students with professionals. It's where I learned to build something people care about, and grow it.";
const paragraph2 =
  "At Jio Platforms I shipped CPaaS products end to end — JioCX Zone and JioCX Alerts — working across product and design to get real tools into users' hands.";
const paragraphAcademic =
  "I trained as an architect at SPA Delhi, then did my Master's in UX Design at IIT Kanpur — and taught myself data science, front-end, and React Three Fibre along the way (this site is the proof).";

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
      </div>

      <div className="flex w-full flex-col items-center justify-start">
        {/* 1. Hero — positioning + impact strip */}
        <Hero3D />

        {/* 2. About — "builder & grower who understands people" */}
        <About />

        {/* 3. Archinza — flagship chapter (Head of Product) */}
        <Archinza />

        {/* 4. ArchiVoice — "I grew a 140k community" */}
        <section
          className="flex items-center justify-center p-4 md:p-6 lg:p-10"
          id="Archivoice"
        >
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-gray-100 p-4 md:w-[70vw] md:p-8 lg:p-10">
            <h1 className="heading text-center text-lg text-black-200 md:text-xl lg:text-3xl">
              I grew Archi<span className="text-purple">Voice</span>
            </h1>
            <div className="mt-3 w-full text-sm md:mt-4 md:text-base lg:mt-6 lg:text-lg">
              <Word paragraph={paragraphArchi} />
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12">
          <ArchiVoice />
        </section>

        {/* 5. Jio — shipped CPaaS products */}
        <section
          className="flex items-center justify-center p-4 md:p-6 lg:p-10"
          id="jio"
        >
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-gray-100 p-4 md:w-[70vw] md:p-8 lg:p-10">
            <h1 className="heading text-center text-lg text-black-200 md:text-xl lg:text-3xl">
              I shipped at <span className="text-purple">Jio</span>
            </h1>
            <div className="mt-3 w-full text-sm md:mt-4 md:text-base lg:mt-6 lg:text-lg">
              <Word paragraph={paragraph2} />
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12">
          <JioWobble />
        </section>

        {/* 6. Skills / disciplines */}
        <Skills />

        {/* 7. Technical proof — 3D work + data science */}
        <ThreeDProjects />
        <DataScienceProjects />

        {/* 8. Academic roots */}
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

        {/* 9. Contact */}
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
