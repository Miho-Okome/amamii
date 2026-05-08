import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import AdBanner from "@/components/AdBanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "ブログ",
  description: "奄美大島の旅行に役立つ情報をブログ形式で発信。ベストシーズン、グルメ、ダイビング、ホエールウォッチングなど現地情報が満載。",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1b3d5c] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#c4954a] text-[11px] tracking-widest uppercase font-display mb-3">Travel Journal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">奄美島旅ブログ</h1>
          <p className="text-gray-300 text-sm tracking-wide">島の魅力を届ける旅のストーリー</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <AdBanner slot="9999999999" format="horizontal" className="mb-12" />

        {/* Featured article */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c4954a]" />
            <p className="text-[#c4954a] text-[11px] font-bold tracking-widest uppercase">Featured Story</p>
          </div>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-72 md:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center border border-l-0 border-[#ede8e0]">
              <span className="text-[#c4954a] text-[10px] font-bold tracking-widest uppercase mb-3 block">
                {featured.category}
              </span>
              <h2 className="font-bold text-[#1b3d5c] text-xl md:text-2xl leading-snug mb-4 group-hover:text-[#c4954a] transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{featured.date}</span>
                <span className="text-[#c4954a] text-sm font-medium">Read more →</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Latest articles */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#c4954a]" />
          <p className="text-[#c4954a] text-[11px] font-bold tracking-widest uppercase">Latest Articles</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
