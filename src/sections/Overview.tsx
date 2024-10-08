import React, { useEffect, useState } from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";
import DjangoIcon from "../assets/django-icon.svg";
import MUIIcon from "../assets/mui-icon.svg";
import SQLAlchemyIcon from "../assets/sqlalchemy-icon.svg";

const DemoProductButton = ({
  productName,
  iconPath,
  active = false,
  onClick,
}: {
  productName: string;
  iconPath: string;
  active?: boolean;
  onClick: (productName: string) => void;
}) => {
  return (
    <button
      onClick={() => onClick(productName)}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        padding: "6px 8px 6px 6px",
        borderRadius: "4px",
        border: active
          ? `1px solid ${Colors.primary.main}`
          : `1px solid ${Colors.gray[200]}`,
      }}
    >
      <img
        src={iconPath}
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "4px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt={productName + " icon"}
      />
      <p className="button">{productName}</p>
    </button>
  );
};

const Overview = ({
  screenWidth,
  setDemoFormOpen,
}: {
  screenWidth: "sm" | "md" | "lg";
  setDemoFormOpen: (open: boolean) => void;
}) => {
  const demoProducts = [
    {
      productName: "Django",
      iconPath: DjangoIcon,
      apiKey: "17243613-9791-49dd-8c64-8051a1c6593d",
    },
    {
      productName: "MUI",
      iconPath: MUIIcon,
      apiKey: "9b84a3c7-8387-4bd7-918f-52acf4475a71",
    },
    {
      productName: "SQLAlchemy",
      iconPath: SQLAlchemyIcon,
      apiKey: "379dae40-f6e9-4c57-adeb-18372a8e3ced",
    },
  ];

  const [activeProduct, setActiveProduct] = useState(demoProducts[0]);

  const [iframeSrc, setIframeSrc] = useState("");

  const handlePrimaryClick = () => {
    window.location.href = process.env.REACT_APP_MANAGEMENT_DASH_URL + "signup";
  };

  const handleSecondaryClick = () => {
    setDemoFormOpen(true);
  };

  const handleDemoProductClick = (productName: string) => {
    const product = demoProducts.find(
      (product) => product.productName === productName
    );
    if (product) {
      setActiveProduct(product);
    }
  };

  useEffect(() => {
    const newSrc =
      (process.env.REACT_APP_CHAT_URL ||
        "https://chat-app-prod-692435806978.us-central1.run.app/") +
      "?apikey=" +
      activeProduct.apiKey;
    setIframeSrc(newSrc);
  }, [activeProduct]);

  return (
    <SectionTemplate section="Overview">
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth === "lg" ? "row" : "column",
          justifyContent: screenWidth === "lg" ? "space-between" : "center",
          alignItems: "center",
          width: "100%",
          textAlign: screenWidth === "lg" ? "left" : "center",
          gap: "40px",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            maxWidth: "440px",
            alignItems: screenWidth === "lg" ? "flex-start" : "center",
          }}
        >
          {/* Left Section Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: screenWidth === "lg" ? "12px" : "16px",
            }}
          >
            <h1>
              Treat your developers
              <br />
              <span style={{ color: Colors.primary.main }}>
                like royalty 👑
              </span>
            </h1>
            <p className="subheader">
              Effortlessly elevate your docs into an interactive, in-IDE
              experience—making developer support smarter and faster.
            </p>
          </div>
          {/* Left Section Buttons */}
          <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
            <Button
              label="Get Started for Free"
              type="primary"
              onClick={handlePrimaryClick}
            />
            <Button
              label="Book a Demo"
              type="secondary"
              onClick={handleSecondaryClick}
            />
          </div>
        </div>
        {/* Right Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "450px",
            alignItems: "center",
          }}
        >
          <p style={{ color: Colors.gray[300] }}>Try it yourself</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            {demoProducts.map((product, index) => (
              <DemoProductButton
                key={index}
                productName={product.productName}
                iconPath={product.iconPath}
                active={activeProduct.productName === product.productName}
                onClick={handleDemoProductClick}
              />
            ))}
          </div>
          <div
            style={{
              height: "500px",
              width: "100%",
              borderRadius: "8px",
              border: `1px solid ${Colors.gray[200]}`,
              overflow: "hidden",
            }}
          >
            <iframe
              title="Chat Demo"
              src={iframeSrc}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "8px",
                border: "none",
              }}
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Overview;
