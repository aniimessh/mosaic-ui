"use client";

import React from "react";
import MinimalBaseCard from "../ui/minimalCard/baseCard";

type variant = "minimal" | "texture" | "neon" | "glass" | "shiny";
type radius = "lg" | "xl" | "md" | "sm" | "2xl";

const variants: variant[] = ["minimal", "texture", "neon", "glass", "shiny"];
const radius: radius[] = ["lg", "xl", "md", "sm", "2xl"];

const MinimalCard = () => {
  return (
    <div className="h-full rounded-lg w-full">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 place-items-center gap-4 h-full">
          {variants.map((variant, i) => (
            <MinimalBaseCard key={i} variant={variant} radius={radius[i]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinimalCard;
