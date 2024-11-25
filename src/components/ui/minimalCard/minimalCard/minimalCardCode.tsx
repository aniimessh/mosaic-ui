"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `import Image from "next/image";
import React from "react";

const avengerBG =
  "https://images.unsplash.com/photo-1636959237460-dcdc368483a1?q=80&w=640";

export const MinimalCard = () => {
  return (
    <div className="bg-black/30 p-4 rounded-2xl w-[450px] hover:shadow-2xl transition-all duration-300 border-white/20 border">
      <Image
        src={avengerBG}
        alt=""
        width={400}
        height={200}
        className="h-[200px] object-cover rounded-2xl transition-all duration-200"
      />

      <div>
        <p className="font-bold mt-5 mb-2">Minimal Card</p>
        <p className="text-white/30 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          blanditiis. Sapiente
        </p>
      </div>
    </div>
  );
};

`;

const MinimalCardCode = () => {
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

export default MinimalCardCode;
