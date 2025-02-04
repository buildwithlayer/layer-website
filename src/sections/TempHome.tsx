import React from "react";
import { Colors } from "../constants/Colors";
import DriveLogo from "../assets/logos/drive-logo.svg";
import DetroitLogo from "../assets/logos/detroit-logo.png";
import ResoluteLogo from "../assets/logos/resolute-logo.png";
import AlumniLogo from "../assets/logos/alumni-logo.png";
import FifteenSeventeenLogo from "../assets/logos/1517-logo.png";
import ExpansionLogo from "../assets/logos/expansion-logo.png";
import SectionTemplate from "./SectionTemplate";
import { ReactComponent as LayerLogo } from "../assets/icons/LayerLogo.svg";
import { ReactComponent as ThumbUpFilled } from "../assets/icons/thumb_up_filled.svg";
import { ReactComponent as ThumbDownFilled } from "../assets/icons/thumb_down_filled.svg";
import { ReactComponent as ThumbUpOutlined } from "../assets/icons/thumb_up_outlined.svg";
import { ReactComponent as ThumbDownOutlined } from "../assets/icons/thumb_down_outlined.svg";
import { ReactComponent as InfoIcon } from "../assets/icons/info-icon.svg";
import { ReactComponent as SendIcon } from "../assets/icons/send-icon.svg";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as CopilotIcon } from "../assets/icons/copilot-icon.svg";
import { ReactComponent as GPTIcon } from "../assets/icons/gpt-icon.svg";
import { ReactComponent as GeminiIcon } from "../assets/icons/gemini-icon.svg";
import { ReactComponent as AnthropicIcon } from "../assets/icons/anthropic-icon.svg";
import neonResponse from "../assets/images/neon-response.png";

const Investors = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const investors = [
    {
      name: "Drive Capital",
      logo: DriveLogo,
      url: "https://www.drivecapital.com/",
    },
    {
      name: "Resolute Ventures",
      logo: ResoluteLogo,
      url: "https://www.resolute.vc/",
    },
    {
      name: "1517 Fund",
      logo: FifteenSeventeenLogo,
      url: "https://www.1517fund.com/",
    },
    {
      name: "Expansion VC",
      logo: ExpansionLogo,
      url: "https://www.expansionvc.com/",
    },
    {
      name: "Detroit Venture Partners",
      logo: DetroitLogo,
      url: "https://www.detroit.vc/",
    },
    { name: "Alumni Ventures", logo: AlumniLogo, url: "https://www.av.vc/" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "24px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: Colors.gray[100],
          border: `1px solid ${Colors.gray[200]}`,
          borderRadius: "16px",
          padding: "4px 8px",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            color: Colors.gray[300],
            fontSize: ".8rem",
          }}
        >
          Backed by some of the best 🚀
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          flexWrap: screenWidth === "sm" ? "wrap" : "nowrap",
        }}
      >
        {investors.map((investor) => (
          <a href={investor.url} target="_blank" key={investor.name}>
            <img
              src={investor.logo}
              alt={investor.name + " Logo"}
              style={{ height: "16px" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const SurfaceBlock = () => {
  return (
    <div
      style={{
        padding: "2px 10px 2px 4px",
        borderRadius: "4px",
        border: "1px solid #E0E0E0",
        height: "44px",
        overflow: "hidden",
      }}
    >
      <style>
        {`
        @keyframes slide-up {
          0%, 5% {
            transform: translateY(0);
          }
          15%, 25% {
            transform: translateY(-56px);
          }
          35%, 45% {
            transform: translateY(-112px);
          }
          55%, 65% {
            transform: translateY(-168px);
          }
          75%, 85% {
            transform: translateY(-224px);
          }
          95%, 100% {
            transform: translateY(-280px);
          }
        }

        .surfaces-container {
          animation: slide-up 10s ease infinite;
        }
        `}
      </style>
      <div
        className="surfaces-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#1F9CF0",
          }}
        >
          <VSCodeIcon height={40} width={40} fill="#1F9CF0" />
          <h1
            style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500" }}
          >
            VS Code
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#20A683",
          }}
        >
          <GPTIcon height={40} width={40} fill="#20A683" />
          <h1
            style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500" }}
          >
            ChatGPT
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#333",
          }}
        >
          <CopilotIcon height={40} width={40} fill="#333" />
          <h1
            style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500" }}
          >
            Copilot
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#1C73E8",
          }}
        >
          <GeminiIcon height={40} width={40} fill={"#1C73E8"} />
          <h1
            style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500" }}
          >
            Gemini
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#333",
          }}
        >
          <AnthropicIcon height={40} width={40} fill="#333" />
          <h1
            style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500" }}
          >
            Anthropic
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#1F9CF0",
          }}
        >
          <VSCodeIcon height={40} width={40} fill="#1F9CF0" />
          <h1
            style={{ fontSize: "32px", lineHeight: "40px", fontWeight: "500" }}
          >
            VS Code
          </h1>
        </div>
      </div>
    </div>
  );
};

const ChatMessage = ({
  type,
  role,
  ratings,
  children,
}: {
  type: "standard" | "extension";
  role: "user" | "agent";
  ratings: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "8px 16px",
        alignItems: "center",
        gap: "8px",
        color: "#333333",
        fontWeight: "500",
        minHeight: "48px",
        backgroundColor: role === "user" ? "#ffffff" : "#F5F5F5",
        border: "1px solid #E0E0E0",
        borderRadius: "4px",
        textAlign: "left",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          padding: "4px 0",
          width: "100%",
        }}
      >
        {children}
        {ratings && (
          <div
            style={{
              display: "flex",
              gap: "12px",
              paddingTop: "2px",
            }}
          >
            {type === "standard" ? (
              <>
                <ThumbUpOutlined width={16} fill="#333333" />
                <ThumbDownFilled width={16} fill="#EB5757" />
              </>
            ) : (
              <>
                <ThumbUpFilled width={16} fill="#27AE60" />
                <ThumbDownOutlined width={16} fill="#333333" />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ChatExample = ({ type }: { type: "standard" | "extension" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        border: "1px solid #E0E0E0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: type === "standard" ? "#828282" : "#7b65ff",
          display: "flex",
          justifyContent: "center",
          padding: "4px 16px",
          alignItems: "center",
          gap: "8px",
          color: "white",
          fontWeight: "500",
          minHeight: "48px",
        }}
      >
        {type === "extension" && <LayerLogo fill="white" width={24} />}
        <p>{type === "standard" ? "Standard LLM" : "Agentic LLM Extension"}</p>
      </div>
      {type === "extension" && (
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            padding: "4px 16px",
            alignItems: "center",
            gap: "8px",
            color: "#7b65ff",
            fontWeight: "500",
            minHeight: "48px",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <a
            href="https://docs.buildwithlayer.com/llm_extensibility"
            target="_blank"
            style={{
              display: "inline-flex",
              gap: "4px",
              color: "#7b65ff",
              alignItems: "center",
            }}
          >
            <InfoIcon fill="#7b65ff" width={16} />
            <p style={{ fontSize: "14px" }}>
              Learn more about LLM Extensibility
            </p>
          </a>
        </div>
      )}
      {type === "standard" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              gap: "16px",
            }}
          >
            <ChatMessage type={type} role="user" ratings={false}>
              <p style={{ color: "#333" }}>
                How do I create a new project in Neon?
              </p>
            </ChatMessage>
            <ChatMessage type={type} role="agent" ratings={true}>
              <p style={{ color: "#333" }}>
                Starting a neon project can be a fun and creative process,
                whether you're aiming to make neon signs, art pieces, or custom
                lighting. Here’s a general guide to help you get started:
              </p>
            </ChatMessage>
            <ChatMessage type={type} role="user" ratings={false}>
              <p style={{ color: "#333" }}>
                Can you create a Neon project for me?
              </p>
            </ChatMessage>
            <ChatMessage type={type} role="agent" ratings={false}>
              <p style={{ color: "#333" }}>
                {`I’d love to help you with the design or planning stages, but `}
                <strong>
                  unfortunately, I can’t physically create or install the neon
                  project for you.
                </strong>
              </p>
            </ChatMessage>
          </div>
          <div style={{ padding: "16px" }}>
            <ChatMessage type={type} role="user" ratings={false}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p style={{ fontSize: "24px", width: "100%" }}>🤬🤬🤬🤬🤬🤬</p>
                <SendIcon fill="#828282" width={24} />
              </div>
            </ChatMessage>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            gap: "16px",
          }}
        >
          <ChatMessage type={type} role="user" ratings={false}>
            <p style={{ color: "#333" }}>
              <span
                style={{
                  padding: "0px 2px",
                  color: "#7b65ff",
                  backgroundColor: "#F2F0FF",
                  borderRadius: "4px",
                  marginRight: "6px",
                }}
              >
                @neon
              </span>
              How do I create a new project in Neon?
            </p>
          </ChatMessage>
          <ChatMessage type={type} role="agent" ratings={true}>
            <p style={{ color: "#333" }}>
              To create a Neon project:
              <ol
                style={{
                  paddingLeft: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: 0,
                }}
              >
                <li>Navigate to the Neon Console. Click New Project.</li>
                <li>
                  Specify values for 
                  <strong>
                    Project Name, Postgres version, Cloud Service Provider,
                  </strong>{" "}
                  and <strong>Region</strong>.
                </li>
                <li>Click Create Project.</li>
              </ol>
            </p>
          </ChatMessage>
          <ChatMessage type={type} role="user" ratings={false}>
            <p style={{ color: "#333" }}>
              Create one for me, and name it “new-project”
            </p>
          </ChatMessage>
          <ChatMessage type={type} role="agent" ratings={false}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "100%",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #E0E0E0",
                }}
              >
                <p style={{ color: "#828282", fontSize: "12px" }}>
                  Called with 1 argument
                </p>
                <p
                  style={{
                    color: "#333",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span
                    style={{
                      padding: "0px 6px",
                      color: "white",
                      backgroundColor: "#7b65ff",
                      borderRadius: "4px",
                      marginRight: "6px",
                    }}
                  >
                    POST
                  </span>
                  https://console.neon.tech/api/v2/projects
                </p>
              </div>
              <p>Created “new-project”:</p>
              <div
                style={{
                  backgroundColor: "#262626",
                  padding: "8px 4px",
                  maxHeight: "150px",
                  overflowY: "auto",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={neonResponse}
                  alt="Neon API Request Response"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </ChatMessage>
        </div>
      )}
    </div>
  );
};

const TempHome = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const [currentExample, setCurrentExample] = React.useState<
    "standard" | "extension"
  >("standard");

  return (
    <SectionTemplate
      section="Overview"
      sectionStyleOverrides={{
        background: `linear-gradient(180deg, #FAFAFA 80%, #F1F1F1 100%)`,
        borderBottom: `1px solid ${Colors.gray[200]}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "64px",
          zIndex: "3",
          flexGrow: "1",
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: screenWidth === "sm" ? "16px" : "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexDirection: screenWidth === "sm" ? "column" : "row",
              }}
            >
              <h1
                style={{
                  fontSize: screenWidth === "sm" ? "26px" : "32px",
                  lineHeight: "40px",
                }}
              >
                Devs already ask
              </h1>
              <SurfaceBlock />
            </div>
            <h1
              style={{
                fontSize: screenWidth === "sm" ? "26px" : "32px",
                lineHeight: "40px",
              }}
            >
              for help with your product
            </h1>
          </div>
          {/* Subheader */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <h2
              style={{
                fontWeight: "300",
                color: "#626262",
                fontSize: "20px",
                whiteSpace: "pre",
              }}
            >
              {`🎮  Control the help they get`}
            </h2>
            <h2
              style={{
                fontWeight: "300",
                color: "#626262",
                fontSize: "20px",
                whiteSpace: "pre",
              }}
            >
              {`👀  See the help they need`}
            </h2>
          </div>
        </div>
        {/* Chat Examples */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          {screenWidth === "sm" && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px",
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
            >
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor:
                    currentExample === "standard" ? "#7b65ff" : "transparent",
                  color: currentExample === "standard" ? "#fff" : "#333",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentExample("standard")}
              >
                Before Layer
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor:
                    currentExample === "extension" ? "#7b65ff" : "transparent",
                  color: currentExample === "extension" ? "#fff" : "#333",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentExample("extension")}
              >
                With Layer
              </button>
            </div>
          )}
          <div
            style={{
              display: "flex",
              gap: "16px",
              width: "100%",
            }}
          >
            {(!(screenWidth === "sm") || currentExample === "standard") && (
              <ChatExample type="standard" />
            )}
            {(!(screenWidth === "sm") || currentExample === "extension") && (
              <ChatExample type="extension" />
            )}
          </div>
          <Investors screenWidth={screenWidth} />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default TempHome;
