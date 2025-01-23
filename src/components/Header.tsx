/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import LayerLogo from "../assets/icons/LayerLogo.svg";
import NavLink from "./NavLink";
import Button from "./Button";
import { Colors } from "../constants/Colors";
import { css } from "@emotion/react";

const Header = ({
  screenWidth,
  setDemoFormOpen,
}: {
  screenWidth: "sm" | "md" | "lg";
  setDemoFormOpen: (open: boolean) => void;
}) => {
  const isMobile = screenWidth === "sm";
  const sections = ["Overview", "Features", "Benefits", "Pricing", "FAQs"];

  const handleClick = () => {
    setDemoFormOpen(true);
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const navLinkStyles = isMobile
    ? css`
        cursor: pointer;
        text-decoration: none;
        padding: 16px 24px;
        color: ${Colors.gray[500]};
        border: none;
        background-color: transparent;
        width: 100%;
        &:hover {
          background-color: ${Colors.gray[200]};
        }
        &.active {
          color: white;
          background-color: ${Colors.primary.main};
        }
      `
    : css`
        cursor: pointer;
        text-decoration: none;
        padding: 8px 12px;
        color: ${Colors.gray[500]};
        border-radius: 8px;
        border: none;
        background-color: transparent;
        &:hover {
          box-shadow: inset 0px 0px 0px 1px ${Colors.gray[200]};
        }
        &.active {
          color: ${Colors.primary.main};
        }
      `;

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
              <a
                href="https://docs.buildwithlayer.com"
                target="_blank"
                className="button"
                css={navLinkStyles}
              >
                Docs
              </a>
              <a
                href="https://docs.buildwithlayer.com/blog"
                target="_blank"
                className="button"
                css={navLinkStyles}
              >
                Blog
              </a>
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
