"use client";

import { Scene } from "./Scene";

export default function Home() {
  return (
    <main className="relative bg-slate-50">
      <section
        id="hero"
        className="h-screen flex items-end justify-center relative"
      >
        <div id="text-1" className="text-center mb-24 z-10">
          <h1 className="text-7xl font-medium mb-5 text-gray-800">Redefining Web Experiences</h1>
          <p className="text-4xl font-light text-gray-500">
            Dynamic, interactive environments
          </p>
        </div>
      </section>
      <section
        id="section1"
        className="h-screen flex items-center justify-start relative"
      >
        <div className="container mx-auto px-6">
          <div id="text-2" className="max-w-lg opacity-0">
          <h2 className="text-7xl md:text-5xl sm:text-4xl font-medium mb-4 text-gray-800">
  Blending Technology with Design
</h2>
<p className="text-3xl md:text-2xl sm:text-xl font-light text-gray-500">
  Modern web design merges aesthetics with advanced technologies like AI, WebGL, and 3D elements. This fusion enhances user engagement, making digital experiences more immersive and intuitive.
</p>

          </div>
        </div>
      </section>
      <section
        id="section2"
        className="h-screen flex items-center justify-end relative"
      >
        <div id="text-3" className="container mx-auto px-6 opacity-0">
          <div className="max-w-lg ml-auto text-right">
           <h2 className="text-7xl md:text-5xl sm:text-4xl font-medium mb-4 text-gray-800">
  The Future of Digital Interaction
</h2>
<p className="text-3xl md:text-2xl sm:text-xl font-light text-gray-500">
  As technology advances, web experiences will become even more interactive and adaptive. The future lies in AI-driven personalization, immersive 3D spaces, and seamless cross-platform accessibility.
</p>

          </div>
        </div>
      </section>
      <Scene />
    </main>
  );
}
