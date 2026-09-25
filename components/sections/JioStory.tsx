"use client";

// Jio chapter — Rohit's story shipping CPaaS products at Jio Platforms.
// First-person, impact-first. Light panel. Placeholder metrics in [brackets].

import { motion } from "framer-motion";
import { ChartBar, Users, Sparkles } from "@/components/ui/icons";

const stats = [
  { stat: "2", label: "Products shipped" },
  { stat: "[X]%", label: "Adoption" },
  { stat: "[X]%", label: "Faster TAT" },
];

const highlights = [
  {
    icon: Users,
    title: "JioCX Zone",
    text: "Placeholder: public Wi-Fi + captive portal helping cafes boost retention and personalise marketing.",
  },
  {
    icon: Sparkles,
    title: "JioCX Alerts",
    text: "Placeholder: multi-channel emergency notifications for faster, safer crisis response.",
  },
  {
    icon: ChartBar,
    title: "My role",
    text: "Placeholder: [PM / design] from problem framing to launch, alongside design & engineering.",
  },
];

const JioStory = () => {
  return (
    <section
      id="jio"
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
              Product · CPaaS
            </span>
            <h2 className="mt-4 text-3xl font-bold text-black-100 md:text-4xl lg:text-5xl">
              I shipped products at <span className="text-purple">Jio</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm text-neutral-700 md:text-base">
              At Jio Platforms I worked on CPaaS products end to end — turning
              briefs into shipped tools. I owned [role] across two products,
              JioCX Zone and JioCX Alerts, working closely with design and
              engineering to get them into users&apos; hands.
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

          </motion.div>

          {/* Right: what I shipped */}
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

export default JioStory;
