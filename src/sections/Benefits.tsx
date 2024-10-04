import React from "react";
import SectionTemplate from "./SectionTemplate";
import FeatureCard from "../components/FeatureCard";
import AnalyticsIcon from "../assets/analytics-icon.svg";
import SupportIcon from "../assets/support-icon.svg";

const Benefits = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const [activeFeature, setActiveFeature] =
    React.useState("In Depth Analytics");

  const features = [
    {
      iconSrc: AnalyticsIcon,
      label: "In Depth Analytics",
      description:
        "Get insights about what questions your developers are asking and where they’re experiencing frustration.",
      active: activeFeature === "In Depth Analytics",
      onClick: () => {
        setActiveFeature("In Depth Analytics");
      },
    },
    {
      iconSrc: SupportIcon,
      label: "Fewer Support Requests",
      description: "Support description",
      active: activeFeature === "Fewer Support Requests",
      onClick: () => {
        setActiveFeature("Fewer Support Requests");
      },
    },
  ];

  return (
    <SectionTemplate section="Benefits">
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
        {screenWidth === "lg" && (
          <div style={{ width: "450px", overflow: "hidden" }}>
            <img
              src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
              alt="Features Illustration"
              height="400px"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        {/* Right Section */}
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
            Your product will 📈 from
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
      </div>
    </SectionTemplate>
  );
};

export default Benefits;
