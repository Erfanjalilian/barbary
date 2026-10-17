import Link from "next/link";
import { ArrowUpDown, Building2, LayoutPanelTop, MapPinned, MessageSquareText, PackageOpen, ShieldCheck, Sparkles } from "lucide-react";
import { getContactMessages, getPublicData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

const adminSections = [
  { title: "داشبورد", href: "/admin1383", icon: LayoutPanelTop },
  { title: "مدیریت خدمات", href: "/admin1383#services", icon: PackageOpen },
  { title: "مزیت‌ها", href: "/admin1383#advantages", icon: ShieldCheck },
  { title: "نمونه‌کارها", href: "/admin1383#portfolio", icon: Sparkles },
  { title: "مناطق", href: "/admin1383#coverage", icon: MapPinned },
  { title: "پیام‌ها", href: "/admin1383#messages", icon: MessageSquareText },
  { title: "تنظیمات", href: "/admin1383#settings", icon: Building2 },
];

export default async function Admin1383Page() {
  const data = await getPublicData();
  const messages = await getContactMessages();

  const newMessagesCount = messages.filter((message) => message.status === "new").length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 right-0 w-72 border-l border-slate-200 bg-white/95 p-5 backdrop-blur">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white">
            H
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">{data.settings.siteName}</div>
            <div className="text-xs text-slate-500">پنل مدیریت</div>
          </div>
        </div>

        <nav className="mt-7 space-y-2">
          {adminSections.map(({ title, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-orange-600"
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                {title}
              </span>
              <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
            </Link>
          ))}
        </nav>
      </aside>

      <main className="mr-72 p-6 lg:p-8">
        <header className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600">داشبورد مدیریتی</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900">خوش آمدید، مدیر سایت</h1>
            </div>
            <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700 ring-1 ring-orange-100">
              دسترسی مستقیم بدون احراز هویت حرفه‌ای
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="خدمات" value={String(data.services.length)} accent="bg-orange-50 text-orange-700" />
          <StatCard title="مزیت‌ها" value={String(data.advantages.length)} accent="bg-blue-50 text-blue-700" />
          <StatCard title="مناطق" value={String(data.coverageAreas.length)} accent="bg-emerald-50 text-emerald-700" />
          <StatCard title="پیام‌های جدید" value={String(newMessagesCount)} accent="bg-violet-50 text-violet-700" />
        </section>

        <section id="services" className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-black text-slate-900">مدیریت خدمات تخصصی</h2>
            <button className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">افزودن خدمت</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.services.map((service) => (
              <div key={service.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 h-28 overflow-hidden rounded-xl">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                </div>
                <div className="text-lg font-black text-slate-900">{service.title}</div>
                <div className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{service.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="advantages" className="mt-8 grid gap-8 xl:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">مزیت‌های شرکت</h2>
            <div className="mt-5 space-y-3">
              {data.advantages.map((item) => (
                <div key={item.id} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-black text-slate-900">{item.title}</div>
                  <div className="mt-1 leading-7">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="portfolio" className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">نمونه‌کارها</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {data.portfolio.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img src={item.image} alt={item.title} className="h-28 w-full object-cover" />
                  <div className="p-3">
                    <div className="font-black text-slate-900">{item.title}</div>
                    <div className="mt-2 text-xs leading-6 text-slate-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="coverage" className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">مناطق تحت پوشش</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {data.coverageAreas.map((area) => (
              <div key={area.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-lg font-black text-slate-900">{area.name}</div>
                <div className="mt-1 text-sm text-blue-700">{area.zone}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="messages" className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">پیام‌های دریافتی</h2>
          <div className="mt-5 space-y-3">
            {messages.slice(0, 4).map((message) => (
              <div key={message.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-black text-slate-900">{message.fullName}</div>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold text-orange-700">
                    {message.status === "new" ? "جدید" : message.status === "in_progress" ? "در حال پیگیری" : "رسیدگی‌شده"}
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-600">{message.subject || "بدون موضوع"}</div>
                <div className="mt-3 text-sm leading-7 text-slate-700">{message.message}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="settings" className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">تنظیمات عمومی</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <InfoItem label="نام شرکت" value={data.settings.siteName} />
            <InfoItem label="شماره تماس" value={data.settings.phone} />
            <InfoItem label="آدرس" value={data.settings.address} />
            <InfoItem label="ساعات کاری" value={data.settings.businessHours} />
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ title, value, accent }: { title: string; value: string; accent: string }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`inline-flex rounded-xl px-3 py-2 text-sm font-bold ${accent}`}>{title}</div>
      <div className="mt-5 text-3xl font-black text-slate-900">{value}</div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-2 text-base font-bold text-slate-800">{value}</div>
    </div>
  );
}
