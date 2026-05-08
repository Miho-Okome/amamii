import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "奄美島旅のプライバシーポリシー。個人情報の取り扱い、広告・アフィリエイトの利用について説明しています。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">プライバシーポリシー</h1>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">1. 個人情報の収集について</h2>
          <p className="leading-relaxed">
            当サイト（奄美島旅）では、お問い合わせフォームを通じてお名前・メールアドレス等の個人情報をお預かりする場合があります。収集した個人情報は、お問い合わせへの返信目的のみに使用し、第三者への提供は行いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">2. Cookieの使用について</h2>
          <p className="leading-relaxed">
            当サイトでは、アクセス解析・広告配信のためCookieを使用しています。ブラウザの設定によりCookieを無効にすることができますが、一部機能が正常に動作しない場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">3. Google AdSenseについて</h2>
          <p className="leading-relaxed">
            当サイトではGoogle AdSenseを利用して広告を掲載しています。Googleはユーザーのサイト訪問情報に基づいてパーソナライズされた広告を表示することがあります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">4. アフィリエイトについて</h2>
          <p className="leading-relaxed">
            当サイトでは楽天アフィリエイト、じゃらんアフィリエイト、Amazonアソシエイトプログラムを利用しています。これらのリンクを通じてご購入・ご予約いただいた場合、当サイトに一定の収益が発生することがあります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">5. アクセス解析について</h2>
          <p className="leading-relaxed">
            当サイトではGoogle Analyticsを使用してアクセス解析を行っています。収集される情報は匿名化されており、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">6. 免責事項</h2>
          <p className="leading-relaxed">
            当サイトに掲載している情報は、執筆時点のものです。観光スポットや宿泊施設の営業時間・料金等は変更になる場合がありますので、お出かけ前に各施設へご確認ください。
          </p>
        </section>

        <p className="text-xs text-gray-400 mt-8">最終更新日：2025年1月1日</p>
      </div>
    </div>
  );
}
