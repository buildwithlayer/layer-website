"use client";

import React from "react";
import Button from "./Button";
import Modal from "./Modal";

const OpenDemoButton = () => {
  const [demoModalOpen, setDemoModalOpen] = React.useState(false);

  function handleOpenDemo() {
    setDemoModalOpen(true);
  }

  return (
    <>
      <Button label="Book a Demo" handleClick={handleOpenDemo} />
      <Modal onClose={() => setDemoModalOpen(false)} open={demoModalOpen}>
        <iframe
          title="Booking Page"
          src="https://cal.com/team/layer/demo?layout=month_view"
          className="w-full h-full"
        />
      </Modal>
    </>
  );
};

export default OpenDemoButton;
