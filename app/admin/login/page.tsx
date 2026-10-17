import { redirect } from "next/navigation";
import { getSessionCookie } from "@/lib/auth/admin";

export default async function AdminLoginPage() {
  const session = await getSessionCookie();
  if (session) redirect("/admin");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-black text-slate-900">ورود مدیر</h1>
        <p className="mt-2 text-sm text-slate-600">برای مدیریت محتوای سایت وارد شوید.</p>

        <form action="/api/auth/login" method="POST" className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">نام کاربری</label>
            <input name="username" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-orange-300" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">رمز عبور</label>
            <input name="password" type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-orange-300" />
          </div>
          <button type="submit" className="w-full rounded-full bg-orange-500 px-5 py-3 text-base font-bold text-white shadow-lg shadow-orange-200 hover:bg-orange-600">
            ورود
          </button>
        </form>
      </div>
    </main>
  );
}
