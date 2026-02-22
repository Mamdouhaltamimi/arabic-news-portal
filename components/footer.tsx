export function Footer() {
  return (
    <footer className="mt-12 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div><h4 className="mb-2 font-bold">حول الموقع</h4><p className="text-sm text-slate-300">منصة إخبارية عربية تقدم آخر الأخبار والتحليلات.</p></div>
        <div><h4 className="mb-2 font-bold">روابط</h4><ul className="space-y-1 text-sm text-slate-300"><li>من نحن</li><li>سياسة الخصوصية</li><li>اتصل بنا</li></ul></div>
        <div><h4 className="mb-2 font-bold">النشرة البريدية</h4><input className="w-full rounded p-2 text-black" placeholder="بريدك الإلكتروني" /></div>
      </div>
    </footer>
  );
}
