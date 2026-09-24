"use client";

// Data Science projects section. Placeholder project cards — replace the
// `projects` array (title, description, tags, links, image) with real work.
// Each card links out to a repo / live demo via internal SVG icons.

import { motion } from "framer-motion";
import { Github, ArrowUpRight, ChartBar } from "@/components/ui/icons";

type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Placeholder: gradient-boosted model predicting churn with an interpretable feature dashboard.",
    tags: ["Python", "XGBoost", "SHAP"],
    repo: "#",
    demo: "#",
  },
  {
    title: "Urban Mobility Analysis",
    description:
      "Placeholder: spatial analysis of transit flows to surface underserved corridors in a city.",
    tags: ["GeoPandas", "Clustering", "Folium"],
    repo: "#",
  },
  {
    title: "Design-Trend NLP Explorer",
    description:
      "Placeholder: topic modelling over architecture/design articles to map emerging themes.",
    tags: ["NLP", "Transformers", "Streamlit"],
    repo: "#",
    demo: "#",
  },
];

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
            Experiments and models where I let the data lead. (Placeholder
            projects — real ones coming soon.)
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-black/5 bg-gray-100 p-6 transition-shadow hover:shadow-lg"
            >
              {/* Placeholder visual band */}
              <div className="mb-5 h-32 w-full rounded-xl bg-gradient-to-br from-purple/70 via-indigo-400 to-cyan-300" />

              <h3 className="text-lg font-semibold text-black-200">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-black/5 pt-4 text-sm">
                {p.repo && (
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-black-100"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-black-100"
                  >
                    Demo <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataScienceProjects;
