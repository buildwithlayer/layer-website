import SectionTemplate from "./SectionTemplate";
import { ReactComponent as ConnectIcon } from "../assets/icons/connect-icon.svg";
import { ReactComponent as WebIcon } from "../assets/icons/web-icon.svg";
import { ReactComponent as VSCodeIcon } from "../assets/icons/vscode-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/icons/analytics-icon.svg";
import { ReactComponent as UpArrowIcon } from "../assets/icons/up-arrow-icon.svg";
import { ReactComponent as LightBulbIcon } from "../assets/icons/lightbulb-icon.svg";
import DeployToVSCodeImage from "../assets/images/deploy-to-vscode.png";
import DeployToWebImage from "../assets/images/deploy-to-web.png";
import ConnectKnowledgeAnimation from "../assets/animations/connect-knowlege.json";
import Card from "../components/Card";
import { Colors } from "../constants/Colors";
import { NumberBlock } from "./Numbers";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";

const InsightBlock = ({
  number,
  roundDigits,
  numberSuffix,
  direction,
  percentage,
  label,
  bars = [20, 40, 60, 80, 100],
}: {
  number: number;
  roundDigits: number;
  numberSuffix: string;
  direction: "up" | "down";
  percentage: number;
  label: string;
  bars?: number[];
}) => {
  const barsContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (barsContainerRef.current) {
      observer.observe(barsContainerRef.current);
    }

    return () => {
      if (barsContainerRef.current) {
        observer.unobserve(barsContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const barElements = document.querySelectorAll(
      ".bar" + label.replace(/\s/g, "")
    ) as NodeListOf<HTMLElement>;
    if (isInView) {
      barElements.forEach((bar, index) => {
        bar.style.setProperty("--target-height", `${bars[index]}%`);
        bar.style.animation = `growHeight 1s ease forwards ${index * 0.1}s`;
      });
    } else {
      barElements.forEach((bar) => {
        bar.style.height = "0%";
        bar.style.animation = "none";
      });
    }
  }, [isInView, bars]);

  const percentageColor = direction === "up" ? "#3ECC60" : "#FF4D4F";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: Colors.gray[1000],
        height: "100%",
      }}
    >
      <div
        ref={barsContainerRef}
        style={{
          display: "flex",
          gap: "16px",
          height: "100%",
          marginBottom: "8px",
          alignItems: "flex-end",
          justifyContent: "stretch",
          width: "100%",
          borderLeft: `1px solid ${Colors.gray[500]}`,
          borderBottom: `1px solid ${Colors.gray[500]}`,
          padding: "8px",
          paddingBottom: "0px",
        }}
      >
        {bars.map((bar, index) => (
          <div
            key={index}
            className={"bar" + label.replace(/\s/g, "")}
            style={{
              backgroundColor: Colors.primary.main,
              boxShadow: `0px 0px 4px ${Colors.primary.main}`,
              borderRadius: "4px 4px 0px 0px",
              height: `0%`,
              flexGrow: 1,
            }}
          >
            &nbsp;
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
        <NumberBlock
          number={number}
          label=""
          numberSuffix={numberSuffix}
          animationDuration={500}
          blockStyleOverrides={{
            padding: "0",
            backgroundColor: "transparent",
            width: "auto",
          }}
          numberStyleOverrides={{
            fontSize: "40px",
            lineHeight: "40px",
            background: "none",
            color: "white",
          }}
          roundDigits={roundDigits}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <UpArrowIcon
            fill={percentageColor}
            width={16}
            style={{
              transform: `rotate(${direction === "up" ? "0deg" : "180deg"})`,
            }}
          />
          <NumberBlock
            number={percentage}
            label=""
            numberSuffix="%"
            animationDuration={700}
            blockStyleOverrides={{
              padding: "0",
              backgroundColor: "transparent",
              width: "auto",
            }}
            numberStyleOverrides={{
              fontSize: "16px",
              lineHeight: "16px",
              fontWeight: "500",
              background: "none",
              color: percentageColor,
            }}
            roundDigits={1}
          />
        </div>
      </div>
      <p style={{ color: "white" }}>{label}</p>
    </div>
  );
};

const LiveInsights = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        height: "100%",
      }}
    >
      <InsightBlock
        number={3.2}
        roundDigits={1}
        numberSuffix="k"
        label="Questions Answered"
        direction="up"
        percentage={42.2}
      />
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
          backgroundColor: Colors.gray[1000],
          borderRadius: "8px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <LightBulbIcon fill={Colors.primary.main} width={24} height={24} />
          <p style={{ fontWeight: "600" }}>Suggestion</p>
        </div>
        <p style={{ fontSize: "14px" }}>
          Add a section to your docs about where to find API keys.
        </p>
      </div>
      <InsightBlock
        number={8.4}
        roundDigits={1}
        numberSuffix=""
        label="Hours Spent on Support Calls"
        direction="down"
        percentage={67.6}
        bars={[100, 54, 43, 32, 28]}
      />
    </div>
  );
};

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
            imageElementOverride={
              <Lottie animationData={ConnectKnowledgeAnimation} play loop />
            }
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
              image={DeployToWebImage}
            />
            <Card
              label="Deploy to VS Code"
              icon={<VSCodeIcon />}
              text="Make the same AI chat system available to developers in the IDE for an enhanced support experience and increased ticket deflection."
              image={DeployToVSCodeImage}
            />
          </div>
          <Card
            label="Get Live Insights"
            icon={<AnalyticsIcon />}
            text="Find out where users are getting stuck, areas your docs fall short, and make data-driven decisions to improve your product faster."
            imageElementOverride={<LiveInsights />}
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default LayerInAction;
