import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example-news-ar.com';
  return [
    { url: `${base}/`, changeFrequency: 'hourly', priority: 1 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.5 }
  ];
}
