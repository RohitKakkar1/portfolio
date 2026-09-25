"use client";

// Flagship chapter — Rohit's story as Head of Product at Archinza (NOT a product
// brochure). First-person, impact-first. Placeholder metrics in [brackets] —
// swap for real numbers. CTA → case study page (to be built) + live site.

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Users, Compass, Sparkles } from "@/components/ui/icons";

// What *I* did — framed as my contribution, not the platform's features.
const highlights = [
  {
    icon: Compass,
    title: "Owned the product 0→1",
    text: "Placeholder: took Archinza from an early idea to a launched product — strategy, roadmap, and the calls in between.",
  },
  {
    icon: Users,
    title: "Lead a team of 6",
    text: "Placeholder: I lead product, design, tech & marketing — aligning the team to ship and scale.",
  },
  {
    icon: Sparkles,
    title: "Built it AI-native",
    text: "Placeholder: after the first ~6 months, I drove the entire product with Claude — shipping faster and building things solo I couldn't before.",
  },
];

const Archinza = () => {
  return (
    <section
      id="archinza"
      className="flex w-full justify-center px-4 pb-8 pt-4 md:px-6 md:pb-10 md:pt-6"
    >
      <div className="w-full max-w-7xl rounded-3xl bg-black-100 text-white">
        <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:p-14">
          {/* Left: my story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block w-fit rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80">
              Now · Head of Product
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              I lead product at{" "}
              <span className="text-purple">Archinza</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/70 md:text-base">
              As Head of Product I took Archinza from{" "}
              <span className="text-white">[0→1]</span> and now scale it with a
              team of six across product, design, tech & marketing. The first
              months I built the old way — then went all-in AI-native with Claude
              and changed how fast I could ship.
            </p>

            {/* Placeholder impact stats */}
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { stat: "[X]", label: "Users / signups" },
                { stat: "6", label: "Team led" },
                { stat: "[X]", label: "Since launch" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-bold md:text-3xl">{m.stat}</div>
                  <div className="text-xs text-white/60">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/projects/archinza"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black-100 transition-transform hover:-translate-y-0.5"
              >
                Read the story <ArrowRight size={18} />
              </a>
              <a
                href="https://archinza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Visit Archinza <ArrowUpRight size={18} />
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
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple/20 text-purple">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{h.text}</p>
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

export default Archinza;
