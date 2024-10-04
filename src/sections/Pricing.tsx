import React from "react";
import SectionTemplate from "./SectionTemplate";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";

interface iPricingCard {
  badge?: string | null;
  label: string;
  price: string;
  monthly?: boolean;
  features: string[];
  buttonLabel: string;
  buttonType: "primary" | "secondary";
  buttonOnClick: () => void;
}

const PricingCard = ({
  badge = null,
  label,
  price,
  monthly = false,
  features,
  buttonLabel,
  buttonType,
  buttonOnClick,
}: iPricingCard) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: badge ? "space-between" : "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: Colors.gray[300], fontWeight: "600" }}>
              {label}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "flex-end",
              }}
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                }}
              >
                {price}
              </p>
              {monthly && (
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "38px",
                    fontWeight: "800",
                  }}
                >
                  /mo
                </p>
              )}
            </div>
          </div>
          {badge && (
            <div
              style={{
                padding: "2px 8px",
                boxShadow: `inset 0px 0px 0px 1px ${Colors.primary.main}`,
                borderRadius: "16px",
                color: Colors.primary.main,
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {badge}
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {features.map((feature, index) => (
            <p key={index}>✅ {feature}</p>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <Button
          label={buttonLabel}
          type={buttonType}
          onClick={buttonOnClick}
          fullWidth
        />
      </div>
    </div>
  );
};

const Pricing = ({ screenWidth }: { screenWidth: "sm" | "md" | "lg" }) => {
  const pricingPlans: iPricingCard[] = [
    {
      label: "Basic",
      price: "Free",
      features: [
        "Up to X monthly active developers",
        "GitHub Copilot & GPT-4o chat",
        "Basic support",
      ],
      buttonLabel: "Get Started for Free",
      buttonType: "primary",
      buttonOnClick: () => {
        window.location.href = "https://dashboard.buildwithlayer.com/signup";
      },
    },
    {
      badge: "Most Popular",
      label: "Standard",
      price: "$XXX",
      monthly: true,
      features: [
        "Everything included in the basic tier",
        "Embedded chat in documentation",
        "Up to X monthly active developers",
        "Priority support",
      ],
      buttonLabel: "Book a Demo",
      buttonType: "secondary",
      buttonOnClick: () => {},
    },
    {
      label: "Enterprise",
      price: "Contact Us",
      features: [
        "Custom feature support",
        "X+ monthly active developers",
        "Priority support",
      ],
      buttonLabel: "Book a Demo",
      buttonType: "secondary",
      buttonOnClick: () => {},
    },
  ];

  return (
    <SectionTemplate section="Pricing">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          width: "100%",
        }}
      >
        <h2>Pricing 💳</h2>
        <div
          style={{
            display: "flex",
            flexDirection: screenWidth === "lg" ? "row" : "column",
            alignItems: "stretch",
            gap: "16px",
            width: "100%",
          }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard {...plan} key={index} />
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Pricing;
