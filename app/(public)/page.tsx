import Image from 'next/image';
import { ArticleCard } from '@/components/article-card';
import { BreakingTicker } from '@/components/breaking-ticker';
import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { getHomeData } from '@/lib/data';
import { formatArabicDate, toArabicNumerals } from '@/lib/utils';

export default async function HomePage() {
  const data = await getHomeData();

  return (
    <main>
      <SiteHeader />
      <BreakingTicker items={data.breaking} />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          <article className="relative overflow-hidden rounded-xl">
            <Image src={data.featured.coverImage} alt={data.featured.title} width={1200} height={650} className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white flex flex-col justify-end">
              <p className="text-sm">{formatArabicDate(data.featured.publishedAt)}</p>
              <h2 className="text-3xl font-bold">{data.featured.title}</h2>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2">
            {data.latest.map((article) => <ArticleCard key={article.id} article={article} />)}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-lg bg-white p-4 shadow"><h3 className="mb-2 font-bold text-brand-red">إعلان - أعلى الشريط الجانبي</h3><div className="h-36 rounded bg-slate-200" /></div>
          <div className="rounded-lg bg-white p-4 shadow"><h3 className="mb-2 font-bold">الأكثر قراءة</h3>{data.popular.map((a) => <p key={a.id} className="border-b py-2 text-sm">{a.title} ({toArabicNumerals(a.views)})</p>)}</div>
          <div className="rounded-lg bg-white p-4 shadow"><h3 className="mb-2 font-bold">وسوم</h3><div className="flex flex-wrap gap-2">{['اقتصاد', 'سياسة', 'تقنية'].map((tag) => <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-xs">#{tag}</span>)}</div></div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}
