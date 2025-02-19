"use client";

import React, { useEffect, useState } from "react";
import DocsIcon from "public/docs-icon.svg";
import OpenApiIcon from "public/openapi-icon.svg";
import DeployIcon from "public/deploy-icon.svg";
import GroupIcon from "public/group-icon.svg";
import DocsGraphic from "public/docs.svg";
import OpenApiGraphic from "public/api.svg";
import DeployGraphic from "public/deploy.svg";
import AnalyticsGraphic from "public/analytics.svg";

const Build = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [barHeight, setBarHeight] = useState(0);

  const tabs = [
    {
      name: "Connect Docs",
      content:
        "Connect your knowledge sources to power the “RAG” part of your extensions across popular AI surfaces",
      icon: <DocsIcon />,
      graphic: <DocsGraphic />,
    },
    {
      name: "Upload API Spec",
      content:
        "Select which actions and workflows from your API you want to expose through surfaces like Copilot, ChatGPT, VS Code, and more.",
      icon: <OpenApiIcon />,
      graphic: <OpenApiGraphic />,
    },
    {
      name: "Deploy Everywhere",
      content:
        "Layer’s platform eliminates the pain of having to manually build and maintain separate integrations with each of the AI ecosystems.",
      icon: <DeployIcon />,
      graphic: <DeployGraphic />,
    },
    {
      name: "Learn Your Users",
      content:
        "View and analyze the prompts users are asking to AI tools when they relate to your API.",
      icon: <GroupIcon />,
      graphic: <AnalyticsGraphic />,
    },
  ];

  useEffect(() => {
    let shouldChangeTab = false;

    const interval = setInterval(() => {
      setBarHeight((prevHeight) => {
        if (prevHeight >= 100) {
          shouldChangeTab = true;
          return 0;
        }
        return prevHeight + 0.1;
      });

      if (shouldChangeTab) {
        setActiveTab((prevTab) =>
          prevTab === tabs.length - 1 ? 0 : prevTab + 1
        );
        shouldChangeTab = false;
      }
    }, 10);

    setBarHeight(0);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="w-screen flex items-center justify-center bg-white text-gray-50">
      <div className="w-full max-w-[--content-width] flex flex-col gap-24 py-28 z-10">
        {/* Section Title */}
        <div className="flex flex-col font-extrabold text-4xl md:text-8xl">
          <h2>
            Build Once,
            <br />
            Deploy Everywhere
          </h2>
        </div>
        {/* End Section Title */}
        {/* Section Content */}
        <div className="flex gap-10">
          {/* Tabs */}
          <div className="flex flex-col w-full">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-4 px-6 py-4 border-l border-gray-900 relative cursor-pointer ${
                    isActive ? "" : "text-gray-500"
                  }`}
                  onClick={() => {
                    setBarHeight(0);
                    setActiveTab(index);
                  }}
                >
                  {isActive && (
                    <div
                      className="w-1 bg-primary absolute left-0 top-0"
                      style={{ height: `${barHeight}%` }}
                    />
                  )}
                  {React.cloneElement(tab.icon, {
                    className: "w-8 h-8",
                    fill: isActive ? "#000" : "#666666",
                  })}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg/none">{tab.name}</h3>
                    {isActive && <p className="text-gray-400">{tab.content}</p>}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Graphic */}
          <div className="w-full bg-gradient-to-br from-layerPink-80 to-layerPurple-80 rounded-md md:min-h-[550px] md:h-[550px] p-4 flex items-center justify-center">
            {React.cloneElement(tabs[activeTab].graphic, {
              className: "w-full h-full",
            })}
          </div>
        </div>
        {/* End Section Content */}
      </div>
    </div>
  );
};

export default Build;
