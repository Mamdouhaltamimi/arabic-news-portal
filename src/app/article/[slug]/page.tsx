import { prisma } from '@/lib/prisma';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { arDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
    include: { author: true, category: true, tags: { include: { tag: true } } }
  });
  if (!article) notFound();

  const related = await prisma.article.findMany({
    where: { categoryId: article.categoryId, id: { not: article.id }, status: 'PUBLISHED' },
    take: 3
  });

  return (
    <main>
      <Header />
      <article className="mx-auto max-w-4xl bg-white px-4 py-8 shadow sm:px-8">
        <p className="mb-2 text-sm text-brand.red">{article.category.name}</p>
        <h1 className="mb-3 text-4xl font-bold leading-tight">{article.title}</h1>
        <p className="mb-4 text-sm text-gray-500">{article.author.name} • {arDate(article.publishedAt ?? article.createdAt)}</p>
        {article.coverImage && <img src={article.coverImage} alt={article.title} className="mb-5 h-96 w-full rounded object-cover" />}
        <div className="prose max-w-none prose-headings:text-right prose-p:text-right" dangerouslySetInnerHTML={{ __html: article.content }} />
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => <span key={tag.tagId} className="rounded bg-gray-200 px-3 py-1 text-sm">#{tag.tag.name}</span>)}
        </div>
      </article>
      <section className="mx-auto mt-6 max-w-4xl px-4 pb-8">
        <h2 className="mb-3 text-2xl font-bold">أخبار ذات صلة</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((r) => <a key={r.id} href={`/article/${r.slug}`} className="rounded bg-white p-3 shadow">{r.title}</a>)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
