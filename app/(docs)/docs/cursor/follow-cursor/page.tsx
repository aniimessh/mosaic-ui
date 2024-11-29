import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import FollowCursor from "@/components/cursor/follow-cursor/page";
import Tabs from "@/components/helpers/tabs/tabs";
import React from "react";

const FollowCursorPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Follow Cursor</h1>
        <p className="mt-1">
          An interactive React component that dynamically tracks and highlights
          cursor movement with smooth animations.
        </p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs previewContent={<FollowCursor />} />
      </section>
    </div>
  );
};

export default FollowCursorPage;
