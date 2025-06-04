import React from "react";

interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  additionalClasses?: string;
}

const Tab = ({ label, active, onClick, additionalClasses }: TabProps) => {
  return (
    <div
      className={`p-4 font-semibold cursor-pointer whitespace-pre shadow-primary ${
        active ? "shadow-[inset_0_-4px_0_0]" : ""
      } hover:text-primaryDark ${additionalClasses}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tab;
