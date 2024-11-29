import type React from "react";
import { ActionModal } from "./actionModal/modal";

const BaseModal = ({ modal }: { modal: string; children: React.ReactNode }) => {
  return modal === "action" ? <ActionModal /> : null;
};

export default BaseModal;
