import type React from "react";

const BaseButton = ({
  children,
  gradient,
  radius,
}: {
  children: React.ReactNode;
  gradient: string;
  radius: string;
}) => {
  console.log(gradient, radius);
  return gradient === "neon" ? (
    <button
      type="button"
      className="relative px-10 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-neon transition-all duration-300 group"
    >
      <span className="absolute inset-0 rounded-lg blur-md opacity-75 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
      <span className="relative z-10">Neon Button</span>
    </button>
  ) : gradient === "shimmer" ? (
    <button
      className="relative px-10 py-2 hover:text-white transition-all duration-200 bg-black  bg-clip-text text-background font-medium rounded-lg bg-gradient-to-r border  border-white/10 from-black/10 to-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300 overflow-hidden group"
      type="button"
    >
      <span className="absolute inset-0 -z-10 h-10 bg-gradient-to-r group-hover:skew-y-12 transition-all duration-200 from-black to-white/40 bg-[length:200%_200%] blur-sm animate-shimmer" />
      <span className="relative z-10">Shimmering Button</span>
    </button>
  ) : (
    <></>
  );
};

export default BaseButton;
