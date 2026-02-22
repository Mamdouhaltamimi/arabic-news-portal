import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' });

export const metadata: Metadata = {
  metadataBase: new URL('https://example-news-ar.com'),
  title: {
    default: 'البوابة العربية للأخبار',
    template: '%s | البوابة العربية للأخبار'
  },
  description: 'بوابة إخبارية عربية شاملة بتصميم RTL حديث وتغطية على مدار الساعة.',
  openGraph: {
    title: 'البوابة العربية للأخبار',
    description: 'أخبار عاجلة، مقالات، وتحليلات من العالم العربي.',
    type: 'website',
    locale: 'ar_AR'
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>{children}</body>
    </html>
  );
}
