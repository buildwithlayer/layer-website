"use client";
import React, { useState } from "react";
import Tab from "../Tab";
import Image from "next/image";
import Button from "../Button";
import ScrollAnimation from "react-animate-on-scroll";

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  buttonLabel: string;
  buttonIcon?: React.ReactNode;
  imageSrc?: string;
  additionalClasses?: string;
}

const FeatureCard = ({
  title,
  description,
  link,
  buttonLabel,
  buttonIcon,
  imageSrc,
  additionalClasses,
}: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between p-4 bg-black text-white text-left gap-8 ${additionalClasses}`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
          width={400}
          height={200}
        />
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        className="flex items-center gap-2"
      >
        <Button
          label={buttonLabel}
          icon={buttonIcon}
          handleClick={() => {}}
          additionalClasses="w-full bg-transparent hover:bg-gray-100 text-white border border-white items-center flex gap-3"
        />
      </a>
    </div>
  );
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("build");
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-10 text-center py-16 z-10 relative md:px-0 border-x-[1px] border-x-gray-900">
        <div className="flex flex-col gap-1 text-2xl/tight md:text-3xl/tight font-semibold">
          <ScrollAnimation animateIn="textSlideInUp" delay={1000} animateOnce>
            <h2>Everything you need for the</h2>
            <h2 className="text-primary">perfect MCP experience</h2>
          </ScrollAnimation>
        </div>
        <div className="flex-flex-col w-full">
          <div className="flex border-t-[1px] border-gray-900 w-full items-center justify-stretch overflow-x-auto">
            <Tab
              label="🛠️  Build"
              additionalClasses="w-full border-r-[1px] border-r-gray-900"
              active={activeTab === "build"}
              onClick={() => setActiveTab("build")}
            />
            <Tab
              label="🧪  Test"
              additionalClasses="w-full border-r-[1px] border-r-gray-900"
              active={activeTab === "test"}
              onClick={() => setActiveTab("test")}
            />
            <Tab
              label="👥  Distribute"
              additionalClasses="w-full border-r-[1px] border-r-gray-900"
              active={activeTab === "distribute"}
              onClick={() => setActiveTab("distribute")}
            />
            <Tab
              label="🕵️  Analyze"
              additionalClasses="w-full"
              active={activeTab === "analyze"}
              onClick={() => setActiveTab("analyze")}
            />
          </div>
          {activeTab === "build" && (
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0.5">
              <FeatureCard
                title="Management Dashboard"
                description="A comprehensive dashboard for managing your MCP server."
                link="https://dashboard.buildwithlayer.com"
                buttonLabel="Get Started"
                additionalClasses="row-span-2"
              />
              <FeatureCard
                title="OpenAPI to Tools"
                description="Pariatur et sunt quis ea aute est proident id Lorem laboris non."
                link="https://github.com/buildwithlayer/openapi-to-tools"
                buttonIcon={
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                }
                buttonLabel="View on GitHub"
              />
              <FeatureCard
                title="Let Us Build Your Server"
                description="Pariatur et sunt quis ea aute est proident id Lorem laboris non."
                link="#footer"
                buttonLabel="Book a Demo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
