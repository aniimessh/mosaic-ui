"use client";

import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className=" container mx-auto w-full flex lg:p-20 items-center justify-center h-[calc(100vh-64px)] bg-hero-pattern bg-cover bg-center bg-opacity-35">
      <div className="lg:w-1/2 w-full flex flex-col items-center gap-10">
        <p className="relative flex items-center text-sm rounded-full cursor-default border border-transparent bg-gradient-to-l from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%] animate-circular">
          <span className="relative bg-black px-4 py-1  rounded-full">
            Adding new component every week 🌠
          </span>
        </p>
        <h1 className="text-5xl font-black text-center">
          Components crafted for <br /> GenZ Engineers
        </h1>
        <p className="text-center text-white/80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          omnis eum! Iure, culpa quas? Nisi tempora consequatur eius unde
          facere.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:w-1/2 w-full gap-5">
          <button
            type="button"
            className="bg-white group flex items-center justify-center gap-2 text-black w-[200px] py-2 rounded-md  hover:outline-white/30 transition-all duration-200"
            onClick={() => router.push("/docs/getting-started/introduction")}
          >
            Get Started
            <div className="group-hover:animate-customBounce ease-in-out">
              <ChevronsRight />
            </div>
          </button>
          <button
            type="button"
            className=" bg-black group border flex items-center justify-center gap-2 border-white/40 text-white w-[200px]  py-2 rounded-md transition-all duration-200"
          >
            Github
            <div className="group-hover:animate-customBounce ease-in-out">
              <ChevronsRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
