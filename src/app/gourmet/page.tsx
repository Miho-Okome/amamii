import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "グルメ",
  description: "奄美大島の郷土料理・グルメを完全ガイド。鶏飯、黒糖焼酎、豚骨など奄美ならではの味覚を紹介。おすすめの食事処も掲載。",
};

const foods = [
  {
    name: "鶏飯（けいはん）",
    description: "奄美を代表する郷土料理。ほぐした鶏肉・しいたけ・錦糸卵をご飯に乗せ、熱々の鶏スープをかけて食べるお茶漬け風の料理。さっぱりとした味わいが特徴で、奄美の人々に愛され続けています。",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
    where: "市内の食堂・ホテル",
    price: "約1,000〜1,500円",
    tag: "必食",
  },
  {
    name: "黒糖焼酎",
    description: "奄美群島だけで製造が許可されているお酒。さとうきびから作った黒糖を原料に、独特の甘みと芳醴な香りが楽しめます。ロック・水割り・お湯割りなど飲み方も様々。",
    image: "https://images.unsplash.com/photo-1514362453360-8f94243c9996?w=600&q=80",
    where: "島内の居酒屋・酒蔵",
    price: "グラス500〜700円",
    tag: "特産品",
  },
  {
    name: "豚骨（とんこつ）",
    description: "豚の骨付きあばら肉を黒糖・醤油・泡盛でじっくり煮込んだ料理。甸辛い味付けがご飯とよく合います。「みそ和え（ミソカ）」で食べるのが奄美流。",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
    where: "郷土料理店",
    price: "約800〜1,200円",
    tag: "郷土料理",
  },
  {
    name: "タナガエビ唐揚げ",
    description: "奄美の清流に生息する手長エビ（タナガエビ）の唐揚げ。プリプリの食感と濃厚な旨みが特徴で、お酒のつまみにも最高。旬は夏から秋にかけて。",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    where: "居酒屋・食堂",
    price: "約800〜1,500円",
    tag: "海鮮",
  },
  {
    name: "ヤギ汁",
    description: "山羊肉をたっぷりの生姜や香草と一緒に煮込んだ奄美の伝統料理。独特の香りが特徴的ですが、地元では滋養強壮の料理として親しまれています。",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    where: "専門店",
    price: "約1,000〜2,000円",
    tag: "珍味",
  },
  {
    name: "黒糖スイーツ",
    description: "奄美産黒糖を使ったスイーツは種類豊富。黒糖かりんとう、黒糖タルト、黒糖ソフトクリームなど。お土産としても人気で、独特の深いコクが魅力です。",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    where: "土産物店・道の駅",
    price: "300〜1,500円",
    tag: "スイーツ",
  },
];

export default function GourmetPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">奄美大島 グルメガイド</h1>
        <p className="text-gray-500">奄美ならではの郷土料理・食文化を紹介。島旅の食をもっと楽しもう。</p>
      </div>

      <AdBanner slot="3333333333" format="horizontal" className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {foods.map((food) => (
          <div key={food.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
            <div className="relative sm:w-40 h-48 sm:h-auto shrink-0">
              <Image src={food.image} alt={food.name} fill className="object-cover" sizes="160px" />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs rounded-full px-2 py-0.5">
                {food.tag}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-gray-800 mb-1">{food.name}</h2>
                <p className="text-xs text-gray-500 leading-relaxed">{food.description}</p>
              </div>
              <div className="mt-3 text-xs text-gray-400 space-y-0.5">
                <p>🍴 食べられる場所: {food.where}</p>
                <p>💴 目安: {food.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdBanner slot="4444444444" format="rectangle" className="mb-12 max-w-md mx-auto" />

      <div className="bg-amber-50 rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">奄美の味をお土産に</h2>
        <p className="text-sm text-gray-600 mb-4">現地に行けない方や、お土産を買い忘れた方はAmazonでも購入できます。</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "黒糖焼酎", query: "奄美大島 黒糖焼酎" },
            { label: "大島紬 小物", query: "大島紬 小物" },
            { label: "奄美 鶏飯スープ", query: "奄美 鶏飯 スープ" },
            { label: "奄美 黒糖", query: "奄美 黒糖" },
          ].map((item) => (
            <a
              key={item.label}
              href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(item.query)}&tag=YOUR_ASSOCIATE_TAG`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border border-gray-200 shadow-sm"
            >
              {item.label}
              <span className="block text-xs text-gray-400 mt-1">Amazonで見る →</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">※リンクはAmazonアソシエイトリンクです</p>
      </div>

      <div className="text-center">
        <Link href="/blog/amami-gourmet-top10" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors">
          グルメTOP10記事を読む →
        </Link>
      </div>
    </div>
  );
}
