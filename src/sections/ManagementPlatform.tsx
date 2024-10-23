import React from "react";
import SectionTemplate from "./SectionTemplate";
import SelectableCard from "../components/SelectableCard";
import connectIcon from "../assets/icons/connect-icon.svg";
import deploymentsIcon from "../assets/icons/deployments-icon.svg";
import bugIcon from "../assets/icons/bug-icon.svg";
import analyticsIcon from "../assets/icons/analytics-icon.svg";

const ManagementPlatform = ({
  screenWidth,
}: {
  screenWidth: "sm" | "md" | "lg";
}) => {
  const [activeFeature, setActiveFeature] = React.useState(
    "Manage Knowledge Sources"
  );

  const features = [
    {
      iconSrc: connectIcon,
      label: "Manage Knowledge Sources",
      description:
        "Your control center into exactly what sources of information are accessible to the AI chat system.",
      active: activeFeature === "Manage Knowledge Sources",
      onClick: () => {
        setActiveFeature("Manage Knowledge Sources");
      },
    },
    {
      iconSrc: deploymentsIcon,
      label: "Configure Deployments",
      description:
        "Decide where to deploy to and customize the look and feel of the experience across all channels.",
      active: activeFeature === "Configure Deployments",
      onClick: () => {
        setActiveFeature("Configure Deployments");
      },
    },
    {
      iconSrc: bugIcon,
      label: "Find User Issues",
      description:
        "Get detailed usage reports and analytics on the questions users are asking, where they're running into issues, and how to address them.",
      active: activeFeature === "Find User Issues",
      onClick: () => {
        setActiveFeature("Find User Issues");
      },
    },
    {
      iconSrc: analyticsIcon,
      label: "Improve Answers Over Time",
      description:
        "Create reinforcement loops to continually train the AI system on new information such as support tickets, docs updates, and more.",
      active: activeFeature === "Track Usage",
      onClick: () => {
        setActiveFeature("Track Usage");
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
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <h2
              style={{
                textAlign: screenWidth === "lg" ? "left" : "center",
                width: "100%",
              }}
            >
              Take Total Control
            </h2>
            <p>
              Introducing the Layer Management Platform: A complete suite of
              tools designed to help you deflect tickets and improve developer
              experience.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
            }}
          >
            {features.map((feature, index) => (
              <SelectableCard {...feature} key={index} />
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

export default ManagementPlatform;
