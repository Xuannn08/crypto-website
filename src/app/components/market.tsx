import React, { useEffect, useRef } from "react";

export function MarketWidget(): React.JSX.Element {
  // Create a reference for the widget container
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.type = "text/javascript";
      script.async = true;

      // Add the widget configuration as the script's innerHTML
      script.innerHTML = `
        {
          "width": "100%",
          "height": 550,
          "defaultColumn": "overview",
          "screener_type": "crypto_mkt",
          "displayCurrency": "USD",
          "colorTheme": "dark",
          "locale": "en",
          "isTransparent": false
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
