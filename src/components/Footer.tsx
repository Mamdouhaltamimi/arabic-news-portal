import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-10 bg-brand.dark py-10 text-gray-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">بوابة الأخبار العربية</h3>
          <p className="text-sm">تغطية عربية احترافية للأحداث السياسية والاقتصادية والثقافية.</p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-white">روابط مهمة</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/privacy">الخصوصية</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-white">وسائل التواصل</h3>
          <p className="text-sm">Facebook / YouTube / X</p>
        </div>
      </div>
    </footer>
  );
}
