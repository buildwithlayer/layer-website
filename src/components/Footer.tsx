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
        borderBottom: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
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
              <h1 className="brand-text" style={{ color: "white" }}>
                Layer
              </h1>
            </div>
            {/* Tagline */}
            <h2
              style={{
                color: "white",
                fontWeight: "lighter",
                maxWidth: "300px",
              }}
            >
              Some tagline about our product
            </h2>
          </div>
          <p style={{ fontWeight: "lighter", color: "white" }}>
            © 2024 PumpML, LLC. All rights reserved.
          </p>
        </div>
        {/* Right Section */}
        <div style={{ display: "flex", gap: "96px" }}>
          {/* Company Links Stack */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <p style={{ fontWeight: "500", color: "white" }}>Company</p>
            <a href="/" css={linkStyles}>
              Terms of Service
            </a>
            <a href="/" css={linkStyles}>
              Privacy Policy
            </a>
          </div>
          {/* Social Links Stack */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <p style={{ fontWeight: "500", color: "white" }}>Socials</p>
            <a href="/" css={linkStyles}>
              LinkedIn
            </a>
            <a href="/" css={linkStyles}>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Footer;
