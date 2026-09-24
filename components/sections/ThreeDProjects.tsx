"use client";

// Single ~100vh "3D Work" section: the headline + a few 3D project cards,
// replacing the two tall scroll-driven sections. Cards are placeholders you can
// extend — swap image/title/description/href below.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/icons";

const projects = [
  {
    title: "Scrollable 3D",
    image: "/background3d.png",
    description:
      "A scrollable 3D experience that guides users through projects with interactive visuals, animations, and immersive storytelling.",
    href: "/ux-projects",
  },
  {
    title: "EcoSphere Smart City",
    image: "/background3d.png",
    description:
      "A smart-city concept focused on citizen-centric management — integrating services and technology into one responsive system.",
    href: "/Projects",
  },
];

const ThreeDProjects = () => {
  return (
    <section
      id="threed"
      className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 md:px-6"
    >
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="heading text-2xl font-semibold text-black-100 md:text-4xl lg:text-5xl">
            I love creating{" "}
            <span className="text-purple">Powerful 3D Web Experiences</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
            A few of my 3D projects.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-gray-100 transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 w-full overflow-hidden md:h-64">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black-200 md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
                <Link
                  href={p.href}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black-100 transition-colors hover:text-purple"
                >
                  View project <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDProjects;
