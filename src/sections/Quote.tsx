import React from "react";
import SectionTemplate from "./SectionTemplate";
import adamSilvermanImg from "../assets/images/adam-silverman.png";

const Quote = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  return (
    <SectionTemplate
      section="Quote"
      sectionStyleOverrides={{ backgroundColor: "white", padding: "0px 16px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Quote Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            maxWidth: "500px",
          }}
        >
          <p
            style={{ fontWeight: "800", fontSize: "32px", lineHeight: "40px" }}
          >
            Layer makes it super easy for our developers to get started.
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
              Adam Silverman
            </p>
            <p>Founder of AgentOps</p>
          </div>
        </div>
        {/* Image Section */}
        <img src={adamSilvermanImg} style={{}} />
      </div>
    </SectionTemplate>
  );
};

export default Quote;
