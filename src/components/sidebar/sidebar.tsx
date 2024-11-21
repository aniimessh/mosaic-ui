import { CATEGORIES } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[250px] relative h-full overflow-y-scroll hideScrollbar px-5">
      <div className="h-[100%] w-0.5 bg-white/20 absolute right-0 -translate-x-1/2 clip-path-pointed" />
      {CATEGORIES.map((category) => (
        <div key={category.name} className="relative pb-5">
          {/* Category Header */}
          <h2 className="font-semibold text-white/50 capitalize">
            {category.name.split("-").join(" ")}
          </h2>
          {/* Subcategories */}
          <div className="flex flex-col gap-1 pt-4 pl-4">
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory}
                href={`/docs/${category.name.toLowerCase()}/${subcategory
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="hover:underline text-white/80"
              >
                {subcategory}
              </Link>
            ))}
          </div>
          <div className="w-full h-[1px] bg-white/20 absolute bottom-2 left-1/2 -translate-x-1/2 clip-path-pointed" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
