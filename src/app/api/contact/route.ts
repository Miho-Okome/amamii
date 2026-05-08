import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET) return true;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
  });
  const data = await res.json();
  return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, category, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        return NextResponse.json({ error: "reCAPTCHA検証に失敗しました" }, { status: 400 });
      }
    }

    console.log("お問い合わせ受信:", { name, email, category, message });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
