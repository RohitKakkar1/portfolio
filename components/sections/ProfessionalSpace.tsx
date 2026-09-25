"use client";

// "Professional Space" — the three professional chapters (Archinza, ArchiVoice,
// Jio) consolidated behind a tab bar. Each tab shows that chapter's story panel
// (+ its project gallery where it has one).

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Archinza from "./Archinza";
import ArchiVoiceStory from "./ArchiVoiceStory";
import JioStory from "./JioStory";
import { ArchiVoice } from "@/components/ArchiVoice";
import { JioWobble } from "@/components/JioWobble";

const tabs = [
  { id: "archinza", label: "Archinza", sub: "Head of Product" },
  { id: "jio", label: "Jio", sub: "CPaaS Products" },
  { id: "archivoice", label: "ArchiVoice", sub: "Community · 140k" },
];

const ProfessionalSpace = () => {
  const [active, setActive] = useState("archinza");

  return (
    <section
      id="professional"
      className="flex w-full flex-col items-center py-6 md:py-10"
    >
      <div className="flex w-full max-w-7xl flex-col items-center px-4 text-center md:px-6">
        <h2 className="heading text-2xl text-black-100 md:text-3xl lg:text-4xl">
          Professional <span className="text-purple">Space</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
          Where I&apos;ve built and led — pick a chapter.
        </p>

        {/* Sub-nav: understated underline tabs (distinct from the persona cards) */}
        <div className="mt-5 flex flex-wrap justify-center gap-8 border-b border-black/10 md:gap-12">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="relative pb-3 text-center"
              >
                <span
                  className={`block text-sm font-semibold transition-colors md:text-base ${
                    isActive ? "text-black-100" : "text-neutral-500 hover:text-black-100"
                  }`}
                >
                  {t.label}
                </span>
                <span
                  className={`block text-[10px] uppercase tracking-widest ${
                    isActive ? "text-purple" : "text-neutral-400"
                  }`}
                >
                  {t.sub}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="protab-underline"
                    className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-purple"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {active === "archinza" && <Archinza />}

            {active === "archivoice" && (
              <>
                <ArchiVoiceStory />
                <div className="w-full py-4">
                  <ArchiVoice />
                </div>
              </>
            )}

            {active === "jio" && (
              <>
                <JioStory />
                <div className="w-full py-4">
                  <JioWobble />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProfessionalSpace;
