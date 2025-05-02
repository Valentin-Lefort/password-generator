import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import "flag-icons/css/flag-icons.min.css";
import "../styles/globals.css";
import Header from "../components/Header";

<link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
  as="style"
/>;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
