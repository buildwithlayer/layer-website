import React, { useEffect, useState } from "react";
import SectionTemplate from "./SectionTemplate";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";
import DjangoIcon from "../assets/icons/django-icon.svg";
import MUIIcon from "../assets/icons/mui-icon.svg";
import SQLAlchemyIcon from "../assets/icons/sqlalchemy-icon.svg";
import Lottie from "react-lottie-player";
import bgBlob from "../assets/animations/bg-blob.json";
import bgBalls from "../assets/animations/bg-balls.json";

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

  const bgBallElement = (
    <>
      <Lottie
        style={{
          zIndex: "-3",
          opacity: ".25",
          position: "absolute",
          height: "100%",
          filter: "blur(60px)",
        }}
        loop
        animationData={bgBalls}
        play
        speed={0.6}
      />
      <div
        style={{
          zIndex: "-2",
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          background: `linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 100%)`,
          height: "30%",
        }}
      />
    </>
  );

  return (
    <SectionTemplate section="Overview" fullWidthChildren={bgBallElement}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "104px",
        }}
      >
        {/* Hero Section */}
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
              position: "relative",
            }}
          >
            <Lottie
              style={{
                zIndex: "-1",
                position: "absolute",
                width: 700,
                height: 700,
                transform: "rotate(90deg)",
                filter: "blur(0px)",
              }}
              loop
              animationData={bgBlob}
              play
            />
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
                // border: `1px solid ${Colors.gray[200]}`,
                overflow: "hidden",
                boxShadow: `0px 0px 8px 1px ${Colors.primary.main}`,
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
                  backgroundColor: "#181818",
                }}
              />
            </div>
          </div>
        </div>
        {/* How it works section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          <h2 style={{ textAlign: "center" }}>How it Works</h2>
          <div
            style={{
              display: "flex",
              flexDirection: screenWidth === "lg" ? "row" : "column",
              alignItems: "stretch",
              gap: "16px",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
                borderRadius: "8px",
                gap: "8px",
              }}
            >
              <h3>Connect Your Knowledgebase</h3>
              <p>
                Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien
                id aliquam neque.
              </p>
              <img
                src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
                alt=""
                style={{
                  width: "100%",
                  marginTop: "16px",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
                borderRadius: "8px",
                gap: "8px",
              }}
            >
              <h3>Publish Your Extension</h3>
              <p>
                Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien
                id aliquam neque.
              </p>
              <img
                src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
                alt=""
                style={{
                  width: "100%",
                  marginTop: "16px",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                boxShadow: `inset 0px 0px 0px 1px ${Colors.gray[200]}`,
                borderRadius: "8px",
                gap: "8px",
              }}
            >
              <h3>Learn From Your Developers</h3>
              <p>
                Lorem ipsum dolor sit amet consect. Habitasse vel risus sapien
                id aliquam neque.
              </p>
              <img
                src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
                alt=""
                style={{
                  width: "100%",
                  marginTop: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Overview;
