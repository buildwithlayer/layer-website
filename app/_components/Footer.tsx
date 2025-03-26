import LayerLogo from "public/LayerLogo.svg";
import React from "react";

const Footer = () => {
  const linkStyles =
    "font-light text-gray-400 hover:text-white text-center md:text-left md:pr-4";

  const linkSections = [
    {
      name: "Company",
      links: [
        {
          name: "Terms of Service",
          link: "https://storage.googleapis.com/generic-assets/TermsOfService.pdf",
        },
        {
          name: "Privacy Policy",
          link: "https://storage.googleapis.com/generic-assets/PrivacyPolicy.pdf",
        },
      ],
    },
    {
      name: "Socials",
      links: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/buildwithlayer/",
        },
        { name: "X", link: "https://x.com/buildwithlayer" },
      ],
    },
  ];

  return (
    // Outer footer container
    <div className="w-screen flex items-center justify-center bg-black">
      {/* Inner footer container */}
      <div className="w-full max-w-[--content-width] px-4 py-8 flex flex-col items-center text-center gap-10 justify-between md:flex-row md:items-start md:text-left">
        {/* Left footer content */}
        <div className="flex flex-col md:justify-between gap-10">
          <div className="flex flex-col gap-2">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <LayerLogo fill="var(--primary)" height={32} />
              <h1 className="font-bold text-[24px]">Layer</h1>
            </div>
            <h2 className="text-[26px] font-light max-w-[300px] hidden md:block">
              Make Your API Accessible to Agents
            </h2>
          </div>
          <p className="font-light hidden md:block">{`© ${new Date().getFullYear()} Layer. All rights reserved.`}</p>
        </div>
        {/* Right footer content */}
        <div className="flex gap-10 flex-col md:flex-row md:gap-20">
          {linkSections.map((section) => (
            <div className="flex flex-col gap-2" key={section.name}>
              <p>{section.name}</p>
              {section.links.map((link) => (
                <a
                  href={link.link}
                  target="_blank"
                  className={linkStyles}
                  key={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="font-light block md:hidden">{`© ${new Date().getFullYear()} Layer. All rights reserved.`}</p>
      </div>
    </div>
  );
};

export default Footer;
