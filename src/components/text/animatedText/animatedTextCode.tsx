"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `
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
          ? \`\<span style="display:inline-block;" key=\$\{index}>&nbsp;</span>\`\
          : \`\<span style="display:inline-block;" key=\$\{index}>\$\{char}</span>\`\
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

`;

const AnimatedTextCode = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <pre className="whitespace-pre-wrap relative h-[500px] overflow-y-scroll hideScrollbar rounded-b-lg ">
      <div className="absolute top-2 z-10 right-2 p-2 bg-white/10 rounded-lg transition-all duration-500 ease-in-out text-white cursor-pointer">
        {isCopied ? (
          <Check className="text-green-500 transition-all duration-500" />
        ) : (
          <Copy
            className="text-white transition-all duration-500"
            onClick={copyToClipboard}
          />
        )}
      </div>
      <code className="language-javascript">{code}</code>
    </pre>
  );
};

export default AnimatedTextCode;
