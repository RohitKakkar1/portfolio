"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// SkillCube uses react-three-fiber, so keep it out of SSR.
const SkillCube = dynamic(() => import("@/components/ui/SkillCube"), {
  ssr: false,
});

// About visual: three flattened axonometric slabs (words on their faces),
// stacked with heavy overlap so they interlock, and pulled closer as the
// section scrolls in. Each is marked with a small 01 / 02 / 03 tag.
const layers = [
  {
    color: "#111827",
    words: ["Architecture", "Spaces", "Form", "Rhino", "Revit", "Detail"],
    offset: "ml-0",
  },
  {
    color: "#6d28d9",
    words: ["UX Design", "Figma", "Research", "Systems", "Flows", "Prototype"],
    offset: "ml-10 md:ml-14",
  },
  {
    color: "#0f766e",
    words: ["Data", "Python", "ML", "Models", "Insight", "SQL"],
    offset: "ml-0",
  },
];

const AnimatedImages = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Far apart as the section enters the viewport, colliding together once it's
  // centered. progress 0 = entering (bottom of viewport), 1 = centered.
  const yTop = useTransform(scrollYProgress, [0, 1], [-60, 165]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [60, -165]);
  const ys = [yTop, yMid, yBottom];

  return (
    <div ref={ref} className="relative mx-auto flex w-full max-w-md flex-col items-start py-2">
      {layers.map((l, i) => (
        <motion.div
          key={i}
          // Black (first) sits on top of the overlap, then blue, then green.
          style={{ y: ys[i], zIndex: layers.length - i }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className={`group relative -mt-32 first:mt-0 ${l.offset}`}
        >
          <div className="relative h-72 w-96">
            <SkillCube words={l.words} color={l.color} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedImages;
