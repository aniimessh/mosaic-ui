"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `import React from "react";
export const NeonCard = () => {
  return (
    <div className="flex items-center justify-center  w-4/6 mx-auto rounded-xl  group">
      <div className="relative p-8 rounded-xl ">
        <div className="shadow-cardNeon absolute inset-0 rounded-xl opacity-60 group-hover:opacity-90 duration-300 transition-all" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff2975] via-[#00FFF1] to-[#ff2975] p-[2px]">
          <div className="h-full w-full rounded-xl bg-black" />
        </div>
        <div className="relative z-10">
          <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent drop-shadow-[0_0_10px_rgba(255,41,117,0.8)]">
            Neon Gradient Card
          </p>
        </div>
      </div>
    </div>
  );
};


`;

const NeonCardCode = () => {
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

export default NeonCardCode;
