import { useRouter } from "next/router";

export default function LangSwitcher() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const changeLanguage = (lang) => {
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={locale}
      className="m-4 p-2 border rounded text-blue-600"
    >
      <option value="fr">🇫🇷 Français</option>
      <option value="en">🇬🇧 English</option>
      <option value="es">🇪🇸 Español</option>
      <option value="de">🇩🇪 Deutsch</option>
      <option value="nl">🇳🇱 Nederlands</option>
      <option value="pt">🇵🇹 Português</option>
      <option value="zh">🇨🇳 中文</option>
      <option value="ar">🇸🇦 العربية</option>
      <option value="hi">🇮🇳 हिंदी</option>
      <option value="ja">🇯🇵 日本語</option>
      <option value="ru">🇷🇺 Русский</option>
      <option value="it">🇮🇹 Italiano</option>
      <option value="ko">🇰🇷 한국어</option>
      <option value="tr">🇹🇷 Türkçe</option>
      <option value="pl">🇵🇱 Polski</option>
      <option value="bn">🇧🇩 বাংলা</option>
      <option value="sw">🇰🇪 Kiswahili</option>
    </select>
  );
}
