"use client";

import React from "react";
import OpenDemoButton from "./OpenDemoButton";
import LayerLogo from "public/LayerLogo.svg";
import TopBanner from "./TopBanner";

const Navbar = () => {
  const sections = [{ name: "Blog", link: "https://docs.buildwithlayer.com" }];

  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <div className="flex flex-col fixed top-0 right-0 left-0 z-50">
      <TopBanner
        link="https://us06web.zoom.us/webinar/register/WN_Np6LTMyjTzywWIfpZMYKuQ#/registration"
        open={showBanner}
        handleClose={() => setShowBanner(false)}
      >
        <p className="whitespace-pre">
          <strong>Sign Up For Our Webinar:</strong>
          <br />
          MCP In The Wild: How to Turn MCP into Practical AI Solutions
        </p>
      </TopBanner>
      {/* Outer nav container */}
      <div className="flex justify-center items-center bg-navbarbg backdrop-blur-sm py-6 px-4 z-50 border-b-[1px] border-b-gray-100">
        {/* Inner nav container */}
        <div className="max-w-[--content-width] w-full flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-4 justify-center">
            <LayerLogo fill="var(--primary)" height={32} />
            <h1 className="font-bold text-[24px]">Layer</h1>
          </div>
          {/* NavLinks */}
          <div className="flex gap-8 items-center">
            <div className="flex gap-4 items-center">
              {sections.map((section) => (
                <a
                  key={section.name}
                  href={section.link}
                  target={`${section.link.startsWith("http") ? "_blank" : ""}`}
                  className="text-sm font-semibold text-foreground hover:text-primary"
                >
                  {section.name}
                </a>
              ))}
            </div>
            <OpenDemoButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
