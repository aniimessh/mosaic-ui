import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import DefaultCodeBlock from "@/components/common/codeblock/defaultCodeBlock";
import Tabs from "@/components/helpers/tabs/tabs";
import SlideText from "@/components/text/slideText/slideText";
import React from "react";

const defaultCode = `"use client";

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

`;

const FadeTextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Fade Text</h1>
        <p className="mt-1">
          Text fading transitions for words to pop up, down, right, left
        </p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs previewContent={<SlideText />} />
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

export default FadeTextPage;
