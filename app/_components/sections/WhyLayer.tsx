import React from "react";

const WhyLayer = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative p-8 md:px-16 border-x-[1px] border-x-gray-900">
        <h2 className="section-header">WHY LAYER?</h2>
        <p className="text-2xl text-left">
          Our team was building Al plugins a year before MCP existed. Since
          then, we&apos;ve built over 100 MCP servers and have seen what works
          and what doesn&apos;t. We often give talks about developments in the
          MCP ecosystem and best practices for building servers.
        </p>
      </div>
    </div>
  );
};

export default WhyLayer;
