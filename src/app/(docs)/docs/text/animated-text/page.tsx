import AnimatedText from "@/components/text/animatedText/animatedText";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Tabs from "@/components/tabs/tabs";
import React from "react";
import AnimatedTextCode from "@/components/text/animatedText/animatedTextCode";

const AnimatedTextPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Animated Text</h1>
        <p className="mt-1">Text animation for words to pop up</p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs
          codeContent={<AnimatedTextCode />}
          previewContent={<AnimatedText />}
        />
      </section>
    </div>
  );
};

export default AnimatedTextPage;
