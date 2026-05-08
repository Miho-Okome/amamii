import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { FaqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "移住・ワーケーション特集",
  description: "奄美大島への移住・ワーケーション完全ガイド。生活コスト・住環境・移住支援制度・Wi-Fi環境・リモートワークの実態を徹底解説。奄美大島で豊かな暮らしを実現しよう。",
  keywords: ["奄美大島 移住", "奄美大島 ワーケーション", "奄美大島 リモートワーク", "移住支援", "地方移住"],
};

const faqs = [
  { question: "奄美大島でリモートワークはできますか？", answer: "可能です。名瀬市街地や主要観光地ではWi-Fi環境が整ったカフェやコワーキングスペースが増えています。ただし山間部や離島部では通信環境が不安定な場合もあるため、事前確認をおすすめします。" },
  { question: "奄美大島の移住支援制度はどんなものがありますか？", answer: "鹿児島県と各市町村が移住支援金（最大100万円）、就業支援、空き家バンク制度などを提供しています。奄美市の移住コーディネーターに相談すると、個別の条件に合った支援を紹介してもらえます。" },
  { question: "奄美大島の家賃相場はどのくらいですか？", answer: "名瀬市街地の1LDK〜2LDKで月4万〜8万円程度が相場です。郊外や山間部ではさらに安く、空き家バンクを利用すれば月1〜3万円の物件も見つかることがあります。" },
  { question: "子育て環境はどうですか？", answer: "自然豊かな環境での子育てが魅力です。保育園・小中学校が市内に整備されており、都市部に比べて待機児童も少ない傾向にあります。ただし高校・大学の選択肢は限られるため、子どもの成長に合わせた計画が重要です。" },
];

export default function WorkationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <FaqSchema faqs={faqs} />
      <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-8">
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=85"
          alt="奄美大島でリモートワーク"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-xs bg-teal-500 rounded-full px-3 py-1 mb-2 inline-block">差別化コンテンツ</span>
          <h1 className="text-2xl md:text-3xl font-bold">奄美大島で移住・ワーケーション</h1>
          <p className="text-sm opacity-90 mt-1">世界自然遺産の島で、豊かな暮らしとリモートワークを実現</p>
        </div>
      </div>
      <AdBanner slot="4040404040" format="horizontal" className="mb-8" />
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">なぜ今、奄美大島なのか</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "🌿", title: "世界自然遺産の環境", desc: "2021年にユネスコ世界自然遺産登録。希少な生き物と豊かな自然に囲まれた日常。都市では味わえない「本物の自然」が生活の一部になる。" },
            { icon: "💰", title: "物価・生活コストの低さ", desc: "家賃は東京の1/3〜1/4。地元で採れた海産物・野菜が安く、食費も抑えられる。リモートワーク収入を活かせば、豊かな生活が実現しやすい。" },
            { icon: "🏖️", title: "365日リゾートな日常", desc: "仕事終わりに海へ。週末は自然の中でアクティビティ。都市の「休日だけ特別な体験」を毎日享受できる環境。" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">生活コスト比較（東京 vs 奄美大島）</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-600">項目</th>
                <th className="text-right py-3 px-4 text-gray-500">東京（参考）</th>
                <th className="text-right py-3 px-4 text-teal-700 font-bold">奄美大島</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: "家賃（1LDK）", tokyo: "15〜25万円", amami: "4〜8万円", note: "郊外なら1〜3万も" },
                { item: "食費（1人/月）", tokyo: "5〜8万円", amami: "3〜5万円", note: "地産地消で節約可能" },
                { item: "交通費", tokyo: "2〜4万円", amami: "レンタカー2〜3万円", note: "車必須の環境" },
                { item: "光熱費", tokyo: "1.5〜2万円", amami: "1〜1.5万円", note: "冷暖房費が少ない" },
                { item: "通信費", tokyo: "8,000〜1万円", amami: "8,000〜1万円", note: "光回線あり" },
                { item: "月合計（目安）", tokyo: "30〜45万円", amami: "13〜20万円", note: "経1/2〜1/3に" },
              ].map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="py-3 px-4 font-medium text-gray-700">{row.item}</td>
                  <td className="py-3 px-4 text-right text-gray-500">{row.tokyo}</td>
                  <td className="py-3 px-4 text-right font-bold text-teal-700">{row.amami}
                    {row.note && <span className="block text-xs font-normal text-gray-400">{row.note}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">ワーケーション環境ガイド</h2>
        <div className="space-y-4">
          <div className="bg-teal-50 rounded-xl p-5">
            <h3 className="font-bold text-teal-800 mb-3 flex items-center gap-2"><span>📶</span> Wi-Fi・通信環境</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">名瀬市街地では光ファイバー回線（NTT西日本・CATV）が整備されており、ビデオ会議も問題なく利用できます。主要カフェやコワーキングスペースでは無料Wi-Fiを提供。</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ 名瀬・竜郷エリア：光回線・4G/5G対応</li>
              <li>✅ 主要観光地：コンビニWi-Fi・ホテルWi-Fi</li>
              <li>⚠️ 山間部・離島：通信が不安定な場合あり</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-5">
            <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2"><span>💻</span> コワーキングスペース・作業場所</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {[
                { name: "名瀬市内のコワーキングスペース", desc: "月額利用可。会議室・高速Wi-Fi完備。ドロップインも対応。" },
                { name: "島内カフェでのリモートワーク", desc: "海の見えるカフェで仕事。ランチ付きで！1日1,000〜1,500円程度。" },
                { name: "民泊・ゲストハウス", desc: "ワーケーション向けプランがある施設も。長期滞在割引あり。" },
                { name: "シェアハウス", desc: "移住者・ワーカー向けのシェアハウスが増加。月5〜8万円程度。" },
              ].map((place) => (
                <div key={place.name} className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-gray-700 mb-1">{place.name}</p>
                  <p className="text-gray-500 text-xs">{place.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AdBanner slot="5050505050" format="rectangle" className="mb-10 max-w-md mx-auto" />
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">移住支援制度まとめ</h2>
        <div className="space-y-3">
          {[
            { title: "鹿児島県・奄美市 移住支援金", amount: "最大100万円", detail: "東京圏（一都三県）から移住し、対象法人等に就業または自ら起業した場合に支給。単身で60万円、世帯で100万円。", tag: "金錢支援", tagColor: "bg-green-100 text-green-700" },
            { title: "空き家バンク制度", amount: "月1〜5万円の物件も", detail: "奄美市・各町村が運営する空き家情報サービス。格安物件が多く、リフォーム補助も受けられる場合あり。", tag: "住宅支援", tagColor: "bg-blue-100 text-blue-700" },
            { title: "子育て支援・教育補助", amount: "医療費助成・保育料補助", detail: "子どもの医療費（中学生まで無料）、第2子以降の保育料無償化など。都市部より手厚い支援が受けられることも。", tag: "子育て支援", tagColor: "bg-pink-100 text-pink-700" },
            { title: "起業・創業支援", amount: "補助金・融賃制度あり", detail: "島内での起業に対して、奄美市や各商工会議所が補助金・相談窓口を提供。観光・IT・農業など様々な分野で支援。", tag: "起業支援", tagColor: "bg-orange-100 text-orange-700" },
          ].map((support) => (
            <div key={support.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-gray-800 text-sm">{support.title}</h3>
                  <span className={`text-xs rounded-full px-2 py-0.5 ${support.tagColor}`}>{support.tag}</span>
                </div>
                <p className="text-teal-700 font-bold text-sm mb-1">{support.amount}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{support.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">※ 支援内容・金額は年度によって変更されることがあります。最新情報は奄美市役所または各市町村の公式サイトをご確認ください。</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">移住者・ワーケーション者 の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { name: "Aさん（東京→奄美 / エンジニア / 34歳）", comment: "東京でのフルリモート勤務を活かして移住。家賃が3分の1になり、贯金ペースが上がりました。海や山が近く、ストレスが全く違います。通信環境も仕事で困ったことはありません。", duration: "移住歖2年" },
            { name: "Bさん（大阪→奄美 / ライター・ブロガー / 28歳）", comment: "ワーケーション目的で来て、そのまま半移住に。カフェで海を見ながら記事を書いていると、インスピレーションが全然違います。食費も安くて、月15万円以下で暮らせています。", duration: "ワーケーション武18ヶ月" },
            { name: "Cさん（名古屋→奄美 / デザイナー / 41歳）", comment: "子どもに豊かな自然環境を与えたくて移住を決意。子どもが毎日海で遗べる環境は都市部では無理。移住支援金も受給でき、初期費用の心配も減りました。", duration: "家族移住 / 移住歖1年" },
            { name: "Dさん（福岡→奄美 / 会社員（週3リモート） / 37歳）", comment: "拠点を奄美に移して、週3はリモート・週を1は出張で対応。島での生活費が安いので、収入は少し下がっても豊かさは上がった感覚です。島の人たちの温かさも魅力。", duration: "半移住 / 移住歖8ヶ月" },
          ].map((voice) => (
            <div key={voice.name} className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">&ldquo;{voice.comment}&rdquo;</p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-600">{voice.name}</p>
                <span className="text-xs bg-teal-100 text-teal-700 rounded-full px-2 py-0.5">{voice.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">移住・ワーケーション FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 text-sm mb-2">Q. {faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">まずは奄美大島を体験してみよう</h2>
        <p className="text-sm opacity-90 mb-5">ワーケーションで！1〜2週間滞在してみることが、移住を成功させる第一歩です。<br className="hidden md:block" />まずはツアーや宿泊で島の雰囲気を感じてみてください。</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://travel.rakuten.co.jp/place/kagoshima/amami/" target="_blank" rel="noopener noreferrer nofollow" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors">長期滞在プランを楽天で探す</a>
          <Link href="/contact" className="bg-white text-teal-700 font-bold px-8 py-3 rounded-full transition-colors hover:bg-gray-100">移住相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
