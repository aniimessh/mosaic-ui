"use client";

import hljs from "highlight.js";
import type React from "react";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";

interface CodeBlockProps {
  code: string;
  language: string; // Example: "javascript", "python", etc.
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className={`rounded-md relative overflow-hidden transition-all duration-300 bg-white/10 ${
        isExpanded ? "h-auto" : "h-[200px]"
      }`}
    >
      {/* Gradient overlay */}
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-full z-20 bg-gradient-to-t from-black via-black/5 to-transparent pointer-events-none" />
      )}

      <pre className="whitespace-pre-wrap">
        <code className={`language-${language}`}>{code}</code>
      </pre>

      {/* Expand Button */}
      <button
        className="absolute inset-x-0 bottom-4 z-30 mx-auto w-[100px] border text-white bg-black/80 rounded-md p-2 text-center cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
        type="button"
      >
        {isExpanded ? "Collapse" : "Read Code"}
      </button>
    </div>
  );
};

export default CodeBlock;
