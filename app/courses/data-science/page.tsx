import Image from "next/image";
import Link from "next/link";
import PurchaseButton from "@/components/course/PurchaseButton";
import CourseForm from "@/components/course/CourseForm";
import { ArrowUpRight, GraduationCap } from "@/components/ui/icons";
import { course, allLessons } from "@/data/course";

// Cover image — placeholder; drop a real one at /public and update this path.
const COVER_IMAGE = "/background3d.png";
const PRICE = "₹1,999";

export default function DataScienceCoursePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — two columns over the cover image */}
      <section className="relative overflow-hidden">
        <Image
          src={COVER_IMAGE}
          alt="Data Science, Visually — course cover"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black-100/95 via-black-100/85 to-black-100/70" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: text + payment card */}
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
                <GraduationCap size={14} /> Course · Self-paced
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Data Science, <span className="text-purple">Visually.</span>
              </h1>
              <p className="mt-3 max-w-md text-sm text-white/80 md:text-base">
                Learn the intuition behind machine learning through interactive,
                scroll-driven visuals — no heavy maths, just clarity.
              </p>

              {/* Payment card */}
              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm text-white/60">
                  One-time · Lifetime access
                </div>
                <div className="mt-1 text-3xl font-bold text-white">
                  {PRICE}{" "}
                  <span className="text-base font-normal text-white/40 line-through">
                    ₹4,999
                  </span>
                </div>
                <div className="mt-4">
                  <PurchaseButton price={PRICE} />
                </div>
              </div>
            </div>

            {/* Right: enrolment form */}
            <div>
              <CourseForm />
            </div>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-6 md:pt-20">
        <Link
          href="/data-science/projects/world-happiness"
          className="group block overflow-hidden rounded-3xl border border-purple/40 bg-black-100 text-white transition-shadow hover:shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-purple/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-purple">
                Featured project
              </span>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                The Data of Happiness
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
                A 55-step visual analysis of the World Happiness Report — what
                actually predicts a nation&apos;s happiness, from GDP to trust,
                with distributions, correlations, time trends, and a model.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-purple">
                Explore the story{" "}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
            <div className="relative min-h-[200px] bg-gradient-to-br from-purple via-indigo-600 to-cyan-500 md:min-h-[280px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-7xl">🌍</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Curriculum */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="heading text-2xl text-black-100 md:text-3xl lg:text-4xl">
          Course content
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
          {course.length} modules · {allLessons.length} visual lessons. Start with
          the free preview, then go deeper.
        </p>

        <div className="mt-10 space-y-10">
          {course.map((mod) => (
            <div key={mod.num}>
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-purple">
                  Module {mod.num}
                </span>
                <h3 className="text-lg font-semibold text-black-100 md:text-xl">
                  {mod.title}
                </h3>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{mod.blurb}</p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {mod.lessons.map((lesson, i) => (
                  <Link
                    key={lesson.slug}
                    href={`/data-science/${lesson.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black-100 text-xs font-bold text-white">
                        {mod.num}.{i + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-black-100 md:text-base">
                          {lesson.title}
                        </h4>
                        {lesson.free && (
                          <span className="mt-1 inline-block rounded-full bg-purple/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-purple">
                            Free preview
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-black-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
