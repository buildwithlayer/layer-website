import React from "react";
import SectionTemplate from "./SectionTemplate";
import Card from "../components/Card";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";
import VSCodeImage from "../assets/images/vscode-deployment.png";
import WebWidgetImage from "../assets/images/webwidget-deployment.png";
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
            Deploy to over 1.4M developers with our existing integrations, and
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
          <div style={{ display: "flex", gap: "16px" }}>
            <Card
              label="VS Code"
              icon={<VSCodeIcon />}
              text="Make everything developers need to integrate easily searchable directly from the IDE — the place developers spend the bulk of their time and where 100% of bugs occur."
              image={VSCodeImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
            <Card
              label="Embeddable Website Widget"
              icon={<WebIcon />}
              text="Create an embeddable website widget and easily deploy on your docs site to serve as a first line of defense against any questions."
              image={WebWidgetImage}
              styleOverrides={{ flexDirection: "column-reverse" }}
            />
          </div>
          <Card
            label="Coming Soon..."
            icon={<></>}
            text="Stay tuned for new deployment options, such as Discord bots, Slack bots, and Zendesk apps."
            image={FutureDeploymentsImage}
            styleOverrides={{ flexDirection: "column-reverse" }}
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Deployments;
