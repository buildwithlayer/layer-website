import React, { useState } from "react";
import LayerLogo from "../assets/icons/LayerLogo.svg";
import NavLink from "./NavLink";
import Button from "./Button";
import { Colors } from "../constants/Colors";

const Header = ({
  screenWidth,
  setDemoFormOpen,
}: {
  screenWidth: "sm" | "md" | "lg";
  setDemoFormOpen: (open: boolean) => void;
}) => {
  const sections = ["Overview", "Features", "Benefits", "Pricing", "FAQs"];

  const handleClick = () => {
    setDemoFormOpen(true);
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    // Top Level Nav Container (Contains mobile nav links too)
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
      }}
    >
      {/* Outer Nav Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 24px",
          borderBottom: `1px solid ${Colors.gray[200]}`,
        }}
      >
        {/* Inner Nav Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
              justifyContent: screenWidth === "sm" ? "center" : "flex-start",
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <img src={LayerLogo} alt="Layer Logo" width={"40px"} />
            <h1 className="brand-text">Layer</h1>
          </div>
          {/* Nav Links & Button */}
          {screenWidth !== "sm" ? (
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
              {/* <div
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
              </div> */}
              {/* Button */}
              <Button
                label="Book a Demo"
                type="primary"
                onClick={handleClick}
              />
            </div>
          ) : (
            <></>
            // Mobile Nav Button
            // <button
            //   style={{
            //     cursor: "pointer",
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //     backgroundColor: "transparent",
            //     border: `1px solid ${Colors.gray[200]}`,
            //     borderRadius: "8px",
            //     width: "40px",
            //     height: "40px",
            //   }}
            //   onClick={handleMobileNavClick}
            // >
            //   <img
            //     src={mobileNavOpen ? CloseIcon : HamburgerIcon}
            //     alt="Navigation Menu Icon"
            //   />
            // </button>
          )}
        </div>
      </div>
      {mobileNavOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "stretch",
            borderBottom: `1px solid ${Colors.gray[200]}`,
          }}
        >
          {sections.map((section, index) => (
            <NavLink
              section={section}
              key={index}
              mobile
              closeMobileNav={() => {
                setMobileNavOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
