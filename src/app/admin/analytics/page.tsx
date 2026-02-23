import { prisma } from '@/lib/prisma';

export default async function AnalyticsPage() {
  const topArticles = await prisma.article.findMany({ orderBy: { views: 'desc' }, take: 5 });
  const topCategories = await prisma.category.findMany({ include: { _count: { select: { articles: true } } }, take: 5 });

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-bold">التحليلات</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded bg-white p-4 shadow"><h2 className="mb-2 font-bold">الأكثر مشاهدة</h2>{topArticles.map((a) => <p key={a.id}>{a.title} ({a.views})</p>)}</div>
        <div className="rounded bg-white p-4 shadow"><h2 className="mb-2 font-bold">الأقسام النشطة</h2>{topCategories.map((c) => <p key={c.id}>{c.name} ({c._count.articles})</p>)}</div>
      </div>
    </main>
  );
}
