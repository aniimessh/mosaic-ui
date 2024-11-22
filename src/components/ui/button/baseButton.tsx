import type React from "react";
import ShimmerButton from "./breathingBtn/breathingButton";
import NeonButton from "./neonBtn/neonButton";
import ForestButton from "./forestBtn/forestButton";
import GlitchButton from "./glitchBtn/glitchButton";

const BaseButton = ({
  children,
  gradient,
  radius,
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

export default BaseButton;
