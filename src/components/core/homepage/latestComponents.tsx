import React from "react";

const LatestComponent = () => {
  return (
    <div className="w-full flex items-center justify-center h-full bg-black/30">
      <div className="border border-white/10 p-1  rounded-lg mx-auto">
        <div className="border border-white/10 p-2  rounded-lg mx-auto">
          <div className="flex items-start justify-between ">
            {/* left content */}
            <div className="flex flex-col items-start gap-10 ">
              <p className="bg-white/10 rounded-full px-3 py-1 text-xs text-left">
                🌠 Latest Component
              </p>
              <div>
                <p className="text-5xl font-bold text-nowrap">Follow Cursor</p>
                <p className="text-white/80 text-xs mt-2">
                  An interactive React component that dynamically tracks and
                  highlights cursor movement with smooth animations.
                </p>
              </div>
            </div>
            {/* right content
          <div className="w-1/2">
          <FollowCursor />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestComponent;
