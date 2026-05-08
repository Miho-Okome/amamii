import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌺</span>
              <span className="font-bold text-white text-lg">奄美島旅</span>
            </Link>
            <p className="text-sm leading-relaxed">
              奄美大島の観光情報を発信する地域応援メディア。観光スポット、グルメ、体験ツアーなど島の魅力をお届けします。島への旅行計画にご活用ください。
            </p>
            <p className="text-xs mt-3 text-gray-500">
              当サイトでは一部アフィリエイトリンクを使用しています。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">観光情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/spots" className="hover:text-teal-400 transition-colors">観光スポット</Link></li>
              <li><Link href="/gourmet" className="hover:text-teal-400 transition-colors">グルメ</Link></li>
              <li><Link href="/stay" className="hover:text-teal-400 transition-colors">宿泊案内</Link></li>
              <li><Link href="/events" className="hover:text-teal-400 transition-colors">イベントカレンダー</Link></li>
              <li><Link href="/workation" className="hover:text-teal-400 transition-colors">移住・ワーケーション</Link></li>
              <li><Link href="/activities" className="hover:text-teal-400 transition-colors">体験・ツアー</Link></li>
              <li><Link href="/access" className="hover:text-teal-400 transition-colors">アクセス情報</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">奄美大島について</Link></li>
              <li><Link href="/blog" className="hover:text-teal-400 transition-colors">ブログ</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-400 transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 奄美島旅 All Rights Reserved.</p>
          <p>本サイトは奄美大島の観光振兴を目的として運営しています。</p>
        </div>
      </div>
    </footer>
  );
}
