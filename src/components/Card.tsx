import React from "react";
import { Colors } from "../constants/Colors";

const Card = ({
  label,
  icon,
  text,
  image = "",
  styleOverrides,
  imageStyleOverrides,
  imageElementOverride,
}: {
  label: string;
  icon: React.ReactNode;
  text: string;
  image?: string;
  styleOverrides?: React.CSSProperties;
  imageStyleOverrides?: React.CSSProperties;
  imageElementOverride?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
        borderRadius: "8px",
        gap: "16px",
        justifyContent: "space-between",
        backgroundColor: "white",
        ...styleOverrides,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {icon}
          <h3>{label}</h3>
        </div>
        <p>{text}</p>
      </div>
      {imageElementOverride ? (
        imageElementOverride
      ) : (
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            ...imageStyleOverrides,
          }}
        />
      )}
    </div>
  );
};

export default Card;
