import Image from "next/image";
import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedin: string;
}

const TeamCard = ({ name, role, imageSrc, linkedin }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center justify-end rounded-lg border-[1px] border-gray-900 relative h-[350px] overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full absolute -z-10 object-contain"
      />
      <div className="w-full flex justify-between items-center text-left bg-white/90 backdrop-blur-md px-4 py-2 z-10">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <a
          href={linkedin}
          className="text-sm text-blue-600 cursor-pointer hover:scale-105 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col gap-2 text-center py-16 z-10 relative px-16 border-x-[1px] border-x-gray-900">
        <h2 className="section-header">THE TEAM</h2>
        <div className="grid grid-cols-2 gap-4">
          <TeamCard
            name="Jonah Katz"
            role="Co-Founder & CEO"
            imageSrc="/jonah.png"
            linkedin="https://www.linkedin.com/in/jonahkatz1/"
          />
          <TeamCard
            name="Andrew Hamilton"
            role="Co-Founder & CTO"
            imageSrc="/andrew.png"
            linkedin="https://www.linkedin.com/in/andrew-p-hamilton/"
          />
          <TeamCard
            name="Gavyn Partlow"
            role="Software Engineer"
            imageSrc="/gavyn.png"
            linkedin="https://www.linkedin.com/in/gavyn-p-707796124/"
          />
          <TeamCard
            name="Ayaan Gill"
            role="UX Engineer"
            imageSrc="/ayaan.png"
            linkedin="https://www.linkedin.com/in/ayaangill/"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
