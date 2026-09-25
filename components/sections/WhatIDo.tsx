"use client";

// "What I do" — shows range at a glance, right after About.
// (1) an auto-scrolling marquee ribbon of disciplines,
// (2) a horizontal, swipeable rail of one signature project per craft,
// (3) merged skill/tool chips (folded in from the old Skills section).
// Images use existing public assets; swap titles/links/[placeholders] freely.

import { ArrowUpRight } from "@/components/ui/icons";

const projects = [
  {
    tag: "Architecture",
    title: "Sports Complex, Dwarka",
    img: "/thesis.png",
    href: "https://www.behance.net/gallery/128381985/Sports-Urban-Design",
  },
  {
    tag: "Game Design",
    title: "Flip: Play: Release",
    img: "/gamee.png",
    href: "#", // TODO: real link
  },
  {
    tag: "Product Design",
    title: "Learning Drive — Visually Impaired",
    img: "/blind.png",
    href: "https://www.behance.net/gallery/130195191/Learning-Drive-for-Visually-Impaired",
  },
  {
    tag: "Data Science",
    title: "[Your data-science project]",
    img: null, // placeholder gradient
    href: "#datascience",
  },
];

// Merged tools/skills (folded in from the old Skills section).
const tools = [
  "Rhino",
  "Revit",
  "Figma",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Python",
  "SQL",
  "scikit-learn",
  "React",
  "Three.js / R3F",
];

const WhatIDo = () => {
  return (
    <section
      id="work"
      className="flex w-full flex-col items-center py-16 md:py-24"
    >
      {/* Heading */}
      <div className="w-full max-w-7xl px-4 text-center md:px-6">
        <h2 className="heading text-2xl text-black-100 md:text-3xl lg:text-4xl">
          One person, <span className="text-purple">many crafts.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
          I&apos;ve designed buildings, shipped products, made a game, and built
          for accessibility. A quick look at the range.
        </p>
      </div>

      {/* Horizontal project rail */}
      <div className="mt-8 w-full max-w-7xl px-4 md:px-6">
        <div className="mb-3">
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            Selected work across crafts
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-gray-100"
            >
              <div className="h-36 w-full overflow-hidden md:h-40">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-purple/70 via-indigo-400 to-cyan-300" />
                )}
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-purple">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-black-100 md:text-base">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-neutral-400 transition-colors group-hover:text-black-100"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Merged skill/tool chips */}
      <div className="mt-8 w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap gap-2.5">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-purple hover:text-black-100 md:text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
