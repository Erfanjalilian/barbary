import Link from "next/link";
import { ArrowLeft, CircleDashed, MapPinned, ShieldCheck, Star, Truck, PackageCheck, PhoneCall } from "lucide-react";
import { SiteHeader, SiteFooter, SectionHeading } from "@/components/site/layout";
import { getPublicData } from "@/lib/site-data";

export default async function HomePage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="relative isolate flex min-h-[560px] items-center overflow-hidden rounded-[36px] bg-slate-950 px-6 py-12 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:min-h-[520px] md:px-12 lg:min-h-[600px] lg:px-16">
            <img
              src={data.settings.heroImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-l from-slate-950/90 via-slate-950/60 to-slate-950/20" />
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-orange-200 backdrop-blur-sm">
                <CircleDashed className="h-4 w-4" />
                خدمات حرفه‌ای اسباب‌کشی منزل
              </div>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.2] text-white md:text-5xl lg:text-6xl">
                {data.settings.heroTitle}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">{data.settings.heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:02188281009" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-600">
                  <PhoneCall className="h-5 w-5" />
                  {data.settings.ctaText}
                </a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20">
                  مشاهده خدمات
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/85">
                <a href="tel:02188281009" className="flex items-center gap-2 font-bold text-orange-200 transition hover:text-orange-100">
                  <PhoneCall className="h-5 w-5 text-orange-300" />
                  خط ویژه ۱۰۰۹
                </a>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  بیمه و اطمینان
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-sky-300" />
                  ارسال دقیق و منظم
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <SectionHeading title="خدمات تخصصی ما" description="مجموعه خدمات اسباب‌کشی ما با تمرکز بر ایمنی، نظم و سرعت اجرا طراحی شده‌اند." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.services.map((service) => (
              <article key={service.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeading title="چرا ما را انتخاب کنید؟" description="با ما، اسباب‌کشی به تجربه‌ای آرام، دقیق و حرفه‌ای تبدیل می‌شود." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {data.advantages.map((advantage) => (
                <div key={advantage.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{advantage.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <SectionHeading title="نمونه‌کارها" description="برخی از پروژه‌های موفق ما در جابه‌جایی و حمل اثاثیه در مناطق مختلف." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.portfolio.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-orange-300 ring-1 ring-white/10">
                  <MapPinned className="h-4 w-4" />
                  پوشش خدماتی
                </div>
                <h2 className="mt-6 text-3xl font-black md:text-4xl">پوشش کامل در شهر و حومه</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  خدمات ما در تهران، شهرری، کرج و مناطق اطراف با برنامه‌ریزی دقیق و هماهنگی کامل ارائه می‌شود.
                </p>
              </div>
              <div className="space-y-4">
                {data.coverageAreas.map((area) => (
                  <div key={area.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-lg font-black">{area.name}</div>
                        <div className="text-sm text-slate-300">{area.zone}</div>
                      </div>
                      <PackageCheck className="h-5 w-5 text-orange-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
