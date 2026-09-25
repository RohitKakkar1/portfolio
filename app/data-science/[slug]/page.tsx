import Link from "next/link";
import { notFound } from "next/navigation";
import { dsProjects, getDSProject } from "@/data/dataScience";
import { allLessons, getLesson } from "@/data/course";
import KMeansStory from "@/components/dataScience/KMeansStory";
import LessonRenderer from "@/components/dataScience/LessonRenderer";

export function generateStaticParams() {
  const slugs = new Set<string>([
    ...allLessons.map((l) => l.slug),
    ...dsProjects.map((p) => p.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default function DataScienceLessonPage({
  params,
}: {
  params: { slug: string };
}) {
  // Flagship bespoke lesson.
  if (params.slug === "kmeans") {
    return (
      <main className="min-h-screen bg-white">
        <KMeansStory title="K-Means, Visually" tag="Unsupervised" />
      </main>
    );
  }

  // Registry-driven lesson.
  const lesson = getLesson(params.slug);
  if (lesson) {
    return (
      <main className="min-h-screen bg-white">
        <LessonRenderer
          title={lesson.title}
          tag={lesson.tag}
          viz={lesson.viz}
          steps={lesson.steps}
          recap={lesson.recap}
        />
      </main>
    );
  }

  // Legacy project stub (homepage cards).
  const project = getDSProject(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto max-w-6xl px-4 pt-16 md:px-6 md:pt-24">
        <Link
          href="/#explore"
          className="text-sm text-neutral-500 transition-colors hover:text-black-100"
        >
          ← Back to portfolio
        </Link>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-purple">
          {project.tag}
        </span>
        <h1 className="mt-2 text-3xl font-bold text-black-100 md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">
          {project.blurb}
        </p>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
        <div className="rounded-3xl border border-black/10 bg-gray-100 p-10 md:p-16">
          <p className="text-lg font-medium text-black-100">
            Full case study coming soon.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            In the meantime, explore the{" "}
            <Link href="/courses/data-science" className="text-purple underline">
              Data Science course
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
