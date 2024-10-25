/** @jsxImportSource @emotion/react */
import React from "react";
import CloseIcon from "../assets/icons/close-icon.svg";
import { css } from "@emotion/react";

const Modal = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;

  const closeBtnStyles = css`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    padding: 16px;
    border-radius: 8px;
    &:hover {
      background-color: #f0f0f0;
    }
  `;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        zIndex: 999999,
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-end",
          width: "100%",
          maxWidth: "1000px",
          height: "80vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button css={closeBtnStyles} onClick={() => setOpen(false)}>
          <img
            src={CloseIcon}
            width={"24px"}
            height={"24px"}
            alt="Close Icon"
          />
        </button>
        <div style={{ width: "100%", height: "100%", borderRadius: "8px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
