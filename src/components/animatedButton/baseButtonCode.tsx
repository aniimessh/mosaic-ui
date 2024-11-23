import React from "react";
import CodeBlock from "../codeblock/codeblock";
import { codeSnippets } from "@/utils/codesnippet/codesnippet";

const AnimatedButtonCode = () => {
  return (
    <div className="h-[500px] overflow-y-scroll hideScrollbar">
      {codeSnippets.map((snippet) => (
        <CodeBlock key={snippet.id} code={snippet.code} title={snippet.title} />
      ))}
    </div>
  );
};

export default AnimatedButtonCode;
