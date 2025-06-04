"use client";

import React from "react";
import LayerLogo from "public/LayerLogo.svg";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { name: "Docs", link: "https://docs.buildwithlayer.com" },
    { name: "Blog", link: "https://docs.buildwithlayer.com/blog" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/buildwithlayer",
      imageSrc: "/linkedin.svg",
    },
    {
      name: "X",
      link: "https://x.com/buildwithlayer",
      imageSrc: "/x.svg",
    },
    {
      name: "Discord",
      link: "https://discord.com/invite/VTqxJfgZAt",
      imageSrc: "/discord.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/buildwithlayer",
      imageSrc: "/github.svg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Outer nav container */}
      <div className="flex justify-center items-center">
        {/* Inner nav container */}
        <div className="max-w-[--content-width] w-full flex justify-between items-center border-x-[1px] border-gray-900 p-6">
          {/* Brand */}
          <div className="flex items-center gap-4 justify-center">
            <LayerLogo fill="var(--primary)" height={32} />
            <h1 className="font-bold text-[24px]">Layer</h1>
          </div>
          {/* NavLinks */}
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-6 items-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  target={`${link.link.startsWith("http") ? "_blank" : ""}`}
                  className="text-sm font-semibold text-gray-500 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:scale-105 transition-all"
                >
                  <Image
                    src={social.imageSrc}
                    alt={social.name}
                    className="w-6 h-6"
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
            <a href="#footer" className="hidden md:block">
              <Button label="Book a Demo" handleClick={() => {}} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
