/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import ExpandIcon from "../assets/icons/expand-icon.svg";

const FAQs = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const Collapse = ({
    question,
    answer,
    expanded,
    index,
    answerOverride,
  }: {
    question: string;
    answer?: string;
    expanded: boolean;
    index: number;
    answerOverride?: React.ReactNode;
  }) => {
    return (
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
        }}
        onClick={() => {
          if (expanded) {
            setExpandedFaq(null);
          } else {
            setExpandedFaq(index);
          }
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{question}</h3>
          <img
            src={ExpandIcon}
            alt="Expand Icon"
            width={"24px"}
            height={"24px"}
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
        {expanded && !answerOverride && <p>{answer}</p>}
        {expanded && answerOverride}
      </div>
    );
  };

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>();

  const faqs = [
    {
      question: "Why Layer?",
      answer:
        "Layer handholds the developer from the moment they reach your docs, to the moment they finish implementing. By using the same AI Chat system in your documentation, discord / slack, and IDE, you can pinpoint exactly where developers are getting stuck and provide them with the right resources at the right time.",
    },
    {
      question: "Why IDE extensions?",
      answer:
        "There are several “chat-with-your-docs” providers that train AI chatbots for companies to deploy on their documentation sites. We believe any “chat with your docs” solution that is not also available to developers in the IDE is incomplete. The IDE (whether VS Code, Jetbrains, or something else altogether) is where >99 percent of bugs occur and it’s where developers spend the majority of their time. The biggest benefit of having an AI chat extension in the IDE is that it’s able to use codebase context when generating code and making suggestions. This leads to much more accurate, useful, and comprehensive developer assistance.",
    },
  ];

  return (
    <SectionTemplate section="FAQs">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          You may be asking yourself
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <Collapse
              {...faq}
              index={index}
              expanded={expandedFaq === index}
              key={index}
            />
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default FAQs;
