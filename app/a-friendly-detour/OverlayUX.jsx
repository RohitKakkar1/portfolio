// @ts-nocheck

import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { CgScrollV } from "react-icons/cg";


const Section = (props) => {
  return (
    <section
      className={`h-[90vh] flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"
        }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-[80vw] h-[100vh] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-row items-center p-4 gap-6 rounded-2xl  ">
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

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 4)); // First section fades out
    setOpacitySecondSection(scroll.range(1 / 4, 1 / 2)); // Second section fades in
    setOpacityThirdSection(scroll.range(1 / 1.5, 1 / 4)); // Third section fades in
  });
  return (
    <>
      <Scroll html>
        <div class="w-screen h-fit">

          <Section
            opacity={opacityFirstSection}
          >
            <div className="justify-end ">
              <h1 className="font-bold text-4xl">
                A Friendly Detour – <br />With a Dash of Magic
              </h1>
              <br />
              <p className=" text-white text-2xl max-w-3xl">
                Hello, <span style={{ color: "#4B0082" }}> maam!</span><br />
                Welcome to my… well, <br />
                Let us call it a Rejection Request—a journey filled with metaphors, playfulness, and a sprinkle of kindness.

              </p>

            </div>


          </Section>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-row gap-4 items-center">
            <CgScrollV className="w-6 h-6" />
            <p>Scroll to Continue</p>
          </div>

          <Section right opacity={opacitySecondSection} >
            <h1 className="text-white font-bold text-4xl">
              The Road of Destiny
            </h1>
            <p className="text-[#8B4513] text-2xl max-w-3xl">
              A fierce, roaring car stands on one side. Sleek, powerful, always chasing the horizon. <br />On the other? An ice cream truck, jingling its merry tune, spreading sweetness everywhere it goes. <br />
              One speeds through life, always chasing the next adventure. The other stays, spreading joy, making people smile. <br />

              The car revs. The ice cream truck honks in protest. <br />

              We are both awesome in our own ways, but imagine a race between us—one zooming forward, the other stopping every five seconds to hand out happiness. A great duo? <br />
              Absolutely. The perfect match? Maybe not.



            </p>



          </Section>
          <Section opacity={opacityThirdSection} >
            <h1 className="text-white font-bold text-4xl">
              The Council of Friendship
            </h1>
            <p className=" text-white text-2xl max-w-3xl">
              So, let us be what we were meant to be—friends, best buddies, the kind who cheer each other on from different lanes of the track.
            </p>
            <br /><br /><br /><br />
            <p className=" text-black text-2xl max-w-3xl" style={{ color: "#4B0082" }}>No feelings were bruised in this production.</p>
            <p className=" text-black text-2xl max-w-3xl" style={{ color: "#4B0082" }}>Handled with care—like a delicate ice cream cone.</p>




          </Section>

        </div >
      </Scroll >
    </>
  );
};
