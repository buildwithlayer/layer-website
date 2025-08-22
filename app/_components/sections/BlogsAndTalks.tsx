import Image from "next/image";
import React from "react";

interface BlogCard {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;
}

const BlogCard = ({ title, description, link, imageSrc }: BlogCard) => {
  return (
    <a
      key={title}
      className="flex flex-col rounded-md border-[1px] border-gray-900 overflow-hidden hover:scale-[1.02] transition-all h-full w-full"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover object-center h-[200px]"
          width={400}
          height={200}
        />
      )}
      <div className="flex flex-col gap-2 p-4 text-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </a>
  );
};

const BlogsAndTalks = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative px-8 md:px-16 border-x-[1px] border-x-gray-900">
        <h2 className="section-header">BLOGS & TALKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BlogCard
            title="5 Rules to Build a Great MCP Server"
            description="Watch our CTO, Andrew Hamilton discuss the rules for building a great MCP Server at the APIDays conference in NYC."
            link="https://www.youtube.com/watch?v=ENHgsITFlos"
            imageSrc="/rules-talk-thumb.png"
          />
          <BlogCard
            title="What is MCP?"
            description="Explore the Model Context Protocol (MCP) and MCP Experience (MCPX): A comprehensive guide to building powerful MCP servers, enabling seamless AI integration, real-time tool access, and agent-driven workflows for developers and end-users."
            link="https://docs.buildwithlayer.com/blog/what_is_mcp"
            imageSrc="/what-is-mcp.png"
          />
          <BlogCard
            title="Unlocking the Future of AI Integration: Five Takeaways From Our ‘MCP in the Wild’ Webinar"
            description="Explore 5 key takeaways from the 'MCP in the Wild' webinar, covering Model Context Protocol's impact on Agent Experience (AX), AI workflows, API distribution, security, and future business strategies."
            link="https://docs.buildwithlayer.com/blog/5_key_takeaways"
            imageSrc="/mcp-in-the-wild.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsAndTalks;
