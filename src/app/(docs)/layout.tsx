import Sidebar from "@/components/sidebar/sidebar";
import type React from "react";
import { Toaster } from "sonner";

const DocumentationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex w-full mx-auto h-[calc(100vh-64px)]">
      <Toaster richColors />
      <Sidebar />
      <div className="px-2 lg:w-[calc(100vw-490px)] w-full overflow-scroll hideScrollbar ">
        {children}
      </div>
    </main>
  );
};

export default DocumentationLayout;
