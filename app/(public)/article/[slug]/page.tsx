import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { getArticleBySlug, getHomeData } from '@/lib/data';
import { formatArabicDate } from '@/lib/utils';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  const related = (await getHomeData()).latest.slice(0, 2);
  if (!article) return notFound();

  return (
    <main>
      <SiteHeader />
      <article className="mx-auto max-w-4xl space-y-5 px-4 py-8">
        <p className="text-sm text-brand-red">{article.category.name}</p>
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <p className="text-sm text-slate-500">بقلم {article.author.name} - {formatArabicDate(article.publishedAt)}</p>
        <Image src={article.coverImage} alt={article.title} width={1200} height={650} className="rounded-xl object-cover" />
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        <div className="flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-sm">#{tag}</span>)}</div>
        <section>
          <h2 className="mb-2 text-2xl font-bold">مقالات ذات صلة</h2>
          {related.map((item) => <p key={item.id} className="py-1">• {item.title}</p>)}
        </section>
      </article>
    </main>
  );
}
