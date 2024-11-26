import React, { useEffect, useRef } from "react";

export function NewsWidget(): React.JSX.Element {
  // Create a reference for the widget container
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;

      // Add widget configuration as the script's innerHTML
      script.innerHTML = `
        {
          "feedMode": "all_symbols",
          "isTransparent": false,
          "displayMode": "regular",
          "width": 400,
          "height": 550,
          "colorTheme": "dark",
          "locale": "en"
        }
      `;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      {/* Placeholder for the widget */}
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}
