import React from "react";
import SectionTemplate from "./SectionTemplate";
import Card from "../components/Card";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord-icon.svg";
import { ReactComponent as SlackIcon } from "../assets/icons/slack-icon.svg";
import { ReactComponent as ZendeskIcon } from "../assets/icons/zendesk-icon.svg";
import VSCodeImage from "../assets/images/vscode-deployment.png";
import WebWidgetImage from "../assets/images/webwidget-deployment.png";
import DiscordImage from "../assets/images/discord-deployment.png";
import SlackImage from "../assets/images/slack-deployment.png";
import ZendeskImage from "../assets/images/zendesk-deployment.png";
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
              text="Embed the integration copilot on your docs site to serve as a first line of defense against any questions."
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
              label="Discord"
              icon={<DiscordIcon />}
              text="Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque."
              image={DiscordImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
            <Card
              label="Slack"
              icon={<SlackIcon />}
              text="Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque."
              image={SlackImage}
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
              label="Zendesk"
              icon={<ZendeskIcon />}
              text="Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque."
              image={ZendeskImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
            <Card
              label="Coming Soon..."
              icon={<></>}
              text="Stay tuned for new deployment options such as Intercom, JetBrains IDEs, and ChatGPT."
              image={FutureDeploymentsImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Deployments;
