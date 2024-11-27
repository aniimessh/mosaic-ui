"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const SlideText = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#fadeUp", {
      y: -100,
      opacity: 1,
      duration: 0.2,
      ease: "power1.out",
      scale: 0,
    });

    tl.from("#fadeRight", {
      x: 400,
      opacity: 1,
      duration: 0.2,
      scale: 0,
    });

    tl.from("#fadeDown", {
      y: 100,
      opacity: 1,
      duration: 0.2,
      scale: 0,
    });

    tl.from("#fadeLeft", {
      x: -400,
      opacity: 1,
      duration: 0.2,
      scale: 0,
    });
  });

  return (
    <div className="text-center">
      <div className="p-5 overflow-hidden">
        <h1 className="text-4xl font-bold scale-100" id="fadeUp">
          Slide Up
        </h1>
      </div>
      <div className="p-5 overflow-hidden">
        <h1 className="text-4xl font-bold scale-100" id="fadeRight">
          Slide Right
        </h1>
      </div>
      <div className="p-5 overflow-hidden">
        <h1 className="text-4xl font-bold scale-100" id="fadeDown">
          Slide Down
        </h1>
      </div>
      <div className="p-5 overflow-hidden">
        <h1 className="text-4xl font-bold scale-100" id="fadeLeft">
          Slide Left
        </h1>
      </div>
    </div>
  );
};

export default SlideText;
