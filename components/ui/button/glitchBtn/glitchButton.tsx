"use client";

import React, { useEffect, useState } from "react";

const GlitchButton = () => {
  const [randomDivs, setRandomDivs] = useState<JSX.Element[]>([]);

  const generateRandomDivs = () => {
    const colors = ["bg-red-500", "bg-blue-500"]; // Color options
    const divs = [];
    for (let i = 0; i < 10; i++) {
      const width = `${Math.random() * 5 + 5}px`; // Random width between 30px and 80px
      const height = `${Math.random() + 1}px`; // Random height between 5px and 15px
      const top = `${Math.random() * 100}%`; // Random top position
      const left = `${Math.random() * 100}%`; // Random left position
      const color = colors[Math.floor(Math.random() * colors.length)]; // Random color (red or blue)

      divs.push(
        <div
          key={i}
          className={`absolute ${color} opacity-50 z-10 group-hover:animate-glitch`}
          style={{
            width,
            height,
            top,
            left, // Centers each div based on its position
          }}
        />
      );
    }
    return divs;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setRandomDivs(generateRandomDivs());
  }, []);
  return (
    <button
      type="button"
      className="relative px-10 py-2 bg-black border border-white/30 font-semibold overflow-hidden group"
    >
      {randomDivs}
      <span className="absolute top-2 inset-0 text-blue-500 blur-[1px] animate-glitch font-extralight">
        Glitch Button
      </span>
      <span className="relative z-20 font-extralight">Glitch Button</span>
      <span className="absolute top-2.5  inset-0 text-red-500 blur-[1px] animate-glitch font-extralight ">
        Glitch Button
      </span>
    </button>
  );
};

export default GlitchButton;
