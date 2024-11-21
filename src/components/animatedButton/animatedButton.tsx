import React from "react";
import BaseButton from "../ui/button/baseButton";

type gradient = "neon" | "forest" | "choco" | "subtle" | "shimmer";
type radius = "full" | "2xl" | "3xl" | "md" | "lg" | "sm" | "none" | "xl";
type animation = "shimmer" | "shiny" | "bounce";

const gradients: gradient[] = ["neon", "forest", "choco", "subtle", "shimmer"];
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
const animations: animation[] = ["shimmer", "shiny", "bounce"];

const AnimtedButton = () => {
  return (
    <div className="h-[400px] rounded-lg  bg-white/10">
      <div className="flex items-center justify-center h-full border">
        <div className="w-1/2 flex items-center justify-between gap-5 flex-wrap">
          {gradients.map((gradient, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <BaseButton key={i} gradient={gradients[i]} radius={radiuss[i]}>
              {gradients[i]}
            </BaseButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimtedButton;
