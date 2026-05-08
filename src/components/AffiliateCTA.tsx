import Link from "next/link";

type AffiliateCTAProps = {
  variant?: "horizontal" | "vertical" | "compact";
  title?: string;
  subtitle?: string;
};

export default function AffiliateCTA({
  variant = "horizontal",
  title = "奄美大島の旅を予約しよう",
  subtitle = "宿泊・ツアー・航空券をまとめて比較",
}: AffiliateCTAProps) {
  if (variant === "compact") {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
        <p className="text-sm font-bold text-teal-800 mb-3">{title}</p>
        <div className="flex flex-wrap gap-2">
          {/* TODO: 人間が設定 - 楽天アフィリエイトIDをURLに追加 */}
          <a href="https://travel.rakuten.co.jp/place/kagoshima/amami/" target="_blank" rel="noopener noreferrer nofollow"
            className="flex-1 min-w-[120px] text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors">
            楽天で宿を探す
          </a>
          {/* TODO: 人間が設定 - じゃらんアフィリエイトIDをURLに追加 */}
          <a href="https://www.jalan.net/kankou/spt_46209ac2290000001/" target="_blank" rel="noopener noreferrer nofollow"
            className="flex-1 min-w-[120px] text-center bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors">
            じゃらんで体験を探す
          </a>
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className="bg-gradient-to-b from-teal-600 to-teal-800 text-white rounded-2xl p-6 text-center">
        <p className="text-lg font-bold mb-1">{title}</p>
        <p className="text-xs opacity-80 mb-4">{subtitle}</p>
        <div className="space-y-2">
          <a href="https://travel.rakuten.co.jp/place/kagoshima/amami/" target="_blank" rel="noopener noreferrer nofollow"
            className="block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm transition-colors">
            🏨 楽天トラベルで宿泊を予約
          </a>
          <a href="https://www.jalan.net/kankou/spt_46209ac2290000001/" target="_blank" rel="noopener noreferrer nofollow"
            className="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-sm transition-colors">
            🤿 じゃらんで体験を予約
          </a>
        </div>
        <p className="text-xs opacity-60 mt-3">※ アフィリエイトリンクを含みます</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-5 md:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white text-center md:text-left">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-xs opacity-80">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center shrink-0">
          <a href="https://travel.rakuten.co.jp/place/kagoshima/amami/" target="_blank" rel="noopener noreferrer nofollow"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full text-sm transition-colors whitespace-nowrap">
            🏨 楽天で宿を予約
          </a>
          <a href="https://www.jalan.net/kankou/spt_46209ac2290000001/" target="_blank" rel="noopener noreferrer nofollow"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-full text-sm transition-colors whitespace-nowrap">
            🤿 じゃらんで体験予約
          </a>
          <Link href="/access"
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-5 rounded-full text-sm transition-colors whitespace-nowrap border border-white/40">
            ✈️ アクセスを見る
          </Link>
        </div>
      </div>
      <p className="text-xs text-white/50 mt-2 text-right">※ アフィリエイトリンクを含みます</p>
    </div>
  );
}
