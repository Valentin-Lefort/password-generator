import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 py-6 bg-gray-50 text-center text-gray-600 text-sm">
      <nav className="flex flex-wrap justify-center gap-4 mb-2">
        <Link href="" className="hover:underline">
          Accueil
        </Link>
        <Link href="/cyber-news" className="hover:underline">
          News
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/legals" className="hover:underline">
          Mentions légales
        </Link>
      </nav>
      <div className="mb-2">
        © {new Date().getFullYear()} Password Tool — Générateur de mots de passe
        sécurisé
      </div>
      {/* <div>
        <span> -- -- à ajouter quand google acceptera -- --
          Ce site utilise Google AdSense.{" "}
          <Link href="/legals" className="underline">
            En savoir plus
          </Link>
        </span>
      </div> */}
    </footer>
  );
}
