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
      <div className="px-2 w-[calc(100vw-530px)]">{children}</div>
    </div>
  );
};

export default DocumentationLayout;
