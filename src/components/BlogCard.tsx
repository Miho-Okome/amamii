import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-5 border-b border-[#ede8e0]">
          <span className="text-[#c4954a] text-[10px] font-bold tracking-widest uppercase block mb-2">
            {post.category}
          </span>
          <h3 className="font-bold text-[#1b3d5c] text-sm leading-snug line-clamp-2 group-hover:text-[#c4954a] transition-colors">
            {post.title}
          </h3>
        </div>
        <div className="px-5 py-3 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">{post.date}</span>
          <span className="text-[#c4954a] text-xs font-medium">Read more →</span>
        </div>
      </div>
    </Link>
  );
}
