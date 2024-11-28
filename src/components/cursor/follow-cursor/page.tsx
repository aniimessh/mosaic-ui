"use client";

import type React from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";

const FollowCursor: React.FC = () => {
  const [cursorAxis, setCursorAxis] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorAxis({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Animate the element to follow the cursor
    gsap.to("#followcursor", {
      x: cursorAxis.x,
      y: cursorAxis.y,
      duration: 1.5,
      ease: "expo.out",
    });
  }, [cursorAxis]);

  return (
    <div>
      <div
        id="followcursor"
        className="size-12 bg-transparent border-red-400 border absolute  top-0 left-0 z-50 rounded-full pointer-events-none  grid place-items-center"
      />
    </div>
  );
};

export default FollowCursor;
