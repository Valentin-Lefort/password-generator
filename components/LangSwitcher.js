import { useRouter } from 'next/router';
import twemoji from 'twemoji';
import { useEffect } from 'react';

export default function LangSwitcher() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const changeLanguage = (lang) => {
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  useEffect(() => {
    // Convert emojis to Twemoji SVGs
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg',
    });
  }, []);

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
    </select>
  );
}