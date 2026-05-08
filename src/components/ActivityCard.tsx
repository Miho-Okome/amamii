import Image from "next/image";
import { Activity } from "@/data/hotels";

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-40 w-full">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-2 left-2 bg-teal-600 text-white text-xs rounded-full px-3 py-1">
          {activity.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-1">{activity.name}</h3>
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">{activity.description}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span>⏱ {activity.duration}</span>
          <span>💴 {activity.price}</span>
        </div>
        <a
          href={activity.bookingUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold py-2 rounded-lg transition-colors"
        >
          じゃらんで予約
        </a>
      </div>
    </div>
  );
}
