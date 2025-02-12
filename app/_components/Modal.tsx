"use client";

import React from "react";
import CloseIcon from "public/close-icon.svg";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <>
      {open && (
        // Modal Overlay
        <div className="z-[99999] fixed top-0 bottom-0 right-0 left-0 bg-overlayBg flex justify-center items-center w-screen h-screen">
          {/* Modal Container */}
          <div className="flex flex-col gap-4 w-[80%] h-[80%]">
            {/* Modal Header */}
            <button
              onClick={onClose}
              className="flex items-center justify-center bg-white self-end rounded-md p-2 hover:bg-gray-300"
            >
              <CloseIcon alt="Close Icon" width={24} height={24} fill="#333" />
            </button>
            {/* Modal Body */}
            <div className="w-full h-full rounded-md overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
