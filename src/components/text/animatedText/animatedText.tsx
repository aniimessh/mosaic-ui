"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const createSpan = useCallback((text: string) => {
    return text
      .split("")
      .map((char, index) =>
        char.trim() === ""
          ? `<span style="display:inline-block;" key=${index}>&nbsp;</span>`
          : `<span style="display:inline-block;" key=${index}>${char}</span>`
      )
      .join("");
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const originalText = textRef.current.textContent || "";
      textRef.current.innerHTML = createSpan(originalText);

      const spans = textRef.current.querySelectorAll("span");

      gsap.fromTo(
        spans,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.in",
          duration: 0.9,
        }
      );
    }
  }, [createSpan]);

  return (
    <div className="overflow-hidden">
      <h1
        className="font-roboto text-6xl text-center font-extrabold uppercase tracking-wider"
        ref={textRef}
      >
        Animated Text
      </h1>
    </div>
  );
};

export default AnimatedText;
