"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `
"use client";

import useToast from "@/hooks/use-toast";
import { Trash2, TriangleAlert, X } from "lucide-react";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ActionModal = () => {
  const { showToast } = useToast();

  const trashRef = React.useRef(null);

  useGSAP(() => {
    return gsap.set(trashRef.current, {
      y: 100,
      opacity: 0,
    });
  });

  const handleMouseEnter = () => {
    gsap.to("#delete", {
      y: 0, // Bring it to its original position
      opacity: 1,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to("#delete", {
      y: 100, // Move it back out
      opacity: 0,
      duration: 0.2,
      ease: "power4.in",
    });
  };
  return (
    <div className="">
      <div className="bg-white/95 rounded-lg lg:w-[400px]">
        <div className="flex items-center rounded-t-lg justify-between text-black p-4">
          <h1>Delete user</h1>
          <X size={14} className="cursor-pointer" />
        </div>
        <div className="bg-white p-4">
          <p className="text-black">
            Are you sure you want to delete this <strong>user</strong>?
          </p>
        </div>
        <div className="py-2 bg-gradient-to-b from-red-100 shadow-sm from to-transparent  rounded-b-lg">
          <p className=" text-semibold text-red-500 rounded-b-lg  border-red-400 px-3 text-xs flex items-center gap-1">
            <TriangleAlert size={12} /> This action is permanent and can&apos;t
            be undone.
          </p>
        </div>
        <div className="px-4 py-2.5  rounded-b-xl flex justify-end overflow-hidden">
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md text-white text-sm shadow-lg font-medium"
            onClick={() => showToast("User deleted successfully", "success")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Delete user <Trash2 size={14} id="delete" ref={trashRef} />
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
