import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/data';
import { formatArabicDate } from '@/lib/utils';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow">
      <Image src={article.coverImage} alt={article.title} width={800} height={500} className="h-52 w-full object-cover" />
      <div className="space-y-2 p-4">
        <Link href={`/category/${article.category.slug}`} className="text-sm font-semibold text-brand-red">{article.category.name}</Link>
        <h3 className="text-lg font-bold"><Link href={`/article/${article.slug}`}>{article.title}</Link></h3>
        <p className="text-sm text-slate-600">{article.excerpt}</p>
        <p className="text-xs text-slate-500">{formatArabicDate(article.publishedAt)}</p>
      </div>
    </article>
  );
}
