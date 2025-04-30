import Link from "next/link";
import { fetchLatestCyberArticle } from "../../lib/fetchCyberNews";
import Header from "../../components/Header";
import articles from "../../data/articles";
import { Buffer } from "buffer";

export async function getStaticProps() {
  const article = await fetchLatestCyberArticle();
  return {
    props: { article },
    revalidate: 86400,
  };
}

export default function CyberNews({ article }) {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Actualités cybersécurité</h1>

          {/* Article du jour via API */}
          {article && (
            <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <Link
                href={`/cyber-news/${encodeURIComponent(
                  Buffer.from(article.link).toString("base64")
                )}`}
                className="text-blue-600 underline"
              >
                Lire l&apos;article complet
              </Link>
            </div>
          )}

          {/* Articles locaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  href={`/cyber-news/${item.id}`}
                  className="text-blue-600 underline mt-auto"
                >
                  Lire plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
