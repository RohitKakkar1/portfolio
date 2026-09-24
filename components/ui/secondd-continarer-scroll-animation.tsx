"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const SecondContainerScroll = ({
  titleComponent,
  cards,
}: {
  titleComponent: string | React.ReactNode;
  cards: { content: React.ReactNode }[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const translateX1 = useTransform(scrollYProgress, [0, 1], [-100, 100]); // Card 1 slides right
  const translateX2 = useTransform(scrollYProgress, [0, 1], [100, -100]); // Card 2 slides left
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.95, 1] : [1.1, 1]);

  return (
    <div ref={containerRef} className="h-[0rem] md:h-[40rem] flex items-center justify-center relative p-2 md:p-20">
      <div className="py-4 md:py-20 w-full relative" style={{ perspective: "1000px" }}>
        <Header titleComponent={titleComponent} />
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full">
          <Card translateX={translateX1} scale={scale}>
            {cards[0].content}
          </Card>
          <Card translateX={translateX2} scale={scale}>
            {cards[1].content}
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }: { titleComponent: React.ReactNode }) => {
  return (
    <motion.div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  translateX,
  scale,
  children,
}: {
  translateX: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateX,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="w-fit h-fit md:h-[30rem] border-4 border-[#6C6C6C] p-4 bg-[#222222] rounded-[20px] shadow-2xl"
    >
      <div className="w-fit h-fit overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-900 flex justify-center items-center">
        {children}
      </div>
    </motion.div>
  );
};
