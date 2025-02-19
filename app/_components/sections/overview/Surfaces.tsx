"use client";

import React from "react";
import VSCodeIcon from "public/vscode-icon.svg";
import GPTIcon from "public/gpt-icon.svg";
import CopilotIcon from "public/copilot-icon.svg";
import AnthropicIcon from "public/anthropic-icon.svg";
import GeminiIcon from "public/gemini-icon.svg";

interface SurfaceBlockProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  index: number;
  fill: string;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const SurfaceBlock = ({
  Icon,
  index,
  fill,
  rotateX,
  rotateY,
  rotateZ,
  left,
  right,
  top,
  bottom,
}: SurfaceBlockProps) => {
  const [randomValues, setRandomValues] = React.useState({
    duration: 0,
    distance: 0,
  });

  React.useEffect(() => {
    setRandomValues({
      duration: Math.random() * 2 + 10,
      distance: (Math.random() * 10 + 20) * (index % 2 === 0 ? 1 : -1),
    });
  }, [index]);

  return (
    <div
      className="w-fit h-fit absolute opacity-60 hidden md:flex"
      style={
        {
          left: left + "%",
          right: right + "%",
          top: top + "%",
          bottom: bottom + "%",
          animation: randomValues.duration
            ? `float ${randomValues.duration}s ease-in-out infinite`
            : "none",
          "--float-distance": `${randomValues.distance}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="flex items-center justify-center w-24 h-24 rounded-md p-4 bg-gradient-to-tl from-transparentWhite-10 to-transparentWhite-20"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        }}
      >
        <Icon fill={fill} />
      </div>
    </div>
  );
};

const Surfaces = () => {
  const surfaces = [
    {
      Icon: VSCodeIcon,
      fill: "#1F9CF0",
      left: 3,
      top: 10,
      rotateX: 20,
      rotateY: -20,
      rotateZ: 0,
    },
    {
      Icon: AnthropicIcon,
      fill: "#fff",
      left: 10,
      top: 60,
      rotateX: 20,
      rotateY: -20,
      rotateZ: 0,
    },
    {
      Icon: GPTIcon,
      fill: "#56A87D",
      left: 20,
      top: 20,
      rotateX: 20,
      rotateY: -10,
      rotateZ: 0,
    },
    {
      Icon: CopilotIcon,
      fill: "#fff",
      right: 15,
      top: 20,
      rotateX: 20,
      rotateY: 10,
      rotateZ: 0,
    },
    {
      Icon: GeminiIcon,
      fill: "#4598E5",
      right: 5,
      top: 50,
      rotateX: 20,
      rotateY: 20,
      rotateZ: 0,
    },
  ];

  return (
    <div className="absolute w-full h-full top-0 left-0 -z-10">
      {surfaces.map((surface, index) => (
        <SurfaceBlock key={index} index={index} {...surface} />
      ))}
    </div>
  );
};

export default Surfaces;
