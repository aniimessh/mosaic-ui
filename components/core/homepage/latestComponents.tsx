import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const LatestComponent = () => {
  useGSAP(() => {
    const testDiv = document.getElementById("testDiv");
    const cursor = document.getElementById("cursor");

    if (testDiv && cursor) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = testDiv.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        gsap.to(cursor, {
          x,
          y,
          duration: 0.1,
          ease: "power3.out",
        });
      };

      testDiv.addEventListener("mousemove", handleMouseMove);

      // Cleanup function
      return () => {
        testDiv.removeEventListener("mousemove", handleMouseMove);
      };
    }
  });

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="border border-white/10 p-1 bg-black/10 backdrop-blur rounded-lg mx-auto">
        <div className="border border-white/10 p-2 rounded-lg mx-auto">
          <div>
            {/* Left Content */}
            <div className="flex flex-col items-start gap-10">
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
            {/* Right Content */}
            <div className="relative h-[200px] overflow-hidden" id="testDiv">
              <Test />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestComponent;

const Test = () => {
  return (
    <div>
      <div
        className="size-6 bg-transparent border border-red-300 rounded-full absolute"
        id="cursor"
      />
    </div>
  );
};
