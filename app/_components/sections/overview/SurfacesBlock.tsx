import React from "react";

import VSCodeIcon from "public/vscode-icon.svg";
import GPTIcon from "public/gpt-icon.svg";
import CopilotIcon from "public/copilot-icon.svg";
import GeminiIcon from "public/gemini-icon.svg";
import AnthropicIcon from "public/anthropic-icon.svg";

const SurfacesBlock = () => {
  const surfaces = [
    {
      name: "VS Code",
      color: "#1F9CF0",
      Icon: VSCodeIcon,
    },
    {
      name: "ChatGPT",
      color: "#20A683",
      Icon: GPTIcon,
    },
    {
      name: "Copilot",
      color: "var(--gray-800)",
      Icon: CopilotIcon,
    },
    {
      name: "Gemini",
      color: "#1C73E8",
      Icon: GeminiIcon,
    },
    {
      name: "Anthropic",
      color: "var(--gray-800)",
      Icon: AnthropicIcon,
    },
  ];

  return (
    <div className="py-[2px] pr-[10px] pl-[4px] rounded-sm border-[1px] border-gray-200 h-[44px] overflow-hidden z-[-1]">
      <style>
        {`
          @keyframes slide-up {
            0%, 5% {
              transform: translateY(0);
            }
            15%, 25% {
              transform: translateY(-56px);
            }
            35%, 45% {
              transform: translateY(-112px);
            }
            55%, 65% {
              transform: translateY(-168px);
            }
            75%, 85% {
              transform: translateY(-224px);
            }
            95%, 100% {
              transform: translateY(-280px);
            }
          }
  
          .surfaces-container {
            animation: slide-up 10s ease infinite;
          }
          `}
      </style>
      <div className="surfaces-container flex flex-col justify-center items-center gap-4">
        {surfaces.map((surface) => (
          <div className={`flex items-center gap-2`} key={surface.name}>
            <surface.Icon height={40} width={40} fill={surface.color} />
            <h1
              className="text-[32px]/[40px] font-semibold"
              style={{ color: surface.color }}
            >
              {surface.name}
            </h1>
          </div>
        ))}
        {surfaces
          .filter((_, i) => i === 0)
          .map((surface) => (
            <div className={`flex items-center gap-2`} key={surface.name}>
              <surface.Icon height={40} width={40} fill={surface.color} />
              <h1
                className="text-[32px]/[40px] font-semibold"
                style={{ color: surface.color }}
              >
                {surface.name}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SurfacesBlock;
