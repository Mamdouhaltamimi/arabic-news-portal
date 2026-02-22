const cards = [
  { title: 'إدارة المقالات', desc: 'إنشاء وتحرير ونشر أو إلغاء نشر المقالات' },
  { title: 'الأخبار العاجلة', desc: 'إدارة شريط الأخبار العاجلة وترتيب الأولوية' },
  { title: 'الإعلانات', desc: 'إدارة مواضع الإعلانات وتتبع النقرات والمشاهدات' },
  { title: 'الوسائط', desc: 'مكتبة الصور والملفات المرفوعة' }
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold">لوحة التحكم</h1>
      <p className="text-slate-600">أدوار النظام: Admin, Editor, Author</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <section key={card.title} className="rounded-lg bg-white p-5 shadow">
            <h2 className="text-xl font-bold text-brand-red">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
