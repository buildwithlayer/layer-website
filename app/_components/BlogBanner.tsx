"use client";

import React from "react";
import CloseIcon from "public/close-icon.svg";

const BlogBanner = () => {
  const [showBanner, setShowBanner] = React.useState(true);
  return (
    <>
      {showBanner && (
        <div
          className="bg-primary text-white py-3 pl-6 pr-4 fixed z-[9999] bottom-8 right-8 rounded-full shadow-md opacity-0 hover:bg-primaryDark"
          id="blog-banner"
        >
          <a
            href="https://docs.buildwithlayer.com/llm_extensibility_vital_to_api_vendors"
            target="_blank"
            className="flex items-center justify-between gap-8"
          >
            <p>
              <span className="font-semibold whitespace-pre">{`📝  Check out our new blog:`}</span>
              <br />
              Why LLM Extensibility is Vital to API Vendors.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowBanner(false);
              }}
              className="rounded-full p-0 md:p-1 hover:bg-[rgba(255,255,255,0.1)]"
            >
              <CloseIcon fill="white" width={24} height={24} />
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default BlogBanner;
