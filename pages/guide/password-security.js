import Head from "next/head";
import Header from "../../components/Header";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function GuideSecuriteMotDePasse() {
  const { lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>
          {lang === "fr"
            ? "Guide : Sécurité des mots de passe | Password Tool"
            : "Password Security Guide | Password Tool"}
        </title>
        <meta
          name="description"
          content={
            lang === "fr"
              ? "Guide complet pour comprendre et renforcer la sécurité de vos mots de passe. Conseils pratiques, exemples et bonnes pratiques."
              : "Complete guide to understanding and improving your password security. Tips, examples and best practices."
          }
        />
        <meta
          name="keywords"
          content={
            lang === "fr"
              ? "sécurité mot de passe, guide mot de passe, mot de passe fort, cybersécurité"
              : "password security, password guide, strong password, cybersecurity"
          }
        />
        <link
          rel="canonical"
          href="https://password-tool.xyz/guide/password-security"
        />
      </Head>
      <Header />
      <main className="pt-24 max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {lang === "fr"
            ? "Guide complet : Sécurité des mots de passe"
            : "Complete Guide: Password Security"}
        </h1>
        <p className="mb-4">
          {lang === "fr"
            ? "La sécurité de vos mots de passe est essentielle pour protéger vos comptes en ligne. Voici tout ce qu’il faut savoir pour créer, gérer et mémoriser des mots de passe robustes."
            : "Password security is essential to protect your online accounts. Here’s everything you need to know to create, manage, and remember strong passwords."}
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          {lang === "fr"
            ? "Pourquoi un mot de passe fort ?"
            : "Why a strong password?"}
        </h2>
        <p>
          {lang === "fr"
            ? "Un mot de passe faible peut être deviné ou piraté en quelques secondes. Les attaques automatisées testent des millions de combinaisons chaque minute. Un mot de passe fort protège vos données personnelles et professionnelles."
            : "A weak password can be guessed or hacked in seconds. Automated attacks test millions of combinations every minute. A strong password protects your personal and professional data."}
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          {lang === "fr"
            ? "Comment créer un mot de passe sécurisé ?"
            : "How to create a secure password?"}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            {lang === "fr"
              ? "Utilisez au moins 12 caractères."
              : "Use at least 12 characters."}
          </li>
          <li>
            {lang === "fr"
              ? "Mélangez majuscules, minuscules, chiffres et symboles."
              : "Mix uppercase, lowercase, numbers, and symbols."}
          </li>
          <li>
            {lang === "fr"
              ? "Évitez les mots du dictionnaire et les informations personnelles."
              : "Avoid dictionary words and personal information."}
          </li>
          <li>
            {lang === "fr"
              ? "Ne réutilisez jamais le même mot de passe sur plusieurs sites."
              : "Never reuse the same password on multiple sites."}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          {lang === "fr"
            ? "Exemples de mots de passe forts"
            : "Examples of strong passwords"}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <code>G7!pLx@2qZ#rT9</code>
          </li>
          <li>
            <code>vR$8mNw!3sQz</code>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          {lang === "fr" ? "Bonnes pratiques" : "Best practices"}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            {lang === "fr"
              ? "Changez vos mots de passe régulièrement."
              : "Change your passwords regularly."}
          </li>
          <li>
            {lang === "fr"
              ? "Activez l’authentification à deux facteurs (2FA) dès que possible."
              : "Enable two-factor authentication (2FA) whenever possible."}
          </li>
          <li>
            {lang === "fr"
              ? "Utilisez un gestionnaire de mots de passe pour stocker et générer vos codes."
              : "Use a password manager to store and generate your codes."}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          {lang === "fr" ? "Pour aller plus loin" : "Go further"}
        </h2>
        <p>
          {lang === "fr" ? (
            <>
              Consultez notre{" "}
              <Link
                href="/cyber-news/choisir-gestionnaire"
                className="text-blue-600 underline"
              >
                guide sur les gestionnaires de mots de passe
              </Link>{" "}
              ou découvrez nos{" "}
              <Link href="/cyber-news" className="text-blue-600 underline">
                actualités cybersécurité
              </Link>
              .
            </>
          ) : (
            <>
              See our{" "}
              <Link
                href="/cyber-news/choisir-gestionnaire"
                className="text-blue-600 underline"
              >
                guide on password managers
              </Link>{" "}
              or check our{" "}
              <Link href="/cyber-news" className="text-blue-600 underline">
                cybersecurity news
              </Link>
              .
            </>
          )}
        </p>
      </main>
    </>
  );
}
