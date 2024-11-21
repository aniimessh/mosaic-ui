"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split the pathname into parts
  const parts = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex text-sm text-gray-600">
      {parts.map((part, index) => {
        const isLast = index === parts.length - 1;

        return (
          <span key={part} className="flex items-center">
            {!isLast ? (
              <p>{part.replace("-", " ")} </p>
            ) : (
              <span className="text-slate-600">{part.replace("-", " ")}</span>
            )}
            {!isLast && <span className="mx-2">/</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
