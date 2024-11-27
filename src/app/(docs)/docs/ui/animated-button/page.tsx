import React from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Tabs from "@/components/tabs/tabs";
import AnimatedButton from "@/components/animatedButton/animdatedButton";
import AnimatedButtonCode from "@/components/animatedButton/animatedButtonCode";
import DefaultCodeBlock from "@/components/codeblock/defaultCodeBlock";

const buttonCode = `
import React from "react";
import BaseButton from "../ui/button/baseButton";

type gradient = "neon" | "forest" | "choco" | "subtle" | "breathing" | "glitch";
type radius = "full" | "2xl" | "3xl" | "md" | "lg" | "sm" | "none" | "xl";
// type animation = "breathing" | "shiny" | "bounce" | "glitch";

const gradients: gradient[] = [
  "neon",
  "forest",
  "choco",
  "subtle",
  "breathing",
  "glitch",
];
const radiuss: radius[] = [
  "full",
  "2xl",
  "3xl",
  "md",
  "lg",
  "sm",
  "none",
  "xl",
];
// const animations: animation[] = ["breathing", "shiny", "bounce", "glitch"];

const AnimatedButton = () => {
  return (
    <div className="h-full rounded-lg w-full">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  place-items-center gap-4">
          {gradients.map((gradient, i) => (
            <BaseButton
              key={i}
              gradient={gradient}
              radius={radiuss[i % radiuss.length]}
            >
              {gradient}
            </BaseButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton;

`;

const AnimatedButtonPage = () => {
  return (
    <div className="">
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Animated Button</h1>
        <p className="mt-1">A group of animated & gradients button</p>
      </section>
      <section className="mt-10 space-y-10">
        <Tabs
          codeContent={<AnimatedButtonCode />}
          previewContent={<AnimatedButton />}
        />
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
              <p className="font-bold">
                Copy and paste the following code into your project
              </p>
            </div>
          </div>
          <section className="ml-10">
            <DefaultCodeBlock code={buttonCode} language="tsx" />
          </section>

          <div className="flex items-center gap-2">
            <p className="bg-neonbg p-4 rounded-full h-1 w-1 flex items-center justify-center text-black font-bold">
              2
            </p>
            <p className="font-bold">
              Update the import path to match your project setup
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AnimatedButtonPage;
