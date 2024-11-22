import React from "react";

const NeonButton = () => {
  return (
    <button
      type="button"
      className="relative px-10 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-neon transition-all duration-300 group"
    >
      <span className="absolute inset-0 rounded-lg blur-md opacity-75 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
      <span className="relative z-10">Neon Button</span>
    </button>
  );
};

export default NeonButton;
