"use client";
import Image from "next/image";
import React from "react";

interface AccordionProps {
  label: string;
  children: React.ReactNode;
}

const Accordion = ({ label, children }: AccordionProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="flex flex-col rounded-md border-[1px] border-gray-900">
      <div
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-semibold text-left">{label}</h3>
        <button
          className={`p-2 rounded-full hover:bg-gray-900 focus:outline-none ${
            expanded ? "rotate-180" : ""
          } transition-all cursor-pointer`}
        >
          <Image src="/expand.svg" width={24} height={24} alt="Expand" />
        </button>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
