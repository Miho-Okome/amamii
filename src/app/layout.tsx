import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { WebSiteSchema } from "@/components/JsonLd";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "奄美島旅 | 奄美大島観光ガイド",
    template: "%s | 奄美島旅",
  },
  description:
    "奄美大島の観光スポット・グルメ・体験ツアーを完全ガイド。龍郷湾、マングローブカヌー、鶏飯など島の魅力を徹底紹介。宿泊・ツアー予約も対応。",
  keywords: ["奄美大島", "観光", "旅行", "グルメ", "アクティビティ", "宿泊", "ツアー", "鹿児島"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "奄美島旅",
    title: "奄美島旅 | 奄美大島観光ガイド",
    description: "奄美大島の観光スポット・グルメ・体験ツアーを完全ガイド。",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {adsenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${notoSansJP.className} bg-gray-50 text-gray-800`}>
        <GoogleAnalytics />
        <WebSiteSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
