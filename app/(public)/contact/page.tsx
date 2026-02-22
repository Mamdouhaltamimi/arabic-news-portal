export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">تواصل معنا</h1>
      <form action="/api/contact" method="post" className="mt-6 space-y-3 rounded-lg bg-white p-5 shadow">
        <input name="name" required className="w-full rounded border p-2" placeholder="الاسم" />
        <input name="email" required type="email" className="w-full rounded border p-2" placeholder="البريد الإلكتروني" />
        <textarea name="message" required className="min-h-36 w-full rounded border p-2" placeholder="رسالتك" />
        <button className="rounded bg-brand-red px-4 py-2 text-white">إرسال</button>
      </form>
    </main>
  );
}
