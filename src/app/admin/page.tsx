import Link from 'next/link';

const cards = [
  ['إدارة المقالات', '/admin/articles'],
  ['الأخبار العاجلة', '/admin/breaking-news'],
  ['التصنيفات', '/admin/categories'],
  ['الوسائط', '/admin/media'],
  ['الإعلانات', '/admin/ads'],
  ['التحليلات', '/admin/analytics']
];

export default function AdminHome() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold">لوحة التحكم</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(([title, href]) => (
          <Link key={href} href={href} className="rounded-lg bg-white p-5 shadow hover:ring-2 hover:ring-brand.red">
            {title}
          </Link>
        ))}
      </div>
    </main>
  );
}
