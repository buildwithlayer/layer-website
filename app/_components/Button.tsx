"use client";

import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
  icon?: React.ReactNode;
  styleOverrides?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  label,
  handleClick,
  icon,
  styleOverrides,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center w-fit justify-center gap-2 bg-primary rounded-md text-sm text-white px-4 py-2 font-semibold hover:bg-primaryDark"
      style={{ ...styleOverrides }}
      type={type || "button"}
    >
      {icon}
      <p>{label}</p>
    </button>
  );
};

export default Button;
