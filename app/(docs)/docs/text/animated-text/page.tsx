import { AnimatedText } from "@/components/text/animatedText/animatedText";
import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import Tabs from "@/components/helpers/tabs/tabs";
import React from "react";
import DefaultCodeBlock from "@/components/common/codeblock/defaultCodeBlock";

const defaultCode = `
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

const AnimatedTextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Animated Text</h1>
        <p className="mt-1">Text animation for words to pop up</p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs previewContent={<AnimatedText />} />
      </section>

      <section>
        <h1 className="text-3xl font-semibold mt-6 border-b border-b-white/20 pb-3">
          Manual Usage
        </h1>
        <section className="my-5 h-[300px] flex flex-col justify-between relative">
          <div className="h-full w-0.5 bg-white/20 absolute left-4 -translate-x-1/2 clip-path-pointed" />
          <div>
            <div className="flex items-center gap-2">
              <p className="bg-neonbg p-4 rounded-full h-1 w-1 flex items-center justify-center text-black font-bold">
                1
              </p>
              <p className="font-bold">Install the @gsap/react package</p>
            </div>
          </div>
          <section className="ml-10">
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="font-mono">npm i @gsap/react</p>
            </div>
          </section>

          <div className="flex items-center gap-2">
            <p className="bg-neonbg p-4 rounded-full h-1 w-1 flex items-center justify-center text-black font-bold">
              2
            </p>
            <p className="font-bold">
              Copy paste the following code into your project
            </p>
          </div>
          <section className="ml-10">
            <DefaultCodeBlock code={defaultCode} language={"tsx"} />
          </section>
        </section>
      </section>
    </div>
  );
};

export default AnimatedTextPage;
