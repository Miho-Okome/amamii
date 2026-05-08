export type Hotel = {
  name: string;
  area: string;
  description: string;
  priceRange: string;
  image: string;
  affiliateUrl: string;
  rating: number;
  features: string[];
};

export const hotels: Hotel[] = [
  {
    name: "奄美リゾートばしゃ山村",
    area: "龍郷町",
    description: "海を望む絶景リゾート。全室オーシャンビューで奄美の海を存分に楽しめます。",
    priceRange: "￥15,000～",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    affiliateUrl: "https://travel.rakuten.co.jp/HOTEL/90374/",
    rating: 4.5,
    features: ["全室オーシャンビュー", "温泉あり", "島料理レストラン"],
  },
  {
    name: "ホテルウエストコート奄美",
    area: "名瀬市街",
    description: "名瀬市街中心部に位置する便利なホテル。観光・グルメへのアクセス抜群。",
    priceRange: "￥8,000～",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    affiliateUrl: "https://travel.rakuten.co.jp/HOTEL/4218/",
    rating: 4.2,
    features: ["市街地徒歩圈内", "無料駐車場", "ビジネス対応"],
  },
  {
    name: "あまんゆ",
    area: "名瀬",
    description: "奄美の自然素材を活かした癍しの宿。島食材を使ったこだわりの食事が評判。",
    priceRange: "￥20,000～",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    affiliateUrl: "https://travel.rakuten.co.jp/HOTEL/161753/",
    rating: 4.7,
    features: ["プライベートビーチ", "島食材料理", "カヌー体験付き"],
  },
];

export type Activity = {
  name: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  bookingUrl: string;
};

export const activities: Activity[] = [
  {
    name: "マングローブカヌー体験",
    category: "アウトドア",
    description: "住用マングローブ林をカヌーで探索。ガイド付きで安心。2時間コース。",
    price: "￥4,500～",
    duration: "絈2時間",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    bookingUrl: "https://www.jalan.net/kankou/spt_46209ac3820015064/",
  },
  {
    name: "金作原ガイドトレッキング",
    category: "自然体験",
    description: "希少種が生息する原生林をガイドと歩く。アマミノクロウサギを探そう！",
    price: "￥3,000～",
    duration: "絈2〜3時間",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    bookingUrl: "https://www.jalan.net/kankou/spt_46209ac2290000001/",
  },
  {
    name: "シュノーケリング体験",
    category: "マリンスポーツ",
    description: "奄美の美しいサンゴ礁でシュノーケリング。カラフルな熱帯魚に大興奮！",
    price: "￥5,000～",
    duration: "絈3時間",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    bookingUrl: "https://www.jalan.net/kankou/spt_46209ac3820015064/",
  },
  {
    name: "ホエールウォッチング",
    category: "ネイチャーツアー",
    description: "1〜3月限定！ザトウクジラの辫力あるブリーチングを間近で体験。",
    price: "￥5,500～",
    duration: "絈3時間",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80",
    bookingUrl: "https://www.jalan.net/kankou/spt_46209ac2290000001/",
  },
  {
    name: "大島紬手織り体験",
    category: "文化体験",
    description: "ユネスコ無形文化遺産の大島紬。伝統の機織りを職人から学ぶ貴重な体験。",
    price: "￥2,000～",
    duration: "絈1〜2時間",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    bookingUrl: "https://www.jalan.net/kankou/spt_46209ac3820015064/",
  },
  {
    name: "ナイトツアー（夜の生き物観察）",
    category: "自然体験",
    description: "夜行性のアマミノクロウサギを探す幻想的なナイトツアー。",
    price: "￥4,000～",
    duration: "絈2時間",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
    bookingUrl: "https://www.jalan.net/kankou/spt_46209ac2290000001/",
  },
];
