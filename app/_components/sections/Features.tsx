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
      className={`flex flex-col p-4 bg-black text-white text-left gap-4 ${additionalClasses}`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover object-top rounded-t-md"
          width={400}
          height={200}
        />
      )}
      <div className="flex flex-col justify-between h-full gap-8">
        <div className="flex flex-col gap-1">
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
    </div>
  );
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("build");
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-10 text-center py-16 z-10 relative md:px-0 border-x-[1px] border-x-gray-900">
        <div className="flex flex-col gap-1 text-2xl/tight md:text-3xl/tight font-semibold">
          <ScrollAnimation
            animateIn="textSlideInUp"
            delay={1000}
            animateOnce
            className="max-w-[600px]"
          >
            <h2>
              <span className="text-primary">Layer</span> is an agency that
              designs and implements{" "}
              <span className="text-primary">MCP solutions</span> for customers
            </h2>
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
                description="Build your server with no code, using our management dashboard to add tools, workflows, and resources."
                link="https://dashboard.buildwithlayer.com"
                buttonLabel="Get Started"
                additionalClasses="row-span-2"
                imageSrc="/management-dash-tools.png"
              />
              <FeatureCard
                title="OpenAPI to Tools"
                description="Use our open-source package to convert OpenAPI routes to tools to be used by MCP servers or other LLM applications."
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
                description="Meet with our team of MCP experts to discuss your needs and let us build your server for you."
                link="#footer"
                buttonLabel="Book a Demo"
              />
            </div>
          )}
          {activeTab === "test" && (
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0.5">
              <FeatureCard
                title="Testing Dashboard"
                description="Use our testing dashboard to define and run tests on your MCP server."
                link="https://dashboard.buildwithlayer.com"
                buttonLabel="Get Started"
                additionalClasses="row-span-2"
                imageSrc="/management-dash-evals.png"
              />
              <FeatureCard
                title="MCP Evals"
                description="Use our open-source testing framework to run evaluations on your MCP server, ensuring it functions correctly and meets your requirements."
                link="#footer"
                buttonLabel="Book a Demo"
              />
              <FeatureCard
                title="Let Us Test Your Server"
                description="Meet with our team of MCP experts to discuss your needs and implement testing strategies to ensure your server is functioning as intended."
                link="#footer"
                buttonLabel="Book a Demo"
              />
            </div>
          )}
          {activeTab === "distribute" && (
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0.5">
              <FeatureCard
                title="Web MCP Client"
                description="Embed your MCP server in a web application with our open-source web client, allowing users to interact with your server from your existing platforms."
                link="#footer"
                buttonLabel="Book a Demo"
                imageSrc="/web-client.png"
                additionalClasses="row-span-2"
              />
              <FeatureCard
                title="Let Us Distribute Your Server"
                description="Meet with our team of MCP experts to discuss your needs and let us distribute your server for you."
                link="#footer"
                buttonLabel="Book a Demo"
                additionalClasses="row-span-2"
              />
            </div>
          )}
          {activeTab === "analyze" && (
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0.5">
              <FeatureCard
                title="Analytics Dashboard"
                description="Use our analytics dashboard to see how your server is performing, what tools are being used, and more."
                link="https://dashboard.buildwithlayer.com"
                buttonLabel="Get Started"
                additionalClasses="row-span-2"
                imageSrc="/management-dash-analytics.png"
              />
              <FeatureCard
                title="MCP Analytics"
                description="Use our open-source package to implement analytics on your MCP server, allowing you to track usage, performance, and more."
                link="#footer"
                buttonLabel="Book a Demo"
              />
              <FeatureCard
                title="Let Us Add Analytics To Your Server"
                description="Meet with our team of MCP experts to discuss your needs and let us add analytics to your server."
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
