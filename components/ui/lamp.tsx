"use client"; // Indicates that this is a client-side React component.
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations.
import { cn } from "@/lib/utils"; // Utility function to conditionally merge class names.
import { TextGenerateEffect } from "./TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";


export default function LampDemo() {
  return (

    <section className= "h-screen bg-black-100   w-[100vw]  justify-start items-center  ">
                      <LampContainer>
                                  {/* Animated heading using Framer Motion */}
                                  <div className="flex relative z-10 justify-start items-center -translate-y-60">
                                    <div className=" flex flex-col items-center justify-center">
                                      <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                                        Turning Ideas into Experiences
                                      </p>

                                      <TextGenerateEffect
                                        words="Fueled by curiosity, driven by creativity."
                                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                                      />

                                      <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                                        Hi! I am Rohit Kakkar, a designer based in India
                                      </p>
                                      <div>
                                          <a href="https://in.docs.wps.com/module/common/aiGuide/?sid=sID2314cwzfLKvQY#1739905787133">
                                            <MagicButton
                                              title="My Resume"
                                              icon={<FaLocationArrow />}
                                              position="right"
                                            />
                                          </a>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <App/> */}
                      </LampContainer>
      </section>
  );
}

// Reusable container component for the lamp demo layout.
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode; // Children elements to be rendered inside the container.
  className?: string; // Optional custom class names.
}) => {
  return (
    <div
      className={cn(
        // Main container styles with default and optional class names.
        "relative flex min-h-screen  flex-col items-center  translate-y-10 justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >

          {/* Main lamp visualization */}
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
            {/* Animated conic gradient on the right */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
            >
              {/* Mask layers for the gradient */}
              <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Animated conic gradient on the left */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>

            {/* Additional blur and lighting effects */}
            <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"></div>
            <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

            {/* Animated glowing circles */}
            <motion.div
              initial={{ width: "8rem" }}
              whileInView={{ width: "16rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
            ></motion.div>
            <motion.div
              initial={{ width: "15rem" }}
              whileInView={{ width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
            ></motion.div>

            {/* Blackout layer */}
            <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-black-100 "></div>
    </div>

      {/* Children container for additional content */}
      <div className="relative flex  flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export const LampContainer2 = ({
  children,
  className,
}: {
  children: React.ReactNode; // Children elements to be rendered inside the container.
  className?: string; // Optional custom class names.
}) => {
  return (
    <div
      className={cn(
        // Main container styles with default and optional class names.
        "relative flex min-h-[40vh] flex-col items-center  -translate-y-20 justify-center overflow-hidden w-full rounded-md z-0 ",
        className
      )}
    >

          {/* Main lamp visualization */}
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
            {/* Animated conic gradient on the right */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
            >
              {/* Mask layers for the gradient */}
              <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Animated conic gradient on the left */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>

            {/* Additional blur and lighting effects */}
            <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"></div>
            <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

            {/* Animated glowing circles */}
            <motion.div
              initial={{ width: "8rem" }}
              whileInView={{ width: "16rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
            ></motion.div>
            <motion.div
              initial={{ width: "15rem" }}
              whileInView={{ width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
            ></motion.div>

            {/* Blackout layer */}
            <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-black-100 "></div>
    </div>





      

      {/* Children container for additional content */}
      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

