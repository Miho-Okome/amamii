import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import AdBanner from "@/components/AdBanner";
import AffiliateHotelCard from "@/components/AffiliateHotelCard";
import ActivityCard from "@/components/ActivityCard";
import { ArticleSchema } from "@/components/JsonLd";
import { hotels, activities } from "@/data/hotels";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, keywords: post.tags };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amami-shimatabi.com";

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <ArticleSchema title={post.title} description={post.excerpt} image={post.image} datePublished={post.date} url={`${siteUrl}/blog/${post.slug}`} />
      <nav className="text-xs text-gray-400 mb-4">
        <Link href="/" className="hover:text-teal-600">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-teal-600">ブログ</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600 line-clamp-1">{post.title}</span>
      </nav>
      <div className="mb-3 flex items-center gap-2">
        <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
        <span className="text-xs text-gray-400">{post.date}</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
      <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-8">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>
      <AdBanner slot="1010101010" format="horizontal" className="mb-8" />
      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
        {post.content.trim().split("\n\n").map((para, i) => {
          if (para.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-gray-800 mt-8 mb-3">{para.replace("## ", "")}</h2>;
          if (para.startsWith("### ")) return <h3 key={i} className="text-base font-bold text-gray-700 mt-5 mb-2">{para.replace("### ", "")}</h3>;
          if (para.startsWith("- ")) {
            const items = para.split("\n").filter((l) => l.startsWith("- "));
            return <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-sm">{items.map((item, j) => <li key={j}>{item.replace("- ", "")}</li>)}</ul>;
          }
          return <p key={i} className="mb-4 text-sm">{para}</p>;
        })}
      </div>
      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {post.tags.map((tag) => <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">#{tag}</span>)}
      </div>
      <AdBanner slot="1212121212" format="rectangle" className="mb-8 max-w-md mx-auto" />
      <div className="border-t border-gray-100 pt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">奄美大島への旅を予約しよう</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {hotels.slice(0, 2).map((hotel) => <AffiliateHotelCard key={hotel.name} hotel={hotel} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.slice(0, 2).map((a) => <ActivityCard key={a.name} activity={a} />)}
        </div>
      </div>
      <div className="text-center">
        <Link href="/blog" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors">← ブログ一覧に戻る</Link>
      </div>
    </article>
  );
}
