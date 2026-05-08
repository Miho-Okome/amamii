"use client";

import { useState } from "react";
import Script from "next/script";

type FormState = "idle" | "submitting" | "success" | "error";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "一般のお問い合わせ",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      let recaptchaToken = "";
      if (RECAPTCHA_SITE_KEY && typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recaptchaToken = await (window as any).grecaptcha?.execute(RECAPTCHA_SITE_KEY, {
          action: "contact",
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", category: "一般のお問い合わせ", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {state === "success" ? (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h2 className="font-bold text-teal-700 mb-1">送信完了しました</h2>
          <p className="text-sm text-gray-600">お問い合わせいただきありがとうございます。2〜5営業日以内にご返信いたします。</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ種別</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
            >
              <option>一般のお問い合わせ</option>
              <option>掲載依頼（観光施設・飲食店）</option>
              <option>取材・タイアップのご相談</option>
              <option>情報の誤り・修正依頼</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メッセージ <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          {!RECAPTCHA_SITE_KEY && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
              .env.local に NEXT_PUBLIC_RECAPTCHA_SITE_KEY を設定するとreCAPTCHAが有効になります
            </div>
          )}

          {state === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-700">
              送信に失敗しました。しばらく経ってからもう一度お試しください。
            </div>
          )}

          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-3 rounded-xl transition-colors"
          >
            {state === "submitting" ? "送信中..." : "送信する"}
          </button>
        </form>
      )}
    </>
  );
}
