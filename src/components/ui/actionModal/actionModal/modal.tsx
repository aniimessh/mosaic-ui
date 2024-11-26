"use client";

import useToast from "@/hooks/use-toast";
import { Trash2, TriangleAlert, X } from "lucide-react";
import React from "react";

export const ActionModal = () => {
  const { showToast } = useToast();
  return (
    <div className="mx-auto lg:w-[400px]">
      <div className="bg-white/95 rounded-lg">
        <div className="flex items-center rounded-t-lg justify-between text-black p-4">
          <h1>Delete user</h1>
          <X size={14} className="cursor-pointer" />
        </div>
        <div className="bg-white p-4">
          <p className="text-black">
            Are you sure you want to delete this <strong>user</strong>?
          </p>
        </div>
        <div className="py-2 bg-gradient-to-b from-red-100 shadow-sm from to-transparent  rounded-b-lg">
          <p className=" text-semibold text-red-500 rounded-b-lg  border-red-400 px-3 text-xs flex items-center gap-1">
            <TriangleAlert size={12} /> This action is permanent and can&apos;t
            be undone.
          </p>
        </div>
        <div className="px-4 py-2.5  rounded-b-xl flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md text-white text-sm shadow-lg font-medium"
            onClick={() => showToast("User deleted successfully")}
          >
            Delete user <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
