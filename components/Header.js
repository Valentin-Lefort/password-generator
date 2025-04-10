import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import LangSwitcher from "./LangSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { href: "/", label: "Tools", showScroll: true },
    { href: "/about", label: t("about.titleAbout") },
    { href: "/cyber-news", label: "Cyber News" },
    { href: "/contact", label: "Contact" },
    { href: "/legals", label: "Mentions Légales" },
  ];

  return (
    <header className="w-full bg-white shadow-md py-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-blue-600">Password Tool</h1>
          <MobileMenu currentPath={currentPath} />
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <LangSwitcher />

          {/* Affiche scroll vers section si on est sur la homepage */}
          {currentPath === "/" && (
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
          )}

          {navLinks.map((item) => {
            if (item.href === currentPath) {
              return (
                <span
                  key={item.href}
                  className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
                >
                  &lt; {item.label} &gt;
                </span>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded transition"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
