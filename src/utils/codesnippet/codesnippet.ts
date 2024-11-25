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
  cards: [
    {
      id: "neon",
      title: "Neon Card",
      code: `import React from "react";
const NeonCard = () => {
  return (
    <div className="flex items-center justify-center  w-80 rounded-xl shadow-cardNeon">
      <div className="relative p-8 rounded-xl ">
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

export default NeonCard;
      `,
    },
    {
      id: "glass",
      title: "Glassmorphism Card",
      code: `import React from "react";

const GlassCard = () => {
  return (
    <div className="h-full w-full  relative rounded-xl overflow-hidden bg-glass-bg bg-cover">
      <div className="absolute inset-0 flex justify-center items-center p-6">
        <div className="bg-black/10 backdrop-blur-sm border border-white/40 h-full flex justify-center items-center rounded-lg px-6  py-4 hover:shadow-2xl transition-all duration-300">
          <p className="font-black text-center text-3xl">Glassmorphism Card</p>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
      `,
    },
  ],
};
