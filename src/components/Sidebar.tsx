import Link from 'next/link';

export function Sidebar({ popular, ads }: { popular: any[]; ads: any[] }) {
  return (
    <aside className="space-y-4">
      {ads.map((ad) => (
        <a key={ad.id} href={ad.link ?? '#'} className="block rounded-lg bg-white p-2 shadow">
          <img src={ad.image} alt={ad.name} className="h-40 w-full rounded object-cover" />
        </a>
      ))}
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="mb-3 border-b pb-2 font-bold text-brand.red">الأكثر قراءة</h3>
        <ul className="space-y-2 text-sm">
          {popular.map((item) => (
            <li key={item.id}>
              <Link href={`/article/${item.slug}`} className="hover:text-brand.red">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-brand.dark p-4 text-white shadow">
        <h3 className="mb-2 font-bold">اشترك في النشرة البريدية</h3>
        <input className="mb-2 w-full rounded p-2 text-black" placeholder="البريد الإلكتروني" />
        <button className="w-full rounded bg-brand.red p-2">اشتراك</button>
      </div>
    </aside>
  );
}
