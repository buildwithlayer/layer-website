import React from "react";

interface RoadmapStepProps {
  title: string;
  description: string;
  state: "current" | "upcoming";
  last?: boolean;
}

const RoadmapStep = ({ title, description, state, last }: RoadmapStepProps) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3 pt-1.5 items-center">
        <div
          className={`min-w-4 max-w-4 w-4 min-h-4 max-h-4 h-4 border-2 border-white rounded-full ${
            state === "current" && "bg-primary"
          }`}
        ></div>
        {!last && <div className="w-[1px] h-full bg-white/30"></div>}
      </div>
      <div className="flex flex-col gap-2 pb-3">
        <h4 className="text-xl">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RoadmapStep;
