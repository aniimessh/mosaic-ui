import Sidebar from "@/components/sidebar/sidebar";
import type React from "react";
import { Toaster } from "sonner";

const DocumentationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex w-full mx-auto h-[calc(100vh-100px)]">
      <Toaster richColors />
      <Sidebar />
      <div className="px-2 lg:w-[calc(100vw-530px)] w-full">{children}</div>
    </main>
  );
};

export default DocumentationLayout;
