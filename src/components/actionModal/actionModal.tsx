import React from "react";
import BaseModal from "../ui/actionModal/baseModal";

type modal = "action" | "info" | "form";

const modals: modal[] = ["action", "info", "form"];

const ActionModal = () => {
  return (
    <div className="h-full rounded-lg w-full">
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 place-items-center gap-4">
          {modals.map((modal, i) => (
            <BaseModal modal={modal} key={i}>
              {modal}
            </BaseModal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
