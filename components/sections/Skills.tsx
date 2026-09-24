"use client";

// Skills / tech-stack section. Three capability groups (Architecture & Design,
// Product & UX, Data Science) rendered as cards with internal SVG icons.
// Placeholder skill chips — swap the arrays below for your real stack.

import { motion } from "framer-motion";
import { Building, Palette, Brain, IconProps } from "@/components/ui/icons";
import React from "react";

type Group = {
  title: string;
  icon: (p: IconProps) => JSX.Element;
  blurb: string;
  skills: string[];
};

const groups: Group[] = [
  {
    title: "Architecture & Design",
    icon: Building,
    blurb: "Spatial thinking, from concept to constructible detail.",
    skills: ["Rhino", "AutoCAD", "Revit", "SketchUp", "Enscape", "Placemaking"],
  },
  {
    title: "Product & UX",
    icon: Palette,
    blurb: "Research-led interfaces that people actually enjoy using.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research", "Framer", "Accessibility"],
  },
  {
    title: "Data Science",
    icon: Brain,
    blurb: "Turning messy data into decisions and clear stories.",
    skills: ["Python", "Pandas", "scikit-learn", "SQL", "Visualization", "ML"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex w-full justify-center px-4 py-16 md:px-6 md:py-24"
    >
      <div className="w-full max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="heading text-2xl text-black-200 md:text-3xl lg:text-4xl">
            What I <span className="text-purple">work with</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
            A blend of disciplines — spanning the built environment, digital
            products, and data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-black/5 bg-gray-100 p-6 md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black-100 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-black-200 md:text-xl">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{g.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
