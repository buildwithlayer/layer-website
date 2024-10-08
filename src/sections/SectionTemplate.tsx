import React, { ReactNode } from "react";
import { Colors } from "../constants/Colors";

const SectionTemplate = ({
  section,
  children,
  fullWidthChildren,
}: {
  section: string;
  children: ReactNode;
  fullWidthChildren?: ReactNode;
}) => {
  return (
    <div
      id={section}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottom: `1px solid ${Colors.gray[200]}`,
        overflow: "hidden",
        position: "relative",
        // Make this responsive
        padding: "48px 16px",
      }}
    >
      {fullWidthChildren}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
          width: "100%",
          maxWidth: "1000px",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionTemplate;
