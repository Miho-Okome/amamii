import type { Metadata } from "next";
import AffiliateHotelCard from "@/components/AffiliateHotelCard";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdBanner from "@/components/AdBanner";
import { hotels } from "@/data/hotels";

export const metadata: Metadata = {
  title: "宿泊案内",
  description: "奄美大島のおすすめ宿泊施設を紹介。リゾートホテル・民宿・ゲストハウスなど全タイプを網羅。楽天トラベルで最安値を比較・予約。",
  keywords: ["奄美大島 宿泊", "奄美大島 ホテル", "奄美大島 民宿", "奄美大島 旅館", "楽天トラベル"],
};

const stayTypes = [
  {
    type: "リゾートホテル",
    icon: "🏨",
    desc: "全室オーシャンビューや温況付きなど、非日常を楽しみたい方に。奄美の豊かな自然を最高の環境で体験。",
    priceRange: "15,000〜40,000円/泊",
    searchUrl: "https://travel.rakuten.co.jp/place/kagoshima/amami/",
    features: ["プール・温況", "島料理レストラン", "アクティビティ手配"],
  },
  {
    type: "ビジネスホテル",
    icon: "🏢",
    desc: "名瀬市街地アクセス抜群。観光の拠点として最適。コスパ重視の旅行者に。",
    priceRange: "6,000〜12,000円/泊",
    searchUrl: "https://travel.rakuten.co.jp/place/kagoshima/amami/",
    features: ["無料駐車場", "市街地徒歩圈", "朝食オプション"],
  },
  {
    type: "民宿・民泊",
    icon: "🏡",
    desc: "島の家庭料理が食べられる温かみのある宿。島の人々と交流したい方に最適。",
    priceRange: "4,000〜10,000円/泊",
    searchUrl: "https://travel.rakuten.co.jp/place/kagoshima/amami/",
    features: ["島の郷土料理", "地元の人との交流", "アットホームな雰囲気"],
  },
  {
    type: "ゲストハウス・シェアハウス",
    icon: "🛦",
    desc: "旅人同士の交流が生まれる宿。長期滞在・ワーケーションにも最適。格安で泊まれる。",
    priceRange: "2,500〜6,000円/泊",
    searchUrl: "https://travel.rakuten.co.jp/place/kagoshima/amami/",
    features: ["共有キッチン", "ドミトリー対応", "長期割引あり"],
  },
];

const tips = [
  { tip: "7〜8月のピークシーズンは3ヶ月前予約が必須。人気宿はすぐ埋まります。", icon: "⚠️" },
  { tip: "楽天トラベルのポイント還元を活用すると実質1,000〜3,000円お得になることも。", icon: "💡" },
  { tip: "連泊するほどと1泊あたりの料金が下がる施設が多い。ワーケーションにも◎。", icon: "📅" },
  { tip: "空港送迎付きプランを選ぶとレンタカーなしでもOK。初日の移動が楽になる。", icon: "✈️" },
  { tip: "じゃらんでは「奄美大島 ワーケーションプラン」も検索できます。", icon: "💻" },
];

export default function StayPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">奄美大島 宿泊案内</h1>
        <p className="text-gray-500">リゾートホテルから民宿まで。あなたのスタイルに合った宿を見つけよう。</p>
      </div>

      <AffiliateCTA
        variant="horizontal"
        title="今すぐ奄美大島の宿泊を予約"
        subtitle="楽天トラベル・じゃらんで最安値を比較"
      />

      <AdBanner slot="6060606060" format="horizontal" className="my-8" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">宿泊タイプ別ガイド</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stayTypes.map((s) => (
            <div key={s.type} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800">{s.type}</h3>
                  <span className="text-xs text-teal-700 font-medium">{s.priceRange}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {s.features.map((f) => (
                  <span key={f} className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">{f}</span>
                ))}
              </div>
              <a
                href={s.searchUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg text-sm transition-colors"
              >
                楽天トラベルで検索・予約 →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">編集部おすすめホテル</h2>
        <p className="text-sm text-gray-500 mb-5">奄美島旅編集部が厳選した宿泊施設。楽天トラベルで最新の空室・料金を確認できます。</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {hotels.map((hotel) => (
            <AffiliateHotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </section>

      <AdBanner slot="7070707070" format="rectangle" className="mb-10 max-w-md mx-auto" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">宿泊予約のコツ</h2>
        <div className="space-y-3">
          {tips.map((item) => (
            <div key={item.tip} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">エリア別・目的別おすすめ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              area: "名瀬市街地",
              icon: "🏙️",
              for: "グルメ・観光拠点にしたい方",
              merit: "居酒屋・飲食店が多く、島唄ライブも楽しめる。バス・タクシーでの移動も可能。",
            },
            {
              area: "竜郷・笠利エリア",
              icon: "🌊",
              for: "自然・海を満喫したい方",
              merit: "空港から近く、美しい海岸線が広がる。リゾートホテルや民宿が点在。",
            },
            {
              area: "住用・古仁屋エリア",
              icon: "🌿",
              for: "秘境・大自然に浸りたい方",
              merit: "マングローブ林や与路島・請島への玄驚口。非常にディープな奄美を体験。",
            },
          ].map((a) => (
            <div key={a.area} className="bg-teal-50 rounded-xl p-4">
              <div className="text-2xl mb-2">{a.icon}</div>
              <h3 className="font-bold text-teal-800 mb-1">{a.area}</h3>
              <p className="text-xs text-teal-600 font-medium mb-2">→ {a.for}</p>
              <p className="text-xs text-gray-600">{a.merit}</p>
            </div>
          ))}
        </div>
      </section>

      <AffiliateCTA
        variant="horizontal"
        title="気に入ったプランを予約しよう"
        subtitle="楽天ポイントが購まる・使える"
      />
    </div>
  );
}
