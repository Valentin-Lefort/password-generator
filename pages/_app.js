import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import "flag-icons/css/flag-icons.min.css";
import "../styles/globals.css";
import Header from "../components/Header";
import CookieConsent from "@/components/CookieConsent";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [adsConsent, setAdsConsent] = useState(false);

  // Charge dynamiquement le script AdSense après consentement
  useEffect(() => {
    if (adsConsent) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2846846678326160";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, [adsConsent]);

  return (
    <>
      <CookieConsent onConsent={setAdsConsent} />
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
