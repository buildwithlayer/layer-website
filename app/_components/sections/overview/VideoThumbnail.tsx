import React from "react";

const VideoThumbnail = () => {
  return (
    <>
      <iframe
        allowFullScreen={true}
        className="w-full h-full flex items-center justify-center rounded-md bg-gradient-to-br from-[#3A2C5D] to-[#603B4C] backdrop-blur-[50px] aspect-[3024/1964] relative overflow-hidden"
        src="https://www.loom.com/embed/7ac8371fa6e04dc98d114979ef5cfb93?muted=0&hide_speed=true&hide_title=true&hide_owner=true&hide_share=true&hideEmbedTopBar=true"
      ></iframe>
    </>
  );
};

export default VideoThumbnail;
