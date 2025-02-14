"use client";

import React, { useEffect, useState } from "react";
import DocsIcon from "public/docs-icon.svg";
import OpenApiIcon from "public/openapi-icon.svg";
import DeployIcon from "public/deploy-icon.svg";
import GroupIcon from "public/group-icon.svg";

const Build = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [barHeight, setBarHeight] = useState(0);

  const tabs = [
    {
      name: "Upload Docs",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <DocsIcon />,
    },
    {
      name: "Upload API Spec",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <OpenApiIcon />,
    },
    {
      name: "Deploy Everywhere",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <DeployIcon />,
    },
    {
      name: "Learn Your Users",
      content:
        "Deserunt ad eu dolor do mollit dolor dolor. Minim cupidatat esse labore irure minim sit reprehenderit eu.",
      icon: <GroupIcon />,
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
          {/* Image */}
          <div className="w-full bg-gradient-to-br from-layerPink-80 to-layerPurple-80 rounded-md"></div>
        </div>
        {/* End Section Content */}
      </div>
    </div>
  );
};

export default Build;
