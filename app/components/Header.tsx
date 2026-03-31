"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "お品書き", href: "/menu" },
  { label: "店舗情報", href: "/info" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-kuro/95 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-mincho text-xl tracking-[0.15em] text-shiro hover:text-kin transition-colors duration-300"
        >
          どんこ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-[0.1em] transition-colors duration-300 ${
                pathname === item.href
                  ? "text-kin"
                  : "text-shiro/70 hover:text-kin"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:088-875-2424"
            className="text-sm tracking-wide text-beni-bright hover:text-kin transition-colors duration-300"
          >
            088-875-2424
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          aria-label="メニュー"
        >
          <span
            className={`block w-5 h-px bg-shiro transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-shiro transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8 bg-kuro/95 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base tracking-[0.15em] transition-colors duration-300 ${
                pathname === item.href
                  ? "text-kin"
                  : "text-shiro/70 hover:text-kin"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:088-875-2424"
            className="text-base tracking-wide text-beni-bright"
          >
            088-875-2424
          </a>
        </nav>
      </div>
    </header>
  );
}
