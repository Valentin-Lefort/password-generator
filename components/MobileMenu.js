import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import LangSwitcher from "./LangSwitcher";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { t: tCommon } = useTranslation("common");
  const { t: tContact } = useTranslation("contact");
  const { t: tLegal } = useTranslation("legal");
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    { href: "/", label: "Tools", isScroll: true },
    { href: "/about", label: tCommon("MobileAbout.pageLink") },
    { href: "/cyber-news", label: "Cyber News" },
    { href: "/contact", label: tContact("contact.title") },
    { href: "/legals", label: tLegal("legal.title") },
  ];

  const handleClick = (href) => {
    if (href === "/" && currentPath === "/") {
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="mb-4 text-gray-600 hover:text-gray-800"
            >
              ✕ {tCommon("close")}
            </button>

            <div className="mb-6 relative">
              <LangSwitcher />
            </div>

            {navItems.map(({ href, label }) => {
              if (href === currentPath) {
                return (
                  <span
                    key={href}
                    className="block text-blue-600 font-bold mb-4"
                  >
                    &lt; {label} &gt;
                  </span>
                );
              }

              return (
                <button
                  key={href}
                  onClick={() => handleClick(href)}
                  className="block w-full text-left text-blue-600 hover:underline mb-4"
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
