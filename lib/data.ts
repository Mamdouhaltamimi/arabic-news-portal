import { cache } from 'react';

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: { name: string; slug: string };
  author: { name: string };
  tags: string[];
  publishedAt: Date;
  views: number;
};

const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'خطة تنموية جديدة لتعزيز الاقتصاد المحلي خلال 2026',
    slug: 'economic-development-plan-2026',
    excerpt: 'الحكومة تعلن عن حزمة مشاريع تنموية تشمل البنية التحتية وفرص العمل.',
    content: '<p>أعلنت الحكومة اليوم عن إطلاق خطة تنموية واسعة...</p><p>وتشمل الخطة تحسين الخدمات الرقمية وتعزيز الاستثمار في قطاعات الصناعة.</p>',
    coverImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    category: { name: 'متابعات', slug: 'updates' },
    author: { name: 'سارة محمد' },
    tags: ['اقتصاد', 'تنمية'],
    publishedAt: new Date('2026-01-15T08:30:00Z'),
    views: 12800
  },
  {
    id: '2',
    title: 'تحليل: التحول الرقمي في المؤسسات الإعلامية العربية',
    slug: 'digital-transformation-arab-media',
    excerpt: 'خبراء يناقشون تأثير الذكاء الاصطناعي على صناعة الأخبار.',
    content: '<p>يشهد قطاع الإعلام العربي تحولاً متسارعاً...</p>',
    coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop',
    category: { name: 'مقالات', slug: 'articles' },
    author: { name: 'أحمد علي' },
    tags: ['إعلام', 'تقنية'],
    publishedAt: new Date('2026-01-12T10:00:00Z'),
    views: 8700
  }
];

export const getHomeData = cache(async () => {
  return {
    featured: sampleArticles[0],
    latest: sampleArticles,
    breaking: [
      { id: 'b1', text: 'عاجل: تحديثات مباشرة حول القمة الاقتصادية العربية', link: '/article/economic-development-plan-2026' },
      { id: 'b2', text: 'وزارة الصحة تعلن حملة وطنية جديدة للتطعيم', link: '#' }
    ],
    popular: sampleArticles
  };
});

export const getArticleBySlug = cache(async (slug: string) => sampleArticles.find((a) => a.slug === slug));
export const getCategoryArticles = cache(async (slug: string) => sampleArticles.filter((a) => a.category.slug === slug));
export const searchArticles = cache(async (q: string) => sampleArticles.filter((a) => a.title.includes(q) || a.excerpt.includes(q)));
