import React from "react";

const ForestButton = () => {
  return (
    <button
      type="button"
      className={
        "bg-neonbg px-10 py-2 relative overflow-hidden -skew-x-12 h-9 w-44 border border-white/10 rounded-sm group"
      }
    >
      <span
        className="absolute inset-0 flex transition-all duration-200 items-center justify-center text-[#9ca3af] text-xl font-extrabold group-hover:text-[2.5rem] group-hover:-skew-y-12 leading-none tracking-wider ease-in-out"
        style={{
          WebkitTextStroke: "1px #9ca3af",
          color: "transparent",
        }}
      >
        Gen - Z
      </span>
    </button>
  );
};

export default ForestButton;
