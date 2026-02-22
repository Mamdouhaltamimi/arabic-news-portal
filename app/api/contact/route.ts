import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(2000)
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const parsed = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  });

  if (!parsed.success) {
    return NextResponse.json({ error: 'بيانات غير صالحة' }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: 'تم استلام رسالتك بنجاح' });
}
