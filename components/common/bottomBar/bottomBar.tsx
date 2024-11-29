import BottomSheet from "@/components/helpers/sheet/bottomsheet";
import React, { useState } from "react";

const BottomBar = () => {
  const [showSheet, setShowSheet] = useState<boolean>(false);
  return (
    <>
      <div className="fixed z-50 bottom-2 left-1/2 -translate-x-1/2 lg:hidden">
        <button
          className="border px-10 py-1 border-white/40 rounded-full backdrop-blur-sm bg-transparent"
          type="button"
          onClick={() => {
            setShowSheet(!showSheet);
          }}
        >
          Menu
        </button>
      </div>
      {showSheet && (
        <BottomSheet showSheet={showSheet} setShowSheet={setShowSheet} />
      )}
    </>
  );
};

export default BottomBar;
