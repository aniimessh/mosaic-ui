import React from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Tabs from "@/components/tabs/tabs";
import AnimatedButton from "@/components/animatedButton/baseButton";
import AnimatedButtonCode from "@/components/animatedButton/baseButtonCode";
import DefaultCodeBlock from "@/components/codeblock/defaultCodeBlock";

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
        <section className="my-5 h-[300px] flex flex-col  justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="bg-neonbg p-4 rounded-full h-1 w-1 flex items-center justify-center text-black font-bold">
                1
              </p>
              <p className="font-bold">
                Copy and paste the following code into your project
              </p>
            </div>
            <section className="ml-20">
              <DefaultCodeBlock />
            </section>
          </div>

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
