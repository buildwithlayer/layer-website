import React from "react";

const WhyLayer = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative px-16 border-x-[1px] border-x-gray-900">
        <h2 className="section-header">WHY LAYER?</h2>
        <p className="text-2xl text-left">
          We’ve been building “MCP Servers” since a year before MCP even
          existed. We’ve built servers for XYZ, have seen what does and doesn’t
          work, and often speak about the MCP ecosystem and best practices for
          building servers.
        </p>
      </div>
    </div>
  );
};

export default WhyLayer;
