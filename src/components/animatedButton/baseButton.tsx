import React from "react";
import BaseButton from "../ui/button/baseButton";

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
// const animations: animation[] = ["breathing", "shiny", "bounce", "glitch"];

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
