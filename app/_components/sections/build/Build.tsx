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
import ScrollAnimation from "react-animate-on-scroll";

const Build = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [barHeight, setBarHeight] = useState(0);

  const tabs = [
    {
      name: "Connect Docs",
      content:
        "Connect your knowledge sources to power the “RAG” part of your MCP server across popular AI surfaces",
      icon: <DocsIcon />,
      graphic: <DocsGraphic />,
    },
    {
      name: "Upload API Spec",
      content:
        "Select the endpoints want to expose via MCP clients and contruct workflows that execute automatically for users.",
      icon: <OpenApiIcon />,
      graphic: <OpenApiGraphic />,
    },
    {
      name: "Deploy Everywhere",
      content:
        "MCP gives you a standardized way to bring your product into every AI ecosystem without managing separate intergations for each one.",
      icon: <DeployIcon />,
      graphic: <DeployGraphic />,
    },
    {
      name: "Get Insight",
      content:
        "Our telemetry data gives you visibility into exactly where and how users are using your MCP servers.",
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
  }, [activeTab, tabs.length]);

  return (
    <div className="w-screen flex items-center justify-center bg-white text-gray-50 px-4 md:px-0">
      <div className="w-full max-w-[--content-width] flex flex-col gap-8 md:gap-24 py-28 pt-16 md:pt-28 z-10">
        {/* Section Title */}
        <div className="flex flex-col font-extrabold text-4xl md:text-8xl">
          <ScrollAnimation animateIn="textSlideInUp" animateOnce>
            <h2>Build Once,</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="textSlideInUp" delay={300} animateOnce>
            <h2>Deploy Everywhere</h2>
          </ScrollAnimation>
        </div>
        {/* End Section Title */}
        {/* Section Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Tabs */}
          <div className="flex flex-col w-full">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <ScrollAnimation
                  animateIn="textSlideInUp"
                  animateOnce
                  key={index}
                >
                  <div
                    className={`flex flex-col gap-4 px-6 py-4 border-t border-l-0 md:border-t-0 md:border-l border-gray-900 relative cursor-pointer w-full ${
                      isActive ? "" : "text-gray-500"
                    }`}
                    onClick={() => {
                      setBarHeight(0);
                      setActiveTab(index);
                    }}
                  >
                    {isActive && (
                      <>
                        <div
                          className="w-1 bg-primary absolute left-0 top-0 hidden md:flex"
                          style={{
                            height: `${barHeight}%`,
                          }}
                        />
                        <div
                          className="h-1 bg-primary absolute left-0 top-0 flex md:hidden"
                          style={{
                            width: `${barHeight}%`,
                          }}
                        />
                      </>
                    )}
                    {React.cloneElement(tab.icon, {
                      className: "w-8 h-8",
                      fill: isActive ? "#000" : "#666666",
                    })}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg/none">{tab.name}</h3>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-1000 ease-in-out ${
                          isActive
                            ? "max-h-screen md:max-h-[300px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-400">{tab.content}</p>
                        <div className="w-full bg-gradient-to-br from-layerPink-80 to-layerPurple-80 rounded-md md:min-h-[550px] md:h-[550px] p-4 items-center justify-center flex md:hidden mt-4">
                          {React.cloneElement(tab.graphic, {
                            className: "w-full h-full",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
          {/* Graphic */}
          <ScrollAnimation
            animateIn="textSlideInUp"
            animateOnce
            className="w-full"
          >
            <div className="w-full bg-gradient-to-br from-layerPink-80 to-layerPurple-80 rounded-md md:min-h-[550px] md:h-[550px] p-4 items-center justify-center hidden md:flex">
              {React.cloneElement(tabs[activeTab].graphic, {
                className: "w-full h-full",
              })}
            </div>
          </ScrollAnimation>
        </div>
        {/* End Section Content */}
      </div>
    </div>
  );
};

export default Build;
