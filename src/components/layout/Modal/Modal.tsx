import React, { useState, useEffect, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="relative rounded-lg  bg-gradient-to-br from-[#969696] to-[#343434]">
          <div
            className="relative bg-[#27292D] text-white w-[29rem] border-2 border-transparent rounded-lg px-6 pb-10 pt-4 z-100"
            style={{
              backgroundClip: "padding-box",
            }}
          >
            <div className="flex justify-end mr-[-0.5rem]">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#131319] cursor-pointer" onClick={onClose}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5754 4.30861C12.8194 4.06454 12.8194 3.66881 12.5754 3.42473C12.3313 3.18065 11.9355 3.18065 11.6915 3.42473L8.00008 7.11612L4.30869 3.42473C4.06461 3.18065 3.66888 3.18065 3.42481 3.42473C3.18073 3.66881 3.18073 4.06454 3.42481 4.30861L7.1162 8L3.42481 11.6914C3.18073 11.9355 3.18073 12.3312 3.42481 12.5753C3.66888 12.8194 4.06461 12.8194 4.30869 12.5753L8.00008 8.88389L11.6915 12.5753C11.9355 12.8194 12.3313 12.8194 12.5754 12.5753C12.8194 12.3312 12.8194 11.9355 12.5754 11.6914L8.88396 8L12.5754 4.30861Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
