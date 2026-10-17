"use client";

import { useState } from "react";

export function ContactForm({ settings }: { settings: { phone: string } }) {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      phone: String(form.get("phone") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const response = await fetch("/api/public/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setLoading(false);
    setStatus({
      type: response.ok ? "success" : "error",
      message: data.message || (response.ok ? "پیام شما با موفقیت ثبت شد." : "بروز خطا در ارسال پیام."),
    });

    if (response.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-black text-slate-900">فرم تماس</h2>
      <p className="mt-2 text-sm text-slate-600">درخواست خود را ثبت کنید تا در کوتاه‌ترین زمان پاسخ‌گوی شما باشیم.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">نام و نام خانوادگی</label>
            <input name="fullName" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-300" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">شماره تماس</label>
            <input name="phone" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-300" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">موضوع پیام</label>
          <input name="subject" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-300" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">متن پیام</label>
          <textarea name="message" required rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-300" />
        </div>

        <button type="submit" disabled={loading} className="w-full rounded-full bg-orange-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-orange-200 disabled:opacity-60">
          {loading ? "در حال ارسال..." : "ارسال پیام"}
        </button>

        {status ? (
          <div className={`rounded-2xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
            {status.message}
          </div>
        ) : null}
      </form>
    </div>
  );
}
