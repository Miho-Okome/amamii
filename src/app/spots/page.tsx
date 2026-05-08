import type { Metadata } from "next";
import SpotCard from "@/components/SpotCard";
import AdBanner from "@/components/AdBanner";
import { spots } from "@/data/spots";

export const metadata: Metadata = {
  title: "観光スポット",
  description: "奄美大島のおすすめ観光スポットを紹介。龍郷湾、マングローブ原生林、あやまる岳、金作原原生林など自然・文化スポットを完全ガイド。",
};

export default function SpotsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">奄美大島 観光スポット</h1>
        <p className="text-gray-500">自然・文化・絶景など、奄美大島のおすすめスポットを厳選してご紹介します。</p>
      </div>
      <AdBanner slot="1111111111" format="horizontal" className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <SpotCard key={spot.slug} spot={spot} />
        ))}
      </div>
      <div className="mt-12 bg-teal-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">奄美大島へのアクセス</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          奄美大島へは、主に飛行機でのアクセスが便利です。東京、大阪、名古屋、福岡、鹿児島からの直行便が運航しています。
        </p>
        <a href="/access" className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">アクセス詳細を見る →</a>
      </div>
    </div>
  );
}
