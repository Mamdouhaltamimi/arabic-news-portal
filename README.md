# البوابة العربية للأخبار (Arabic RTL News Portal)

## 1) Architecture Summary
- **Framework:** Next.js 14 App Router + TypeScript + TailwindCSS.
- **Database:** PostgreSQL عبر Prisma ORM.
- **Auth/CMS:** NextAuth (Credentials) مع أدوار Admin/Editor/Author.
- **Rendering:** SSR لصفحات الرئيسية/التصنيف/المقال مع قابلية revalidate.
- **Media:** جاهز للربط مع Cloudinary/S3 (حقل `coverImage`).
- **SEO Arabic:** Metadata, OpenGraph, canonical + sitemap.xml + robots.txt.

## 2) Database Schema (Core)
- User(id, name, email, role, passwordHash)
- Category(id, name, slug)
- Tag(id, name, slug)
- Article(id, title, slug, excerpt, content, coverImage, authorId, categoryId, status, publishedAt, views)
- BreakingNews(id, text, link, priority, active)
- AdSlot(id, name, placement, image, link, active, impressions, clicks)

> Full schema موجود في `prisma/schema.prisma`.

## 3) Folder Structure
```txt
app/
  (public)/
    page.tsx
    category/[slug]/page.tsx
    article/[slug]/page.tsx
    search/page.tsx
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
  admin/page.tsx
  api/
    auth/[...nextauth]/route.ts
    articles/route.ts
    breaking-news/route.ts
    contact/route.ts
  layout.tsx
  robots.ts
  sitemap.ts
components/
lib/
prisma/
  schema.prisma
  seed.ts
```

## 4) Implementation Steps
1. Install deps: `npm install`
2. Configure `.env` from `.env.example`
3. Generate client: `npm run prisma:generate`
4. Run migration: `npx prisma migrate dev --name init`
5. Seed demo data: `npm run prisma:seed`
6. Start dev server: `npm run dev`

## 5) Core Parts Delivered
- Home page (header/nav/ticker/hero/cards/sidebar/footer)
- Category listing page + breadcrumb
- Article details page (meta info + rich content + tags + related)
- Search results page
- Static pages (about/contact/privacy)
- CMS dashboard UI page
- API routes (articles, breaking-news, contact, auth)
- Prisma schema + seed data

## Security
- Contact API input validation باستخدام Zod.
- Prepared auth setup with role info in JWT/session.
- Prisma يمنع SQL injection عبر ORM.

## Deployment
### A) Vercel + Neon/Supabase
1. Push repository to GitHub.
2. Create Vercel project, set env vars from `.env.example`.
3. Point `DATABASE_URL` to Neon/Supabase Postgres.
4. Run migrations in CI or manually (`prisma migrate deploy`).
5. Set `NEXTAUTH_URL` to production domain.

### B) Single VPS + Docker + Nginx
1. Build image (`docker build -t arabic-news .`).
2. Run container with env vars and expose port 3000.
3. Reverse proxy via Nginx with SSL (Let's Encrypt).
4. Run `prisma migrate deploy` before app boot.

## Demo Credentials
- Email: `admin@portal.ar`
- Password: `Admin@123`
