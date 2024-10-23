import SectionTemplate from "./SectionTemplate";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/icons/analytics-icon.svg";
import VSCodeImage from "../assets/images/vscode-deployment.png";
import WebWidgetImage from "../assets/images/webwidget-deployment.png";
import Card from "../components/Card";

const LayerInAction = ({
  screenWidth,
}: {
  screenWidth: "sm" | "md" | "lg";
}) => {
  return (
    <SectionTemplate section="Layer in Action">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Layer in Action</h2>
          <p style={{ textAlign: "center" }}>
            We transform your existing knowledge base into an interactive AI
            chat experience that follows developers wherever they go.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: screenWidth === "lg" ? "row" : "column",
            alignItems: "stretch",
            gap: "16px",
            width: "100%",
          }}
        >
          <Card
            label="Connect to Knowledge Sources"
            icon={<ConnectIcon />}
            text="Link your website, docs, GitHub repos, FAQs, and more to automatically train your AI chat system."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
            }}
          >
            <Card
              label="Deploy to Web"
              icon={<WebIcon />}
              text="Embed the AI chat widget on your docs site so users can have their questions answered without talking to a human."
              image={WebWidgetImage}
            />
            <Card
              label="Deploy to VS Code"
              icon={<VSCodeIcon />}
              text="Make the same AI chat system available to developers in the IDE for an enhanced support experience and increased ticket deflection."
              image={VSCodeImage}
            />
          </div>
          <Card
            label="Get Live Insights"
            icon={<AnalyticsIcon />}
            text="Find out where users are getting stuck, areas your docs fall short, and make data-driven decisions to improve your product faster."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default LayerInAction;
