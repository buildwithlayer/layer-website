"use client";

import React, { useState } from "react";
import PlayIcon from "public/play-icon.svg";
import Image from "next/image";

const VideoThumbnail = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`flex items-center justify-center rounded-md bg-gradient-to-br from-layerPink-80 to-layerPurple-80 backdrop-blur-[50px] w-full aspect-[3024/1964] relative overflow-hidden ${
          open ? "" : "p-4 md:p-16"
        }`}
      >
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center absolute bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 backdrop-blur-sm"
          >
            <PlayIcon fill="#ffffff" width={72} height={72} />
          </button>
        )}
        {open ? (
          <iframe
            className="w-full h-full"
            src="https://www.loom.com/embed/7ac8371fa6e04dc98d114979ef5cfb93?sid=41f94368-ced0-41ba-8b4d-5178070566cf&muted=0&hide_speed=true&hide_title=true&hide_owner=true&hide_share=true"
          ></iframe>
        ) : (
          <Image
            src="/video-thumbnail.png"
            alt="Layer Demo"
            width={5000}
            height={5000}
            className="w-full"
          />
        )}
      </div>
    </>
  );
};

export default VideoThumbnail;
