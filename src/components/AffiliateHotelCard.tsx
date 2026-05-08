import Image from "next/image";
import { Hotel } from "@/data/hotels";

export default function AffiliateHotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-44 w-full">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold text-amber-600">
          {"★".repeat(Math.floor(hotel.rating))} {hotel.rating}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-gray-800 text-sm">{hotel.name}</h3>
          <span className="text-xs bg-teal-50 text-teal-700 rounded px-2 py-0.5 whitespace-nowrap">{hotel.area}</span>
        </div>
        <p className="text-xs text-gray-500 mb-2 leading-relaxed">{hotel.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {hotel.features.map((f) => (
            <span key={f} className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">{f}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-teal-700 font-bold text-sm">{hotel.priceRange}<span className="text-xs text-gray-400 font-normal">/泊〜</span></span>
          <a
            href={hotel.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            楽天で予約
          </a>
        </div>
      </div>
    </div>
  );
}
