import React from "react";

export const NeonCard = () => {
  return (
    <div className="flex items-center justify-center  w-[450px] mx-auto rounded-xl  group">
      <div className="relative p-8 rounded-xl ">
        <div className="shadow-cardNeon absolute inset-0 rounded-xl opacity-60 group-hover:opacity-90 duration-300 transition-all" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff2975] via-[#00FFF1] to-[#ff2975] p-[2px]">
          <div className="h-full w-full rounded-xl bg-black" />
        </div>
        <div className="relative z-10">
          <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent drop-shadow-[0_0_10px_rgba(255,41,117,0.8)]">
            Neon Gradient Card
          </p>
        </div>
      </div>
    </div>
  );
};
