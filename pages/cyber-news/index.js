import Link from "next/link";
import { fetchLatestCyberArticle } from "../../lib/fetchCyberNews"; // chemin adapté
import Header from "../../components/Header"; // chemin adapté
import articles from "../../data/articles";
import { Buffer } from "buffer";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const locale = context.locale || "fr"; // Localisation par défaut
  const article = await fetchLatestCyberArticle(locale);
  return {
    props: { article },
    revalidate: 86400,
  };
}

export default function CyberNews({ article }) {
  const { locale } = useRouter();
  const language = locale || "fr"; // Locale actuelle

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">
            {language === "fr"
              ? "Actualités cybersécurité"
              : "Cybersecurity News"}
          </h1>

          {/* Article du jour via API */}
          {article && (
            <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              {article.url ? (
                <Link
                  href={`/cyber-news/${Buffer.from(article.url).toString(
                    "base64"
                  )}`} // Lien vers l'article codé en base64
                  className="text-blue-600 underline"
                >
                  {language === "fr"
                    ? "Lire l'article complet"
                    : "Read full article"}
                </Link>
              ) : (
                <p className="text-red-500">
                  {language === "fr"
                    ? "Lien de l'article non disponible"
                    : "Article link not available"}
                </p>
              )}
            </div>
          )}

          {/* Articles locaux multilingues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold mb-2">
                  {item.title[language]}{" "}
                  {/* Affichage du titre en fonction de la locale */}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt[language]}</p>{" "}
                {/* Extrait de l'article */}
                <Link
                  href={`/cyber-news/${item.id}`}
                  className="text-blue-600 underline mt-auto"
                >
                  {language === "fr" ? "Lire plus" : "Read more"}{" "}
                  {/* Lien vers l'article */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
