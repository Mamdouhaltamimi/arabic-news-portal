import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('Admin@123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@news.local' },
    update: {},
    create: {
      name: 'مدير المنصة',
      email: 'admin@news.local',
      password,
      role: 'ADMIN'
    }
  });

  const categories = ['متابعات', 'مقالات', 'هاشتاج', 'اقتصاد'].map((name) => ({
    name,
    slug: slugify(name, { lower: true, strict: true })
  }));

  for (const category of categories) {
    await prisma.category.upsert({ where: { slug: category.slug }, update: {}, create: category });
  }

  const firstCategory = await prisma.category.findFirstOrThrow();

  await prisma.article.upsert({
    where: { slug: 'tghtyat-khast-llmstjdat-alywmyt' },
    update: {},
    create: {
      title: 'تغطيات خاصة للمستجدات اليومية',
      slug: 'tghtyat-khast-llmstjdat-alywmyt',
      excerpt: 'متابعة شاملة لأبرز الأحداث المحلية والعالمية في تقرير واحد.',
      content: '<p>هذا نص تجريبي لمحتوى الخبر مع دعم كامل لاتجاه الكتابة من اليمين إلى اليسار.</p>',
      coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      authorId: admin.id,
      categoryId: firstCategory.id,
      featuredRank: 1
    }
  });

  await prisma.breakingNews.createMany({
    data: [
      { text: 'عاجل: اجتماع حكومي لبحث خطط التنمية الجديدة', priority: 1, active: true },
      { text: 'أسعار النفط ترتفع بنسبة 2% في تداولات اليوم', priority: 2, active: true }
    ],
    skipDuplicates: true
  });

  await prisma.adSlot.createMany({
    data: [
      { name: 'إعلان أعلى الشريط الجانبي', placement: 'sidebar_top', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', active: true },
      { name: 'إعلان داخل المقال', placement: 'inside_article', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', active: true }
    ],
    skipDuplicates: true
  });
}

main().finally(() => prisma.$disconnect());
