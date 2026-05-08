"use client";

import { useEffect } from "react";

type AdBannerProps = {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
};

export default function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (adsenseId && typeof window !== "undefined") {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch {
        // AdSense未設定時はスキップ
      }
    }
  }, [adsenseId]);

  if (!adsenseId) {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm ${className}`} style={{ minHeight: 90 }}>
        <div className="text-center p-4">
          <p className="font-medium">広告スペース</p>
          <p className="text-xs mt-1">.env.local に NEXT_PUBLIC_ADSENSE_ID を設定してください</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
