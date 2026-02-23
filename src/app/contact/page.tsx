export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-3xl font-bold">تواصل معنا</h1>
      <form action="/api/contact" method="post" className="space-y-3">
        <input name="name" className="w-full rounded border p-2" placeholder="الاسم" required />
        <input name="email" className="w-full rounded border p-2" placeholder="البريد الإلكتروني" required />
        <textarea name="message" className="h-32 w-full rounded border p-2" placeholder="الرسالة" required />
        <button className="rounded bg-brand.red px-5 py-2 text-white">إرسال</button>
      </form>
    </div>
  );
}
