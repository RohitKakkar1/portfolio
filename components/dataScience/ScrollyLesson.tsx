"use client";

// Reusable pinned-scrollytelling engine for course lessons. Pinned heading +
// pinned visual + swapping text (with progress dots) + keep-scrolling cue +
// recap. The visual is provided via `renderViz(active, total)`.

import { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

export type Step = { title: string; text: string };

export default function ScrollyLesson({
  title,
  tag,
  steps,
  recap,
  renderViz,
  stepVh = 85,
  source,
}: {
  title: string;
  tag: string;
  steps: Step[];
  recap?: string[];
  renderViz: (active: number, total: number) => React.ReactNode;
  stepVh?: number;
  source?: { label: string; href: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(
      Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)))
    );
  });

  return (
    <div className="w-full">
      <div
        ref={ref}
        style={{ height: `${steps.length * stepVh}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
          {/* Pinned heading */}
          <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
            <Link
              href="/courses/data-science"
              className="text-sm text-neutral-500 transition-colors hover:text-black-100"
            >
              ← Back to course
            </Link>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3">
              <h1 className="text-xl font-bold text-black-100 md:text-2xl">
                {title}
              </h1>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-purple">
                {tag}
              </span>
            </div>
          </div>

          {/* Visual + text */}
          <div className="flex flex-1 items-center">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
              <div className="order-1 flex h-[42vh] items-center justify-center lg:h-[70vh]">
                {renderViz(active, steps.length)}
              </div>

              <div className="order-2 relative min-h-[34vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-md"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple">
                      Step {active + 1} / {steps.length}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-black-100 md:text-3xl">
                      {steps[active].title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-lg">
                      {steps[active].text}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-6 bg-purple" : "w-1.5 bg-black/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Keep-scrolling cue */}
          <motion.div
            animate={{ opacity: active >= steps.length - 1 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-neutral-500"
          >
            <span className="animate-pulse">Keep scrolling ↓</span>
          </motion.div>
        </div>
      </div>

      {/* Recap / outro */}
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-8 md:px-6">
        {recap && recap.length > 0 && (
          <div className="rounded-2xl border border-black/10 bg-gray-100 p-6 md:p-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-purple">
              Recap
            </h4>
            <ul className="mt-3 space-y-2">
              {recap.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm text-neutral-700">
                  <span className="text-purple">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {source && (
          <p className="mt-6 text-center text-xs text-neutral-500">
            Data:{" "}
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple underline"
            >
              {source.label}
            </a>{" "}
            · a representative sample is embedded for this static demo.
          </p>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/courses/data-science"
            className="inline-flex items-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Back to course <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
