import { useRouter } from "next/router";

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  const link = id ? Buffer.from(id, "base64").toString("utf-8") : "";

  if (!link) return <p>Chargement...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Lire l’article sur la cybersécurité
      </h1>
      <iframe
        src={link}
        className="w-full h-[80vh] border rounded"
        title="Article externe"
      ></iframe>
    </div>
  );
}
