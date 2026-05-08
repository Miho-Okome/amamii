import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { FaqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "季節・イベントカレンダー",
  description: "奄美大島の季節ごとの楽しみ方とイベント情報。ホエールウォッチング・夏の海・島唄まつり・世界自然遺産登録記念行事など月別に紹介。",
  keywords: ["奄美大島", "イベント", "祭り", "ホエールウォッチング", "ベストシーズン", "旅行計画"],
};

const months = [
  { month: 1, label: "1月", season: "冬", color: "bg-blue-50 border-blue-200", headerColor: "bg-blue-600", temp: "13〜17℃", weather: "晴れ多め・風やや強い", highlight: "ホエールウォッチング開幕",
    events: [
      { name: "ホエールウォッチング開幕", type: "自然体験", desc: "ザトウクジラが奄美近海に現れ始める、1〜3月がシーズン。", icon: "🐋" },
      { name: "成人式（島ならではの晴れ着）", type: "文化", desc: "大島紬の晴れ着を着て成人式に臨む、島の伝統的な光景。", icon: "👘" },
    ],
    tips: ["旅行者が少なく宿泊費が安い穴場月", "海は冷たいが釣りは好シーズン"],
  },
  { month: 2, label: "2月", season: "冬", color: "bg-blue-50 border-blue-200", headerColor: "bg-blue-600", temp: "14〜18℃", weather: "晴れ〜曇り", highlight: "ホエールウォッチング最盛期",
    events: [
      { name: "ホエールウォッチング最盛期", type: "自然体験", desc: "ザトウクジラの出没率が最も高い時期。ブリーチングが見られることも。", icon: "🐋" },
      { name: "奄美マラソン", type: "スポーツ", desc: "島内を走る人気のマラソン大会。島の絶景を楽しみながら走れる。", icon: "🏃" },
    ],
    tips: ["ホエールウォッチングは事前予約必須", "本土より10〜15℃温かい"],
  },
  { month: 3, label: "3月", season: "春", color: "bg-green-50 border-green-200", headerColor: "bg-green-600", temp: "16〜20℃", weather: "晴れ多め・過ごしやすい", highlight: "トレッキング・自然観察の好適期",
    events: [
      { name: "ホエールウォッチング終盤", type: "自然体験", desc: "3月末までホエールウォッチングが楽しめる。", icon: "🐋" },
      { name: "春の自然観察", type: "自然体験", desc: "新緑の季節。金作原原生林のトレッキングに最適。", icon: "🌿" },
    ],
    tips: ["旅行のコスパが良い時期", "桃（ヒカンザクラ）が咲く"],
  },
  { month: 4, label: "4月", season: "春", color: "bg-green-50 border-green-200", headerColor: "bg-green-600", temp: "19〜23℃", weather: "晴れ多め・過ごしやすい", highlight: "シュノーケリング・海水浴解禁",
    events: [
      { name: "シュノーケリングシーズン開始", type: "マリンスポーツ", desc: "水温が上がり、シュノーケリングが快適に楽しめるようになる。", icon: "🤿" },
      { name: "春の花々が咲き乱れる", type: "自然", desc: "ハイビスカスやブーゲンビリアが開花。島全体が彩られる。", icon: "🌸" },
    ],
    tips: ["GW前の穴場期間。混雑が少ない", "海水温が上昇し始める"],
  },
  { month: 5, label: "5月", season: "初夏", color: "bg-yellow-50 border-yellow-200", headerColor: "bg-yellow-500", temp: "22〜26℃", weather: "梅雨入り（例年5月上旬）", highlight: "奄美の梅雨入り",
    events: [
      { name: "奄美の梅雨入り", type: "気候", desc: "本土より紏1ヶ月早く梅雨入り。雨の日が増えるが新緑が美しい。", icon: "🌧️" },
      { name: "ウミガメの産卵シーズン開始", type: "自然体験", desc: "砂浜でのウミガメの産卵を観察できることも（夜間のみ）。", icon: "🐢" },
    ],
    tips: ["雨でも楽しめる室内観光を組み合わせて", "マングローブカヌーは雨でも楽しめる"],
  },
  { month: 6, label: "6月", season: "夏", color: "bg-orange-50 border-orange-200", headerColor: "bg-orange-500", temp: "25〜29℃", weather: "梅雨明け（例年6月下旬）", highlight: "梅雨明け・夏本番",
    events: [
      { name: "梅雨明け・夏のベストシーズン開幕", type: "気候", desc: "6月末に梅雨が明けると真夏の奄美が始まる。", icon: "☀️" },
      { name: "夜光虫現象（時期による）", type: "自然", desc: "海が青白く光る幻想的な夜光虫が見られることがある。", icon: "✨" },
    ],
    tips: ["梅雨明け直後は特に混みやすい", "UVケアは必須"],
  },
  { month: 7, label: "7月", season: "夏", color: "bg-orange-50 border-orange-200", headerColor: "bg-orange-500", temp: "27〜31℃", weather: "晴れ・暑い", highlight: "マリンスポーツ最盛期",
    events: [
      { name: "奄美まつり", type: "祭り・文化", desc: "名瀬市街で行われる奄美最大の夏祭り。島唄・八月踊りが機撕される。", icon: "🎆" },
      { name: "八月踊り各地で開催", type: "祭り・文化", desc: "旧暦8月に各集落で行われる伝統的な踊り。観光客も参加歓迎。", icon: "💃" },
    ],
    tips: ["最も混む時期。宿泊は3ヶ月前予約推奨", "熱中症対策を万全に"],
  },
  { month: 8, label: "8月", season: "夏", color: "bg-orange-50 border-orange-200", headerColor: "bg-orange-500", temp: "28〜32℃", weather: "晴れ・最も暑い", highlight: "海水浴・ダイビング最高シーズン",
    events: [
      { name: "八月踊り（旧盆シーズン）", type: "祭り・文化", desc: "旧盆の頃に各集落で八月踊りが最も盛んに行われる。", icon: "💃" },
      { name: "スターウォッチング", type: "自然体験", desc: "光害が少なく、天の川が見える絶好のスポットが多い。", icon: "⭐" },
    ],
    tips: ["台風シーズンの始まり。旅行保険推奨", "ウミガメの孵化ラッシュが見られることも"],
  },
  { month: 9, label: "9月", season: "秋", color: "bg-red-50 border-red-200", headerColor: "bg-red-500", temp: "26〜30℃", weather: "台風多め・晴れ間も", highlight: "台風シーズン・秋ダイビング",
    events: [
      { name: "台風シーズンピーク", type: "気候", desc: "台風が多い時期。旅行計画は余裕を持って。フレキシブルな日程が◎。", icon: "🌀" },
      { name: "秋のダイビング", type: "マリンスポーツ", desc: "水温が高く、ウミガメとの遭遇率も高い。", icon: "🤿" },
    ],
    tips: ["台風で欠航の可能性あり。旅行保険に加入を", "旅行者が減り穴場の時期"],
  },
  { month: 10, label: "10月", season: "秋", color: "bg-red-50 border-red-200", headerColor: "bg-red-500", temp: "23〜27℃", weather: "晴れが増える・過ごしやすい", highlight: "トレッキング・ナイトツアー最適期",
    events: [
      { name: "奄美国際トライアスロン", type: "スポーツ", desc: "奄美の海・道路・自然を舞台にした国際的なトライアスロン大会。", icon: "🏄" },
      { name: "ナイトツアー開始", type: "自然体験", desc: "気候が落ち着き、アマミノクロウサギのナイトツアーが最適期に。", icon: "🐰" },
    ],
    tips: ["観光のベストシーズン。混雑少なくコスパ良好", "マングローブの葉が色づく"],
  },
  { month: 11, label: "11月", season: "秋〜冬", color: "bg-purple-50 border-purple-200", headerColor: "bg-purple-600", temp: "19〜23℃", weather: "晴れ〜曇り・過ごしやすい", highlight: "紅葉・大島紬まつり",
    events: [
      { name: "奄美大島紬まつり", type: "文化", desc: "大島紬の展示・販売・体験が楽しめる島最大の伝統工芸イベント。", icon: "👘" },
      { name: "マングローブの紅葉", type: "自然", desc: "マングローブ林が赤や橙に色づく、奄美ならではの秋景色。", icon: "🍂" },
    ],
    tips: ["旅行費用が下がる時期", "大島紬のお土産購入チャンス"],
  },
  { month: 12, label: "12月", season: "冬", color: "bg-blue-50 border-blue-200", headerColor: "bg-blue-600", temp: "15〜19℃", weather: "晴れ〜曇り・風強い日も", highlight: "年末の奄美・冬の海",
    events: [
      { name: "年越し・初日の出", type: "文化", desc: "あやまる岬などの展望台から初日の出を拝む、島の年越し文化。", icon: "🌅" },
      { name: "冬のシュノーケリング", type: "マリンスポーツ", desc: "ウェットスーツ着用で海に入れる。観光客が少なく穴場シーズン。", icon: "🤿" },
    ],
    tips: ["本土の年末年始より温暖（15〜20℃）", "大晤日は居酒屋で島唄が楽しめる"],
  },
];

const faqs = [
  { question: "奄美大島に行くベストシーズンはいつですか？", answer: "マリンスポーツ目的なら）7〜9月、トレッキング・自然観察なら）10〜4月、ホエールウォッチングなら）1〜3月がおすすめです。梅雨（5〜6月中旬）は雨が多いため避ける方が無難ですが、宿泊費が安い穴場でもあります。" },
  { question: "奄美大島で台風に当たる可能性は？", answer: "台風シーズンは7〜9月です。特に8〜9月は注意が必要です。旅行時期を分散させ、旅行保険への加入と、欠航時に対応できる余裕ある日程設定をおすすめします。" },
  { question: "奄美まつりはいつ開催されますか？", answer: "奄美まつりは例年7月下旬〜8月上旬に開催されます。具体的な日程は年によって異なるため、奄美市の公式サイトで最新情報をご確認ください。" },
  { question: "ホエールウォッチングに最も良い時期はいつですか？", answer: "1月〜3月がホエールウォッチングのシーズンで、ピークは2月です。この時期にザトウクジラが繁殖のため奄美近海に集まります。遭遇率は80〜90%と高く、ブリーチングが見られることもあります。" },
];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FaqSchema faqs={faqs} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">季節・イベントカレンダー</h1>
        <p className="text-gray-500">奄美大島の月別の気候・イベント・おすすめの過ごし方を一覧でチェック。旅行計画にお役立てください。</p>
      </div>
      <AdBanner slot="2020202020" format="horizontal" className="mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { season: "春（3〜5月）", icon: "🌸", best: "トレッキング・花見", note: "梅雨入りに注意" },
          { season: "夏（6〜8月）", icon: "🌊", best: "海水浴・ダイビング", note: "混雑・台風注意" },
          { season: "秋（9〜11月）", icon: "🍂", best: "ナイトツアー・紅葉", note: "コスパ最高" },
          { season: "冬（12〜2月）", icon: "🐋", best: "ホエールウォッチング", note: "本土より温暖" },
        ].map((s) => (
          <div key={s.season} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
            <div className="text-3xl mb-2">{s.icon}</div>
            <h3 className="font-bold text-gray-700 text-sm mb-1">{s.season}</h3>
            <p className="text-xs text-teal-600 font-medium mb-1">{s.best}</p>
            <p className="text-xs text-gray-400">{s.note}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">月別詳細カレンダー</h2>
      <div className="space-y-4 mb-12">
        {months.map((m) => (
          <div key={m.month} className={`rounded-xl border ${m.color} overflow-hidden`}>
            <div className={`${m.headerColor} text-white px-5 py-3 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold">{m.label}</span>
                <span className="text-sm opacity-90">{m.season}</span>
              </div>
              <div className="text-right text-sm opacity-90">
                <span>{m.temp}</span>
                <span className="ml-3 hidden md:inline">{m.weather}</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-gray-700 mb-3">🌟 {m.highlight}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                {m.events.map((ev) => (
                  <div key={ev.name} className="bg-white rounded-lg p-3 flex gap-3">
                    <span className="text-xl shrink-0">{ev.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-700">{ev.name}</p>
                      <p className="text-xs text-gray-500">{ev.desc}</p>
                      <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-500 rounded px-2 py-0.5">{ev.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {m.tips.map((tip) => (
                  <span key={tip} className="text-xs bg-white text-gray-600 rounded-full px-3 py-1 border border-gray-200">
                    💡 {tip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <AdBanner slot="3030303030" format="rectangle" className="mb-12 max-w-md mx-auto" />
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">Q. {faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link href="/activities" className="bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors">
          体験・ツアーを予約する →
        </Link>
        <Link href="/access" className="bg-white text-teal-600 border border-teal-600 px-8 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors">
          アクセス・行き方を見る
        </Link>
      </div>
    </div>
  );
}
