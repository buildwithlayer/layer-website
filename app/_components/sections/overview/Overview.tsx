import React from "react";
import Investors from "./Investors";
import SurfacesBlock from "./SurfacesBlock";
import ChatExamples from "./ChatExamples";

const Overview = () => {
  return (
    <div className="w-full max-w-[--content-width] flex flex-col gap-16 text-center py-16">
      {/* Hero Text */}
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-0">
          <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
            <h1 className="font-bold text-[26px]/[40px] md:text-[32px]/[40px]">
              Devs already ask
            </h1>
            <SurfacesBlock />
          </div>
          <h1 className="font-bold text-[26px]/[40px] md:text-[32px]/[40px]">
            for help with your product
          </h1>
        </div>
        {/* End Header */}
        {/* Subheader */}
        <div className="flex flex-col gap-2">
          <h2 className="font-light text-gray-700 text-[20px] whitespace-pre">
            {`🎮  Control the help they get`}
          </h2>
          <h2 className="font-light text-gray-700 text-[20px] whitespace-pre">
            {`👀  See the help they need`}
          </h2>
        </div>
        {/* End Subheader */}
      </div>
      {/* End Hero Text */}
      <ChatExamples />
      <Investors />
    </div>
  );
};

export default Overview;
