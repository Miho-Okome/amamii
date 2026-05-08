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
    <header className="bg-white border-b border-[#e8e0d4] sticky top-0 z-50">
      <div className="bg-[#1b3d5c] text-white text-center py-1.5">
        <p className="text-[10px] tracking-[0.25em] font-display uppercase">Amami Oshima Travel Guide</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <span className="font-display text-xl font-bold text-[#1b3d5c] leading-tight block tracking-wide">奄美島旅</span>
            <span className="text-[10px] text-[#c4954a] leading-tight tracking-widest uppercase">Amami Oshima</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] text-gray-600 hover:text-[#c4954a] transition-colors font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center border border-[#1b3d5c] text-[#1b3d5c] px-4 py-1.5 text-[11px] font-medium tracking-wide hover:bg-[#1b3d5c] hover:text-white transition-colors"
        >
          お問い合わせ
        </Link>

        <button
          className="md:hidden p-2 text-[#1b3d5c]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e8e0d4] px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-xs text-gray-600 hover:text-[#c4954a] border-b border-gray-50 tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 text-center border border-[#1b3d5c] text-[#1b3d5c] py-2 text-xs font-medium tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
