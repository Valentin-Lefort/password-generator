import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const languages = [
  { code: "fr", label: "Français" },
  { code: "gb", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
  { code: "pt", label: "Português" },
  { code: "cn", label: "中文" },
  { code: "sa", label: "العربية" },
  { code: "in", label: "हिंदी" },
  { code: "jp", label: "日本語" },
  { code: "ru", label: "Русский" },
  { code: "it", label: "Italiano" },
  { code: "kr", label: "한국어" },
  { code: "tr", label: "Türkçe" },
  { code: "pl", label: "Polski" },
  { code: "bd", label: "বাংলা" },
  { code: "ke", label: "Kiswahili" },
];

export default function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentLang = router.locale || "fr";

  const currentLangData = languages.find(
    (lang) => lang.code === currentLang
  ) || {
    code: "fr",
    label: "Français",
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <span className={`fi fi-${currentLangData.code} mr-2`}></span>
        {currentLangData.label}
        <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 max-h-64 overflow-auto">
          <div className="py-1">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={router.asPath}
                locale={lang.code}
                className={`flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  lang.code === currentLang ? "font-bold bg-gray-100" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                <span className={`fi fi-${lang.code} mr-2`}></span>
                {lang.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
