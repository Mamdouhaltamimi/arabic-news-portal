import { prisma } from '@/lib/prisma';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: { articles: { where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' } } }
  });
  if (!category) notFound();

  return (
    <main>
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-3 text-sm text-gray-600"><Link href="/">الرئيسية</Link> / {category.name}</nav>
        <h1 className="mb-5 text-3xl font-bold">{category.name}</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {category.articles.map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
}
