import { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_consent";

export default function CookieConsent({ onConsent }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
    else if (consent === "granted") onConsent(true);
  }, [onConsent]);

  const handleConsent = (granted) => {
    localStorage.setItem(COOKIE_KEY, granted ? "granted" : "denied");
    setVisible(false);
    onConsent(granted);
    // Active le Consent Mode Google
    window.gtag &&
      window.gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
      });
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#222",
        color: "#fff",
        padding: 16,
        zIndex: 9999,
        textAlign: "center",
      }}
    >
      Ce site utilise des cookies pour la publicité (Google AdSense).
      <button style={{ marginLeft: 16 }} onClick={() => handleConsent(true)}>
        Accepter
      </button>
      <button style={{ marginLeft: 8 }} onClick={() => handleConsent(false)}>
        Refuser
      </button>
    </div>
  );
}
