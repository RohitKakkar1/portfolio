"use client";

// Data Science projects section — cards link to per-project pages at
// /data-science/[slug]. The K-Means card is the flagship (visual explainer).

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChartBar, Sparkles } from "@/components/ui/icons";
import { dsProjects } from "@/data/dataScience";

const DataScienceProjects = () => {
  return (
    <section
      id="datascience"
      className="flex w-full justify-center px-4 py-16 md:px-6 md:py-24"
    >
      <div className="w-full max-w-7xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black-100 text-white">
            <ChartBar size={24} />
          </div>
          <h2 className="heading text-2xl text-black-200 md:text-3xl lg:text-4xl">
            Data Science <span className="text-purple">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-600 md:text-base">
            Experiments and models where I let the data lead.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dsProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={p.flagship ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                href={`/data-science/${p.slug}`}
                className={`group flex h-full flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
                  p.flagship
                    ? "border-purple/40 bg-black-100 text-white"
                    : "border-black/5 bg-gray-100"
                }`}
              >
                {/* Visual band */}
                <div
                  className={`mb-5 h-32 w-full rounded-xl ${
                    p.flagship
                      ? "bg-gradient-to-br from-purple via-indigo-500 to-cyan-400"
                      : "bg-gradient-to-br from-purple/70 via-indigo-400 to-cyan-300"
                  }`}
                />

                <div className="mb-1 flex items-center gap-2">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest ${
                      p.flagship ? "text-purple" : "text-purple"
                    }`}
                  >
                    {p.tag}
                  </span>
                  {p.flagship && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple/20 px-2 py-0.5 text-[10px] font-medium text-purple">
                      <Sparkles size={11} /> Featured
                    </span>
                  )}
                </div>

                <h3
                  className={`text-lg font-semibold ${
                    p.flagship ? "text-white" : "text-black-200"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-sm ${
                    p.flagship ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {p.blurb}
                </p>

                <span
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${
                    p.flagship ? "text-white" : "text-black-100"
                  }`}
                >
                  {p.flagship ? "Explore the visual" : "View project"}{" "}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/courses/data-science"
            className="inline-flex items-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Explore the Data Science course <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataScienceProjects;
