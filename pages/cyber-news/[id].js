import { Buffer } from "buffer";
import articles from "../../data/articles";
import Header from "../../components/Header";

export async function getStaticPaths() {
  // Générer les chemins pour les articles locaux
  const paths = articles.map((article) => ({
    params: { id: article.id },
  }));

  return {
    paths,
    fallback: "blocking", // Permet de générer des pages dynamiques à la demande
  };
}

export async function getStaticProps({ params, locale }) {
  const { id } = params;

  const localArticle = articles.find((article) => article.id === id);

  if (localArticle) {
    const { jsx, ...serializableArticle } = localArticle;

    return {
      props: {
        article: serializableArticle, // Exclure `jsx`
        language: locale || "fr",
      },
      revalidate: 86400,
    };
  }

  try {
    const decodedUrl = Buffer.from(id, "base64").toString("utf-8");
    if (decodedUrl.startsWith("http")) {
      return {
        props: {
          externalUrl: decodedUrl,
          language: locale || "fr",
        },
        revalidate: 86400,
      };
    }
  } catch (error) {}

  return {
    notFound: true,
  };
}
import { useEffect, useState } from "react";

export default function ArticleDetail({ article, externalUrl, language }) {
  const [jsxContent, setJsxContent] = useState(null);

  useEffect(() => {
    if (article?.id) {
      // Charger `jsx` côté client
      const fullArticle = articles.find((item) => item.id === article.id);
      setJsxContent(fullArticle?.jsx?.[language] || fullArticle?.jsx?.["gb"]);
    }
  }, [article, language]);

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto p-6">
          {externalUrl ? (
            <div>
              <h1 className="text-2xl font-bold mb-4 text-center">
                {language === "fr"
                  ? "Lire l’article externe"
                  : "Read the external article"}
              </h1>
              <iframe
                src={externalUrl}
                className="w-full h-[80vh] border rounded"
                title="Article externe"
              />
            </div>
          ) : article ? (
            <div>
              <h1 className="text-3xl font-bold mb-6 text-center">
                {article.title?.[language] ?? article.title?.["gb"]}
              </h1>
              <div className="prose prose-lg">
                {jsxContent || (
                  <p>
                    {language === "fr"
                      ? "Contenu non disponible."
                      : "Content not available."}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-center py-10">
              {language === "fr"
                ? "Article introuvable."
                : "Article not found."}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
