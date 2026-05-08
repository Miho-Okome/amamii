import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b3d5c] text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div>
                <span className="font-display text-xl font-bold text-white leading-tight block tracking-wide">奄美島旅</span>
                <span className="text-[10px] text-[#c4954a] leading-tight tracking-widest uppercase">Amami Oshima</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              奄美大島の観光情報を発信する地域応援メディア。観光スポット、グルメ、体験ツアーなど島の魅力をお届けします。島への旅行計画にご活用ください。
            </p>
            <p className="text-xs mt-3 text-gray-500">
              当サイトでは一部アフィリエイトリンクを使用しています。
            </p>
          </div>

          <div>
            <h3 className="text-[#c4954a] font-semibold mb-4 text-xs tracking-widest uppercase">観光情報</h3>
            <ul className="space-y-2.5">
              <li><Link href="/spots" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">観光スポット</Link></li>
              <li><Link href="/gourmet" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">グルメ</Link></li>
              <li><Link href="/stay" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">宿泊案内</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">イベントカレンダー</Link></li>
              <li><Link href="/workation" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">移住・ワーケーション</Link></li>
              <li><Link href="/activities" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">体験・ツアー</Link></li>
              <li><Link href="/access" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">アクセス情報</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#c4954a] font-semibold mb-4 text-xs tracking-widest uppercase">サイト情報</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">奄美大島について</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">ブログ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-[#c4954a] transition-colors text-xs">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d5475] mt-8 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2026 奄美島旅 All Rights Reserved.</p>
          <p>本サイトは奄美大島の観光振興を目的として運営しています。</p>
        </div>
      </div>
    </footer>
  );
}
