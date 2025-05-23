import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Consent Mode Google : initialise le consentement à "denied" par défaut */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  analytics_storage: 'denied'
                });
              `,
            }}
          />
          {/* NE PAS charger AdSense ici, il sera chargé dynamiquement après consentement */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
