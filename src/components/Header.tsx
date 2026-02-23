import Link from 'next/link';
import { arDate } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/category/mtabat', label: 'متابعات' },
  { href: '/category/mqalat', label: 'مقالات' },
  { href: '/category/hashtaj', label: 'هاشتاج' },
  { href: '/contact', label: 'تواصل معنا' }
];

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="bg-brand.red px-4 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>{arDate(new Date())}</span>
          <div className="flex gap-3">
            <a href="#">فيسبوك</a>
            <a href="#">يوتيوب</a>
            <a href="#">إكس</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand.red">بوابة الأخبار العربية</h1>
          <p className="text-sm text-gray-600">عين عربية على الحدث لحظة بلحظة</p>
        </div>
        <form action="/search" className="flex w-full max-w-md gap-2">
          <input name="q" className="w-full rounded-md border p-2" placeholder="ابحث في الأخبار..." />
          <button className="rounded-md bg-brand.red px-4 py-2 text-white">بحث</button>
        </form>
      </div>
      <nav className="bg-brand.dark text-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-6 px-4 py-3 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-red-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
