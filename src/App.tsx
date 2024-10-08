import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Overview from "./sections/Overview";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Pricing from "./sections/Pricing";
import FAQs from "./sections/FAQs";
import { useMediaQuery } from "react-responsive";
import DemoForm from "./components/DemoForm";

function App() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [screenWidth, setScreenWidth] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    if (isDesktop) {
      setScreenWidth("lg");
    } else if (isTablet) {
      setScreenWidth("md");
    } else if (isMobile) {
      setScreenWidth("sm");
    }
  }, [isDesktop, isTablet, isMobile]);

  return (
    <>
      <Header screenWidth={screenWidth} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          marginTop: 76,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Overview screenWidth={screenWidth} setDemoFormOpen={setDemoFormOpen} />
        <Features screenWidth={screenWidth} />
        <Benefits screenWidth={screenWidth} />
        <Pricing screenWidth={screenWidth} setDemoFormOpen={setDemoFormOpen} />
        <FAQs screenWidth={screenWidth} />
      </div>
      <DemoForm open={demoFormOpen} setOpen={setDemoFormOpen} />
    </>
  );
}

export default App;
