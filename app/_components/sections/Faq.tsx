import React from "react";
import Accordion from "../Accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What is MCP?",
      answer:
        "Model context protocol (MCP) is an emerging standard that lets Al applications securely access external tools, data, and services. It's an important technology that will make Al far more useful and interconnected with the products we use.",
    },
    {
      question: "Why do I need an MCP server?",
      answer:
        "ChatGPT has more than 400 million daily active users. Cursor has more than a million. Having an MCP server enables developers and gentic systems to directly access and consume third-party platforms and APis. Al is a huge distribution channel and MCP enables you to distribute your products and services through it.",
    },
  ];

  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative p-8 md:px-16 border-x-[1px] border-x-gray-900">
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
