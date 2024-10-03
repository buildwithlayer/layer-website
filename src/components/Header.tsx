import React from "react";
import LayerLogo from "../assets/LayerLogo.svg";
import NavLink from "./NavLink";
import Button from "./Button";
import { Colors } from "../constants/Colors";

const Header = () => {
  const sections = ["Overview", "Features", "Benefits", "Pricing", "FAQs"];

  const handleClick = () => {
    window.location.href = "https://dashboard.buildwithlayer.com/signup";
  };

  return (
    // Outer Nav Container
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 24px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${Colors.gray[200]}`,
      }}
    >
      {/* Inner Nav Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "14px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src={LayerLogo} alt="Layer Logo" width={"40px"} />
          <h1 className="brand-text">Layer</h1>
        </div>
        {/* Nav Links & Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* Nav Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {sections.map((section, index) => (
              <NavLink section={section} key={index} />
            ))}
          </div>
          {/* Button */}
          <Button
            label="Get Started for Free"
            type="primary"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
