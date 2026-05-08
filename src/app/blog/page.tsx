import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import AdBanner from "@/components/AdBanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "ブログ",
  description: "奄美大島の旅行に役立つ情報をブログ形式で発信。ベストシーズン、グルメ、ダイビング、ホエールウォッチングなど現地情報が満載。",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">奄美島旅ブログ</h1>
        <p className="text-gray-500">奄美大島旅行のお役立ち情報を発信しています。旅行計画にじっくご活用ください。</p>
      </div>
      <AdBanner slot="9999999999" format="horizontal" className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
