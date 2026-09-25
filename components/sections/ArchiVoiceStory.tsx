"use client";

// ArchiVoice chapter — Rohit's story of building & growing a 140k community.
// First-person, impact-first. Light panel (Archinza is the dark flagship).
// Placeholder metrics in [brackets] — swap for real numbers.

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Compass, Building } from "@/components/ui/icons";

const stats = [
  { stat: "140k", label: "Community grown" },
  { stat: "[X]", label: "Competitions" },
  { stat: "[X]", label: "Workshops" },
];

const highlights = [
  {
    icon: Users,
    title: "Built a 140k community",
    text: "Placeholder: grew ArchiVoice from zero to 140k across [platforms] — from scratch.",
  },
  {
    icon: Compass,
    title: "Ran competitions & workshops",
    text: "Placeholder: organised [X] competitions and [X] workshops with [partners].",
  },
  {
    icon: Building,
    title: "Connected the field",
    text: "Placeholder: bridged students with practising architects and studios.",
  },
];

const ArchiVoiceStory = () => {
  return (
    <section
      id="Archivoice"
      className="flex w-full justify-center px-4 pb-8 pt-4 md:px-6 md:pb-10 md:pt-6"
    >
      <div className="w-full max-w-7xl rounded-3xl bg-gray-100">
        <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:p-14">
          {/* Left: my story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block w-fit rounded-full bg-black-100 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
              Before tech · Community
            </span>
            <h2 className="mt-4 text-3xl font-bold text-black-100 md:text-4xl lg:text-5xl">
              I grew Archi<span className="text-purple">Voice</span> to 140k.
            </h2>
            <p className="mt-4 max-w-md text-sm text-neutral-700 md:text-base">
              Long before product management, I built ArchiVoice from nothing into
              a 140k-strong architecture community — running competitions and
              workshops, and connecting students with the people they looked up
              to. It taught me how to create something people care about, and grow it.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {stats.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-bold text-black-100 md:text-3xl">
                    {m.stat}
                  </div>
                  <div className="text-xs text-neutral-600">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/archi.voice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                See @archi.voice <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: what I did */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4"
          >
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple/20 text-purple">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black-100">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">{h.text}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArchiVoiceStory;
