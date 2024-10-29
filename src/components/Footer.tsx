/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import SectionTemplate from "../sections/SectionTemplate";
import { Colors } from "../constants/Colors";
import LayerLogo from "../assets/icons/LayerLogo.svg";

const Footer = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const linkStyles = css`
    color: ${Colors.gray[300]};
    text-decoration: none;
    &:hover {
      color: ${Colors.gray[100]};
    }
  `;
  return (
    <SectionTemplate
      section="Footer"
      sectionStyleOverrides={{
        backgroundColor: Colors.gray[1000],
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth === "sm" ? "column" : "row",
          gap: "48px",
          justifyContent: "space-between",
          alignItems: screenWidth === "sm" ? "center" : "flex-start",
          width: "100%",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {/* Brand & Tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
              <h1
                className="brand-text"
                style={{
                  color: "white",
                }}
              >
                Layer
              </h1>
            </div>
            {/* Tagline */}
            {screenWidth !== "sm" && (
              <h2
                style={{
                  color: "white",
                  fontWeight: "lighter",
                  maxWidth: "300px",
                }}
              >
                AI answers grounded in your docs
              </h2>
            )}
          </div>
          {screenWidth !== "sm" && (
            <p style={{ fontWeight: "lighter", color: "white" }}>
              © 2024 Layer. All rights reserved.
            </p>
          )}
        </div>
        {/* Right Section */}
        <div
          style={{
            display: "flex",
            gap: screenWidth === "sm" ? "48px" : "96px",
            flexDirection: screenWidth === "sm" ? "column" : "row",
            textAlign: screenWidth === "sm" ? "center" : "left",
          }}
        >
          {/* Company Links Stack */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <p style={{ fontWeight: "500", color: "white" }}>Company</p>
            <a
              href="https://storage.googleapis.com/generic-assets/Terms%20of%20Service.pdf"
              target="_blank"
              css={linkStyles}
            >
              Terms of Service
            </a>
            <a
              href="https://storage.googleapis.com/generic-assets/Privacy%20Policy.pdf"
              target="_blank"
              css={linkStyles}
            >
              Privacy Policy
            </a>
          </div>
          {/* Social Links Stack */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <p style={{ fontWeight: "500", color: "white" }}>Socials</p>
            <a
              href="https://www.linkedin.com/company/buildwithlayer/"
              target="_blank"
              css={linkStyles}
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/buildwithlayer"
              target="_blank"
              css={linkStyles}
            >
              Twitter
            </a>
          </div>
        </div>
        {screenWidth === "sm" && (
          <p style={{ fontWeight: "lighter", color: "white" }}>
            © 2024 Layer. All rights reserved.
          </p>
        )}
      </div>
    </SectionTemplate>
  );
};

export default Footer;
