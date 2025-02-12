import Image from "next/image";
import React from "react";
import OpenDemoButton from "./OpenDemoButton";

const Navbar = () => {
  const sections = [{ name: "Blog", link: "https://docs.buildwithlayer.com" }];

  return (
    // Outer nav container
    <div className="flex justify-center items-center fixed top-0 right-0 left-0 bg-navbarbg backdrop-blur-sm py-6 px-4 z-50 border-b-[1px] border-b-gray-100">
      {/* Inner nav container */}
      <div className="max-w-[--content-width] w-full flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-4 justify-center">
          <Image
            src="/LayerLogo.svg"
            alt="Layer Logo"
            width={40}
            height={40}
            loading="eager"
          />
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
  );
};

export default Navbar;
