import { MetadataRoute } from "next";
import { spots } from "@/data/spots";
import { blogPosts } from "@/data/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amami-shimatabi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/spots`, priority: 0.9 },
    { url: `${baseUrl}/gourmet`, priority: 0.9 },
    { url: `${baseUrl}/activities`, priority: 0.9 },
    { url: `${baseUrl}/stay`, priority: 0.9 },
    { url: `${baseUrl}/events`, priority: 0.85 },
    { url: `${baseUrl}/workation`, priority: 0.85 },
    { url: `${baseUrl}/access`, priority: 0.8 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
    { url: `${baseUrl}/privacy`, priority: 0.3 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  const spotPages = spots.map((spot) => ({
    url: `${baseUrl}/spots/${spot.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...spotPages, ...blogPages];
}
