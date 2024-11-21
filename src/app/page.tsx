"use client";

import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className=" container mx-auto w-full flex p-20 justify-center">
      <div className="lg:w-1/2 w-full flex flex-col items-center gap-10">
        <h1 className="text-5xl font-black text-center">
          Components crafted for GenZ Engineers
        </h1>
        <p className="text-center text-white/80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          omnis eum! Iure, culpa quas? Nisi tempora consequatur eius unde
          facere.
        </p>
        <div className="flex justify-between items-center w-1/2 gap-5">
          <button
            type="button"
            className="bg-white flex items-center justify-center gap-2 text-black w-[200px] py-2 rounded-md  hover:outline-white/30 transition-all duration-200"
            onClick={() => router.push("/docs/getting-started/introduction")}
          >
            Get Started <ChevronsRight />
          </button>
          <button
            type="button"
            className=" bg-white/5 border flex items-center justify-center gap-2 border-white/40 text-white w-[200px]  py-2 rounded-md transition-all duration-200"
          >
            Github <ChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
