import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await prisma.article.findMany({ where: { status: 'PUBLISHED' } });
  return [
    { url: 'https://example.com', changeFrequency: 'hourly', priority: 1 },
    ...articles.map((a) => ({ url: `https://example.com/article/${a.slug}`, changeFrequency: 'daily' as const, priority: 0.8 }))
  ];
}
