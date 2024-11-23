import React, { useState } from "react";
import BottomSheet from "../sheet/bottomsheet";

const BottomBar = () => {
  const [showSheet, setShowSheet] = useState<boolean>(false);
  return (
    <>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:hidden">
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
