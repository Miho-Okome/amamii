import type { Metadata } from "next";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "アクセス情報",
  description: "奄美大島へのアクセス方法を完全ガイド。飛行機・フェリーでの行き方、島内交通、レンタカー情報など旅行計画に役立つ情報を掛載。",
};

export default function AccessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">奄美大島 アクセスガイド</h1>
        <p className="text-gray-500">島へのアクセス方法と島内での移動手段をご案内します。</p>
      </div>
      <AdBanner slot="7777777777" format="horizontal" className="mb-8" />
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><span>✈️</span> 飛行機でのアクセス</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-teal-50 text-teal-800">
                <th className="text-left py-2 px-3 rounded-l-lg">出発地</th>
                <th className="text-left py-2 px-3">所要時間</th>
                <th className="text-left py-2 px-3">航空会社</th>
                <th className="text-left py-2 px-3 rounded-r-lg">運賞目安</th>
              </tr>
            </thead>
            <tbody>
              {[
                { from: "東京（羽田・成田）", time: "絏2時間", airline: "JAL・ANA・SkyMark", price: "絏15,000〜40,000円" },
                { from: "大阪（伊丹・関空）", time: "絏1時間40分", airline: "JAL・ANA", price: "絏12,000〜35,000円" },
                { from: "福岡", time: "絏1時間20分", airline: "JAL・ANA", price: "絏10,000〜30,000円" },
                { from: "鹿児島", time: "絏50分", airline: "JAL・ANA", price: "絏8,000〜20,000円" },
              ].map((row) => (
                <tr key={row.from} className="border-b border-gray-50">
                  <td className="py-2 px-3 font-medium">{row.from}</td>
                  <td className="py-2 px-3 text-gray-600">{row.time}</td>
                  <td className="py-2 px-3 text-gray-600">{row.airline}</td>
                  <td className="py-2 px-3 text-teal-700 font-medium">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><span>🚗</span> 島内の移動手段</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "🚗", title: "レンタカー（おすすめ）", desc: "島内観光には必須。空港や市街地に複数のレンタカー会社あり。一日絏3,000〜8,000円。", tip: "軽自動車でも十分。早割で安くなることも。" },
            { icon: "🚌", title: "路線バス", desc: "名瀬市街〜空港間など主要路線あり。ただし本数が少ないため観光には不便。一回200〜800円程度。", tip: "市街地内の移動には使いやすい。" },
          ].map((item) => (
            <div key={item.title} className="bg-teal-50 rounded-xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-teal-800 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600 mb-2">{item.desc}</p>
              <p className="text-xs text-teal-600 font-medium">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold mb-3">旅行の予約はこちらから</h2>
        <p className="text-sm opacity-90 mb-5">航空券＋ホテルをセット予約でお得に！</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="https://travel.rakuten.co.jp/package/kagoshima/amami/" target="_blank" rel="noopener noreferrer nofollow"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition-colors">
            楽天トラベル<br /><span className="text-xs opacity-90">航空券＋ホテルパック</span>
          </a>
        </div>
      </section>
    </div>
  );
}
