import React from "react";
import { Colors } from "../constants/Colors";

const SelectableCard = ({
  icon,
  label,
  description,
  active,
  onClick,
}: {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
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
          active ? Colors.primary.main : Colors.gray[200]
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
      {active && <p>{description}</p>}
    </div>
  );
};

export default SelectableCard;
