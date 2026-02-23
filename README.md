# Arabic RTL News Portal

بوابة أخبار عربية RTL مبنية بـ Next.js 14 + TypeScript + Tailwind + PostgreSQL/Prisma + NextAuth.

## الميزات
- واجهة عربية RTL كاملة مع خطوط Cairo/Tajawal.
- الصفحة الرئيسية: هيدر، شريط عاجل، سلايدر مميز، أقسام، شريط جانبي، إعلانات.
- صفحات: تصنيف، مقال، بحث، من نحن، تواصل، خصوصية.
- لوحة إدارة: مقالات، أقسام، أخبار عاجلة، إعلانات، تحليلات.
- API routes لإدارة المقالات، التصنيفات، الأخبار العاجلة، نموذج التواصل.
- تحسين SEO: `metadata`, OpenGraph, canonical, sitemap, robots.

## التشغيل محلياً
```bash
cp .env.example .env
npm install
npx prisma migrate dev
npm run prisma:seed
npm run dev
```

## الحساب التجريبي
- Email: `admin@news.local`
- Password: `Admin@123`

## Prisma
- ملف المخطط: `prisma/schema.prisma`
- ملف seed: `prisma/seed.ts`

## النشر
### Vercel + Supabase/Neon
1. أنشئ DB PostgreSQL على Supabase/Neon وخذ `DATABASE_URL`.
2. اربط المشروع على Vercel.
3. أضف متغيرات البيئة من `.env.example`.
4. شغّل migration عبر `npx prisma migrate deploy`.

### VPS + Docker + Nginx
1. `cp .env.example .env` ثم حدّث القيم.
2. `docker compose up -d --build`.
3. اجعل Nginx reverse proxy للمنفذ 3000.

