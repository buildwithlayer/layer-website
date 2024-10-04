import React from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";

const Overview = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const demoProducts = ["Django", "MUI", "SQLAlchemy"];

  const handlePrimaryClick = () => {
    window.location.href = process.env.REACT_APP_MANAGEMENT_DASH_URL + "signup";
  };

  const handleSecondaryClick = () => {};

  return (
    <SectionTemplate section="Overview">
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth === "lg" ? "row" : "column",
          justifyContent: screenWidth === "lg" ? "space-between" : "center",
          alignItems: "center",
          width: "100%",
          textAlign: screenWidth === "lg" ? "left" : "center",
          gap: "40px",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            maxWidth: "440px",
            alignItems: screenWidth === "lg" ? "flex-start" : "center",
          }}
        >
          {/* Left Section Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: screenWidth === "lg" ? "12px" : "16px",
            }}
          >
            <h1>
              Treat your developers
              <br />
              <span style={{ color: Colors.primary.main }}>
                like royalty 👑
              </span>
            </h1>
            <p className="subheader">
              Effortlessly elevate your docs into an interactive, in-IDE
              experience—making developer support smarter and faster.
            </p>
          </div>
          {/* Left Section Buttons */}
          <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
            <Button
              label="Get Started for Free"
              type="primary"
              onClick={handlePrimaryClick}
            />
            <Button
              label="Book a Demo"
              type="secondary"
              onClick={handleSecondaryClick}
            />
          </div>
        </div>
        {/* Right Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "450px",
            alignItems: "center",
          }}
        >
          <p style={{ color: Colors.gray[300] }}>Try it yourself</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            {demoProducts.map((product, index) => (
              <p key={index}>{product}</p>
            ))}
          </div>
          <div
            style={{
              height: "500px",
              width: "100%",
              borderRadius: "8px",
              border: `1px solid ${Colors.gray[200]}`,
              overflow: "hidden",
            }}
          >
            <iframe
              src={
                process.env.REACT_APP_CHAT_URL ||
                "https://chat-app-prod-692435806978.us-central1.run.app/" +
                  "?apikey=379dae40-f6e9-4c57-adeb-18372a8e3ced"
              }
              style={{ height: "100%", width: "100%", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Overview;
