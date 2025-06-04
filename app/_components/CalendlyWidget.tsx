"use client";
import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const s = document.createElement("script");
      s.id = "calendly-script";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[400px] h-[500px] rounded-md overflow-hidden bg-white"
      data-url="https://calendly.com/layer-team/15-minutes?primary_color=7b65ff"
    />
  );
}
