import React from "react";

const ShimmerButton = () => {
  return (
    <button
      className={
        "relative px-10 py-2 hover:text-white transition-all duration-200 bg-black  bg-clip-text text-background font-medium rounded-sm bg-gradient-to-r border  border-white/10 from-black/10 to-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300 overflow-hidden group"
      }
      type="button"
    >
      <span className="absolute inset-0 -z-10 h-10 bg-gradient-to-r group-hover:skew-y-12 transition-all duration-200 from-black to-white/40 bg-[length:200%_200%] blur-sm animate-breathing" />
      <span className="relative z-10">Shimmering Button</span>
    </button>
  );
};

export default ShimmerButton;
