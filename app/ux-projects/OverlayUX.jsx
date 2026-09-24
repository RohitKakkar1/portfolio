import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CgScrollV } from "react-icons/cg";

import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-[90vh] flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"
        }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center ">
        <div className="flex flex-row bg-black-100/30 items-center p-4 gap-6 rounded-2xl max-w-[30vw] ">
          <div className="flex flex-col gap-7">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 4)); // First section fades out
    setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4)); // Second section fades in
    setOpacityThirdSection(scroll.range(1 / 2, 1 / 4)); // Third section fades in
    setOpacityLastSection(scroll.range(3 / 4, 1 / 4)); // Last section fades in as you scroll to the end
  });

  return (



    <Scroll html>


      <div class="w-screen">
        <Section opacity={opacityFirstSection} >
          <h2 className="text-xl font-bold">Public Wi-Fi</h2>
          <h3>Business Need</h3>
          <p className="">Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi</p>
          <h3>Business Need</h3>
          <p className="">Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi</p>

          <div className="flex flex-row justify-between items-center w-full">
            {/* Metrics on the left */}
            <div className="flex flex-row gap-8">
              <div>
                <p className="text-white-100 font-medium">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
              <div>
                <p className=" font-medium text-white-100">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
            </div>

            {/* Button aligned to the right */}
            <div>
              <a
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none">
                  Visit Project
                </button>
              </a>
            </div>
          </div>

        </Section>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-row gap-4 items-center">
          <CgScrollV className="w-6 h-6" />
          <p>Scroll to Continue</p>
        </div>

        <Section right opacity={opacitySecondSection} >
          <h2 className="text-xl font-bold">Public Wi-Fi</h2>
          <p className="">Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi</p>
          <div className="flex flex-row justify-between items-center w-full">
            {/* Metrics on the left */}
            <div className="flex flex-row gap-8">
              <div>
                <p className="text-white-100 font-medium">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
              <div>
                <p className=" font-medium text-white-100">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
            </div>

            {/* Button aligned to the right */}
            <div>
              <a
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none">
                  Visit Project
                </button>
              </a>
            </div>
          </div>


        </Section>
        <Section opacity={opacityThirdSection} >
          <h2 className="text-xl font-bold">Public Wi-Fi</h2>
          <p className="">Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi</p>
          <div className="flex flex-row justify-between items-center w-full">
            {/* Metrics on the left */}
            <div className="flex flex-row gap-8">
              <div>
                <p className="text-white-100 font-medium">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
              <div>
                <p className=" font-medium text-white-100">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
            </div>

            {/* Button aligned to the right */}
            <div>
              <a
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none">
                  Visit Project
                </button>
              </a>
            </div>
          </div>


        </Section>
        <Section right opacity={opacityLastSection} >
          <h2 className="text-xl font-bold">Public Wi-Fi</h2>
          <p className="">Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi.Work, have a coffe and enjoy Wi-fi</p>
          <div className="flex flex-row justify-between items-center w-full">
            {/* Metrics on the left */}
            <div className="flex flex-row gap-8">
              <div>
                <p className="text-white-100 font-medium">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
              <div>
                <p className=" font-medium text-white-100">metric1</p>
                <p className="text-xl font-bold">34%</p>
              </div>
            </div>

            {/* Button aligned to the right */}
            <div>
              <a
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 bg-white/20 text-white font-semibold text-lg rounded-full shadow-lg transition-colors duration-300 hover:bg-white/50 hover:text-white hover:shadow-xl focus:outline-none">
                  Visit Project
                </button>
              </a>
            </div>
          </div>


        </Section>
      </div >
    </Scroll >
  );
};
