"use client";

import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
  icon?: React.ReactNode;
  styleOverrides?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  label,
  handleClick,
  icon,
  styleOverrides,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center w-fit justify-center gap-2 bg-primary rounded-md text-sm text-white px-4 py-2 font-semibold hover:bg-primaryDark disabled:bg-gray-600 disabled:cursor-progress"
      style={{ ...styleOverrides }}
      type={type || "button"}
      disabled={disabled}
    >
      {icon}
      <p>{label}</p>
    </button>
  );
};

export default Button;
