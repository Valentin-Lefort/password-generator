import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import LangSwitcher from "./LangSwitcher";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("common");

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
          className="fixed inset-0 z-50 bg-gray bg-opacity-50"
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
              ✕ {t("close")}
            </button>

            <div className="mb-6 relative">
              <LangSwitcher />
            </div>

            <button
              onClick={() => {
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
              className="block w-full text-left text-blue-600 hover:underline mb-4"
            >
              {t("MobileAbout.title")}
            </button>

            <Link
              href="/about"
              className="block text-blue-600 hover:underline"
              onClick={() => setOpen(false)}
            >
              {t("MobileAbout.pageLink")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
