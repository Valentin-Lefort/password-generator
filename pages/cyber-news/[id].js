import { useRouter } from "next/router";
import articles from "../../data/articles"; // adapte si ton fichier est ailleurs
import { useEffect, useState } from "react";

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [isExternal, setIsExternal] = useState(false);
  const [externalLink, setExternalLink] = useState("");
  const [localArticle, setLocalArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    try {
      const decoded = Buffer.from(id, "base64").toString("utf-8");
      if (decoded.startsWith("http")) {
        setIsExternal(true);
        setExternalLink(decoded);
        return;
      }
    } catch {
      // ce n’est pas un lien encodé
    }

    const found = articles.find((a) => a.id === id);
    if (found) setLocalArticle(found);
  }, [id]);

  if (!id) return <p className="text-center py-10">Chargement...</p>;

  if (isExternal) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Lire l’article sur la cybersécurité
        </h1>
        <iframe
          src={externalLink}
          className="w-full h-[80vh] border rounded"
          title="Article externe"
        />
      </div>
    );
  }

  if (localArticle) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {localArticle.title}
        </h1>
        <div className="prose prose-lg">{localArticle.jsx}</div>
      </div>
    );
  }

  return <p className="text-center py-10">Article introuvable.</p>;
}
