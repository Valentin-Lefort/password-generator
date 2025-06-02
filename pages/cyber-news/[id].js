import Head from "next/head";
import Header from "../../components/Header";
import articles from "../../data/articles";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticPaths({ locales }) {
  const paths = [];
  for (const locale of locales) {
    for (const article of articles) {
      paths.push({ params: { id: article.id }, locale });
    }
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.id === params.id);
  return { props: { article } };
}

function renderContent(blocks) {
  return blocks.map((block, i) => {
    if (block.type === "h1")
      return (
        <h1 key={i} className="text-2xl font-semibold text-gray-800 mb-4">
          {block.text}
        </h1>
      );
    if (block.type === "h2")
      return (
        <h2 key={i} className="text-xl font-semibold text-gray-700 mb-2">
          {block.text}
        </h2>
      );
    if (block.type === "p")
      return (
        <p key={i} className="text-lg text-gray-600 mb-6">
          {block.text}
        </p>
      );
    if (block.type === "ul")
      return (
        <ul key={i} className="list-disc pl-6 mb-4 text-gray-600">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    if (block.type === "ol")
      return (
        <ol key={i} className="list-decimal pl-6 mb-6 text-gray-600">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    return null;
  });
}

export default function ArticlePage({ article }) {
  const { locale } = useRouter();
  const lang = locale || "fr";
  return (
    <>
      <Head>
        <title>{article.title?.[lang] || "Article"} | Password Tool</title>
        <meta name="description" content={article.excerpt?.[lang] || ""} />
        <meta property="og:title" content={article.title?.[lang] || ""} />
        <meta
          property="og:description"
          content={article.excerpt?.[lang] || ""}
        />
        <meta property="og:type" content="article" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title?.[lang],
              description: article.excerpt?.[lang],
              datePublished: article.date || "2025-05-20",
              author: { "@type": "Person", name: "Password Tool" },
            }),
          }}
        />
      </Head>
      <Header />
      <main className="pt-24 max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{article.title?.[lang]}</h1>
        <p className="mb-6 text-gray-600">{article.excerpt?.[lang]}</p>
        {renderContent(article.content?.[lang] || [])}
        <div className="mt-8">
          <Link href="/cyber-news" className="text-blue-600 underline">
            {lang === "fr" ? "← Retour aux actualités" : "← Back to news"}
          </Link>
        </div>
      </main>
    </>
  );
}
