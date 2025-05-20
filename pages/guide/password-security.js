import Head from "next/head";
import Header from "../../components/Header";
import Link from "next/link";

export default function GuideSecuriteMotDePasse() {
  return (
    <>
      <Head>
        <title>Guide : Sécurité des mots de passe | Password Tool</title>
        <meta
          name="description"
          content="Guide complet pour comprendre et renforcer la sécurité de vos mots de passe. Conseils pratiques, exemples et bonnes pratiques."
        />
      </Head>
      <Header />
      <main className="pt-24 max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Guide complet : Sécurité des mots de passe
        </h1>
        <p className="mb-4">
          La sécurité de vos mots de passe est essentielle pour protéger vos
          comptes en ligne. Voici tout ce qu’il faut savoir pour créer, gérer et
          mémoriser des mots de passe robustes.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Pourquoi un mot de passe fort ?
        </h2>
        <p>
          Un mot de passe faible peut être deviné ou piraté en quelques
          secondes. Les attaques automatisées testent des millions de
          combinaisons chaque minute. Un mot de passe fort protège vos données
          personnelles et professionnelles.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Comment créer un mot de passe sécurisé ?
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Utilisez au moins 12 caractères.</li>
          <li>Mélangez majuscules, minuscules, chiffres et symboles.</li>
          <li>
            Évitez les mots du dictionnaire et les informations personnelles.
          </li>
          <li>
            Ne réutilisez jamais le même mot de passe sur plusieurs sites.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Exemples de mots de passe forts
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <code>G7!pLx@2qZ#rT9</code>
          </li>
          <li>
            <code>vR$8mNw!3sQz</code>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Bonnes pratiques</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Changez vos mots de passe régulièrement.</li>
          <li>
            Activez l’authentification à deux facteurs (2FA) dès que possible.
          </li>
          <li>
            Utilisez un gestionnaire de mots de passe pour stocker et générer
            vos codes.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Pour aller plus loin
        </h2>
        <p>
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
        </p>
      </main>
    </>
  );
}
