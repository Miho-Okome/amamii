import type { Metadata } from "next";
import ActivityCard from "@/components/ActivityCard";
import AffiliateHotelCard from "@/components/AffiliateHotelCard";
import AdBanner from "@/components/AdBanner";
import { activities, hotels } from "@/data/hotels";

export const metadata: Metadata = {
  title: "体験・ツアー",
  description: "奄美大島の体験・アクティビティ・ツアーを紹介。マングローブカヌー、シュノーケリング、ホエールウォッチング、大島紬体験など。じゃらんで簡単予約。",
};

export default function ActivitiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">体験・ツアー予約</h1>
        <p className="text-gray-500">奄美大島の自然・文化をもっと深く体験しよう。じゃらんで簡単予約！</p>
      </div>
      <AdBanner slot="5555555555" format="horizontal" className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {activities.map((activity) => <ActivityCard key={activity.name} activity={activity} />)}
      </div>
      <AdBanner slot="6666666666" format="rectangle" className="mb-12 max-w-md mx-auto" />
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">セットで予約するとお得！おすすめ宿泊</h2>
        <p className="text-sm text-gray-500 mb-6">体験ツアーとあわせて宿泊も予約しよう</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {hotels.map((hotel) => <AffiliateHotelCard key={hotel.name} hotel={hotel} />)}
        </div>
      </div>
    </div>
  );
}
