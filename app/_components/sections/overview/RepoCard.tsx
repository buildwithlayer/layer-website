import React from "react";
import GithubIcon from "public/github-icon.svg";

interface RepoCardProps {
  name: string;
  description: string;
  url: string;
  version: string;
}

const RepoCard = ({ name, description, url, version }: RepoCardProps) => {
  return (
    <div className="flex flex-col justify-between text-left bg-black/40 rounded p-4 gap-6 backdrop-blur-[50px] w-full h-full shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm px-2 py-1 rounded bg-white/10 w-fit font-light">
            {version}
          </p>
        </div>
        <p className="text-gray-800">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <button className="w-full flex items-center justify-center gap-3 p-3 rounded border-[1px] border-white/20 text-white hover:bg-white/5 transition duration-200">
          <GithubIcon fill="white" width="24" />
          <p className="font-semibold">View on GitHub</p>
        </button>
      </a>
    </div>
  );
};

export default RepoCard;
