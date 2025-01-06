import React from "react";
import SectionTemplate from "./SectionTemplate";
import SelectableCard from "../components/SelectableCard";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect-icon.svg";
import { ReactComponent as DeploymentsIcon } from "../assets/icons/deployments-icon.svg";
import { ReactComponent as BugIcon } from "../assets/icons/bug-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/icons/analytics-icon.svg";
import { ReactComponent as Triangle } from "../assets/images/traingle.svg";
import sourcesImage from "../assets/images/sources.png";
import configureDeploymentsImage from "../assets/images/configure-deployments.png";
import findIssuesImage from "../assets/images/find-issues.png";
import improveAnswersImage from "../assets/images/improve-answers.png";
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
        "Your control center into exactly what information is accessible to the integration agent.",
      active: activeFeature === "Manage Knowledge Sources",
      onClick: () => {
        setActiveFeature("Manage Knowledge Sources");
      },
      image: sourcesImage,
    },
    {
      icon: DeploymentsIcon,
      label: "Configure Deployments",
      description:
        "Decide where to deploy to and customize the experience across channels.",
      active: activeFeature === "Configure Deployments",
      onClick: () => {
        setActiveFeature("Configure Deployments");
      },
      image: configureDeploymentsImage,
    },
    {
      icon: BugIcon,
      label: "Uncover Issues",
      description:
        "Get detailed usage reports and analytics on the questions users are asking, where they're running into issues, and how to address them.",
      active: activeFeature === "Uncover Issues",
      onClick: () => {
        setActiveFeature("Uncover Issues",);
      },
      image: findIssuesImage,
    },
    {
      icon: AnalyticsIcon,
      label: "Improve Answers Over Time",
      description:
        "Continually update the integration agent with new information such as support tickets, docs updates, and more.",
      active: activeFeature === "Track Usage",
      onClick: () => {
        setActiveFeature("Track Usage");
      },
      image: improveAnswersImage,
    },
  ];

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Triangle
        width={"100%"}
        height={"100%"}
        fill={Colors.gray[1000]}
        style={{ transform: "translateY(0.5px)" }}
      />
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
            gap: "128px",
          }}
        >
          {/* Left Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: screenWidth === "lg" ? "center" : "flex-start",
              width: screenWidth === "lg" ? "380px" : "100%",
              minWidth: screenWidth === "lg" ? "380px" : "100%",
              maxWidth: screenWidth === "lg" ? "380px" : "100%",
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
              <p
                style={{
                  textAlign: screenWidth === "lg" ? "left" : "center",
                  width: "100%",
                }}
              >
                The Layer Management Platform is the ultimate suite of tools 
                designed to help you improve your product's developer experience.
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
                <SelectableCard
                  {...feature}
                  screenWidth={screenWidth}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* Right Section */}
          {screenWidth === "lg" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <img
                src={features.find((f) => f.active)?.image}
                alt="Features Illustration"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                }}
              />
            </div>
          )}
        </div>
      </SectionTemplate>
      <Triangle
        width={"100%"}
        height={"100%"}
        fill={Colors.gray[1000]}
        style={{ transform: "translateY(-0.5px) scale(-100%)" }}
      />
    </div>
  );
};

export default ManagementPlatform;
