export type Spot = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  access: string;
  tips: string[];
  nearbyHotels?: string;
};

export const spots: Spot[] = [
  {
    slug: "tatsugo-bay",
    name: "龍郷湾",
    category: "自然・海",
    description: "奄美の美しい湾。エメラルドグリーンの海と白砂のビーチが広がる絶景スポット。",
    longDescription: "龍郷湾は奄美大島北部に位置する美しい湾で、透明度の高いエメラルドグリーンの海が広がります。シュノーケリングやダイビングが楽しめるほか、夕暮れ時の景色は特に幻想的。",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    access: "奄美空港から車で絀20分",
    tips: ["透明度が高く、シュノーケリングに最適", "夕暮れ時の景色が特に美しい", "近くに鶏飯で有名な食堂あり"],
    nearbyHotels: "龍郷エリア",
  },
  {
    slug: "amami-mangrove",
    name: "住用マングローブ原生林",
    category: "自然・ジャングル",
    description: "日本有数のマングローブ林。カヌーで探検できる神秘的な原生林。",
    longDescription: "住用川と役勝川の河口に広がるマングローブ原生林は、日本第2位の広さを誇ります。カヌーやカヤックで林の中を探索する体験は格別。",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcb36?w=800&q=80",
    access: "奄美空港から車で絀40分",
    tips: ["カヌー体験（1〜2時間）がおすすめ", "潮位によって景色が変わる", "事前にガイドツアーの予約を"],
  },
  {
    slug: "oshima-tsumugi",
    name: "奄美大島紬の里",
    category: "文化・伝統",
    description: "ユネスコ無形文化遺産登録の大島紬を体験できる文化施設。",
    longDescription: "奄美大島が世界に誤る伝統工芸・大島紬は、その精巧な手織りと天然染料による美しい模様が特徴です。",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    access: "名瀬市街から車で絀15分",
    tips: ["機織り体験は要予約", "大島紬の歴史が学べる展示あり", "工房見学は平日がおすすめ"],
  },
  {
    slug: "ayamaru-misaki",
    name: "あやまる岸",
    category: "絶景・展望台",
    description: "太平洋とサンゴ礁を一望できる奄美屈指の景勝地。",
    longDescription: "あやまる岸は奄美大島の北端に位置し、太平洋を一望できる絶景スポットです。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    access: "奄美空港から車で絀30分",
    tips: ["日の出・日の入りが絶景", "遠歩道の散策もおすすめ", "近くにキャンプ場あり"],
  },
  {
    slug: "naze-city",
    name: "名瀬市街・朝仁海岸",
    category: "市街地・ビーチ",
    description: "奄美の中心地。活気ある商店街と美しい海岸線が魅力。",
    longDescription: "名瀬は奄美大島最大の都市で、島の生活文化が凝縮されています。",
    image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?w=800&q=80",
    access: "奄美空港から車で絀25分",
    tips: ["島唄ライブは夜がおすすめ", "市場では新鮮な海産物が購入できる", "黒糖焼酸の試飲ができる酒蔵あり"],
  },
  {
    slug: "kinsakubaru",
    name: "金作原原生林",
    category: "自然・ジャングル",
    description: "天然記念物の動植物が生息する亜熱帯の原生林。",
    longDescription: "金作原原生林はアマミノクロウサギやルリカケスなど奄美固有の希少種が生息する貴重な原生林です。",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    access: "名瀬市街から車で絀20分",
    tips: ["ガイドツアーが必須（要予約）", "アマミノクロウサギは夜行性なので夜ツアーがおすすめ", "虫除けと長袖の準備を"],
  },
  {
    slug: "oshima-kaikyokan",
    name: "奄美大島海峰館",
    category: "文化・博物館",
    description: "奄美の海の生き物や自然史を学べる水族館・博物館。地元の子どもから観光客まで楽しめる施設。",
    longDescription: "奄美大島海峰館では、奄美近海に生息するサンゴや熱帯魚、ウミガメなどの生き物を間近で観察できます。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    access: "名瀬市街から車で絀15分",
    tips: ["雨の日でも楽しめる屋内施設", "ウミガメへのエサやり体験あり", "子ども連れに特におすすめ"],
  },
  {
    slug: "sumiyo-waterfall",
    name: "マテリヤの滝",
    category: "自然・滝",
    description: "奄美大島最大の滝。亜熱帯の緑に囲まれたパワースポットとして地元でも人気。",
    longDescription: "「マテリヤ」とは奄美の方言で「天から降ってくるもの」を意味します。落差絀14mの滝は素晴らしい泰年です。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    access: "名瀬市街から車で絀45分（住用町）",
    tips: ["雨天後は水量が増えて迫力満点", "遠歩道は滑りやすいので注意", "虫除けスプレー必携"],
  },
  {
    slug: "sani-beach",
    name: "さにぶビーチ（土盛海岸）",
    category: "自然・ビーチ",
    description: "奄美一の透明度を誇るビーチ。シュノーケリングに絶好のスポット。",
    longDescription: "土盛海岸（さにぶ）は、奄美大島の中でも特に透明度が高く、初心者でも手軽にシュノーケリングが楽しめる名スポットです。",
    image: "https://images.unsplash.com/photo-1520942702018-0862200e6873?w=800&q=80",
    access: "奄美空港から車で絀15分",
    tips: ["早朝〜午前中が透明度が最高", "駐車場あり（無料）", "売店・シャワー完備"],
    nearbyHotels: "空港周辺エリア",
  },
  {
    slug: "uwan-dake",
    name: "湯湾岳",
    category: "自然・山",
    description: "奄美大島最高峰（694m）。山頂からは島を一望でき、希少な固有種も生息。",
    longDescription: "湯湾岳は奄美大島最高峰で、標高694mの山頂まで整備された登山道があります。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    access: "宇検村方面から車で絉1時間",
    tips: ["登山は2〜3時間コース", "ルリカケスのさえずりが聴こえることも", "天候が急変しやすいので雨具必須"],
  },
];

export const getSpotBySlug = (slug: string) => spots.find((s) => s.slug === slug);
