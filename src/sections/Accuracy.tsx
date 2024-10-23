import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Card from "../components/Card";
import { ReactComponent as BookIcon } from "../assets/icons/book-icon.svg";
import { ReactComponent as CodeIcon } from "../assets/icons/code-icon.svg";
import { ReactComponent as QuestionIcon } from "../assets/icons/question-icon.svg";
import CodeOptimized from "../assets/animations/code-optimized.json";
import NoHallucinate from "../assets/animations/no-hallucinate.json";
import Citations from "../assets/animations/citations.json";
import Lottie from "react-lottie-player";

const Accuracy = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  return (
    <SectionTemplate section="Accuracy">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
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
          <h2>Unrivaled Accuracy</h2>
          <p style={{ lineHeight: "24px" }}>
            LLMs are prone to bullshitting. Ours is trained on your docs.
            <br />
            Brought to you by the makers of{" "}
            <a
              href="https://pypi.org/project/pyprompt/"
              css={css`
                text-decoration: none;
                font-weight: 600;
                color: ${Colors.primary.main};
                &:hover {
                  color: ${Colors.primary.dark};
                }
              `}
            >
              PyPrompt
            </a>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "stretch",
            width: "100%",
          }}
        >
          <Card
            label="Cites its Sources"
            icon={<BookIcon />}
            text="All responses are grounded in the provided context to ensure users always get accurate answers with relevant citations."
            imageElementOverride={
              <Lottie play loop animationData={Citations} />
            }
          />
          <Card
            label="Knows What it Doesn’t Know"
            icon={<QuestionIcon />}
            text="Acknowledges when it doesn't have the information needed to answer a question and suggests relevant backup plans."
            imageElementOverride={
              <Lottie play loop animationData={NoHallucinate} />
            }
          />
          <Card
            label="Optimized for Code"
            icon={<CodeIcon />}
            text="Trained to generate accurate and explainable code examples for live assistance in the IDE."
            imageElementOverride={
              <Lottie play loop animationData={CodeOptimized} />
            }
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Accuracy;
