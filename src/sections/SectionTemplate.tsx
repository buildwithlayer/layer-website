import React, { ReactNode } from "react";
import { Colors } from "../constants/Colors";

const SectionTemplate = ({
  section,
  children,
  fullWidthChildren,
  sectionStyleOverrides,
}: {
  section: string;
  children: ReactNode;
  fullWidthChildren?: ReactNode;
  sectionStyleOverrides?: React.CSSProperties;
}) => {
  return (
    <div
      id={section}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        // Make this responsive
        padding: "72px 16px",
        ...sectionStyleOverrides,
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
