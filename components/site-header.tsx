import Link from 'next/link';
import { formatArabicDate } from '@/lib/utils';

const nav = ['الرئيسية', 'متابعات', 'مقالات', 'هاشتاج', 'تواصل معنا'];

export function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <span>{formatArabicDate(new Date())}</span>
          <div className="flex gap-3">
            <a href="#">فيسبوك</a><a href="#">يوتيوب</a><a href="#">إكس</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-red">البوابة العربية للأخبار</h1>
          <p className="text-sm text-slate-500">نبض الخبر من قلب الحدث</p>
        </div>
        <form className="flex w-full max-w-md items-center gap-2">
          <input className="w-full rounded-md border p-2" placeholder="ابحث في الأخبار..." />
          <button className="rounded-md bg-brand-red px-4 py-2 text-white">بحث</button>
        </form>
      </div>
      <nav className="bg-brand-red text-white">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-6 px-4 py-3 font-semibold">
          {nav.map((item) => (
            <li key={item}>
              <Link href={item === 'الرئيسية' ? '/' : '#'}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
