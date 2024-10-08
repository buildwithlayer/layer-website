import React from "react";
import SectionTemplate from "./SectionTemplate";
import FeatureCard from "../components/FeatureCard";
import CopilotIcon from "../assets/icons/copilot-icon.svg";
import GPTIcon from "../assets/icons/gpt-icon.svg";
import DocsIcon from "../assets/icons/docs-icon.svg";

const Features = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const [activeFeature, setActiveFeature] = React.useState(
    "GitHub Copilot Assistance"
  );

  const features = [
    {
      iconSrc: CopilotIcon,
      label: "GitHub Copilot Assistance",
      description:
        "Developers can ask questions and get code suggestions for your product with GitHub Copilot right in VS Code.",
      active: activeFeature === "GitHub Copilot Assistance",
      onClick: () => {
        setActiveFeature("GitHub Copilot Assistance");
      },
    },
    {
      iconSrc: GPTIcon,
      label: "GPT-4o Chat Assistance",
      description: "GPT-4o description",
      active: activeFeature === "GPT-4o Chat Assistance",
      onClick: () => {
        setActiveFeature("GPT-4o Chat Assistance");
      },
    },
    {
      iconSrc: DocsIcon,
      label: "Chat Embedded in Your Docs",
      description: "Docs chat embed description",
      active: activeFeature === "Chat Embedded in Your Docs",
      onClick: () => {
        setActiveFeature("Chat Embedded in Your Docs");
      },
    },
  ];

  return (
    <SectionTemplate section="Features">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: screenWidth === "lg" ? "440px" : "100%",
            alignItems: screenWidth === "lg" ? "center" : "flex-start",
          }}
        >
          <h2
            style={{
              textAlign: screenWidth === "lg" ? "left" : "center",
              width: "100%",
            }}
          >
            Your developers will ❤️
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard {...feature} key={index} />
            ))}
          </div>
        </div>
        {/* Right Section */}
        {screenWidth === "lg" && (
          <div style={{ width: "450px" }}>
            <img
              src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
              alt="Features Illustration"
              height="400px"
              style={{ objectFit: "cover", overflow: "hidden" }}
            />
          </div>
        )}
      </div>
    </SectionTemplate>
  );
};

export default Features;
