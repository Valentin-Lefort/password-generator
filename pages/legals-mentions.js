import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function MentionsLegales() {
  const { t } = useTranslation("legal");

  return (
    <>
      <Head>
        <title>{[t("title"), "Password Tool"].join(" | ")}</title>
        <meta name="description" content={t("metaDescription")} />
      </Head>

      <main className="max-w-3xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{t("editor.title")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("editor.content") }} />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{t("host.title")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("host.content") }} />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {t("responsibility.title")}
          </h2>
          <p>{t("responsibility.content")}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t("privacy.title")}</h2>
          <p>{t("privacy.content")}</p>
        </section>
      </main>
    </>
  );
}
