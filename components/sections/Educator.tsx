"use client";

// Educator persona content. First-person, Rohit as the hero. Placeholder copy /
// [metrics] — swap for real workshops, mentees, testimonials.

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Compass,
  ArrowUpRight,
} from "@/components/ui/icons";

const stats = [
  { stat: "[X]", label: "People mentored" },
  { stat: "[X]", label: "Workshops / talks" },
  { stat: "140k", label: "Community taught" },
];

const offerings = [
  {
    icon: Compass,
    title: "Breaking into product & design",
    text: "Placeholder: helping architects and students pivot into UX / product — portfolios, positioning, and the leap.",
  },
  {
    icon: GraduationCap,
    title: "Building with code & AI",
    text: "Placeholder: how to actually ship — front-end, React Three Fibre, and building AI-native with Claude.",
  },
  {
    icon: Users,
    title: "1:1 mentorship & workshops",
    text: "Placeholder: tailored sessions for students and professionals seeking a clear next step.",
  },
];

const Educator = () => {
  return (
    <section
      id="educator"
      className="flex w-full justify-center px-4 py-6 md:px-6 md:py-10"
    >
      <div className="w-full max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-black-100 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white">
            <GraduationCap size={14} /> The Educator
          </span>
          <h2 className="heading mt-4 text-2xl text-black-100 md:text-3xl lg:text-4xl">
            I teach what I&apos;ve <span className="text-purple">lived.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
            I mentor students and professionals — especially those crossing from
            architecture into design, product, and building with code & AI. If
            you&apos;re figuring out your next step, I&apos;d love to help.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-4 border-y border-black/10 py-6 text-center">
          {stats.map((m) => (
            <div key={m.label}>
              <div className="text-2xl font-bold text-black-100 md:text-3xl">
                {m.stat}
              </div>
              <div className="text-xs text-neutral-600 md:text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Offerings */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {offerings.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-black/5 bg-gray-100 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black-100 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-black-100">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{o.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Reach out for mentorship <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Educator;
