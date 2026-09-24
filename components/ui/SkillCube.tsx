// @ts-nocheck
"use client";

// A short, flattened slab shown in a static ISOMETRIC (30°) orthographic view —
// no spinning, no floating. Isometric = the top-face edges run at 30° from the
// horizontal and the three axes are 120° apart (camera on the [1,1,1] diagonal).
// A word sits on each face; three are visible (two sides + top). Transparent.

import { Canvas } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";

const W = 1.5; // width
const H = 0.55; // height (flattened)
const D = 1.5; // depth

// [position, rotation] for a label flush on each of the 6 faces.
const FACES = [
  { pos: [0, 0, D / 2 + 0.01], rot: [0, 0, 0] }, // front
  { pos: [0, 0, -D / 2 - 0.01], rot: [0, Math.PI, 0] }, // back
  { pos: [W / 2 + 0.01, 0, 0], rot: [0, Math.PI / 2, 0] }, // right
  { pos: [-W / 2 - 0.01, 0, 0], rot: [0, -Math.PI / 2, 0] }, // left
  { pos: [0, H / 2 + 0.01, 0], rot: [-Math.PI / 2, 0, 0] }, // top
  { pos: [0, -H / 2 - 0.01, 0], rot: [Math.PI / 2, 0, 0] }, // bottom
];

function Slab({ words, color, textColor }) {
  return (
    // Axis-aligned; the isometric look comes from the [1,1,1] camera direction.
    <group rotation={[0, 0, 0]}>
      <RoundedBox args={[W, H, D]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color={color} roughness={0.45} metalness={0.1} />
      </RoundedBox>

      {FACES.map((f, i) => (
        <Text
          key={i}
          position={f.pos}
          rotation={f.rot}
          fontSize={0.15}
          maxWidth={W * 0.86}
          lineHeight={1}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
          color={textColor}
        >
          {words[i % words.length]}
        </Text>
      ))}
    </group>
  );
}

export default function SkillCube({
  words,
  color = "#111827",
  textColor = "#ffffff",
}) {
  return (
    <Canvas
      orthographic
      // Equal X/Y/Z → true isometric (top edges at 30°, axes 120° apart).
      camera={{ position: [6.5, 6.5, 6.5], zoom: 124, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 8, 4]} intensity={1.1} />
      <directionalLight position={[-4, -2, -3]} intensity={0.3} />
      <Slab words={words} color={color} textColor={textColor} />
    </Canvas>
  );
}
