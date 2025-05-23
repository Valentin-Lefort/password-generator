import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function LegalMentions() {
  const { locale } = useRouter();

  const content = {
    fr: {
      title: "Mentions légales & Politique de confidentialité",
      description:
        "Mentions légales et politique de confidentialité du site Password Tool.",
      legal: (
        <section className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Mentions légales
          </h1>
          <ul className="mb-6 text-gray-800">
            <li>
              <strong>Éditeur du site :</strong> Password Tool
            </li>
            <li>
              <strong>Adresse :</strong> Ce site est édité depuis la Belgique
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:lefort2088@gmail.com"
                className="underline hover:text-blue-600"
              >
                lefort2088@gmail.com
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Hébergement
          </h2>
          <p className="mb-6 text-gray-800">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Responsabilité
          </h2>
          <p className="mb-6 text-gray-800">
            Le propriétaire du site décline toute responsabilité en cas de
            dommage causé par l&apos;utilisation du site ou de ses outils.
            L&apos;utilisateur est seul responsable de l&apos;utilisation des
            mots de passe générés.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            Politique de confidentialité
          </h2>
          <ul className="mb-6 text-gray-800 list-disc list-inside">
            <li>
              Nous ne collectons aucune donnée personnelle. Aucune inscription
              n’est requise.
            </li>
            <li>
              Des cookies peuvent être utilisés uniquement à des fins de mesure
              d’audience ou par nos partenaires publicitaires (ex : Google
              AdSense).
            </li>
            <li>
              Lors de votre première visite, un bandeau de consentement vous
              informe de l’utilisation éventuelle de cookies publicitaires.
            </li>
            <li>
              Vous pouvez à tout moment gérer vos préférences de cookies via le
              bandeau prévu à cet effet.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-800">
            Publicité & cookies
          </h2>
          <p className="mb-6 text-gray-800">
            Ce site affiche des publicités via Google AdSense. Google et ses
            partenaires peuvent utiliser des cookies pour personnaliser les
            annonces. Pour plus d’informations, consultez la{" "}
            <a
              href="https://policies.google.com/technologies/ads?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              politique de confidentialité de Google
            </a>
            .
          </p>
        </section>
      ),
    },
    gb: {
      title: "Legal Notice & Privacy Policy",
      description:
        "Legal information and privacy policy for the Password Tool website.",
      legal: (
        <section className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Legal Notice
          </h1>
          <ul className="mb-6 text-gray-800">
            <li>
              <strong>Site publisher:</strong> Password Tool
            </li>
            <li>
              <strong>Address:</strong> This website is managed from Belgium
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:lefort2088@gmail.com"
                className="underline hover:text-blue-600"
              >
                lefort2088@gmail.com
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Hosting
          </h2>
          <p className="mb-6 text-gray-800">
            This website is hosted by Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-800">
            Responsibility
          </h2>
          <p className="mb-6 text-gray-800">
            The site owner declines all responsibility for any damage caused by
            the use of the site or its tools. Users are solely responsible for
            any use of the generated passwords.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            Privacy Policy
          </h2>
          <ul className="mb-6 text-gray-800 list-disc list-inside">
            <li>
              We do not collect any personal data. No registration is required.
            </li>
            <li>
              Cookies may be used only for analytics purposes or by our
              advertising partners (e.g. Google AdSense).
            </li>
            <li>
              On your first visit, a consent banner informs you about the use of
              advertising cookies.
            </li>
            <li>
              You can manage your cookie preferences at any time via the
              provided banner.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-800">
            Advertising & cookies
          </h2>
          <p className="mb-6 text-gray-800">
            This site displays ads via Google AdSense. Google and its partners
            may use cookies to personalize ads. For more information, see the{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              Google privacy policy
            </a>
            .
          </p>
        </section>
      ),
    },
  };

  const { title, description, legal } = content[locale] || content.gb;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main className="min-h-screen pt-24 px-4">{legal}</main>
      <Footer />
    </>
  );
}
