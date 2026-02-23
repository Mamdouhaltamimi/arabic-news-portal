import Link from 'next/link';
import Image from 'next/image';
import { arDate } from '@/lib/utils';

export function ArticleCard({ article }: { article: any }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow">
      {article.coverImage && (
        <Image src={article.coverImage} width={600} height={320} alt={article.title} className="h-44 w-full object-cover" />
      )}
      <div className="space-y-2 p-4">
        <p className="text-xs text-gray-500">{arDate(article.publishedAt ?? article.createdAt)}</p>
        <h3 className="line-clamp-2 text-lg font-bold">
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="line-clamp-2 text-sm text-gray-700">{article.excerpt}</p>
      </div>
    </article>
  );
}
