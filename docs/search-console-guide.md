# Google Search Console 登録・活用手順書

## Step 1：Search Console へのサイト登録
1. https://search.google.com/search-console/ にアクセス
2. 「プロパティを追加」→ URLプレフィックスで `https://your-domain.com` を入力

## Step 2：所有権の確認（Vercel の場合）
`src/app/layout.tsx` のメタデータに追加：
```typescript
export const metadata: Metadata = {
  verification: {
    // TODO: 人間が設定
    google: "XXXX...",
  },
};
```

## Step 3：サイトマップの送信
Search Console → 「インデックス作成」→「サイトマップ」
```
https://your-domain.com/sitemap.xml
```

## Step 4：URL検査・インデックス登録リクエスト
優先的にリクエストするページ：
- `/`
- `/spots`
- `/workation`
- `/events`
- `/blog/amami-workation-guide`
- `/blog/amami-budget-travel`

## ターゲットキーワード
```
奄美大島 観光 / 奄美大島 旅行 / 奄美大島 ホテル
奄美大島 ワーケーション / 奄美大島 移住
奄美大島 格安旅行 / 奄美大島 マングローブ カヌー
```
