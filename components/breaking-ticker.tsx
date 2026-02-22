import Link from 'next/link';

export function BreakingTicker({ items }: { items: { id: string; text: string; link: string }[] }) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-hidden px-4 py-2">
        <span className="rounded bg-brand-red px-3 py-1 font-bold">عاجل</span>
        <div className="ticker whitespace-nowrap">
          {items.map((item) => (
            <Link key={item.id} href={item.link} className="mx-8 inline-block hover:text-red-300">{item.text}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
