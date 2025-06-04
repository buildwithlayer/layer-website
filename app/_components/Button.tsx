"use client";

import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
  icon?: React.ReactNode;
  styleOverrides?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  additionalClasses?: string;
}

const Button = ({
  label,
  handleClick,
  icon,
  styleOverrides,
  type,
  disabled,
  size = "md",
  additionalClasses,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center w-fit justify-center gap-2 bg-primary rounded-md text-sm text-white px-4 py-2 font-semibold hover:bg-primaryDark disabled:bg-gray-600 disabled:cursor-progress ${
        size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"
      } ${additionalClasses}`}
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
