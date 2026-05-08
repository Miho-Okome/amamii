# Phase 5：デプロイ手順書（Vercel）

## Step 1：Vercelアカウントの作成
1. https://vercel.com にアクセス
2. 「Continue with GitHub」を選択

## Step 2：新規プロジェクトの作成
1. 「Add New → Project」
2. `amamii` リポジトリを選択して「Import」
3. Framework Preset: `Next.js` が自動検出されることを確認

## Step 3：環境変数の設定

| Name | Value | 必須 |
|------|-------|------|
| `NEXT_PUBLIC_SITE_URL` | `https://あなたのドメイン.com` | ✅ |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | ⚠️ GA4設定後 |
| `NEXT_PUBLIC_ADSENSE_ID` | `ca-pub-XXXXXXXXXXXXXXXX` | ⚠️ AdSense承認後 |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `6Le...` | ⚠️ reCAPTCHA設定後 |
| `RECAPTCHA_SECRET_KEY` | `6Le...` | ⚠️ Production環境のみ |

## Step 4：デプロイの実行
「Deploy」ボタンをクリック → 2〜3分待つ

## Step 5：カスタムドメインの設定
プロジェクト設定 → 「Domains」タブ → ドメイン名を入力

## 推定コスト
| 項目 | 月額 |
|------|------|
| Vercel（Hobbyプラン） | **無料** |
| ドメイン | 100〜200円/月 |
