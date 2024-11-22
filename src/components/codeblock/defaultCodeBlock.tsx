"use client";

import hljs from "highlight.js";
import React, { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";

const DefaultCodeBlock = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className={`rounded-md relative overflow-hidden transition-all duration-300 bg-white/10 ${
        isExpanded ? "h-auto" : "h-[200px]"
      }`}
    >
      {/* Gradient overlay */}
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-full z-20 bg-gradient-to-t from-black via-black/5 to-transparent pointer-events-none" />
      )}

      <pre className="whitespace-pre-wrap">
        <code className="language-javascript">
          {`import React from "react";
          
type gradient = "neon" | "forest" | "choco" | "subtle" | "breathing" | "glitch";
type radius = "full" | "2xl" | "3xl" | "md" | "lg" | "sm" | "none" | "xl";
type animation = "breathing" | "shiny" | "bounce" | "glitch";

const gradients: gradient[] = [
  "neon",
  "forest",
  "choco",
  "subtle",
  "breathing",
  "glitch",
];
const radiuss: radius[] = [
  "full",
  "2xl",
  "3xl",
  "md",
  "lg",
  "sm",
  "none",
  "xl",
];
const animations: animation[] = ["breathing", "shiny", "bounce", "glitch"];

const AnimatedButton = () => {
  return (
    <div className="h-full rounded-lg w-full">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  place-items-center gap-4">
          {gradients.map((gradient, i) => (
            <BaseButton
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              gradient={gradient}
              radius={radiuss[i % radiuss.length]}
            >
              {gradient}
            </BaseButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton;

const BaseButton = ({
  gradient,
}: {
  children: React.ReactNode;
  gradient: string;
  radius: string;
}) => {
  return gradient === "neon" ? (
    <NeonButton />
  ) : gradient === "breathing" ? (
    <ShimmerButton />
  ) : gradient === "forest" ? (
    <ForestButton />
  ) : gradient === "glitch" ? (
    <GlitchButton />
  ) : (
    <></>
  );
};

      `}
        </code>
      </pre>

      {/* Expand Button */}
      <button
        className="absolute inset-x-0 bottom-4 z-30 mx-auto w-[100px] border text-white bg-black/80 rounded-md p-2 text-center cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
      >
        {isExpanded ? "Collapse" : "Read Code"}
      </button>
    </div>
  );
};

export default DefaultCodeBlock;
