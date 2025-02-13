"use client";

import React from "react";
import CloseIcon from "public/close-icon.svg";

const BlogBanner = () => {
  const [showBanner, setShowBanner] = React.useState(true);
  return (
    <>
      {showBanner && (
        <div className="w-full bg-primary text-white py-2 flex items-center justify-center">
          <div className="flex justify-center items-center w-full max-w-[--content-width] text-left md:text-center px-4 md:px-0 gap-6">
            <p>
              Check out our new blog on <br className="visible md:hidden" />
              <a
                href="https://docs.buildwithlayer.com/llm_extensibility_vital_to_api_vendors"
                target="_blank"
                className="underline hover:bg-[rgba(255,255,255,0.1)] rounded-sm p-1"
              >
                Why LLM Extensibility is Vital to API Vendors.
              </a>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="rounded-xl p-0 md:p-1 hover:bg-[rgba(255,255,255,0.1)]"
            >
              <CloseIcon fill="white" width={24} height={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogBanner;
