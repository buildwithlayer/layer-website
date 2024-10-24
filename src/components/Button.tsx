/** @jsxImportSource @emotion/react */
import React from "react";
import { Colors } from "../constants/Colors";
import { css } from "@emotion/react";
import { transparentize } from "polished";

const Button = ({
  label,
  type,
  onClick,
  fullWidth = false,
  styleOverrides,
  submitButton = false,
}: {
  label: string;
  type: "primary" | "secondary";
  onClick: () => void;
  fullWidth?: boolean;
  styleOverrides?: React.CSSProperties;
  submitButton?: boolean;
}) => {
  const buttonStyle = css`
    ${fullWidth ? "width: 100%;" : ""}
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: ${type === "primary"
      ? "0"
      : `inset 0px 0px 0px 1px ${Colors.primary.main}`};
    gap: 8px;
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 4px;
    background-color: ${type === "primary"
      ? Colors.primary.main
      : "transparent"};
    color: ${type === "primary" ? "white" : Colors.primary.main};
    &:hover {
      background-color: ${type === "primary"
        ? Colors.primary.dark
        : transparentize(0.8, Colors.primary.main)};
    }
  `;
  return (
    <button
      type={submitButton ? "submit" : "button"}
      css={buttonStyle}
      style={{ ...styleOverrides }}
      onClick={onClick}
    >
      <p className="button">{label}</p>
    </button>
  );
};

export default Button;
