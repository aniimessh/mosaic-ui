import React from "react";
import { ActionModal } from "./actionModal/modal";

const BaseModal = ({ modal }: { modal: string }) => {
  return modal === "action" ? <ActionModal /> : null;
};

export default BaseModal;
