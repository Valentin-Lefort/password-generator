export async function fetchLatestCyberArticle() {
  const apiKey = process.env.NEWSDATA_API_KEY;

  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${apiKey}&q=cybersecurity&language=fr,en&category=technology`
  );
  const data = await res.json();

  // On prend le premier article valide
  const article = data.results?.[0];
  return article || null;
}
