import React, { ReactNode } from "react";
import CloseIcon from "public/close-icon.svg";

interface TopBannerProps {
  children: ReactNode;
  link: string;
  open: boolean;
  handleClose: () => void;
}

const TopBanner = ({ children, link, open, handleClose }: TopBannerProps) => {
  return (
    open && (
      <a
        className="flex items-center justify-center px-2 py-3 bg-primary text-white hover:bg-primaryDark"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="max-w-[--content-width] w-full flex items-center justify-between gap-4">
          <div className="w-6 md:w-8"></div>
          {children}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClose();
            }}
            className="rounded-full p-0 md:p-1 hover:bg-[rgba(255,255,255,0.1)]"
          >
            <CloseIcon fill="white" width={24} height={24} />
          </button>
        </div>
      </a>
    )
  );
};

export default TopBanner;
