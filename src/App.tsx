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
import CTAForm from "./components/CTAForm";
import TempHome from "./sections/TempHome";

function App() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const [ctaFormOpen, setCTAFormOpen] = useState(false);
  const [initialDocsLink, setInitialDocsLink] = useState("");

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

  useEffect(() => {
    document.title = "Layer";
  }, []);

  return (
    <>
      <Header screenWidth={screenWidth} setDemoFormOpen={setDemoFormOpen} />
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
        <TempHome screenWidth={screenWidth} />
        {/* Removing these for temp home */}
        {false && (
          <>
            <Overview
              screenWidth={screenWidth}
              setCTAFormOpen={setCTAFormOpen}
              setCTADocsLink={setInitialDocsLink}
            />
            <LayerInAction screenWidth={screenWidth} />
            {/* <Quote screenWidth={screenWidth} /> */}
            <Numbers screenWidth={screenWidth} />
            <Accuracy screenWidth={screenWidth} />
            <ManagementPlatform screenWidth={screenWidth} />
            <Deployments screenWidth={screenWidth} />
            <Pricing
              screenWidth={screenWidth}
              setDemoFormOpen={setDemoFormOpen}
              setCTAFormOpen={setCTAFormOpen}
              setCTADocsLink={setInitialDocsLink}
            />
            <FAQs screenWidth={screenWidth} />
          </>
        )}
        <Footer screenWidth={screenWidth} />
      </div>
      <DemoForm open={demoFormOpen} setOpen={setDemoFormOpen} />
      <CTAForm
        open={ctaFormOpen}
        setOpen={setCTAFormOpen}
        initialDocsLink={initialDocsLink}
      />
    </>
  );
}

export default App;
