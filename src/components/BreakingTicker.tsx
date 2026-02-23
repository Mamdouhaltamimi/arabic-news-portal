export function BreakingTicker({ items }: { items: { id: string; text: string }[] }) {
  return (
    <section className="overflow-hidden bg-red-50 border-y border-red-200">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2">
        <span className="rounded bg-brand.red px-3 py-1 text-sm text-white">عاجل</span>
        <div className="relative overflow-hidden whitespace-nowrap text-sm text-gray-800">
          <div className="ticker-track inline-flex gap-8">
            {items.map((item) => (
              <span key={item.id}>• {item.text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
