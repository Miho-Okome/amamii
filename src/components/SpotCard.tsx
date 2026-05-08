import Image from "next/image";
import Link from "next/link";
import { Spot } from "@/data/spots";

export default function SpotCard({ spot }: { spot: Spot }) {
  return (
    <Link href={`/spots/${spot.slug}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={spot.image}
            alt={spot.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute top-2 left-2 bg-teal-600 text-white text-xs rounded-full px-3 py-1">
            {spot.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-1 group-hover:text-teal-600 transition-colors">{spot.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">{spot.description}</p>
          <p className="text-xs text-gray-400">📍 {spot.access}</p>
        </div>
      </div>
    </Link>
  );
}
