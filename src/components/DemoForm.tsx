import React from "react";
import CloseIcon from "../assets/icons/close-icon.svg";

const DemoForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  if (!open) return null;
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
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-end",
          padding: "16px",
          width: "100%",
          maxWidth: "1000px",
          height: "80vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setOpen(false)}
        >
          <img
            src={CloseIcon}
            width={"24px"}
            height={"24px"}
            alt="Close Icon"
          />
        </button>
        <iframe
          title="Booking Page"
          src="https://deepgram.com/"
          style={{ border: "none", height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default DemoForm;
