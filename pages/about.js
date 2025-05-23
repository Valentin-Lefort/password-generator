import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("about.titleAbout")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Head>

      <Header />

      <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20">
        <div className="bg-white p-6 rounded-lg shadow max-w-4xl w-full text-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {t("about.heading")}
          </h1>

          <p className="mb-4">{t("about.what")}</p>
          <p className="mb-4">{t("about.why")}</p>
          <p className="mb-4">{t("about.safe")}</p>
          <p>{t("about.free")}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
