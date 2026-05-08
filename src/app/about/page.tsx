import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "奄美大島について",
  description: "奄美大島の基本情報、歴史、文化、自然についての解説。世界自然遺産登録された奄美大島の魅力を詳しく紹介します。",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">奄美大島について</h1>
        <p className="text-gray-500">東洋のガラパゴスと呼ばれる、奄美大島の魅力を深掜り解説</p>
      </div>
      <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-8">
        <Image src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85" alt="奄美大島の自然" fill className="object-cover" priority />
      </div>
      <AdBanner slot="1313131313" format="horizontal" className="mb-8" />
      <div className="space-y-8">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">基本情報</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              { label: "所在地", value: "鹿児島県奄美市・大島郡" },
              { label: "面積", value: "712.35 km²（日本5位の島）" },
              { label: "人口", value: "約5万人" },
              { label: "気候", value: "亜熱帯性海洋性気候" },
              { label: "年間気温", value: "平均22℃" },
              { label: "世界自然遺産", value: "2021年7月登録" },
            ].map((item) => (
              <div key={item.label} className="bg-teal-50 rounded-lg p-3">
                <dt className="text-xs text-teal-600 font-semibold">{item.label}</dt>
                <dd className="text-gray-700 mt-1 font-medium">{item.value}</dd>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">奄美の文化・歴史</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <div className="bg-amber-50 rounded-xl p-4">
              <h3 className="font-bold text-amber-800 mb-2">島唄（しまうた）</h3>
              <p>奄美の伝統音楽「島唄」は、細棹三味線と独特の裏声（ファルセット）を使った歌唱法が特徴。</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-bold text-blue-800 mb-2">大島紬（おおしまつむぎ）</h3>
              <p>奄美大島の代表的な伝統工芸品。手織りと天然染料による精巧な模様が特徴。</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-bold text-green-800 mb-2">黒糖焼酸</h3>
              <p>さとうきびから作った黒糖を原料に製造されるお酒で、奄美群島だけに製造が許可されている特別な焼酸。</p>
            </div>
          </div>
        </section>
      </div>
      <AdBanner slot="1414141414" format="rectangle" className="my-8 max-w-md mx-auto" />
      <div className="text-center">
        <Link href="/spots" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors">観光スポットを見る →</Link>
      </div>
    </div>
  );
}
