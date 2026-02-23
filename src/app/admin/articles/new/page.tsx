import { prisma } from '@/lib/prisma';

export default async function NewArticlePage() {
  const categories = await prisma.category.findMany();

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-2xl font-bold">إنشاء مقال</h1>
      <form action="/api/articles" method="post" className="space-y-3">
        <input name="title" className="w-full rounded border p-2" placeholder="العنوان" required />
        <textarea name="excerpt" className="w-full rounded border p-2" placeholder="المقدمة" />
        <select name="categoryId" className="w-full rounded border p-2">
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input name="coverImage" className="w-full rounded border p-2" placeholder="رابط الصورة" />
        <textarea name="content" className="h-64 w-full rounded border p-2" placeholder="المحتوى (يدعم HTML RTL)" required />
        <button className="rounded bg-brand.red px-5 py-2 text-white">حفظ ونشر</button>
      </form>
    </main>
  );
}
