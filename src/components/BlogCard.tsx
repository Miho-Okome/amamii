import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs rounded-full px-3 py-1">
            {post.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">{post.excerpt}</p>
          <p className="text-xs text-gray-400">{post.date}</p>
        </div>
      </div>
    </Link>
  );
}
