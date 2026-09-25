"use client";

// Enrolment / lead-capture form for the course hero. Placeholder submit (no
// backend yet) — wire to your email/CRM or Razorpay flow later.

import { useState } from "react";
import { ArrowRight } from "@/components/ui/icons";

function Field({
  label,
  id,
  type,
  placeholder,
  required = true,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-xs font-medium text-neutral-600"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm text-black-100 outline-none transition-colors focus:border-purple"
      />
    </div>
  );
}

export default function CourseForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to email/CRM or kick off Razorpay checkout.
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
      <h3 className="text-lg font-semibold text-black-100">Reserve your seat</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Drop your details and I&apos;ll send you access and updates.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-xl bg-purple/10 p-6 text-center">
          <p className="text-base font-semibold text-black-100">Thanks! 🎉</p>
          <p className="mt-1 text-sm text-neutral-600">
            You&apos;re on the list — I&apos;ll be in touch about enrolment.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <Field label="Full name" id="name" type="text" placeholder="Your name" />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="you@email.com"
          />
          <Field
            label="Phone (optional)"
            id="phone"
            type="tel"
            placeholder="+91…"
            required={false}
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Get access <ArrowRight size={18} />
          </button>
        </form>
      )}
    </div>
  );
}
