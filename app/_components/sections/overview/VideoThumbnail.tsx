"use client";

import React, { useState } from "react";
import Modal from "../../Modal";
import PlayIcon from "public/play-icon.svg";

const VideoThumbnail = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <iframe
          className="w-full h-full"
          src="https://www.loom.com/embed/7ac8371fa6e04dc98d114979ef5cfb93?sid=41f94368-ced0-41ba-8b4d-5178070566cf&muted=0&hide_speed=true&hide_title=true&hide_owner=true&hide_share=true"
        ></iframe>
      </Modal>
      <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-layerPink-80 to-layerPurple-80 backdrop-blur-[50px] w-full aspect-video relative p-16">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center absolute bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 backdrop-blur-sm"
        >
          <PlayIcon fill="#ffffff" width={72} height={72} />
        </button>
        <img src="video-thumbnail.png" alt="Layer Demo" />
      </div>
    </>
  );
};

export default VideoThumbnail;
