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
      <div className="flex gap-1 mb-7">
        <button
          className={`${
            activeTab === "preview"
              ? "bg-white/10 text-white border-b-2 border-b-white"
              : "bg-black text-white "
          } px-4 p-2 rounded-sm border border-white/10   transition-all duration-200`}
          onClick={() => handleTabChange("preview")}
          type="button"
        >
          Preview
        </button>
        <button
          className={`${
            activeTab === "code"
              ? "bg-white/10 text-white border-b-2 border-b-white"
              : "bg-transparent text-white "
          } px-4 p-2 rounded-sm border border-white/10    transition-all duration-200`}
          onClick={() => handleTabChange("code")}
          type="button"
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "preview" ? (
          <div className="h-[400px] rounded-lg  bg-white/10">
            <div className="flex items-center justify-center h-full">
              {previewContent}
            </div>
          </div>
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
