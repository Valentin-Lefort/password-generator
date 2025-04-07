import { useState } from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import LangSwitcher from "../components/LangSwitcher";
import AdBanner from "../components/AdBanner";

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
        <title>{t("title")}</title>

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

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <AdBanner />

        <div className="flex items-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">{t("title")}</h1>

          <LangSwitcher />
        </div>

        <p className="text-gray-700 text-center max-w-2xl mb-4">
          {t("explanation")}
        </p>

        <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-lg">
              {t("length")} : {length}
            </label>
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(e.target.value)}
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
    </>
  );
}
