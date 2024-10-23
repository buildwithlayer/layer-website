import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Overview from "./sections/Overview";
import Pricing from "./sections/Pricing";
import FAQs from "./sections/FAQs";
import { useMediaQuery } from "react-responsive";
import DemoForm from "./components/DemoForm";
import LayerInAction from "./sections/LayerInAction";
import Quote from "./sections/Quote";
import Numbers from "./sections/Numbers";
import Accuracy from "./sections/Accuracy";
import ManagementPlatform from "./sections/ManagementPlatform";
import Deployments from "./sections/Deployments";
import Footer from "./components/Footer";

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
        <Overview screenWidth={screenWidth} />
        <LayerInAction screenWidth={screenWidth} />
        <Quote screenWidth={screenWidth} />
        <Numbers screenWidth={screenWidth} />
        <Accuracy screenWidth={screenWidth} />
        <ManagementPlatform screenWidth={screenWidth} />
        <Deployments screenWidth={screenWidth} />
        <FAQs screenWidth={screenWidth} />
        <Pricing screenWidth={screenWidth} setDemoFormOpen={setDemoFormOpen} />
        <Footer screenWidth={screenWidth} />
      </div>
      <DemoForm open={demoFormOpen} setOpen={setDemoFormOpen} />
    </>
  );
}

export default App;
