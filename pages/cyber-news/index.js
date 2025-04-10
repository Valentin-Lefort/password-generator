import Link from "next/link";
import { fetchLatestCyberArticle } from "../../lib/fetchCyberNews";
import Image from "next/image";

export async function getStaticProps() {
  const article = await fetchLatestCyberArticle();

  return {
    props: { article },
    revalidate: 86400, // Rebuild une fois par jour
  };
}

export default function CyberNews({ article }) {
  if (!article) return <p>Pas d&apos;article disponible</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Actu cybersécurité du jour</h1>

      <div className="bg-white shadow-lg rounded-lg p-4">
        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full rounded mb-4"
          />
        )}
        <h2 className="text-xl font-semibold">{article.title}</h2>
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
    </div>
  );
}
