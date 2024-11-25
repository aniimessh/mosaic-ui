"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `import React from "react";
export const GlassCard = () => {
  return (
    <div className="h-[260px] w-[450px]  relative rounded-xl overflow-hidden bg-glass-bg bg-cover">
      <div className="absolute inset-0 flex justify-center items-center p-7">
        <div className="bg-black/10 backdrop-blur-sm border border-white/40 h-full flex justify-center items-center rounded-lg px-6  py-4 hover:shadow-2xl transition-all duration-300">
          <p className="font-black text-center text-3xl">Glassmorphism Card</p>
        </div>
      </div>
    </div>
  );
};


`;

const GlassCardCode = () => {
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

export default GlassCardCode;
