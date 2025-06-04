"use client";

import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "../Button";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-16 text-center py-16 z-10 relative px-4 md:px-0 border-x-[1px] border-x-gray-900">
        {/* Hero Text */}
        <div className="flex flex-col gap-8 w-full items-center">
          {/* Header */}
          <Image src="/no-mcp.png" alt="No MCP" width={200} height={200} />
          <div className="flex flex-col font-extrabold text-4xl/tight md:text-7xl/tight">
            <ScrollAnimation animateIn="textSlideInUp" animateOnce>
              <h1>{`Never Think`}</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="textSlideInUp" delay={200} animateOnce>
              <h1>{`About MCP Again`}</h1>
            </ScrollAnimation>
          </div>
          {/* End Header */}
          {/* Subheader */}
          <ScrollAnimation
            animateIn="fadeIn"
            delay={600}
            animateOnce
            className="flex flex-col text-3xl font-light text-gray-500"
          >
            <h2>Let us do it for you.</h2>
          </ScrollAnimation>
          {/* End Subheader */}
          <ScrollAnimation
            animateIn="textSlideInUp"
            animateOnce
            delay={800}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
            }}
          >
            <a href="#footer">
              <Button
                label="Book a Demo"
                handleClick={() => {}}
                size="lg"
                additionalClasses="px-6 py-3 text-lg"
              />
            </a>
          </ScrollAnimation>
        </div>
        {/* End Hero Text */}
      </div>
    </div>
  );
};

export default Overview;
