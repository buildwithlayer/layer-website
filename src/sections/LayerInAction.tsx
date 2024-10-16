import SectionTemplate from "./SectionTemplate";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/icons/analytics-icon.svg";
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
            Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id
            aliquam neque.
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
            text="Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id aliquam neque."
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
              text="Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id aliquam neque."
              image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            />
            <Card
              label="Deploy to VS Code"
              icon={<VSCodeIcon />}
              text="Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id aliquam neque."
              image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
            />
          </div>
          <Card
            label="Get Live Insights"
            icon={<AnalyticsIcon />}
            text="Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien id aliquam neque."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default LayerInAction;
