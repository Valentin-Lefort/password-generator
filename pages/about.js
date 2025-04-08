import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Head>

      <header className="w-full bg-white shadow-md py-4 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Password Tool</h1>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            {t("home.backToHome") || "Accueil"}
          </Link>
        </div>
      </header>

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
    </>
  );
}
