"use client";

import { type ReactNode, useState } from "react";

interface TabsProps {
  codeContent: ReactNode;
  previewContent: ReactNode;
}

const Tabs = ({ previewContent, codeContent }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("preview");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-5">
        <button
          className={`${
            activeTab === "preview"
              ? "bg-white/60 text-white"
              : "bg-black text-white"
          } px-4 rounded-lg border`}
          onClick={() => handleTabChange("preview")}
          type="button"
        >
          Preview
        </button>
        <button
          className={`${
            activeTab === "code"
              ? "bg-white/60 text-whhite"
              : "bg-transparent text-white"
          } px-4 rounded-lg border`}
          onClick={() => handleTabChange("code")}
          type="button"
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "preview" ? (
          <div className="preview">{previewContent}</div>
        ) : (
          <div className="code">
            <pre>{codeContent}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
