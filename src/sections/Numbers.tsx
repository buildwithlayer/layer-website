import React, { useEffect, useRef, useState } from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";

const NumberBlock = ({
  number,
  label,
  animationDuration,
  numberSuffix,
}: {
  number: number;
  label: string;
  animationDuration: number;
  numberSuffix?: string;
}) => {
  const [countingNumber, setCountingNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      setCountingNumber(0);
      return;
    }

    const increment = number / (animationDuration / 50);

    const interval = setInterval(() => {
      setCountingNumber((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= number) {
          clearInterval(interval);
          return number;
        }
        return nextValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, number]);

  return (
    <div
      ref={elementRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "24px 16px 32px 16px",
        background: Colors.gray[1000],
        borderRadius: "8px",
      }}
    >
      <p
        style={{
          fontSize: "96px",
          fontWeight: "800",
          background: "linear-gradient(0deg, #F565FF, #7A65FF)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {Math.round(countingNumber) + (numberSuffix ? numberSuffix : "")}
      </p>
      <p style={{ fontWeight: "600", fontSize: "18px", color: "white" }}>
        {label}
      </p>
    </div>
  );
};

const Numbers = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const numbers = [
    { number: 15, label: "Questions Answered", numberSuffix: "k+" },
    { number: 80, label: "Extensions Deployed", numberSuffix: "+" },
    { number: 12, label: "Languages Supported" },
  ];
  return (
    <SectionTemplate
      section="Numbers"
      sectionStyleOverrides={{
        paddingTop: "96px",
        paddingBottom: "48px",
        borderBottom: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          justifyContent: "stretch",
          alignItems: "stretch",
        }}
      >
        {numbers.map((number, index) => (
          <NumberBlock
            number={number.number}
            label={number.label}
            animationDuration={400 + index * 200}
            numberSuffix={number.numberSuffix}
          />
        ))}
      </div>
    </SectionTemplate>
  );
};

export default Numbers;
