"use client";

import "highlight.js/styles/github-dark.css";
import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const CodeBlock = ({ code, title }: { code: string; title: string }) => {
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
    <div className="bg-[#0D1117]">
      <div className="text-center text-sm flex items-center  text-gray-300">
        <div className="h-0.5 w-full bg-white/10 clip-path-pointed" />
        {title}
        <div className="h-0.5 w-full bg-white/10 clip-path-pointed" />
      </div>
      <pre className="whitespace-pre-wrap relative">
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
    </div>
  );
};

export default CodeBlock;
