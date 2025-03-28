// components/AdBanner.js
import { useEffect, useState } from 'react';

const AdBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ce code s'exécute uniquement côté client
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ne pas afficher la publicité côté serveur
  }

  return (
    <div className="my-4 w-20 h-20">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2846846678326160" // Remplace par ton ID client
        data-ad-slot="5710854617" // Remplace par l'ID de ton slot
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
};

export default AdBanner;
