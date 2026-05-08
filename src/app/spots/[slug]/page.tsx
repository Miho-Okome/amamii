import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spots, getSpotBySlug } from "@/data/spots";
import AdBanner from "@/components/AdBanner";
import AffiliateHotelCard from "@/components/AffiliateHotelCard";
import { TouristAttractionSchema } from "@/components/JsonLd";
import { hotels } from "@/data/hotels";

export function generateStaticParams() {
  return spots.map((spot) => ({ slug: spot.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);
  if (!spot) return {};
  return { title: spot.name, description: spot.description };
}

export default async function SpotDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spot = getSpotBySlug(slug);
  if (!spot) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <TouristAttractionSchema name={spot.name} description={spot.description} image={spot.image} address={`奄美大島 ${spot.access}`} />
      <nav className="text-xs text-gray-400 mb-4">
        <Link href="/" className="hover:text-teal-600">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/spots" className="hover:text-teal-600">観光スポット</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{spot.name}</span>
      </nav>
      <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">{spot.category}</span>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{spot.name}</h1>
      <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden mb-6">
        <Image src={spot.image} alt={spot.name} fill className="object-cover" priority />
      </div>
      <div className="prose max-w-none mb-8">
        <p className="text-gray-600 leading-relaxed text-base mb-4">{spot.longDescription}</p>
        <div className="bg-teal-50 rounded-xl p-4 mb-4">
          <h2 className="text-base font-bold text-teal-800 mb-2">📍 アクセス</h2>
          <p className="text-sm text-gray-600">{spot.access}</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-4">
          <h2 className="text-base font-bold text-amber-800 mb-2">💡 旅のヒント</h2>
          <ul className="space-y-1">
            {spot.tips.map((tip) => (
              <li key={tip} className="text-sm text-gray-600 flex gap-2"><span className="text-amber-500 mt-0.5">•</span>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
      <AdBanner slot="2222222222" format="rectangle" className="mb-8" />
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">周辺の宿泊施設</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hotels.slice(0, 2).map((hotel) => (
            <AffiliateHotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link href="/spots" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors">← 観光スポット一覧に戻る</Link>
      </div>
    </article>
  );
}
