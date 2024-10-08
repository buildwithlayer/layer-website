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
  }: {
    question: string;
    answer: string;
    expanded: boolean;
    index: number;
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
        {expanded && <p>{answer}</p>}
      </div>
    );
  };

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>();

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque.",
    },
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque.",
    },
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque.",
    },
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque.",
    },
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Habitasse vel risus sapien id aliquam neque.",
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
            textAlign: screenWidth === "lg" ? "left" : "center",
            width: "100%",
          }}
        >
          You may be asking yourself 🤔
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
