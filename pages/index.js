import { useState } from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import LangSwitcher from "../components/LangSwitcher";
import AdBanner from "../components/AdBanner";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";

export default function Home() {
  const { t } = useTranslation("common");

  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(true);
  const [passwords, setPasswords] = useState([]);

  const similarCharacters = ["l", "I", "1", "|", "o", "0", "O"];

  const generatePassword = () => {
    let chars = includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (excludeSimilar) {
      chars = chars
        .split("")
        .filter((c) => !similarCharacters.includes(c))
        .join("");
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    return newPassword;
  };

  const generateMultiplePasswords = (count) => {
    const newPasswords = [];
    for (let i = 0; i < count; i++) {
      newPasswords.push(generatePassword());
    }
    setPasswords(newPasswords);
  };

  return (
    <>
      <Head>
        <title>{[t("title"), "Password Tool"].join(" | ")}</title>
        <meta name="description" content={t("description")} />
        <meta
          name="keywords"
          content="générateur de mot de passe, mot de passe sécurisé, password generator, générer un mot de passe"
        />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://password-tool.xyz/" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="google-adsense-account" content="ca-pub-2846846678326160" />
      </Head>
      <header className="w-full bg-white shadow-md py-4 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <h1 className="text-xl font-bold text-blue-600">Password Tool</h1>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>

          {/* Desktop only nav */}
          <nav className="hidden md:flex gap-4 items-center">
            <LangSwitcher />

            <button
              onClick={() =>
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              {t("about.titleWhy")}
            </button>

            <Link
              href="/about"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded transition"
            >
              {t("about.titleAbout")}
            </Link>
          </nav>
        </div>
      </header>
      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 pt-24">
        <AdBanner />

        <h1 className="text-3xl font-bold text-blue-600 mb-2">{t("title")}</h1>
        <p className="text-gray-700 text-center max-w-2xl mb-6">
          {t("explanation")}
        </p>

        <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* Password Settings */}
          <div className="mb-4">
            <label className="block text-lg">
              {t("length")} : {length}
            </label>
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <label>
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />{" "}
              {t("uppercase")}
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />{" "}
              {t("lowercase")}
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />{" "}
              {t("numbers")}
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />{" "}
              {t("symbols")}
            </label>
            <label>
              <input
                type="checkbox"
                checked={excludeSimilar}
                onChange={() => setExcludeSimilar(!excludeSimilar)}
              />{" "}
              {t("excludeSimilar")}
            </label>
          </div>

          {/* Buttons */}
          <button
            onClick={() => setPasswords([generatePassword()])}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            {t("generate")}
          </button>

          <button
            onClick={() => generateMultiplePasswords(5)}
            className="bg-green-500 text-white px-4 py-2 rounded mb-4"
          >
            {t("generateMultiple")}
          </button>

          {/* Passwords Display */}
          {passwords.length > 0 && (
            <div className="mt-4">
              {passwords.map((password, index) => (
                <div
                  key={index}
                  className="p-2 bg-gray-200 rounded text-lg font-mono cursor-pointer mb-2"
                  onClick={() => navigator.clipboard.writeText(password)}
                >
                  {password}{" "}
                  <span className="text-sm">({t("clickToCopy")})</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* FAQ section (home scroll) */}
      <section
        id="about-section"
        className="mt-10 text-gray-800 bg-white max-w-6xl mx-auto text-lg leading-relaxed p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4 pb-4 pt-4 underline">
          {t("home.explanationTitle1")}
        </h2>
        <p className="mb-2">{t("home.explanation1")}</p>
        <p className="mb-2">{t("home.explanation2")}</p>
        <p>{t("home.explanation3")}</p>

        <h2 className="text-2xl font-bold mb-4 pb-4 pt-4 underline">
          {t("home.explanationTitle2")}
        </h2>
        <p className="mb-2">{t("home.explanation4")}</p>
        <p className="mb-2">{t("home.explanation5")}</p>
        <p className="mb-2">{t("home.explanation6")}</p>
        <p className="mb-2">{t("home.explanation7")}</p>
        <p className="mb-2">{t("home.explanation8")}</p>

        <h2 className="text-2xl font-bold mb-4 pb-4 pt-4 underline">
          {t("home.explanationTitle3")}
        </h2>
        <p className="mb-2">{t("home.explanation9")}</p>
        <p className="mb-2">{t("home.explanation10")}</p>

        <h2 className="text-2xl font-bold mb-4 pb-4 pt-4 underline">
          {t("home.explanationTitle4")}
        </h2>
        <p className="mb-2">{t("home.explanation11")}</p>
        <p className="mb-2">{t("home.explanation12")}</p>
        <p className="mb-2">{t("home.explanation13")}</p>
        <p className="mb-2">{t("home.explanation14")}</p>
      </section>
    </>
  );
}
