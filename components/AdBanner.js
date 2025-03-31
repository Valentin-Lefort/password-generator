import { useEffect } from "react";

const AdBanner = ({ adSlot, format = "auto", layout = "", style = {} }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", ...style }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
