import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Card from "../components/Card";
import { ReactComponent as BookIcon } from "../assets/icons/book-icon.svg";
import { ReactComponent as CodeIcon } from "../assets/icons/code-icon.svg";
import { ReactComponent as QuestionIcon } from "../assets/icons/question-icon.svg";

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
            text="Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
          />
          <Card
            label="Knows What it Doesn’t Know"
            icon={<QuestionIcon />}
            text="Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
          />
          <Card
            label="Optimized for Code"
            icon={<CodeIcon />}
            text="Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque."
            image="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Accuracy;
