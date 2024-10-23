import React from "react";
import SectionTemplate from "./SectionTemplate";
import Card from "../components/Card";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";

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
              image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
              imageStyleOverrides={{
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Card
              label="Embeddable Website Widget"
              icon={<WebIcon />}
              text="Create an embeddable website widget and easily deploy on your docs site to serve as a first line of defense against any questions."
              image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
              imageStyleOverrides={{
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
          <Card
            label="Coming Soon..."
            icon={<></>}
            text="Stay tuned for new deployment options, such as Discord bots, Slack bots, and Zendesk apps."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            imageStyleOverrides={{ height: "200px", objectFit: "cover" }}
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Deployments;
