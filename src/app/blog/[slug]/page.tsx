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
import TableOfContents, { extractTocItems } from "@/components/TableOfContents";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amami-shimatabi.com";
  const tocItems = extractTocItems(post.content);

  return (
    <div>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        url={`${siteUrl}/blog/${post.slug}`}
      />

      {/* Navy article header */}
      <div className="bg-[#1b3d5c] text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-gray-400 mb-5">
            <Link href="/" className="hover:text-[#c4954a]">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#c4954a]">ブログ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300 line-clamp-1">{post.title}</span>
          </nav>
          <span className="text-[#c4954a] text-[10px] font-bold tracking-widest uppercase block mb-3">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4">{post.title}</h1>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
          <span className="text-gray-400 text-xs">{post.date}</span>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <AdBanner slot="1010101010" format="horizontal" className="mb-10" />

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Article body */}
          <article className="lg:col-span-2">
            <div className="prose-article">
              {post.content.trim().split("\n\n").map((para, i) => {
                if (para.startsWith("## ")) {
                  const text = para.replace("## ", "").trim();
                  const id = `h-${text.replace(/\s+/g, "-").replace(/[^\w぀-鿿-]/g, "")}`;
                  return <h2 key={i} id={id}>{text}</h2>;
                }
                if (para.startsWith("### ")) {
                  const text = para.replace("### ", "").trim();
                  const id = `h-${text.replace(/\s+/g, "-").replace(/[^\w぀-鿿-]/g, "")}`;
                  return <h3 key={i} id={id}>{text}</h3>;
                }
                if (para.startsWith("- ")) {
                  const items = para.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i}>
                      {items.map((item, j) => (
                        <li key={j}>{item.replace(/^- /, "").replace(/\*\*/g, "")}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            <div className="flex flex-wrap gap-2 mt-8 mb-10">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-[#f5f0e8] text-[#c4954a] text-xs px-3 py-1">
                  #{tag}
                </span>
              ))}
            </div>

            <AdBanner slot="1212121212" format="rectangle" className="mb-10 max-w-md mx-auto" />

            <div className="border-t border-[#ede8e0] pt-8 mb-8">
              <h2 className="font-bold text-[#1b3d5c] text-lg mb-5">奄美大島への旅を予約しよう</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {hotels.slice(0, 2).map((hotel) => (
                  <AffiliateHotelCard key={hotel.name} hotel={hotel} />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.slice(0, 2).map((a) => (
                  <ActivityCard key={a.name} activity={a} />
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block border border-[#1b3d5c] text-[#1b3d5c] px-8 py-3 text-sm font-medium hover:bg-[#1b3d5c] hover:text-white transition-colors tracking-wide"
              >
                ← ブログ一覧に戻る
              </Link>
            </div>
          </article>

          {/* TOC sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
}
