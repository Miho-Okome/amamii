import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "奄美島旅へのお問い合わせページ。観光情報のご質問、掲載のご依頼、取材のご相談などお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">お問い合わせ</h1>
        <p className="text-gray-500">
          観光情報に関するご質問、掲載依頼、取材・タイアップのご相談など、お気軽にお問い合わせください。
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
        <strong>地元事業者様へ：</strong>奄美大島内の観光施設・飲食店・体験プログラム等の掲載をご希望の方もお問い合わせください。島を盛り上げましょう！
      </div>

      <ContactForm />

      <div className="mt-8 text-xs text-gray-400">
        <p>※ お返事まで2〜5営業日いただく場合がございます。</p>
        <p className="mt-1">※ reCAPTCHAによるスパム対策を実施しています。</p>
      </div>
    </div>
  );
}
