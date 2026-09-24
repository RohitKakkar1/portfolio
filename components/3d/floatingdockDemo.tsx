import React from "react";
import { FloatingDock } from "./floatingdock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";


export function FloatingDockDemo() {


  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "aboutMe",
    },

    {
      title: "AboutMe",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "aboutMe",

    },
    {
      title: "Architecture",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "architecture",
    },
    {
      title: "UXDesign",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "ux",
    },

    {
      title: "Third Person",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "thirdPerson",
    },
    {
      title: "ContactMe",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "contactMe",
    },
  ];

  return (


    <div>
        <div className="fixed top-[10rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center h-[5rem] w-fit z-[1000] bg-black-200">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
              <text x="10" y="25" font-family="Arial" font-size="30" fill="white">
                Rohit
              </text>
            </svg> */}

        </div>
        <div className="fixed bottom-[-10rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center h-[35rem] w-full z-[1000]">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
    </div>


  );
}
