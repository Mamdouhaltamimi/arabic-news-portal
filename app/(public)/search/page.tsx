import { ArticleCard } from '@/components/article-card';
import { SiteHeader } from '@/components/site-header';
import { searchArticles } from '@/lib/data';

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? '';
  const results = await searchArticles(q);
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-4 text-2xl font-bold">نتائج البحث عن: {q}</h1>
        <div className="grid gap-4 md:grid-cols-2">{results.map((article) => <ArticleCard key={article.id} article={article} />)}</div>
      </div>
    </main>
  );
}
