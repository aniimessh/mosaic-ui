"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import BottomBar from "@/components/bottomBar/bottomBar";

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
          href="/logo/favicon.ico"
          type="image/x-icon"
          className="rounded-full"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics />
        <Navbar />
        {/* Render Sidebar only if not on homepage */}
        <main className="flex-1 ">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
