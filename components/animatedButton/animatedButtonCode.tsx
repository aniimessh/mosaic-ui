import React from "react";
import CodeBlock from "../common/codeblock/codeblock";
import { codeSnippets } from "../../codesnippet/codesnippet";

const AnimatedButtonCode = () => {
  return (
    <div className="h-[500px] overflow-y-scroll hideScrollbar">
      {codeSnippets.button.map((snippet) => (
        <CodeBlock key={snippet.id} code={snippet.code} title={snippet.title} />
      ))}
    </div>
  );
};

export default AnimatedButtonCode;
