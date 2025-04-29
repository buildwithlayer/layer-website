"use client";

import React, { useEffect, useState } from "react";
import ParticlesBg from "./ParticlesBg";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import RepoCard from "./RepoCard";
import RoadmapStep from "./RoadmapStep";

const Overview = () => {
  const [marginTop, setMarginTop] = useState(205);

  useEffect(() => {
    const updateMargin = () => {
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      console.log("Navbar Height:", navbarHeight);
      setMarginTop(navbarHeight + 48);
    };

    // Initial calculation
    updateMargin();

    // Create ResizeObserver to watch navbar
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const observer = new ResizeObserver(updateMargin);
      observer.observe(navbar);

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="relative w-screen flex items-center justify-center pb-10 px-2">
      <div
        className="w-full max-w-[--content-width] flex flex-col items-center gap-14 text-center py-12 px-2 md:px-12 z-10 rounded bg-white/10"
        style={{ marginTop }}
      >
        <div className="flex flex-col gap-5 items-center">
          {/* Header */}
          <div className="flex flex-col font-extrabold text-3xl/tight md:text-6xl/tight">
            <ScrollAnimation animateIn="textSlideInUp" animateOnce>
              <h1>
                The <span className="text-primary">Open Source</span> Provider
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="textSlideInUp" delay={200} animateOnce>
              <h1>For All Things MCP</h1>
            </ScrollAnimation>
          </div>
          {/* End Header */}
          {/* Subheader */}
          <ScrollAnimation animateIn="textSlideInUp" delay={400} animateOnce>
            <h2 className="text-2xl md:text-3xl font-light max-w-[600px]">
              Build • Test • Deploy
            </h2>
          </ScrollAnimation>
          {/* End Subheader */}
        </div>
        {/* Repos */}
        <div className="flex flex-col gap-4 items-stretch md:flex-row">
          <ScrollAnimation
            className="flex-1 w-full"
            animateIn="textSlideInUp"
            animateOnce
            delay={400}
          >
            <RepoCard
              name="OpenAPI to MCP"
              description="Officia tempor velit ipsum proident incididunt voluptate. Eiusmod aute id minim eiusmod dolore officia deserunt anim magna laborum laborum minim eiusmod."
              url="https://github.com/buildwithlayer"
              version="v0.0.1"
            />
          </ScrollAnimation>
          <div className="flex flex-col gap-4 flex-1 w-full">
            <ScrollAnimation animateIn="textSlideInUp" animateOnce delay={600}>
              <RepoCard
                name="OpenAPI Zod Schemas"
                description="Officia tempor velit ipsum proident incididunt voluptate. Eiusmod aute id minim eiusmod dolore officia deserunt anim magna laborum laborum minim eiusmod."
                url="https://github.com/buildwithlayer"
                version="v0.0.1"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="textSlideInUp" animateOnce delay={650}>
              <RepoCard
                name="JSON Schema Zod Schemas"
                description="Officia tempor velit ipsum proident incididunt voluptate. Eiusmod aute id minim eiusmod dolore officia deserunt anim magna laborum laborum minim eiusmod."
                url="https://github.com/buildwithlayer"
                version="v0.0.1"
              />
            </ScrollAnimation>
          </div>
        </div>
        {/* End Repos */}
        {/* Roadmap */}
        <div className="bg-black/30 flex flex-col rounded w-full text-left">
          <div className="w-full border-b-[1px] border-white/10 p-4">
            <h3 className="text-2xl font-semibold whitespace-pre">
              🚀{"  "}Development Roadmap
            </h3>
          </div>
          <div className="flex flex-col gap-3 p-8">
            <RoadmapStep
              title="Web MCP Client"
              description="Officia tempor velit ipsum proident incididunt voluptate. Eiusmod aute id minim eiusmod dolore officia deserunt anim magna laborum laborum minim eiusmod."
              state="current"
            />
            <RoadmapStep
              title="MCP Server Evals"
              description="Officia tempor velit ipsum proident incididunt voluptate. Eiusmod aute id minim eiusmod dolore officia deserunt anim magna laborum laborum minim eiusmod."
              state="upcoming"
            />
            <RoadmapStep
              title="MCP Vault"
              description="Officia tempor velit ipsum proident incididunt voluptate. Eiusmod aute id minim eiusmod dolore officia deserunt anim magna laborum laborum minim eiusmod."
              state="upcoming"
              last
            />
          </div>
        </div>
        {/* End Roadmap */}
      </div>
      <ParticlesBg />
      {/* BG Gradient */}
      <div className="absolute top-0 left-0 right-0 w-screen bg-gradient-to-b from-[rgba(0,0,0,0)] from-30% to-layerPink-dark h-full opacity-50"></div>
    </div>
  );
};

export default Overview;
