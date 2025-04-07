import { useRouter } from 'next/router'

export default function LangSwitcher() {
  const router = useRouter()
  const { locale, pathname, query, asPath } = router

  const changeLanguage = (lang) => {
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={locale}
      className="mb-4 p-2 border rounded"
    >
      <option value="fr">🇫🇷 Français</option>
      <option value="en">🇬🇧 English</option>
      <option value="es">🇪🇸 Español</option>
    </select>
  )
}
