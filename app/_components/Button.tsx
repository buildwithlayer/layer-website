"use client";

import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
  icon?: React.ReactNode;
}

const Button = ({ label, handleClick, icon }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center w-fit justify-center gap-2 bg-primary rounded-md text-white px-4 py-2 font-semibold hover:bg-primaryDark"
    >
      {icon}
      <p className="text-sm">{label}</p>
    </button>
  );
};

export default Button;
