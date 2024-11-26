import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Tabs from "@/components/tabs/tabs";
import { ActionModal } from "@/components/ui/actionModal/actionModal/modal";
import ModalCode from "@/components/ui/actionModal/actionModal/modalCode";
import React from "react";

const ActionModalPage = () => {
  return (
    <div>
      <Breadcrumb />
      <section>
        <h1 className="text-3xl font-semibold">Action Modal</h1>
        <p className="mt-1">Moslty use modal in out day to day work</p>
      </section>

      <section className="mt-10 space-y-10">
        <Tabs codeContent={<ModalCode />} previewContent={<ActionModal />} />
      </section>
    </div>
  );
};

export default ActionModalPage;