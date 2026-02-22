import { ArticleCard } from '@/components/article-card';
import { SiteHeader } from '@/components/site-header';
import { getCategoryArticles } from '@/lib/data';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const articles = await getCategoryArticles(params.slug);

  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <p className="text-sm text-slate-500">الرئيسية / القسم / {params.slug}</p>
        <h1 className="mb-6 mt-2 text-3xl font-bold">قسم: {params.slug}</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
      </div>
    </main>
  );
}
