import { Header } from '@/components/Header';
import { BreakingTicker } from '@/components/BreakingTicker';
import { ArticleCard } from '@/components/ArticleCard';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const revalidate = 120;

export default async function HomePage() {
  const [featured, latest, breaking, popular, ads, categories] = await Promise.all([
    prisma.article.findMany({ where: { status: 'PUBLISHED' }, orderBy: { featuredRank: 'asc' }, take: 3 }),
    prisma.article.findMany({ where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' }, take: 8 }),
    prisma.breakingNews.findMany({ where: { active: true }, orderBy: { priority: 'asc' }, take: 8 }),
    prisma.article.findMany({ where: { status: 'PUBLISHED' }, orderBy: { views: 'desc' }, take: 6 }),
    prisma.adSlot.findMany({ where: { active: true, placement: { startsWith: 'sidebar' } }, take: 2 }),
    prisma.category.findMany({ take: 3, include: { articles: { where: { status: 'PUBLISHED' }, take: 3, orderBy: { publishedAt: 'desc' } } } })
  ]);

  return (
    <main>
      <Header />
      <BreakingTicker items={breaking} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((article) => (
              <div key={article.id} className="relative overflow-hidden rounded-lg bg-black text-white">
                <img src={article.coverImage ?? ''} alt={article.title} className="h-64 w-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-end p-4">
                  <Link href={`/article/${article.slug}`} className="text-lg font-bold leading-7">{article.title}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {categories.map((category) => (
            <section key={category.id} className="space-y-3 rounded-lg bg-white p-4 shadow">
              <h2 className="border-r-4 border-brand.red pr-3 text-xl font-bold">{category.name}</h2>
              <div className="grid gap-3 md:grid-cols-3">
                {category.articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="lg:col-span-4">
          <Sidebar popular={popular} ads={ads} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
