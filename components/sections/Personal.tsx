"use client";

// Personal persona content. First-person, warm, human. Placeholder copy —
// swap interests, photos, and the story for the real you.

import { motion } from "framer-motion";
import { Heart, Compass, ArrowUpRight } from "@/components/ui/icons";

const interests = [
  "Sketching",
  "Architecture photography",
  "Gaming",
  "Travel",
  "Reading",
  "Coffee",
  "Music",
  "Tinkering with 3D",
];

const Personal = () => {
  return (
    <section
      id="personal"
      className="flex w-full justify-center px-4 py-6 md:px-6 md:py-10"
    >
      <div className="w-full max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black-100 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
            <Heart size={14} /> The Person
          </span>
          <h2 className="heading mt-4 text-2xl text-black-100 md:text-3xl lg:text-4xl">
            Off the <span className="text-purple">clock.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
            Originally from Kanpur, UP. Placeholder: a few words about who I am
            beyond the work — what I love, what keeps me curious, and what I do
            when I&apos;m not building.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Story card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-black/5 bg-gray-100 p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black-100 text-white">
              <Compass size={22} />
            </div>
            <h3 className="text-lg font-semibold text-black-100">
              A Kanpur kid, still exploring
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Placeholder: the values that drive me, how I got curious about
              spaces and people, and the throughline between everything I make.
              Replace with your real story — this is the warm, human bit.
            </p>
          </motion.div>

          {/* Interests card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-black/5 bg-gray-100 p-8"
          >
            <h3 className="text-lg font-semibold text-black-100">
              Things I love
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Placeholder interests — swap for the real ones.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {interests.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-purple hover:text-black-100 md:text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-6 py-3 text-sm font-medium text-black-100 transition-transform hover:-translate-y-0.5"
          >
            Say hi <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personal;
