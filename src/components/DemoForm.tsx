/** @jsxImportSource @emotion/react */
import React from "react";
import CloseIcon from "../assets/icons/close-icon.svg";
import { css } from "@emotion/react";
import Modal from "./Modal";

const DemoForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <iframe
        title="Booking Page"
        src="https://cal.com/team/layer/demo?date=2024-10-14&month=2024-10&layout=month_view"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
      />
    </Modal>
  );
};

export default DemoForm;
