import Head from "next/head";
import Link from "next/link";
import { fetchLatestCyberArticle } from "../../lib/fetchCyberNews";
import Header from "../../components/Header";
import articles from "../../data/articles";
import { Buffer } from "buffer";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

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
  const language = locale || "fr";

  return (
    <>
      <Head>
        <title>
          {language === "fr"
            ? "Actualités cybersécurité et conseils pratiques | Password Tool"
            : "Cybersecurity news and practical tips | Password Tool"}
        </title>
        <meta
          name="description"
          content={
            language === "fr"
              ? "Retrouvez les dernières actualités cybersécurité, analyses et conseils pour protéger vos comptes et données."
              : "Find the latest cybersecurity news, analysis and tips to protect your accounts and data."
          }
        />
        <meta property="og:title" content="Cyber News | Password Tool" />
        <meta
          property="og:description"
          content="Latest cybersecurity news and tips."
        />
        <meta property="og:type" content="website" />
      </Head>
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
                  )}`}
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
                  {item.title[language]}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt[language]}</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
                  <strong>
                    {language === "fr"
                      ? "Analyse & Conseil :"
                      : "Analysis & Tip:"}
                  </strong>
                  <p className="text-sm mt-1">
                    {item.analysis && item.analysis[language]
                      ? item.analysis[language]
                      : language === "fr"
                      ? "Pour approfondir, pensez à vérifier la source de chaque actualité et appliquez les recommandations de sécurité évoquées."
                      : "For further insight, always check the source of each news and apply the mentioned security tips."}
                  </p>
                </div>
                <Link
                  href={`/cyber-news/${item.id}`}
                  className="text-blue-600 underline mt-auto"
                >
                  {language === "fr" ? "Lire plus" : "Read more"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
