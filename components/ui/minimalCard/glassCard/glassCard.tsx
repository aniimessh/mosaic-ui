import React from "react";

export const GlassCard = () => {
  return (
    <div className="h-[260px] lg:w-1/3 sm:w-1/2 w-full  relative rounded-xl overflow-hidden bg-glass-bg bg-cover">
      <div className="absolute inset-0 flex justify-center items-center p-7">
        <div className="bg-black/10 backdrop-blur-sm border border-white/40 h-full flex justify-center items-center rounded-lg px-6  py-4 hover:shadow-2xl transition-all duration-300">
          <p className="font-black text-center text-3xl">
            Glassmorphism Effect Card
          </p>
        </div>
      </div>
    </div>
  );
};
