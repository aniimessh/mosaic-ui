import React from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Tabs from "@/components/tabs/tabs";
import AnimatedButton from "@/components/animatedButton/baseButton";
import AnimatedButtonCode from "@/components/animatedButton/baseButtonCode";

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
    </div>
  );
};

export default AnimatedButtonPage;
