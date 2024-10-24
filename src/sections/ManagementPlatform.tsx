import React from "react";
import SectionTemplate from "./SectionTemplate";
import SelectableCard from "../components/SelectableCard";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect-icon.svg";
import { ReactComponent as DeploymentsIcon } from "../assets/icons/deployments-icon.svg";
import { ReactComponent as BugIcon } from "../assets/icons/bug-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/icons/analytics-icon.svg";
import { ReactComponent as Triangle } from "../assets/images/traingle.svg";
import { Colors } from "../constants/Colors";

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
      icon: ConnectIcon,
      label: "Manage Knowledge Sources",
      description:
        "Your control center into exactly what sources of information are accessible to the AI chat system.",
      active: activeFeature === "Manage Knowledge Sources",
      onClick: () => {
        setActiveFeature("Manage Knowledge Sources");
      },
    },
    {
      icon: DeploymentsIcon,
      label: "Configure Deployments",
      description:
        "Decide where to deploy to and customize the look and feel of the experience across all channels.",
      active: activeFeature === "Configure Deployments",
      onClick: () => {
        setActiveFeature("Configure Deployments");
      },
    },
    {
      icon: BugIcon,
      label: "Find User Issues",
      description:
        "Get detailed usage reports and analytics on the questions users are asking, where they're running into issues, and how to address them.",
      active: activeFeature === "Find User Issues",
      onClick: () => {
        setActiveFeature("Find User Issues");
      },
    },
    {
      icon: AnalyticsIcon,
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
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Triangle width={"100%"} height={"100%"} fill={Colors.gray[1000]} />
      <SectionTemplate
        section="Features"
        sectionStyleOverrides={{
          backgroundColor: Colors.gray[1000],
          color: "white",
          padding: "128px 16px",
        }}
      >
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
      <Triangle
        width={"100%"}
        height={"100%"}
        fill={Colors.gray[1000]}
        style={{ transform: "scale(-100%)" }}
      />
    </div>
  );
};

export default ManagementPlatform;
