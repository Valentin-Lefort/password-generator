import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const { locale } = useRouter();

  const content = {
    fr: {
      title: "Contactez Password Tool",
      metaDescription:
        "Contactez l'équipe de Password Tool pour toute question, suggestion ou demande d'assistance concernant notre générateur de mot de passe et nos conseils en cybersécurité.", // SEO: Description détaillée
      heading: "Nous contacter",
      text: (
        <>
          <p className="mb-4">
            Vous avez une question, une suggestion ou un problème ? N’hésitez
            pas à nous contacter via le formulaire ci-dessous.
          </p>
          <p className="mb-4">
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </>
      ),
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
      },
    },
    en: {
      title: "Contact Password Tool", // SEO: More specific title
      metaDescription:
        "Contact the Password Tool team for any questions, suggestions, or support requests regarding our password generator and cybersecurity advice.", // SEO: Detailed description
      heading: "Get in Touch",
      text: (
        <>
          <p className="mb-4 text-gray-800">
            Do you have a question, suggestion, or issue? Feel free to reach out
            using the form below.
          </p>
          <p className="mb-4 text-gray-800">
            We’ll get back to you as soon as possible.
          </p>
        </>
      ),
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      },
    },
  };

  const { title, description, heading, text, form } =
    content[locale] || content.en;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={ContactPage.metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ContactPage.metaDescription} />
        <link
          rel="canonical"
          href={`https://password-tool.xyz/${locale}/contact`}
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24 px-4">
        <h1 className="text-3xl font-bold mb-6">{heading}</h1>
        {text}

        <form
          action={`mailto:lefort2088@gmail.com`}
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label className="block font-semibold">{form.name}</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">{form.email}</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">{form.message}</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {form.send}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
