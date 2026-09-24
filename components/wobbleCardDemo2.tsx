"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { projects } from "./ProjectCards/dataProjects";
import Card from "./ProjectCards/ProjectCards";

export function WobbleCardDemo2() {
  return (
    <>
       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Sticky Header */}
          <div className="w-full bg-white py-5 sticky top-0 z-10 flex flex-col items-center">
            <h1 className="heading p-5">
              <span className="text-blue-900">Work from </span>
              <span className="text-purple">Jio</span>
            </h1>
            <p className="text-blue-900 text-lg text-center p-5">
              A collection of works from my current employer
            </p>
          </div>

          {/* Scrollable Cards Section */}
          <div className="w-full flex flex-col items-center gap-10">
            {projects.map((project, index) => (
              <Card key={index} {...project} i={index} />
            ))}
          </div>
        </div>


    </>
  );
}
