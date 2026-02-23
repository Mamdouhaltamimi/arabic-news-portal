import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function AdminArticlesPage() {
  const articles = await prisma.article.findMany({ include: { category: true }, orderBy: { updatedAt: 'desc' } });

  return (
    <main className="p-8">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">المقالات</h1>
        <Link href="/admin/articles/new" className="rounded bg-brand.red px-4 py-2 text-white">مقال جديد</Link>
      </div>
      <table className="w-full overflow-hidden rounded bg-white shadow">
        <thead className="bg-gray-100 text-right"><tr><th className="p-3">العنوان</th><th>القسم</th><th>الحالة</th></tr></thead>
        <tbody>
          {articles.map((a) => <tr key={a.id} className="border-t"><td className="p-3">{a.title}</td><td>{a.category.name}</td><td>{a.status}</td></tr>)}
        </tbody>
      </table>
    </main>
  );
}
