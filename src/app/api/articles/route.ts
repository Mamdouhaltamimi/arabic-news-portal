import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';
import { sanitizeContent } from '@/lib/sanitize';

export async function POST(request: Request) {
  const form = await request.formData();
  const title = String(form.get('title') ?? '');
  const content = sanitizeContent(String(form.get('content') ?? ''));
  const excerpt = String(form.get('excerpt') ?? '');
  const categoryId = String(form.get('categoryId') ?? '');
  const coverImage = String(form.get('coverImage') ?? '');

  if (!title || !content || !categoryId) {
    return NextResponse.json({ message: 'بيانات غير مكتملة' }, { status: 400 });
  }

  const author = await prisma.user.findFirst();
  if (!author) return NextResponse.json({ message: 'No author' }, { status: 400 });

  const article = await prisma.article.create({
    data: {
      title,
      slug: slugify(title, { lower: true, strict: true }),
      excerpt,
      content,
      categoryId,
      authorId: author.id,
      coverImage,
      status: 'PUBLISHED',
      publishedAt: new Date()
    }
  });

  return NextResponse.redirect(new URL(`/article/${article.slug}`, request.url));
}
