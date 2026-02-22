import type { Metadata } from 'next';
import { Cairo, Tajawal } from 'next/font/google';
import './globals.css';

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });
const tajawal = Tajawal({ subsets: ['arabic'], variable: '--font-tajawal', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'بوابة الأخبار العربية',
  description: 'منصة أخبار عربية متكاملة بتصميم RTL',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'بوابة الأخبار العربية',
    description: 'أحدث الأخبار العربية على مدار الساعة',
    locale: 'ar_AR',
    type: 'website'
  },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${tajawal.variable} font-cairo`}>{children}</body>
    </html>
  );
}
