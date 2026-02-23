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
npx prisma generate
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
1. أنشئ DB PostgreSQL على Supabase/Neon وخذ `DATABASE_URL` (pooler) و`DIRECT_URL` (direct connection).
2. اربط المشروع على Vercel.
3. أضف متغيرات البيئة من `.env.example`.
4. شغّل migration عبر `npx prisma migrate deploy`.

### VPS + Docker + Nginx
1. `cp .env.example .env` ثم حدّث القيم.
2. `docker compose up -d --build`.
3. اجعل Nginx reverse proxy للمنفذ 3000.



### ملاحظة مهمة لـ Supabase
- استخدم `DATABASE_URL` لعنوان pooler (عادة المنفذ `6543`) للتشغيل العادي.
- استخدم `DIRECT_URL` لعنوان الاتصال المباشر (عادة `db.<project-ref>.supabase.co:5432`) لأن `prisma migrate dev` قد يفشل عبر pooler.
- تأكد من إضافة `sslmode=require` في روابط Supabase.


## أين أعدّل؟ (للتشغيل على جهازك)
- ملف قاعدة البيانات: `.env`
  - عدّل `DATABASE_URL` (اتصال التطبيق/أو pooler).
  - عدّل `DIRECT_URL` (اتصال مباشر للمهاجرات في Prisma).
- ملف Prisma: `prisma/schema.prisma`
  - لا تعدّل سطر الاتصال غالبًا؛ فقط تأكد أن datasource يستخدم:
    - `url = env("DATABASE_URL")`
    - `directUrl = env("DIRECT_URL")`

### مثال Supabase (داخل `.env`)
```env
DATABASE_URL="postgresql://postgres.<ref>:<PASSWORD>@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&sslmode=require"
DIRECT_URL="postgresql://postgres.<ref>:<PASSWORD>@db.<ref>.supabase.co:5432/postgres?sslmode=require"
```

بعد الحفظ شغّل:
```bash
npx prisma migrate dev
npm run prisma:seed
npm run dev
```


### إذا أدخلت رابط Supabase وما زالت المشكلة موجودة
إذا وضعت فقط `DATABASE_URL` (مثل المثال الذي أرسلته) فغالبًا `prisma migrate dev` سيفشل.
لازم تضيف **أيضًا** `DIRECT_URL` في `.env` بهذا الشكل:

```env
DATABASE_URL="postgresql://postgres.<ref>:<PASSWORD>@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1&sslmode=require"
DIRECT_URL="postgresql://postgres.<ref>:<PASSWORD>@db.<ref>.supabase.co:5432/postgres?sslmode=require"
```

> مهم: لا ترفع ملف `.env` إلى git، وغيّر كلمة المرور فورًا إذا تم مشاركتها في أي مكان.


## حل الأخطاء الشائعة
- خطأ `@prisma/client did not initialize yet`:
  - شغّل: `npx prisma generate` ثم أعد `npm run dev`.
- خطأ `Tenant or user not found` مع Supabase:
  - تحقق من صحة `DATABASE_URL` (pooler) و`DIRECT_URL` (direct) وأن كلمة المرور صحيحة.
- إذا فشل `seed` بسبب TypeScript:
  - تأكد من تثبيت الحزم كاملًا (`npm install`) ثم أعد `npm run prisma:seed`.
