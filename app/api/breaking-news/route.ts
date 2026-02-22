import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const items = await prisma.breakingNews.findMany({ where: { active: true }, orderBy: { priority: 'desc' } });
  return NextResponse.json(items);
}
