"use client";

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center">
      <h1 className="text-4xl font-bold font-mono">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600 font-mono">
        Oops You Landed On The Wrong Page
      </p>
      <p className="my-5 text-lg text-gray-600 font-mono">
        If its a component, I might be working on it 👨‍💻
      </p>
      <Link href="/" className="hover:underline mt-10">
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
