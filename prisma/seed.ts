import { PrismaClient, ArticleStatus, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Admin@123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@portal.ar' },
    update: {},
    create: { name: 'مدير النظام', email: 'admin@portal.ar', role: Role.ADMIN, passwordHash }
  });

  const category = await prisma.category.upsert({
    where: { slug: 'updates' },
    update: {},
    create: { name: 'متابعات', slug: 'updates' }
  });

  await prisma.article.upsert({
    where: { slug: 'economic-development-plan-2026' },
    update: {},
    create: {
      title: 'خطة تنموية جديدة لتعزيز الاقتصاد المحلي خلال 2026',
      slug: 'economic-development-plan-2026',
      excerpt: 'حزمة مشاريع تنموية جديدة.',
      content: '<p>محتوى تجريبي للمقال...</p>',
      coverImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
      authorId: admin.id,
      categoryId: category.id,
      status: ArticleStatus.PUBLISHED,
      publishedAt: new Date()
    }
  });
}

main().finally(() => prisma.$disconnect());
