import { useEffect } from "react";
import { initializeFaroMonitoring } from "../utils/faro";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeFaroMonitoring();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
