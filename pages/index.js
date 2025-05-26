import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import AdBanner from "../components/AdBanner";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const { t, lang } = useTranslation("common");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(true);
  const [passwords, setPasswords] = useState([]);
  const [feature, setFeature] = useState("generator");
  const [passwordToTest, setPasswordToTest] = useState("");
  const [passwordScore, setPasswordScore] = useState(null);

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
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
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

  const testPassword = (pwd) => {
    let score = 0;
    if (pwd.length >= 12) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    setPasswordScore(score);
  };

  const enrichedIntro = {
    fr: (
      <>
        <p className="text-gray-700 mb-4 max-w-4xl">
          Bienvenue sur <strong>Password Tool</strong>, votre solution simple et
          efficace pour générer des mots de passe sécurisés en ligne. Notre
          générateur est gratuit, rapide et conçu pour respecter votre vie
          privée. Aucun mot de passe n&apos;est enregistré ou transmis.
        </p>
        <p className="text-gray-700 mb-6 max-w-4xl">
          Que vous soyez un professionnel de l&apos;informatique, un développeur
          ou un utilisateur souhaitant renforcer la sécurité de ses comptes,
          notre outil vous aide à créer des mots de passe robustes et
          personnalisés en quelques clics.
        </p>
      </>
    ),
    gb: (
      <>
        <p className="text-gray-700 mb-4 max-w-4xl">
          Welcome to <strong>Password Tool</strong>, your easy and effective
          solution to generate strong passwords online. Our generator is free,
          fast, and privacy-friendly. No password is stored or transmitted.
        </p>
        <p className="text-gray-700 mb-6 max-w-4xl">
          Whether you&apos;re an IT professional, a developer, or a user looking
          to strengthen account security, our tool helps you create robust and
          custom passwords in just a few clicks.
        </p>
      </>
    ),
  };

  return (
    <>
      <Head>
        <title>
          {lang === "fr"
            ? "Générateur de Mot de Passe Sécurisé en Ligne | Password Tool"
            : "Secure Password Generator Online | Password Tool"}
        </title>
        <meta
          name="description"
          content={
            lang === "fr"
              ? "Générez des mots de passe forts, uniques et sécurisés en quelques clics. Outil gratuit, rapide et respectueux de la vie privée."
              : "Generate strong, unique and secure passwords in seconds. Free, fast and privacy-friendly tool."
          }
        />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://password-tool.xyz/" />
      </Head>

      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 pt-24">
        <AdBanner />
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{t("title")}</h1>
        {enrichedIntro[lang]}

        <div className="mb-6">
          <label className="font-semibold mr-2">
            {lang === "fr" ? "Fonctionnalité :" : "Feature:"}
          </label>
          <select
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="generator">
              {lang === "fr"
                ? "Générateur de mot de passe"
                : "Password generator"}
            </option>
            <option value="tester">
              {lang === "fr" ? "Testeur de mot de passe" : "Password tester"}
            </option>
            {/* Article option removed */}
          </select>
        </div>

        {feature === "generator" && (
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
        )}

        {feature === "tester" && (
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-6">
            <label className="block mb-2 font-semibold">
              {lang === "fr"
                ? "Testez votre mot de passe :"
                : "Test your password:"}
            </label>
            <input
              type="text"
              value={passwordToTest}
              onChange={(e) => {
                setPasswordToTest(e.target.value);
                testPassword(e.target.value);
              }}
              className="border rounded px-2 py-1 w-full"
              placeholder={
                lang === "fr"
                  ? "Entrez un mot de passe à tester"
                  : "Enter a password to test"
              }
            />
            {passwordToTest && (
              <div className="mt-2">
                <span className="font-semibold">
                  {lang === "fr" ? "Force :" : "Strength:"}
                </span>{" "}
                <span
                  className={
                    passwordScore === 4
                      ? "text-green-600"
                      : passwordScore >= 2
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {(lang === "fr"
                    ? ["Faible", "Moyenne", "Bonne", "Excellente"]
                    : ["Weak", "Medium", "Good", "Excellent"])[
                    passwordScore - 1
                  ] || (lang === "fr" ? "Faible" : "Weak")}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Article/passphrase section removed */}
      </div>

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
        <p className="mt-4">
          <Link
            href="/cyber-news/choisir-gestionnaire"
            className="text-blue-600 underline"
          >
            {lang === "fr"
              ? "Voir aussi : Comment choisir un gestionnaire de mots de passe ?"
              : "See also: How to choose a password manager?"}
          </Link>
        </p>
      </section>
      <Footer />
    </>
  );
}
