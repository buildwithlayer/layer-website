import React from "react";
import { Colors } from "../constants/Colors";

const SelectableCard = ({
  screenWidth,
  icon,
  label,
  description,
  active,
  onClick,
  image,
}: {
  screenWidth: "sm" | "md" | "lg";
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
  image?: string;
}) => {
  const Icon = icon;
  return (
    <div
      style={{
        width: "100%",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: `inset 0px 0px 0px 1px ${
          active && screenWidth === "lg"
            ? Colors.primary.main
            : Colors.gray[200]
        }`,
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Icon fill="white" width={"24px"} height={"24px"} />
        <h3>{label}</h3>
      </div>
      {(active || screenWidth !== "lg") && <p>{description}</p>}
      {screenWidth !== "lg" && (
        <img src={image} alt={label} style={{ marginTop: "16px" }} />
      )}
    </div>
  );
};

export default SelectableCard;
