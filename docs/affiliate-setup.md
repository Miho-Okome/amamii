# アフィリエイト設定手順書

## 1. 楽天アフィリエイト
登録: https://affiliate.rakuten.co.jp/

### 変更が必要なファイル
```
src/data/hotels.ts          → affiliateUrl の各URL
src/app/stay/page.tsx       → 各「楽天で宿を探す」リンク
src/components/AffiliateCTA.tsx → 楽天トラベルリンク
src/app/access/page.tsx     → 楽天トラベルパックリンク
src/app/page.tsx            → CTAバナーの楽天リンク
```

## 2. じゃらん（リクルート）アフィリエイト
登録: https://www.jalan.net/jw/af/affiliate_top.html

### 変更が必要なファイル
```
src/data/hotels.ts          → Activity の bookingUrl
src/components/AffiliateCTA.tsx → じゃらんリンク
src/app/activities/page.tsx → じゃらんリンク
```

## 3. Amazon アソシエイト
登録: https://affiliate.amazon.co.jp/

### 変更が必要なファイル
```
src/app/gourmet/page.tsx → YOUR_ASSOCIATE_TAG を置換
```

## TODO箇所の確認コマンド
```bash
grep -r "TODO: 人間が設定" src/ docs/
grep -r "YOUR_ASSOCIATE_TAG" src/
```
