"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/spots", label: "観光スポット" },
  { href: "/gourmet", label: "グルメ" },
  { href: "/activities", label: "体験・ツアー" },
  { href: "/stay", label: "宿泊" },
  { href: "/events", label: "イベント" },
  { href: "/workation", label: "移住・WEB" },
  { href: "/blog", label: "ブログ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌺</span>
          <div>
            <span className="font-bold text-teal-700 text-lg leading-tight block">奄美島旅</span>
            <span className="text-xs text-gray-500 leading-tight">奄美大島観光ガイド</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          お問い合わせ
        </Link>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-gray-600 hover:text-teal-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 text-center bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
