"use client";

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

interface CTABlockProps {
  headers: string[];
  paragraphs: string[];
  action: React.ReactNode;
}

const CTABlock = ({ headers, paragraphs, action }: CTABlockProps) => {
  return (
    <div className="flex flex-col w-full gap-12 items-start bg-transparentWhite-10 rounded-md p-4 md:p-10 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col text-3xl/tight font-semibold">
          {headers.map((header, index) => (
            <ScrollAnimation
              animateIn="textSlideInUp"
              animateOnce
              key={"h" + index}
            >
              <h2>{header}</h2>
            </ScrollAnimation>
          ))}
        </div>
        {paragraphs.map((paragraph, index) => (
          <ScrollAnimation
            animateIn="fadeIn"
            delay={500}
            animateOnce
            key={"p" + index}
          >
            <p>{paragraph}</p>
          </ScrollAnimation>
        ))}
      </div>
      <ScrollAnimation
        animateIn="textSlideInUp"
        delay={400}
        animateOnce
        className="w-full"
      >
        {action}
      </ScrollAnimation>
    </div>
  );
};

export default CTABlock;
