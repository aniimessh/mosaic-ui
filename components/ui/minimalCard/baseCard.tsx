import React from "react";
import { NeonCard } from "./neonCard/neonCard";
import { GlassCard } from "./glassCard/glassCard";
import { MinimalCard } from "./minimalCard/minimalCard";

const MinimalBaseCard = ({ variant }: { variant: string; radius?: string }) => {
  return variant === "neon" ? (
    <NeonCard />
  ) : variant === "glass" ? (
    <GlassCard />
  ) : variant === "minimal" ? (
    <MinimalCard />
  ) : null;
};

export default MinimalBaseCard;
