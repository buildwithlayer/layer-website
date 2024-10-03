import React from "react";
import Header from "./components/Header";
import Overview from "./sections/Overview";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Pricing from "./sections/Pricing";
import FAQs from "./sections/FAQs";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          marginTop: 76,
          width: "100%",
        }}
      >
        <Overview />
        <Features />
        <Benefits />
        <Pricing />
        <FAQs />
      </div>
    </>
  );
}

export default App;
