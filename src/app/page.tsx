import Image from "next/image";
import Link from "next/link";
import SpotCard from "@/components/SpotCard";
import BlogCard from "@/components/BlogCard";
import AffiliateHotelCard from "@/components/AffiliateHotelCard";
import ActivityCard from "@/components/ActivityCard";
import AdBanner from "@/components/AdBanner";
import { spots } from "@/data/spots";
import { blogPosts } from "@/data/blog";
import { hotels, activities } from "@/data/hotels";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85"
          alt="奄美大島の美しい海"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-sm md:text-base font-medium mb-3 tracking-widest uppercase opacity-90">
            Amami Oshima Travel Guide
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            奄美大島へ、
            <br />
            ようこそ。
          </h1>
          <p className="text-base md:text-xl mb-8 max-w-xl leading-relaxed opacity-90">
            東洋のガラパゴスと呼ばれる奄美大島。<br className="hidden md:block" />
            美しい海、豊かな自然、独自の食文化を堪能しよう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/spots"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              観光スポットを見る
            </Link>
            <Link
              href="/activities"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-full transition-colors border border-white/50"
            >
              体験・ツアーを予約
            </Link>
          </div>
        </div>
      </section>

      {/* 統計バー */}
      <section className="bg-teal-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: "712km²", label: "島の面積" },
            { num: "約5万人", label: "島の人口" },
            { num: "10,000種以上", label: "動植物の種類" },
            { num: "世界自然遺産", label: "2021年登録" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-xl md:text-2xl font-bold">{item.num}</div>
              <div className="text-xs opacity-80 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 広告バナー */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <AdBanner slot="1234567890" format="horizontal" className="w-full" />
      </div>

      {/* 観光スポット */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">人気の観光スポット</h2>
            <p className="text-sm text-gray-500 mt-1">奄美大島の絶景・自然・文化スポットを紹介</p>
          </div>
          <Link href="/spots" className="text-teal-600 text-sm font-medium hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {spots.slice(0, 3).map((spot) => (
            <SpotCard key={spot.slug} spot={spot} />
          ))}
        </div>
      </section>

      {/* 体験・アクティビティ（アフィリエイト） */}
      <section className="bg-teal-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">人気の体験・ツアー</h2>
              <p className="text-sm text-gray-500 mt-1">じゃらんで簡単予約！奄美の体験を満喫しよう</p>
            </div>
            <Link href="/activities" className="text-teal-600 text-sm font-medium hover:underline">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {activities.slice(0, 3).map((a) => (
              <ActivityCard key={a.name} activity={a} />
            ))}
          </div>
        </div>
      </section>

      {/* 広告 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <AdBanner slot="0987654321" format="rectangle" className="w-full max-w-md mx-auto" />
      </div>

      {/* おすすめ宿泊（楽天アフィリエイト） */}
      <section className="max-w-6xl mx-auto px-4 py-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">おすすめ宿泊施設</h2>
            <p className="text-sm text-gray-500 mt-1">楽天トラベルで最安値をチェック</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {hotels.map((hotel) => (
            <AffiliateHotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </section>

      {/* 奄美の魅力セクション */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">奄美大島の4つの魅力</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🐢", title: "豊かな自然", desc: "世界自然遺産に登録された手つかずの自然と多様な生き物" },
              { icon: "🌊", title: "美しい海", desc: "透明度抜群のサンゴ礁の海。ダイビングやシュノーケルが人気" },
              { icon: "🍚", title: "独自のグルメ", desc: "鶏飯、黒糖焼酎、郷土料理など他では味わえない食文化" },
              { icon: "🎵", title: "島の文化", desc: "島唄、大島紬など奄美固有の伝統文化が今も息づく" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ブログ記事 */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">旅行ガイドブログ</h2>
            <p className="text-sm text-gray-500 mt-1">奄美大島を深く知るためのお役立ち情報</p>
          </div>
          <Link href="/blog" className="text-teal-600 text-sm font-medium hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTAバナー */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">奄美大島への旅を計画しよう</h2>
          <p className="text-sm md:text-base opacity-90 mb-6">
            宿泊・ツアーの予約から観光情報まで、奄美島旅がサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://travel.rakuten.co.jp/place/kagoshima/amami/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              楽天トラベルで宿を探す
            </a>
            <a
              href="https://www.jalan.net/kankou/spt_46209ac2290000001/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-white text-teal-700 font-bold px-8 py-3 rounded-full transition-colors hover:bg-gray-100"
            >
              じゃらんでツアーを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
