import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { scenes } from "./Experience";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";

export const slideAtom = atom(0);

export const Overlay = () => {
  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = useState(slide);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);
  return (
    <>
      <div
        className={` z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between  text-black ${visible ? "" : "opacity-0"
          } transition-opacity duration-1000`}
      >
        <div className="bg-gradient-to-t from-white/90 pt-20 pb-10 p-4 flex  flex-row text-center">
          <h1 className="heading font-extrabold">
            {scenes[displaySlide].name}
          </h1>
          <p className="text-opacity-60 italic">
            {scenes[displaySlide].description}
          </p>

          <div className="flex flex-row justify-end">
            <button class="inline-flex items-center bg-white text-black font-medium border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 px-2 py-1">
              Click Me
            </button>


            <div className="flex  justify-end gap-2 mr-10">
              <button
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                onClick={() =>
                  setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
                }

              >
                <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
              </button>
              <button
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                onClick={() =>
                  setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
                }
              >
                <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
