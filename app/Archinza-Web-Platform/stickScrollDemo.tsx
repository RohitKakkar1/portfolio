"use client";
import React from "react";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Buisiness Listing Page",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full">
  <img src="Business_Listing.png" alt="Business Listing" className="h-full w-full object-cover" />
</div>

    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full">
  <img src="carousel_1.jpg" alt="Business Listing" className="h-full w-full object-cover" />
</div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full">
        <img src="carousel_2.webp" alt="Business Listing" className="h-full w-full object-cover" />
        </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full">
            <img src="carousel_3.jpg" alt="Business Listing" className="h-full w-full object-cover" />
            </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 h-[full] bg-white">
       <div>
        <h1 className="text-black text-4xl text-center font-bold">What all we offer</h1>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
