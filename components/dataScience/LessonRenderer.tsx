"use client";

// Client bridge: takes serializable lesson data and renders the ScrollyLesson
// engine with the right LessonViz (the render prop can't cross the server
// boundary, so it's created here).

import ScrollyLesson, { Step } from "./ScrollyLesson";
import LessonViz from "./LessonViz";

export default function LessonRenderer({
  title,
  tag,
  viz,
  steps,
  recap,
}: {
  title: string;
  tag: string;
  viz: string;
  steps: Step[];
  recap?: string[];
}) {
  return (
    <ScrollyLesson
      title={title}
      tag={tag}
      steps={steps}
      recap={recap}
      renderViz={(active, total) => (
        <LessonViz type={viz} active={active} total={total} />
      )}
    />
  );
}
