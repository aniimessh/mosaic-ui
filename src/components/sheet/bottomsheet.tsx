import React from "react";
import MobileSidebar from "./mobile-sidebar";

const BottomSheet = ({
  showSheet,
  setShowSheet,
}: {
  showSheet: boolean;
  setShowSheet: (value: boolean) => void;
}) => {
  if (!showSheet) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center animate-slideIn"
      onClick={() => setShowSheet(false)} // Close on clicking the overlay
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setShowSheet(false);
        }
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* BottomSheet Content */}
      <div
        className="relative z-10 bottom-0 text-center h-[400px] w-[95vw] overflow-y-scroll  bg-black border rounded-t-xl rounded-lg border-white/10 p-2"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setShowSheet(false);
          }
        }}
      >
        <div className="h-full">
          <MobileSidebar setShowSheet={setShowSheet} />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
