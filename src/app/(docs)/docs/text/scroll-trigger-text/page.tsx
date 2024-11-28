import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import Tabs from "@/components/helpers/tabs/tabs";
import ScrollTriggerText from "@/components/text/scrolTriggerText/scrollTriggerText";
import React from "react";
import DefaultCodeBlock from "@/components/common/codeblock/defaultCodeBlock";
import ScrollTriggerTextCode from "@/components/text/scrolTriggerText/scrollTriggerTextCode";

const ScrollTriggerTextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Scroll Trigger Text</h1>
        <p className="mt-1">Text animation on scroll trigger</p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs previewContent={<ScrollTriggerText />} />
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
              <p className="font-bold">Install the following npm package</p>
            </div>
          </div>
          <section className="ml-10 space-y-4">
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="font-mono">npm i @gsap/react</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl">
              <p className="font-mono">npm i @studio-freight/lenis</p>
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
            <DefaultCodeBlock
              code={<ScrollTriggerTextCode />}
              language={"tsx"}
            />
          </section>
        </section>
      </section>
    </div>
  );
};

export default ScrollTriggerTextPage;
