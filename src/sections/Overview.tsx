import React from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";

const Overview = () => {
  const demoProducts = ["Django", "MUI", "SQLAlchemy"];

  const handlePrimaryClick = () => {
    window.location.href = "https://dashboard.buildwithlayer.com/signup";
  };

  const handleSecondaryClick = () => {};

  return (
    <SectionTemplate section="Overview">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            maxWidth: "440px",
          }}
        >
          {/* Left Section Text */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
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
            gap: "16px",
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
            }}
          ></div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Overview;
