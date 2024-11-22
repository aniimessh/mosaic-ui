import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 sticky bg-black top-0 z-20  w-full mx-auto">
      <div className="h-16 mx-auto sticky flex lg:container justify-between items-center p-2 px-4 lg:px-20">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <h1 className="font-black">Mosaic</h1>
          </Link>
          <div className="flex items-baseline gap-2">
            <Link
              href={"/docs/ui/animated-button"}
              className="text-white/40 hover:text-white/80 transition-all duration-200"
            >
              <p>Components</p>
            </Link>
            <Link
              href={"/examples"}
              className="text-white/40 hover:text-white/80 transition-all duration-200"
            >
              Examples
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="bg-white/10 p-1 px-3 pr-10 rounded-md w-[300px] outline-none focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-200"
            />
            <div className="flex gap-1 items-center absolute top-1/2 -translate-y-1/2 right-2">
              <Command size={14} />
              <span className="text-white/40 text-[14px]">/</span>
            </div>
          </div> */}
          <Link href={"https://www.cornhub.com"} target="_blank">
            <Github
              size={20}
              className="text-white/40 hover:text-white transition-all duration-200 ease-in-out"
              strokeWidth={1}
            />
          </Link>
          <Link href={"https://www.cornhub.com"} target="_blank">
            <Linkedin
              size={20}
              className="text-white/40 hover:text-white transition-all duration-200 ease-in-out"
              strokeWidth={1}
            />
          </Link>
          <Link href={"https://www.cornhub.com"} target="_blank">
            <Twitter
              size={20}
              strokeWidth={1}
              className="text-white/40 hover:text-white transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
      </div>
      <div className="w-3/4 h-0.5 bg-white/20 absolute bottom-0 left-1/2 -translate-x-1/2 clip-path-pointed" />
    </div>
  );
};

export default Navbar;
