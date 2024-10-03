import React, { ReactNode } from "react";
import { Colors } from "../constants/Colors";

const SectionTemplate = ({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
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
        // Make this responsive
        padding: "48px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionTemplate;
