import React from "react";
import SectionTemplate from "./SectionTemplate";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";

interface iPricingCard {
  badge?: string | null;
  label: string;
  price: string;
  showPerMonth?: boolean;
  features: string[];
  buttonLabel: string;
  buttonType: "primary" | "secondary";
  buttonOnClick: () => void;
}

const PricingCard = ({
  badge = null,
  label,
  price,
  showPerMonth = false,
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
        borderRadius: "8px",
        backgroundColor: Colors.gray[1000],
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: badge ? "space-between" : "flex-start",
              alignItems: "center",
            }}
          >
            <p style={{ color: Colors.gray[300], fontWeight: "600" }}>
              {label}
            </p>
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
            {showPerMonth && (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {features.map((feature, index) => (
            <div key={index} style={{ display: "flex", gap: "8px" }}>
              <p>✅</p>
              <p>{feature}</p>
            </div>
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

const Pricing = ({
  screenWidth,
  setDemoFormOpen,
}: {
  screenWidth: "sm" | "md" | "lg";
  setDemoFormOpen: (open: boolean) => void;
}) => {
  const pricingPlans: iPricingCard[] = [
    {
      label: "Starter",
      price: "$250",
      showPerMonth: true,
      badge: "2 Week Free Trial",
      features: [
        "Up to 1,000 Queries per Month",
        "Deploy to Website Chatbot & VS Code Extension",
        "Website & Public Docs Data Sources",
        "Semantic Search on Your Docs",
      ],
      buttonLabel: "Get Started for Free",
      buttonType: "primary",
      buttonOnClick: () => {
        window.location.href =
          process.env.REACT_APP_MANAGEMENT_DASH_URL + "signup";
      },
    },
    {
      badge: "Most Popular",
      label: "Growth",
      price: "Contact Us",
      features: [
        "Everything in Starter",
        "Up to 10,000 Queries per Month",
        "Discord & Slack Bot Deployments",
        "Advanced Docs Analytics & Reports",
        "Custom Styling",
        "Adaptive Models",
      ],
      buttonLabel: "Book a Demo",
      buttonType: "secondary",
      buttonOnClick: () => {
        setDemoFormOpen(true);
      },
    },
    {
      label: "Enterprise",
      price: "Contact Us",
      features: [
        "Everything in Growth",
        "Unlimited Queries",
        "Zendesk Copilot for Support Agents",
        "Integrations: Salesforce, Zendesk",
        "Auto Integration (Experimental)",
        "Uptime SLA",
      ],
      buttonLabel: "Book a Demo",
      buttonType: "secondary",
      buttonOnClick: () => {
        setDemoFormOpen(true);
      },
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
        <h2>Pricing</h2>
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
