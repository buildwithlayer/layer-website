"use client";

import React from "react";
import VideoThumbnail from "./VideoThumbnail";
import ParticlesBg from "./ParticlesBg";
import Surfaces from "./Surfaces";

const Overview = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col items-center gap-16 text-center pt-16 z-10 relative">
        {/* Hero Text */}
        <div className="flex flex-col gap-8 sticky top-[200px] w-full">
          {/* Header */}
          <div className="flex flex-col font-extrabold text-4xl/tight md:text-7xl/tight">
            <h1>
              Make Your API
              <br />
              Accessible to Agents
            </h1>
          </div>
          {/* End Header */}
          {/* Subheader */}
          <div className="flex flex-col gap-2 text-xl font-light text-gray-700">
            <h2>
              Layer’s platform helps you deploy extensions to the top AI
              ecosystems,
              <br />
              so popular agentic tools can easily pick up and use your API.
            </h2>
          </div>
          {/* End Subheader */}
        </div>
        {/* End Hero Text */}
        <VideoThumbnail />
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
