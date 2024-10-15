/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";
import Lottie from "react-lottie-player";
import bgBlob from "../assets/animations/bg-blob.json";
import bgBalls from "../assets/animations/bg-balls.json";
import DriveLogo from "../assets/logos/drive-logo.svg";
import DetroitLogo from "../assets/logos/detroit-logo.png";
import ResoluteLogo from "../assets/logos/resolute-logo.png";
import AlumniLogo from "../assets/logos/alumni-logo.png";
import { ReactComponent as MuiLogo } from "../assets/logos/mui.svg";
import { ReactComponent as ViteLogo } from "../assets/logos/vite.svg";
import { ReactComponent as FastAPILogo } from "../assets/logos/fastapi.svg";
import { ReactComponent as WorkOSLogo } from "../assets/logos/workos.svg";
import { ReactComponent as DjangoLogo } from "../assets/logos/django.svg";
import { ReactComponent as SQLAlchemyLogo } from "../assets/logos/sqlalchemy.svg";
import { ReactComponent as APIFlaskLogo } from "../assets/logos/apiflask.svg";
import { css, keyframes } from "@emotion/react";
import { darken, lighten } from "polished";

interface Company {
  name: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
  primaryColor: string;
}

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CompanyBlock = ({ company }: { company: Company }) => {
  const containerStyles = css`
    cursor: pointer;
    width: 100%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${Colors.gray[200]};
    padding: 24px;
    &:hover {
      background: linear-gradient(
        180deg,
        ${lighten(0.1, company.primaryColor)} 0%,
        ${darken(0.1, company.primaryColor)} 100%
      );
      transform: scale(1.05);
    }
    transition: all 0.3s ease;
  `;

  const SvgLogo = company.logo;

  const [svgFill, setSvgFill] = useState(Colors.gray[300]);

  return (
    <a
      href={company.url}
      target="_blank"
      css={containerStyles}
      onMouseEnter={() => {
        setSvgFill("white");
      }}
      onMouseLeave={() => {
        setSvgFill(Colors.gray[300]);
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
        }}
      >
        <SvgLogo fill={svgFill} height={"40px"} width={"40px"} />
      </div>
    </a>
  );
};

const Overview = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const investors = [
    { name: "Drive Capital", logo: DriveLogo },
    { name: "Resolute Ventures", logo: ResoluteLogo },
    { name: "Detroit Venture Partners", logo: DetroitLogo },
    { name: "Alumni Ventures", logo: AlumniLogo },
  ];

  const companies = [
    {
      name: "MUI",
      logo: MuiLogo,
      url: "",
      primaryColor: "#0273E6",
    },
    {
      name: "SQLAlchemy",
      logo: SQLAlchemyLogo,
      url: "",
      primaryColor: "#CA2726",
    },
    { name: "Django", logo: DjangoLogo, url: "", primaryColor: "#0B4B33" },
    { name: "API Flask", logo: APIFlaskLogo, url: "", primaryColor: "#FF6E42" },
    { name: "WorkOS", logo: WorkOSLogo, url: "", primaryColor: "#6363F1" },
    { name: "Vite", logo: ViteLogo, url: "", primaryColor: "#B44BFF" },
    { name: "FastAPI", logo: FastAPILogo, url: "", primaryColor: "#009485" },
  ];

  const [iframeSrc, setIframeSrc] = useState(
    "https://chat-app-prod-692435806978.us-central1.run.app/?apikey=17243613-9791-49dd-8c64-8051a1c6593d"
  );

  const bgBallElement = (
    <>
      <Lottie
        style={{
          zIndex: "-3",
          opacity: ".25",
          position: "absolute",
          height: "100%",
          filter: "blur(60px)",
        }}
        loop
        animationData={bgBalls}
        play
        speed={0.6}
      />
      <div
        style={{
          zIndex: "-2",
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          background: `linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 100%)`,
          height: "30%",
        }}
      />
    </>
  );

  const inputStyles = css`
    border-radius: 4px 0px 0px 4px;
    border: 1px solid ${Colors.gray[200]};
    border-right: none;
    padding: 16px 12px;
    flex-grow: 1;
    &:focus {
      border: 1px solid ${Colors.primary.main};
      border-right: none;
      outline: none;
    }
    &::placeholder {
      color: ${Colors.gray[300]};
    }
  `;

  return (
    <SectionTemplate
      section="Overview"
      fullWidthChildren={bgBallElement}
      sectionStyleOverrides={{
        background: `linear-gradient(180deg, #FAFAFA 80%, #F1F1F1 100%)`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "104px",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              display: "flex",
              flexDirection: screenWidth === "lg" ? "row" : "column",
              justifyContent: screenWidth === "lg" ? "space-between" : "center",
              alignItems: "center",
              width: "100%",
              textAlign: screenWidth === "lg" ? "left" : "center",
              gap: "64px",
            }}
          >
            {/* Left Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                maxWidth: "500px",
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
                  AI Answers
                  <br />
                  <span
                    style={{
                      background: `linear-gradient(90deg, ${Colors.primary.main} 0%, ${Colors.secondary.main} 100%)`,
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Grounded in Your Docs
                  </span>
                </h1>
                <p className="subheader">
                  Effortlessly elevate your docs into an interactive, in-IDE
                  experience—making developer support smarter and faster.
                </p>
              </div>
              {/* Left Section CTA */}
              <form
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  const form = e.target as HTMLFormElement;
                  const input = form.elements[0] as HTMLInputElement;
                  console.log(input.value);
                  // TODO: Open modal with rest of form
                }}
              >
                <input
                  type="text"
                  placeholder="https://yoursite.com/docs"
                  css={inputStyles}
                  required
                />
                <Button
                  label="Generate My Expert"
                  type="primary"
                  onClick={() => {}}
                  styleOverrides={{ borderRadius: "0px 4px 4px 0px" }}
                  submitButton
                />
              </form>
              {/* Left Section Investors */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "24px",
                }}
              >
                <div
                  style={{
                    backgroundColor: Colors.gray[100],
                    border: `1px solid ${Colors.gray[200]}`,
                    borderRadius: "16px",
                    padding: "4px 8px",
                    alignSelf: screenWidth === "lg" ? "flex-start" : "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "500",
                      color: Colors.gray[300],
                      fontSize: ".8rem",
                    }}
                  >
                    Announcing our{" "}
                    <span style={{ fontWeight: "600" }}>$3M seed round</span>{" "}
                    backed by
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "32px",
                    alignItems: "center",
                    padding: "8px",
                  }}
                >
                  {investors.map((investor) => (
                    <img
                      src={investor.logo}
                      alt={investor.name + " Logo"}
                      style={{ height: "16px" }}
                    />
                  ))}
                </div>
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
                position: "relative",
              }}
            >
              <Lottie
                style={{
                  zIndex: "-1",
                  position: "absolute",
                  width: 650,
                  height: 650,
                  transform: "rotate(90deg)",
                  filter: "blur(0px)",
                }}
                loop
                animationData={bgBlob}
                play
              />
              <p style={{ color: Colors.gray[300] }}>Try it yourself</p>
              <div
                style={{
                  height: "500px",
                  width: "100%",
                  borderRadius: "8px",
                  // border: `1px solid ${Colors.gray[200]}`,
                  overflow: "hidden",
                  boxShadow: `0px 0px 8px 1px ${Colors.primary.main}`,
                }}
              >
                <iframe
                  title="Chat Demo"
                  src={iframeSrc}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#181818",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Companies List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "200px",
            overflow: "hidden",
          }}
        >
          <p style={{ fontWeight: "500", color: Colors.gray[300] }}>
            Powering production-grade AI chat experiences for...
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              top: "48px",
              gap: "24px",
            }}
            css={css`
              width: calc(200% + 24px);
              animation: ${scrollAnimation} 20s linear infinite;
              &:hover {
                animation-play-state: paused;
              }
            `}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
              }}
            >
              {companies.map((company, index) => (
                <CompanyBlock company={company} key={index} />
              ))}
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
              }}
            >
              {companies.map((company, index) => (
                <CompanyBlock company={company} key={index} />
              ))}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "44px",
              left: "0",
              width: "64px",
              height: "100px",
              background: `linear-gradient(270deg, rgba(247,247,247,0) 0%, rgba(247,247,247,1) 100%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "44px",
              right: "0",
              width: "64px",
              height: "100px",
              background: `linear-gradient(90deg, rgba(247,247,247,0) 0%, rgba(247,247,247,1) 100%)`,
            }}
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Overview;
