"use client";

// Persona chooser shown right after the hero. The visitor picks which side of
// Rohit to explore — Professional / Educator / Personal — and the page shows
// that content. `active` + `onChange` are controlled by the page.

import { Briefcase, GraduationCap, Heart, IconProps } from "@/components/ui/icons";

export type Persona = "professional" | "educator" | "personal";

const options: {
  id: Persona;
  label: string;
  desc: string;
  icon: (p: IconProps) => JSX.Element;
}[] = [
  {
    id: "professional",
    label: "Professional",
    desc: "Head of Product, builder & shipper",
    icon: Briefcase,
  },
  {
    id: "educator",
    label: "Educator",
    desc: "Mentor & teacher",
    icon: GraduationCap,
  },
  {
    id: "personal",
    label: "Personal",
    desc: "The person behind the work",
    icon: Heart,
  },
];

const ExploreChooser = ({
  active,
  onChange,
}: {
  active: Persona;
  onChange: (p: Persona) => void;
}) => {
  return (
    <section
      id="explore"
      className="flex w-full flex-col items-center px-4 py-16 text-center md:py-24"
    >
      <h2 className="heading text-2xl text-black-100 md:text-3xl lg:text-4xl">
        Which side of me would you like to{" "}
        <span className="text-purple">explore?</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
        Pick a lens — I&apos;ll show you that side.
      </p>

      <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {options.map((o) => {
          const Icon = o.icon;
          const isActive = active === o.id;
          return (
            <button
              key={o.id}
              onClick={() => onChange(o.id)}
              aria-pressed={isActive}
              className={`group flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all duration-300 ${
                isActive
                  ? "border-purple bg-black-100 text-white shadow-lg"
                  : "border-black/10 bg-gray-100 text-black-100 hover:-translate-y-0.5 hover:border-purple"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  isActive ? "bg-purple/25 text-purple" : "bg-white text-purple"
                }`}
              >
                <Icon size={24} />
              </div>
              <div className="text-lg font-semibold">{o.label}</div>
              <div
                className={`text-xs ${
                  isActive ? "text-white/60" : "text-neutral-500"
                }`}
              >
                {o.desc}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreChooser;
