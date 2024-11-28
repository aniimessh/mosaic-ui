"use client";

import React, { useCallback, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerText = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Function to split text into individual span elements
  const createSpan = useCallback((text: string): string => {
    return text
      .split("")
      .map((char, index) =>
        char.trim() === ""
          ? `<span style="display:inline-block;" data-key="${index}">&nbsp;</span>`
          : `<span style="display:inline-block;" data-key="${index}">${char}</span>`
      )
      .join("");
  }, []);

  // Check and update mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initial state
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Lenis initialization and integration with ScrollTrigger
  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      wrapper: containerRef.current ?? document.body,
      content: containerRef.current?.firstChild as HTMLElement,
      smoothWheel: true,
    });

    const lenis = lenisRef.current;

    // Sync Lenis with requestAnimationFrame
    const onRaf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    };
    requestAnimationFrame(onRaf);

    // Sync Lenis with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current?.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  // GSAP animation setup
  useGSAP(() => {
    if (textRef.current) {
      const originalText = textRef.current.textContent || "";
      textRef.current.innerHTML = createSpan(originalText);

      const spans = textRef.current.querySelectorAll("span");

      gsap.to(spans, {
        opacity: 0,
        y: -50,
        stagger: 0.07,
        scrollTrigger: {
          trigger: "#name",
          scroller: containerRef.current,
          start: isMobile ? "top 60%" : "top 70%",
          end: isMobile ? "top 40%" : "top 15%",
          scrub: 1,
          // markers: true, // Uncomment for debugging
        },
      });
    }
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={`w-full ${
        isMobile ? "h-[350px]" : "h-[550px]"
      } overflow-hidden`}
      id="container"
    >
      <div
        className={`${
          isMobile ? "h-[600px]" : "h-[900px]"
        } w-full flex items-center justify-center`}
        id="text"
      >
        <h1
          className={`text-white font-mono uppercase font-bold ${
            isMobile ? "text-4xl" : "text-7xl"
          } text-center`}
          id="name"
          ref={textRef}
        >
          Scroll Trigger Text
        </h1>
      </div>
    </div>
  );
};

export default ScrollTriggerText;
