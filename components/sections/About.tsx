"use client";

// About section with a bit of personality: staggered reveal, animated stat
// counters that count up when scrolled into view, quick-fact chips, and the
// existing framed image visual. All numbers/copy are placeholders — tweak the
// `stats`, `facts`, and paragraph text below.

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import AnimatedImages from "@/components/ui/AnimatedImages.jsx";
import { Building, Palette, Brain, Sparkles } from "@/components/ui/icons";

const stats = [
  { value: 140, suffix: "k", label: "Community grown" },
  { value: 6, suffix: "", label: "Team I lead" },
  { value: 3, suffix: "", label: "Disciplines" },
];

const facts = [
  { icon: Building, text: "B.Arch — SPA Delhi" },
  { icon: Palette, text: "M.Des — IIT Kanpur" },
  { icon: Sparkles, text: "Ex-Jio · CPaaS" },
  { icon: Brain, text: "Data & ML" },
];

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [inView, value, count]);

  useEffect(() => rounded.on("change", (v) => setDisplay(v)), [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section
      id="about"
      className="flex w-full justify-center px-4 py-16 md:px-6 md:py-24"
    >
      <div className="w-full max-w-7xl rounded-3xl bg-gray-100 p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — framed visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AnimatedImages />
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full bg-black-100 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white"
            >
              <Sparkles size={14} /> About Me
            </motion.span>

            <motion.h2
              variants={item}
              className="mt-5 text-3xl font-bold leading-tight text-black-100 md:text-4xl lg:text-5xl"
            >
              I&apos;m a builder &amp; grower who{" "}
              <span className="text-purple">understands people.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg"
            >
              I started in architecture — designing for how people live and move.
              That obsession with people carried into growing a 140k community,
              learning to build in code, and shipping products. I create things
              from nothing, and I grow them.
            </motion.p>

            {/* Stat counters */}
            <motion.div
              variants={item}
              className="mt-8 grid grid-cols-3 gap-4 border-y border-black/10 py-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-black-100 md:text-4xl">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-neutral-600 md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick-fact chips */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2.5">
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <span
                    key={f.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-purple hover:text-black-100 md:text-sm"
                  >
                    <Icon size={15} className="text-purple" /> {f.text}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
