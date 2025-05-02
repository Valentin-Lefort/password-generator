export async function fetchLatestCyberArticle(language = "en") {
  const apiKey = process.env.NEWS_API_KEY;

  // Convertir "gb" en "en" pour correspondre au format de News API
  const lang = language === "gb" ? "en" : language;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=cybersecurity&language=${lang}&apiKey=${apiKey}`
  );
  const data = await res.json();

  // Vérifier si des articles sont disponibles
  const article = data.articles?.[0];
  return article || null;
}
