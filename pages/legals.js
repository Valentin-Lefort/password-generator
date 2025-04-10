import Head from "next/head";
import { useRouter } from "next/router";
import LangSwitcher from "../components/LangSwitcher";

export default function LegalMentions() {
  const { locale } = useRouter();

  const content = {
    fr: {
      title: "Mentions légales & Politique de confidentialité",
      description:
        "Mentions légales et politique de confidentialité du site Password Tool.",
      legal: (
        <>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Mentions légales
          </h1>
          <p className="text-gray-800">
            <strong>Éditeur du site :</strong> Password Tool
          </p>
          <p className="text-gray-800">
            <strong>Adresse :</strong> Ce site est édité depuis la France
          </p>
          <p className="text-gray-800">
            <strong>Email :</strong> contact@password-tool.xyz
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Hébergement
          </h2>
          <p className="text-gray-800">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Responsabilité
          </h2>
          <p className="text-gray-800">
            Le propriétaire du site décline toute responsabilité en cas de
            dommage causé par l&apos;utilisation du site ou de ses outils.
            L&apos;utilisateur est seul responsable de l&apos;utilisation des
            mots de passe générés.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-800">
            Politique de confidentialité
          </h1>
          <p className="text-gray-800">
            Nous ne collectons aucune donnée personnelle. Aucune inscription
            n’est requise, aucun cookie de tracking n’est utilisé. Des cookies
            peuvent être utilisés uniquement à des fins de mesure d’audience ou
            par nos partenaires publicitaires (ex : Google AdSense).
          </p>
        </>
      ),
    },
    gb: {
      title: "Legal Notice & Privacy Policy",
      description:
        "Legal information and privacy policy for the Password Tool website.",
      legal: (
        <>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Legal Notice
          </h1>
          <p className="text-gray-800">
            <strong>Site publisher:</strong> Password Tool
          </p>
          <p className="text-gray-800">
            <strong>Address:</strong> This website is managed from France
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong> contact@password-tool.xyz
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Hosting
          </h2>
          <p className="text-gray-800">
            This website is hosted by Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Responsibility
          </h2>
          <p className="text-gray-800">
            The site owner declines all responsibility for any damage caused by
            the use of the site or its tools. Users are solely responsible for
            any use of the generated passwords.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-800">
            We do not collect any personal data. No registration is required,
            and no tracking cookies are used. Cookies may be used only for
            analytics purposes or by our advertising partners (e.g. Google
            AdSense).
          </p>
        </>
      ),
    },
  };

  const { title, description, legal } = content[locale] || content.en;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12">{legal}</main>
    </>
  );
}
