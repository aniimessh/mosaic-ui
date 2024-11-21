import Sidebar from "@/components/sidebar/sidebar";
import type React from "react";

const DocumentationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full mx-auto h-[calc(100vh-100px)]">
      <Sidebar />
      <div className="px-2 relative">
        {children}
        <div className="h-[90%] w-0.5 bg-white/20 absolute left-0 -translate-x-1/2 clip-path-pointed" />
      </div>
    </div>
  );
};

export default DocumentationLayout;
