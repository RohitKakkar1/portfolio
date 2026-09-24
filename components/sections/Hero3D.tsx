// @ts-nocheck
"use client";

// Lean 3D hero. Reuses the physics "cover" scene (city model + planes + boxes +
// a few bouncing balls) from the original cover.tsx, but stripped of the dev
// gizmo and the heavy settings/emergency overlay. Sized to 100% (not 100vw) so
// it never introduces a horizontal scrollbar, with our own headline + CTA
// overlay on top. Meant to be dynamically imported with { ssr: false }.

import { Canvas, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

function DynamicPlanes() {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      {/* Sky plane */}
      <mesh position={[0, viewport.height / 2, 0]} receiveShadow>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshStandardMaterial color="#6BE6FC" />
      </mesh>
      {/* Ground plane */}
      <RigidBody type="fixed">
        <mesh position={[0, -viewport.height / 2, 0]} receiveShadow>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshStandardMaterial color="#E7B760" />
        </mesh>
      </RigidBody>
    </>
  );
}

function FallingBall({ position = [10, 8, 0.75], color = "#ef4444" }) {
  return (
    <RigidBody colliders="ball" restitution={0.6} friction={0.2} position={position}>
      <mesh castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
}

function City({ position = [0, 0, -0.5] }) {
  const comp = useGLTF("/models/cover.glb");
  const clonedScene = useMemo(() => {
    const clone = comp.scene.clone();
    clone.children.forEach((mesh) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
    return clone;
  }, [comp.scene]);

  return (
    <group position={position} dispose={null}>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={2}
        restitution={0.2}
        friction={0}
      >
        <primitive object={clonedScene} scale={1} receiveShadow castShadow />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/models/cover.glb");

function HeroScene() {
  return (
    <Canvas
      shadows
      orthographic
      camera={{
        left: -10,
        right: 10,
        top: 10,
        bottom: -10,
        near: 0.1,
        far: 100,
        position: [0, 5, 10],
        zoom: 50,
      }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[3, 5, 2]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <Physics gravity={[0, -3.81, 0]}>
        <DynamicPlanes />

        {/* Static white boxes */}
        {[...Array(5)].map((_, i) => (
          <RigidBody key={i} type="fixed">
            <mesh position={[i * 3 - 3, 1, 0.1]} castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#FFFFFF" />
            </mesh>
          </RigidBody>
        ))}

        {/* Ramp */}
        <RigidBody type="fixed" position={[0, -7, 0]} colliders="cuboid">
          <mesh castShadow receiveShadow rotation={[0, Math.PI * 0.5, 0]}>
            <boxGeometry args={[2, 1, 10]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <City />

        <FallingBall position={[10, 8, 0.75]} color="#ef4444" />
        <FallingBall position={[-6, 10, 0.5]} color="#7c3aed" />
        <FallingBall position={[2, 12, 0.6]} color="#111827" />
      </Physics>
    </Canvas>
  );
}

function HeroOverlay() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-28 md:px-16 md:py-32 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pointer-events-auto max-w-2xl"
      >
        <span className="inline-block rounded-full bg-black/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
          Head of Product · Architect · Builder
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-tight text-black-100 md:text-6xl lg:text-7xl">
          I build &amp; grow
          <br />
          products &amp; <span className="text-purple">communities</span>
          <br />
          people love.
        </h1>

        <p className="mt-5 max-w-xl text-base text-neutral-700 md:text-lg">
          Architect by training, Head of Product by trade. I&apos;ve grown a
          140k-strong community, shipped products at Jio, and now lead product at
          Archinza — turning ambiguous problems into things people actually use.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#archinza"
            className="inline-flex items-center gap-2 rounded-lg bg-black-100 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            See what I&apos;ve built <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-black/20 bg-white/70 px-6 py-3 text-sm font-medium text-black-100 backdrop-blur transition-transform hover:-translate-y-0.5"
          >
            Get in touch <ArrowUpRight size={18} />
          </a>
        </div>

        {/* At-a-glance impact strip (placeholder metrics — edit freely) */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {[
            { stat: "140k", label: "Community grown" },
            { stat: "Team of 6", label: "Product · Design · Tech · Marketing" },
            { stat: "3", label: "Products shipped" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-2xl font-bold text-black-100 md:text-3xl">
                {m.stat}
              </div>
              <div className="text-xs text-neutral-600 md:text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero3D() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden" id="hero">
      {/* 3D scene: explicit background layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Readability scrim so the dark headline stays legible over the scene */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent md:from-white/70 md:via-white/25" />

      {/* Text + CTAs: top layer (in normal flow so the hero grows to fit) */}
      <HeroOverlay />

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs uppercase tracking-widest text-neutral-600">
        <span className="animate-pulse">scroll ↓</span>
      </div>
    </section>
  );
}
