export const codeSnippets = {
  button: [
    {
      id: "neon",
      title: "Neon Button",
      code: `
    export const NeonButton = () => {
      return (
        <button
          type="button"
          className="relative px-10 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-neon transition-all duration-300 group">
          <span className="absolute inset-0 rounded-lg blur-md opacity-75 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
          <span className="relative z-10">Neon Button</span>
        </button>
      );
    };
        `,
    },
    {
      id: "shimmer",
      title: "Shimmer Button",
      code: `
    export const ShimmerButton = () => {
      return (
        <button
          className={
            "relative px-10 py-2 hover:text-white transition-all duration-200 bg-black bg-clip-text text-background font-medium rounded-sm bg-gradient-to-r border border-white/10 from-black/10 to-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300 overflow-hidden group"
          }
          type="button"
        >
          <span className="absolute inset-0 -z-10 h-10 bg-gradient-to-r group-hover:skew-y-12 transition-all duration-200 from-black to-white/40 bg-[length:200%_200%] blur-sm animate-breathing" />
          <span className="relative z-10">Shimmering Button</span>
        </button>
      );
    };
        `,
    },
    {
      id: "forest",
      title: "Forest Button",
      code: `
    export const ForestButton = () => {
      return (
        <button
          type="button"
          className={
            "bg-neonbg px-10 py-2 relative overflow-hidden -skew-x-12 h-10 w-64 border border-white/10 rounded-sm group"
          }
        >
          <span
            className="absolute inset-0 flex transition-all duration-200 items-center justify-center text-[#9ca3af] text-2xl font-extrabold group-hover:text-[2.5rem] group-hover:-skew-y-12 leading-none tracking-wider ease-in-out"
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
        `,
    },
    {
      id: "glitch",
      title: "Glitch Button",
      code: `
    "use client";
  
  import React, { useEffect, useState } from "react";
  
  const GlitchButton = () => {
    const [randomDivs, setRandomDivs] = useState<JSX.Element[]>([]);
  
    const generateRandomDivs = () => {
      const colors = ["bg-red-500", "bg-blue-500"]; // Color options
      const divs = [];
      for (let i = 0; i < 5; i++) {
        const width = \"\${
          Math.random() * 50 + 30
        }px"; // Random width between 30px and 80px
        const height = \"\${
          Math.random() * 10 + 5
        }px"; // Random height between 5px and 15px
        const top = \"\${Math.random() * 100}%"; // Random top position
        const left = \"\${Math.random() * 100}%"; // Random left position
        const color = colors[Math.floor(Math.random() * colors.length)]; // Random color (red or blue)
  
        divs.push(
          <div
            key={i}
            className={"absolute \$\{color} opacity-50 z-10 group-hover:animate-glitch"}
            style={{
              width,
              height,
              top,
              left,
              transform: "translate(-50%, -50%)", // Centers each div based on its position
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
        className="relative px-10 py-2 bg-black rounded-full font-bold overflow-hidden group"
      >
        {randomDivs}
        <span className="absolute top-2 inset-0 text-blue-500 blur-[1px] animate-glitch ">
          Glitch Button
        </span>
        <span className="absolute top-2.5 inset-0 text-red-500 blur-[1px] animate-glitch  ">
          Glitch Button
        </span>
        <span className="relative z-20">Glitch Button</span>
      </button>
    );
  };
  
  export default GlitchButton;
        `,
    },
  ],
};
