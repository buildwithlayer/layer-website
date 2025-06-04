import dynamic from "next/dynamic";
import LayerLogo from "public/LayerLogo.svg";
import React from "react";

const CalendlyWidget = dynamic(() => import("./CalendlyWidget"));

const Footer = () => {
  const linkStyles =
    "font-light text-gray-400 hover:text-white text-center md:text-left md:pr-4 py-2 md:py-0 block";

  return (
    // Outer footer container
    <div
      id="footer"
      className="w-screen flex items-center justify-center bg-black text-white"
    >
      {/* Inner footer container */}
      <div className="w-full max-w-[--content-width] px-6 py-12 flex flex-col items-center text-center gap-20 justify-between md:flex-row md:items-start md:text-left border-x-[1px] border-gray-100">
        {/* Left footer content */}
        <div className="flex flex-col justify-between md:h-[500px]">
          <div className="flex flex-col gap-10 items-center md:items-start">
            {/* Brand */}
            <div className="flex justify-center gap-4 w-full md:w-auto">
              <LayerLogo fill="var(--primary)" height={32} />
              <h1 className="font-bold text-[24px]">Layer</h1>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl/none md:text-5xl/none font-extrabold">
                See what MCP can do for your company
              </h2>
              <p className="text-gray-800 font-light text-xl">
                Schedule a 15-minute discussion to learn how we can help you
                build and take advantage of MCP.
              </p>
            </div>
          </div>
          <div className="flex-col gap-4 hidden md:flex">
            <div className="flex gap-2">
              <a
                href="https://storage.googleapis.com/generic-assets/TermsOfService.pdf"
                className={linkStyles}
              >
                Terms of Service
              </a>
              <a
                href="https://storage.googleapis.com/generic-assets/PrivacyPolicy.pdf"
                className={linkStyles}
              >
                Privacy Policy
              </a>
            </div>
            <p className="font-light">{`© ${new Date()
              .getFullYear()
              .toString()} Layer. All rights reserved.`}</p>
          </div>
        </div>
        {/* Right footer content */}
        <div className="flex gap-10 flex-col md:flex-row md:gap-20 w-full md:w-auto">
          <CalendlyWidget />
        </div>
        <div className="flex-col gap-4 flex md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="https://storage.googleapis.com/generic-assets/TermsOfService.pdf"
              className={linkStyles}
            >
              Terms of Service
            </a>
            <a
              href="https://storage.googleapis.com/generic-assets/PrivacyPolicy.pdf"
              className={linkStyles}
            >
              Privacy Policy
            </a>
          </div>
          <p className="font-light">{`© ${new Date()
            .getFullYear()
            .toString()} Layer. All rights reserved.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
