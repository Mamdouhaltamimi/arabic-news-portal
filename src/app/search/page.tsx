import { prisma } from '@/lib/prisma';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? '';
  const results = q
    ? await prisma.article.findMany({
        where: { status: 'PUBLISHED', OR: [{ title: { contains: q, mode: 'insensitive' } }, { excerpt: { contains: q, mode: 'insensitive' } }] },
        take: 20
      })
    : [];

  return (
    <main>
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-5 text-2xl font-bold">نتائج البحث عن: {q}</h1>
        <div className="grid gap-4 md:grid-cols-3">{results.map((article) => <ArticleCard key={article.id} article={article} />)}</div>
      </div>
      <Footer />
    </main>
  );
}
