"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `"use client";

import { Trash2, X } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export const ActionModal = () => {
  return (
    <div className="mx-auto lg:w-[400px]">
      <div className="bg-white/80 rounded-lg">
        <div className="flex items-center rounded-t-lg justify-between text-black  p-4">
          <h1>Delete user</h1>
          <X size={14} className="cursor-pointer" />
        </div>
        <div className="bg-white/90 p-4">
          <p className="text-black">
            Are you sure you want to delete this <strong>user</strong>?
          </p>
        </div>
        <div className="p-2 bg-red-200 bg-gradient-to-b from-white/80 to-red-300 rounded-b-lg">
          <p className=" text-semibold text-red-500 rounded-b-lg  border-red-400 p-2">
            This action can&apos;t be undone.
          </p>
        </div>
        <div className="p-4  rounded-b-xl flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md text-white text-sm shadow-lg font-medium"
            onClick={() => toast.success("User deleted successfully")}
          >
            Delete user <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
`;

const ModalCode = () => {
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

export default ModalCode;
