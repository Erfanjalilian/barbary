import Link from "next/link";
import { MapPinned, Phone, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import type { SiteSettings, ServiceItem, AdvantageItem, PortfolioItem, CoverageArea } from "@/types/site";
import { CoverageSelector } from "@/components/site/coverage-selector";
import { GILAN_PHONE, getCoveragePhone } from "@/lib/coverage-phones";

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  const nav = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/coverage", label: "مناطق تحت پوشش", isCoverage: true },
    { href: "/about", label: "درباره ما" },
    { href: "/packing", label: "بسته‌بندی" },
    { href: "/contact", label: "ارتباط با ما" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white shadow-sm">
            H
          </div>
          <div>
            <div className="text-xl font-extrabold text-slate-900">{settings.siteName}</div>
            <div className="text-xs text-slate-500">اسباب‌کشی حرفه‌ای</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {nav.map((item) => (
            item.isCoverage ? (
              <CoverageSelector key={item.href} phone={settings.phone} />
            ) : (
              <Link key={item.href} href={item.href} className="transition hover:text-orange-500">
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${GILAN_PHONE}`} className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-200 transition hover:bg-orange-600">
            تماس با ما
          </a>
        </div>

        <div className="lg:hidden">
          <details className="group relative">
            <summary className="list-none cursor-pointer rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700">
              ☰
            </summary>
            <div className="absolute left-0 top-14 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
              {nav.map((item) => (
                item.isCoverage ? (
                  <CoverageSelector key={item.href} phone={settings.phone} />
                ) : (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    {item.label}
                  </Link>
                )
              ))}
              <a href={`tel:${GILAN_PHONE}`} className="mt-2 block rounded-xl bg-orange-500 px-3 py-2 text-center text-sm font-bold text-white">
                تماس فوری: 0911 574 2824
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold text-orange-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600">{description}</p> : null}
    </div>
  );
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      </div>
    </article>
  );
}

export function AdvantageCard({ advantage }: { advantage: AdvantageItem }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    "shield-check": ShieldCheck,
    users: Sparkles,
    "package-check": MapPinned,
    "clock-3": Phone,
  };
  const Icon = icons[advantage.icon] ?? ShieldCheck;

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{advantage.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{advantage.description}</p>
    </div>
  );
}

export function CoverageGrid({ areas }: { areas: CoverageArea[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {areas.map((area) => (
        <div key={area.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{area.zone}</div>
          <h3 className="text-xl font-bold text-slate-900">{area.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
        </div>
      ))}
    </div>
  );
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
      </div>
    </div>
  );
}

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const quickContacts = [
    { label: "مرکز تهران", phone: getCoveragePhone("تهران", "مرکز", settings.phone) },
    { label: "شمال تهران", phone: getCoveragePhone("تهران", "شمال", settings.phone) },
    { label: "جنوب تهران", phone: getCoveragePhone("تهران", "جنوب", settings.phone) },
    { label: "گیلان", phone: GILAN_PHONE },
  ];

  return (
    <>
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-8">
          <div>
            <div className="mb-4 text-xl font-black text-white">{settings.siteName}</div>
            <p className="text-sm leading-7 text-slate-300">{settings.footerText}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">پیوندها</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/" className="block">صفحه اصلی</Link>
              <Link href="/coverage" className="block">مناطق تحت پوشش</Link>
              <Link href="/about" className="block">درباره ما</Link>
              <Link href="/packing" className="block">بسته‌بندی</Link>
              <Link href="/contact" className="block">ارتباط با ما</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">تماس</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <a href={`tel:${settings.phone}`} className="block">{settings.phone}</a>
              <div>{settings.address}</div>
              <div>{settings.businessHours}</div>
            </div>
          </div>
        </div>
      </footer>
      <nav
        aria-label="تماس با مناطق"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-slate-200 bg-white/95 px-1 pt-2 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur lg:hidden"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        {quickContacts.map(({ label, phone }) => (
          <a
            key={label}
            href={`tel:${phone}`}
            aria-label={`تماس با ${label}`}
            className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-0.5 py-1 text-center text-[10px] font-bold leading-tight text-slate-700 transition hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            <PhoneCall className="h-4 w-4 shrink-0 text-orange-500" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
