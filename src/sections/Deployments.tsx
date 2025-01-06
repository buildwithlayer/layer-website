import React from "react";
import SectionTemplate from "./SectionTemplate";
import Card from "../components/Card";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";
import { ReactComponent as CopilotIcon } from "../assets/icons/copilot-icon.svg";
import { ReactComponent as GPTIcon } from "../assets/icons/gpt-icon.svg";
import VSCodeImage from "../assets/images/vscode-deployment.png";
import WebWidgetImage from "../assets/images/webwidget-deployment.png";
import GPTImage from "../assets/images/gpt-deployment.png";
import CopilotImage from "../assets/images/copilot-deployment.png";
import FutureDeploymentsImage from "../assets/images/future-deployments.png";

const Deployments = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  return (
    <SectionTemplate section="Deployments">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "8px",
          }}
        >
          <h2>Meet Your Developers Where They Are</h2>
          <p>
            Deploy to thousands of developers with our existing integrations, and
            stay tuned for even more.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "stretch",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexDirection: screenWidth === "sm" ? "column" : "row",
            }}
          >
            <Card
              label="VS Code"
              icon={<VSCodeIcon />}
              text="Bring everything developers need to integrate your product into their IDE (where devs spend the bulk of their time and where +99% of bugs occur!!)
"
              image={VSCodeImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
            <Card
              label="Embeddable Website Widget"
              icon={<WebIcon />}
              text="Embed the integration agent on your docs site to serve as a first line of defense against any questions."
              image={WebWidgetImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexDirection: screenWidth === "sm" ? "column" : "row",
            }}
          >
            <Card
              label="GitHub Copilot"
              icon={<CopilotIcon />}
              text="Deploy an integration agent to the GitHub Copilot extension store, reaching over 1.3 million developers."
              image={CopilotImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
            <Card
              label="ChatGPT"
              icon={<GPTIcon />}
              text="Turn your integration agent into a custom GPT, available to over 10 million ChatGPT plus users."
              image={GPTImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
          </div>
          <Card
              label="Coming Soon..."
              icon={<></>}
              text="Stay tuned for new deployment options such as JetBrains IDEs, Google Gemini Tools, Discord, Slack, and more."
              image={FutureDeploymentsImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Deployments;
