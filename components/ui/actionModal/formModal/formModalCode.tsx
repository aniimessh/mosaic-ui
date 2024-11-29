"use client";

import hljs from "highlight.js";
import { useEffect, useState } from "react";
import "highlight.js/styles/github-dark.css";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const code = `"use client";

import { useGSAP } from "@gsap/react";
import { Badge, BadgeCheck, X } from "lucide-react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import useToast from "@/hooks/use-toast";

const FormModal = () => {
  const [password, setPassword] = useState("");
  const { showToast } = useToast();

  const backCheckRef = useRef(null);

  const rules = [
    {
      id: 1,
      text: "At least 8 characters",
      isValid: (pwd: string) => pwd.length >= 8,
    },
    {
      id: 2,
      text: "At least one uppercase letter",
      isValid: (pwd: string) => /[A-Z]/.test(pwd),
    },
    {
      id: 3,
      text: "At least one number",
      isValid: (pwd: string) => /\d/.test(pwd),
    },
    {
      id: 4,
      text: "At least one special character",
      isValid: (pwd: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    },
    {
      id: 5,
      text: "At least one small character",
      isValid: (pwd: string) => /[a-z]/.test(pwd),
    },
  ];

  useGSAP(() => {
    gsap.to(backCheckRef.current, {
      opacity: 1,
      duration: 2,
    });
  });

  return (
    <div>
      <div className="bg-white/95 rounded-lg lg:w-[400px]">
        <div className="flex items-center rounded-t-lg border-b border-white/10 justify-between text-black p-4">
          <h1>Create user</h1>
          <X size={14} className="cursor-pointer" />
        </div>
        <div className="p-4 bg-white border-t border">
          <div>
            <label htmlFor="email">
              <p className="text-black text-sm mb-1 font-medium">Email</p>
              <input
                type="email"
                className="border px-3 py-1 border-black/20 w-full rounded-md placeholder:text-sm text-sm focus:outline-0 text-black"
                placeholder="name@example.com"
                id="email"
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="password">
              <p className="text-black text-sm mb-1 font-medium">Password</p>
              <input
                type="password"
                className="border px-3 py-1 border-black/20 w-full rounded-md placeholder:text-sm text-sm focus:outline-0 text-black"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
            <div className="mt-2 space-y-1">
              {rules.map((rule) => (
                <p
                  key={rule.id}
                  className={text-xs \$\{
                    rule.isValid(password) ? "text-green-600" : "text-gray-500"
                  } flex items-center}
                >
                  {rule.isValid(password) ? (
                    <BadgeCheck size={13} ref={backCheckRef} />
                  ) : (
                    <Badge size={13} />
                  )}
                  {rule.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4 py-2.5  rounded-b-xl flex justify-end overflow-hidden">
          <button
            type="button"
            className="flex items-center gap-2 bg-purple-700 px-3 py-1 rounded-md text-white text-sm shadow-lg font-medium"
            onClick={() => showToast("User created successfully", "success")}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;

`;

const FormModalCode = () => {
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

export default FormModalCode;
