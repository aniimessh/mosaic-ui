"use client";

import localFont from "next/font/local";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Navbar from "@/components/common/navbar/navbar";
import BottomBar from "@/components/common/bottomBar/bottomBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mosaic UI</title>
        <link
          rel="shortcut icon"
          href="/logo/favicon.png"
          type="image/x-icon"
          className="rounded-full"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} hideScrollbar`}
      >
        <div className="absolute inset-0 h-full w-full -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <Toaster richColors />
        <Analytics />
        <Navbar />
        {/* Render Sidebar only if not on homepage */}
        <main className="flex-1">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
