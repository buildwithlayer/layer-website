import React from "react";
import Accordion from "../Accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What is MCP?",
      answer: "Minim mollit ex esse velit. Nisi tempor enim ex ex.",
    },
    {
      question: "Why do I need an MCP server?",
      answer: "Minim mollit ex esse velit. Nisi tempor enim ex ex.",
    },
    {
      question: "How does Layer help with MCP?",
      answer: "Minim mollit ex esse velit. Nisi tempor enim ex ex.",
    },
  ];

  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative px-16 border-x-[1px] border-x-gray-900">
        <h2 className="section-header">FAQS</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} label={faq.question}>
              <p className="text-gray-300 text-left p-4 pt-0">{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
