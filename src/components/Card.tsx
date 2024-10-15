import React from "react";
import { Colors } from "../constants/Colors";

const Card = ({
  label,
  icon,
  text,
  image,
}: {
  label: string;
  icon: React.ReactNode;
  text: string;
  image: string;
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
        gap: "8px",
        backgroundColor: "white",
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
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          marginTop: "16px",
        }}
      />
    </div>
  );
};

export default Card;
