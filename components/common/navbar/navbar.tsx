import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import NavLogo from "@/public/logo/favicon.png";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky backdrop-blur top-0 z-20  mx-auto">
      <div className="h-16 mx-auto sticky flex lg:container justify-between items-center p-2 px-10">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-end ">
            <Image src={NavLogo} alt="" className="h-12 w-12" />
            <h1 className="font-black text-xl mb-1 -ml-1">osaic</h1>
          </Link>
          <div className=" items-baseline gap-2 hidden lg:flex">
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
          <Link href={"https://github.com/aniimessh"} target="_blank">
            <Github
              size={20}
              className="text-white/40 hover:text-white transition-all duration-200 ease-in-out"
              strokeWidth={1}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/aniimessh-gupta/"}
            target="_blank"
          >
            <Linkedin
              size={20}
              className="text-white/40 hover:text-white transition-all duration-200 ease-in-out"
              strokeWidth={1}
            />
          </Link>
          <Link href={"https://x.com/aniimessh_1209"} target="_blank">
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
