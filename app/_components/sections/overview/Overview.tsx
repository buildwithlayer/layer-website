"use client";

import React from "react";
import VideoThumbnail from "./VideoThumbnail";
import ParticlesBg from "./ParticlesBg";
import Surfaces from "./Surfaces";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "../../Button";

const Overview = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-16 text-center pt-16 z-10 relative px-4 md:px-0">
        {/* Hero Text */}
        <div className="flex flex-col gap-8 sticky top-[185px] w-full">
          {/* Header */}
          <div className="flex flex-col font-extrabold text-4xl/tight md:text-7xl/tight">
            <ScrollAnimation animateIn="textSlideInUp" animateOnce>
              <h1>{`Build great MCP`}</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="textSlideInUp" delay={200} animateOnce>
              <h1>{`servers for your API`}</h1>
            </ScrollAnimation>
          </div>
          {/* End Header */}
          {/* Subheader */}
          <div className="flex flex-col text-xl/relaxed font-light text-gray-700">
            <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce>
              <h2>Layer’s platform generates production-grade MCP servers</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={700} animateOnce>
              <h2>so AI coding tools can easily pick up and use your API.</h2>
            </ScrollAnimation>
          </div>
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
            <a href="https://dashboard.buildwithlayer.com/demo" target="_blank">
              <Button
                label="Build a Demo MCP Server"
                handleClick={() => {}}
                size="lg"
              />
            </a>
          </ScrollAnimation>
        </div>
        {/* End Hero Text */}
        <ScrollAnimation
          animateIn="videoThumbnailSlideInUp"
          delay={400}
          animateOnce
          duration={0.8}
          className="w-full"
        >
          <VideoThumbnail />
        </ScrollAnimation>
      </div>
      <ParticlesBg />
      <Surfaces />
      {/* BG Gradient */}
      <div className="absolute top-0 left-0 right-0 w-screen bg-gradient-to-b from-[rgba(0,0,0,0)] from-30% to-layerPink-dark h-full opacity-50"></div>
      {/* White BG Section */}
      <div className="absolute bg-white bottom-0 left-0 right-0 w-screen h-[100px]"></div>
    </div>
  );
};

export default Overview;
