import { NextResponse } from 'next/server';
import { z } from 'zod';

const payloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

const memoryRateLimit = new Map<string, number>();

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'local';
  const last = memoryRateLimit.get(ip) ?? 0;
  if (Date.now() - last < 30_000) {
    return NextResponse.json({ message: 'محاولة متكررة' }, { status: 429 });
  }
  memoryRateLimit.set(ip, Date.now());

  const form = await request.formData();
  const payload = {
    name: String(form.get('name') ?? ''),
    email: String(form.get('email') ?? ''),
    message: String(form.get('message') ?? '')
  };
  const validated = payloadSchema.safeParse(payload);
  if (!validated.success) return NextResponse.json({ message: 'بيانات غير صالحة' }, { status: 400 });

  return NextResponse.json({ message: 'تم الاستلام وسيتم التواصل قريباً' });
}
