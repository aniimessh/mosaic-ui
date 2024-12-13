import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import Tabs from "@/components/helpers/tabs/tabs";
import React from "react";
import DefaultCodeBlock from "@/components/common/codeblock/defaultCodeBlock";

const BounceLoading = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-transparent">
        <div className="w-5 h-5 m-5 bg-yellow-300 rounded-full animate-bounce-rotate" />
        <div className="w-5 h-5 m-5 bg-yellow-300 rounded-full animate-bounce-rotate animation-delay-300" />
        <div className="w-5 h-5 m-5 bg-yellow-300 rounded-full animate-bounce-rotate animation-delay-600" />
      </div>
    </div>
  );
};

const defaultCode = `const BounceLoading = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-transparent">
        <div className="w-5 h-5 m-5 bg-yellow-300 rounded-full animate-bounce-rotate" />
        <div className="w-5 h-5 m-5 bg-yellow-300 rounded-full animate-bounce-rotate animation-delay-300" />
        <div className="w-5 h-5 m-5 bg-yellow-300 rounded-full animate-bounce-rotate animation-delay-600" />
      </div>
    </div>
  );
};
`;

const Bounce = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Bounce</h1>
        <p className="mt-1">Bouncing loading animation for your project</p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs previewContent={<BounceLoading />} />
      </section>

      <section>
        <h1 className="text-3xl font-semibold mt-6 border-b border-b-white/20 pb-3">
          Manual Usage
        </h1>
        <section className="my-5 h-[300px] flex flex-col justify-between relative">
          <div className="h-full w-0.5 bg-white/20 absolute left-4 -translate-x-1/2 clip-path-pointed" />

          <div className="flex items-center gap-2">
            <p className="bg-neonbg p-4 rounded-full h-1 w-1 flex items-center justify-center text-black font-bold">
              1
            </p>
            <p className="font-bold">
              Copy paste the following code into your project
            </p>
          </div>
          <section className="ml-10">
            <DefaultCodeBlock code={defaultCode} language={"tsx"} />
          </section>
          <div className="flex items-center gap-2">
            <p className="bg-neonbg p-4 rounded-full h-1 w-1 flex items-center justify-center text-black font-bold">
              2
            </p>
            <p className="font-bold">
              Copy paste the following code into{" "}
              <span className="bg-slate-600 px-2 py-0.5 rounded-full">
                tailwind.config.js
              </span>
            </p>
          </div>
          <section className="ml-10">
            <DefaultCodeBlock
              code={`
module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-rotate': 'bounce-rotate 0.9s infinite alternate',
      },
      keyframes: {
        'bounce-rotate': {
          '0%': { transform: 'translateY(50px) scale(1)' },
          '100%': { transform: 'translateY(10px) scale(1.8) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const animationDelayUtilities = {
        '.animation-delay-300': { animationDelay: '0.3s' },
        '.animation-delay-600': { animationDelay: '0.6s' },
      };
      addUtilities(animationDelayUtilities);
    },
  ],
};

                `}
              language={"tsx"}
            />
          </section>
        </section>
      </section>
    </div>
  );
};

export default Bounce;
