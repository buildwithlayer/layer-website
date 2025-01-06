import React from "react";
import SectionTemplate from "./SectionTemplate";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";
import Slider from "@mui/material/Slider";
import { queries } from "@testing-library/react";

interface iPricingCard {
  label: string;
  price: string;
  showPerMonth?: boolean;
  sliderComponent?: React.ReactNode;
  features: string[];
  buttonLabel: string;
  buttonType: "primary" | "secondary";
  buttonOnClick: () => void;
}

const PricingCard = ({
  label,
  price,
  showPerMonth = false,
  sliderComponent,
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
          <p style={{ color: Colors.gray[300], fontWeight: "600" }}>{label}</p>
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
        {sliderComponent}
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
  setCTAFormOpen,
  setCTADocsLink,
}: {
  screenWidth: "sm" | "md" | "lg";
  setDemoFormOpen: (open: boolean) => void;
  setCTAFormOpen: (open: boolean) => void;
  setCTADocsLink: (link: string) => void;
}) => {
  const [queriesSelectedIndex, setQueriesSelectedIndex] = React.useState(0);

  const basicPriceTiers = [
    { queries: 1000, monthly: 250, perQuery: 0.25 },
    { queries: 2000, monthly: 400, perQuery: 0.2 },
    { queries: 3000, monthly: 550, perQuery: 0.183 },
    { queries: 4000, monthly: 700, perQuery: 0.174 },
    { queries: 5000, monthly: 800, perQuery: 0.16 },
    { queries: 10000, monthly: 1450, perQuery: 0.145 },
    { queries: 15000, monthly: 2000, perQuery: 0.133 },
    { queries: 20000, monthly: 2500, perQuery: 0.125 },
  ];

  const queriesMarks = basicPriceTiers.map((tier, index) => ({
    value: index,
    label:
      tier.queries < 10000 && screenWidth !== "sm"
        ? tier.queries.toLocaleString()
        : tier.queries.toString().slice(0, -3) + "k",
  }));

  const pricingPlans: iPricingCard[] = [
    {
      label: "Basic",
      price: "$" + basicPriceTiers[queriesSelectedIndex]?.monthly,
      showPerMonth: true,
      features: [
        "AI Chat & Semantic Search on your Docs Site",
        "VS Code Extension",
        "Github Copilot Extension",
        "Google Gemini Extension (Coming Soon)",
        "ChatGPT Custom GPT (Coming Soon)",
        "Public Sources (website, docs)",
        "Usage & Query Analytics",
      ],
      buttonLabel: "Book a Demo",
      buttonType: "primary",
      buttonOnClick: () => {
        setDemoFormOpen(true);
      },
      sliderComponent: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Queries per month</p>
            <p style={{ color: Colors.gray[300], fontSize: "12px" }}>
              {"$" +
                basicPriceTiers[queriesSelectedIndex]?.perQuery +
                " per query"}
            </p>
          </div>
          <div style={{ padding: "8px 24px" }}>
            <Slider
              marks={queriesMarks}
              step={null}
              min={queriesMarks[0].value}
              max={queriesMarks[queriesMarks.length - 1].value}
              value={queriesSelectedIndex}
              onChange={(_, value) => setQueriesSelectedIndex(value as number)}
              sx={{ color: Colors.primary.main }}
              slotProps={{ markLabel: { style: { color: "white" } } }}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Enterprise",
      price: "Contact Us",
      features: [
        "Everything in Basic",
        "20k+ Queries per Month",
        "Discord and Slack Bots",
        "Auto Integration (Experimental)",
        "Private Sources (support tickets, Slack)",
        "Premium Support and SLAs",
      ],
      buttonLabel: "Book a Demo",
      buttonType: "primary",
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
