import { ArrowLeft, CircleDashed, ShieldCheck, Star, Truck, PhoneCall } from "lucide-react";
import { SiteHeader, SiteFooter, SectionHeading } from "@/components/site/layout";
import { StatsCounter } from "@/components/site/stats-counter";
import { GILAN_PHONE, TEHRAN_BRANCH_PHONES } from "@/lib/coverage-phones";
import { getPublicData } from "@/lib/site-data";

const homeServices = [
  {
    title: "باربری اثاثیه منزل",
    description:
      "جابجایی امن و سریع اثاثیه منزل شما با تیم مجرب و کامیون‌های استاندارد به تمام نقاط تهران",
    image: "/khadamatetakhasosi/service-home-nmzk4COM.jpg",
  },
  {
    title: "باربری اداری و تجاری",
    description:
      "انتقال تخصصی تجهیزات اداری، کامپیوترها و لوازم تجاری با رعایت استانداردهای ایمنی",
    image: "/khadamatetakhasosi/service-office-Bxv9SYJ8.jpg",
  },
  {
    title: "بسته بندی تخصصی",
    description:
      "بسته بندی اصولی تمامی وسایل مهم منزل با کارتن و نایلون های اسباب کشی",
    image: "/khadamatetakhasosi/s05.png",
  },
  {
    title: "خودروهای مدرن",
    description:
      "استفاده از بروزترین خودروهای مسقف به منظور تامین سلامت لوازم شما",
    image: "/khadamatetakhasosi/IMG-20241129-WA0011.jpg",
  },
];

const branchContacts = [
  {
    name: "شعبه شمال تهران",
    phone: TEHRAN_BRANCH_PHONES["شمال"],
    number: TEHRAN_BRANCH_PHONES["شمال"],
    neighborhoods: [
      "تجریش",
      "الهیه",
      "دروس",
      "جردن",
      "زرگنده",
      "زعفرانیه",
      "نیاوران",
      "فرمانیه",
      "قلهک",
      "جماران",
      "لواسان",
      "لویزان",
      "ازگل",
      "مینی سیتی",
      "سوهانک",
      "حسین آباد",
      "مبارک آباد",
      "اقدسیه",
      "آجودانیه",
      "محمودیه",
      "کامرانیه",
      "داودیه",
      "دزاشیب",
      "اوین",
      "درکه",
      "ونک",
      "سعادت آباد",
    ],
  },
  {
    name: "شعبه مرکز تهران",
    phone: TEHRAN_BRANCH_PHONES["مرکز"],
    number: TEHRAN_BRANCH_PHONES["مرکز"],
    neighborhoods: [
      "یوسف آباد",
      "امیر آباد",
      "فاطمی",
      "عباس آباد",
      "جلفا",
      "خواجه عبدالله",
      "بهار شیراز",
      "زرتشت",
      "بهجت آباد",
      "تخت جمشید (طالقانی)",
      "تخت طاووس",
      "سهروردی",
      "آپادانا",
      "توحید",
      "جمهوری",
      "نادری",
      "استانبول",
      "توپخانه",
      "لاله زار",
      "باغ صبا",
      "آرژانتین",
      "آذربایجان",
    ],
  },
  {
    name: "شعبه غرب تهران",
    phone: TEHRAN_BRANCH_PHONES["غرب"],
    number: TEHRAN_BRANCH_PHONES["غرب"],
    neighborhoods: [
      "شهرک آزادی",
      "پونک",
      "جنت آباد",
      "سعادت آباد",
      "شهران",
      "شهرک غرب",
      "ستارخان",
      "فردوس",
      "آریا شهر",
      "شهر زیبا",
      "طرشت",
      "گیشا",
      "چیتگر",
      "شهرک اکباتان",
      "کوی بیمه",
      "تهرانسر",
      "حصارک",
      "آزادی",
      "دهکده المپیک",
      "شهرک امیرکبیر",
      "کن",
      "وردآورد",
      "شهرک گلستان",
      "تهران ویلا",
      "فرحزاد",
      "چهار دیواری",
      "جیحون",
      "هاشمی",
      "دامپزشکی",
      "مهرآباد",
      "سرو آزاد",
      "کرج",
    ],
  },
];

const homeAdvantages = [
  {
    title: "ضمانت سلامت بار",
    description: "تضمین کامل سلامت اثاثیه شما با بیمه حمل و نقل",
  },
  {
    title: "قیمت مناسب و شفاف",
    description: "ارائه قیمت دقیق بدون هزینه‌های پنهان و اضافی",
  },
  {
    title: "سرعت و وقت‌شناسی",
    description: "انجام به موقع سفارشات در کوتاه‌ترین زمان ممکن",
  },
  {
    title: "کارگران مجرب",
    description: "تیم حرفه‌ای با سال‌ها تجربه در جابجایی اثاثیه",
  },
  {
    title: "ناوگان مدرن",
    description: "کامیون‌های استاندارد و مجهز در انواع سایزها",
  },
  {
    title: "پشتیبانی ۲۴ ساعته",
    description: "پاسخگویی شبانه‌روزی در تمام روزهای هفته",
  },
];

const portfolioImages = [
  "1-1-1.jpg",
  "c016dc3f526442af9c32ded8b0d9807c-1.jpg",
  "3.jpg",
  "12104642_992.jpg",
  "download.jpg",
  "imag1.jpg",
];

export default async function HomePage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="w-full pb-12 lg:pb-20">
          <div className="relative isolate flex min-h-[560px] w-full items-center overflow-hidden bg-slate-950 px-6 py-12 sm:min-h-[520px] md:px-12 lg:min-h-[600px] lg:px-16">
            <img
              src="/hero/b-1.jpg"
              alt="خودروی باربری آنلاین"
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
                <a href={`tel:${TEHRAN_BRANCH_PHONES["مرکز"]}`} className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-600">
                  <PhoneCall className="h-5 w-5" />
                  {data.settings.ctaText}
                </a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20">
                  مشاهده خدمات
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/85">
                <a href={`tel:${TEHRAN_BRANCH_PHONES["مرکز"]}`} className="animate-special-phone flex items-center gap-2 text-[36px] font-bold leading-tight transition">
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

        <StatsCounter />

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <SectionHeading title="خدمات تخصصی ما" description="مجموعه خدمات اسباب‌کشی ما با تمرکز بر ایمنی، نظم و سرعت اجرا طراحی شده‌اند." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((service) => (
              <article key={service.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
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

        <section className="bg-orange-500 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeading title="شماره شعبه‌ها" description="برای تماس سریع با شعبه موردنظر، روی دکمه مربوطه کلیک کنید." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {branchContacts.map((branch) => (
                <div key={branch.name} className="rounded-[28px] border border-white/20 bg-orange-600/20 p-5 shadow-[0_20px_40px_rgba(194,65,12,0.18)] backdrop-blur-sm">
                  <p className="text-lg font-black text-white">{branch.name}</p>
                  <p className="mt-3 text-base font-medium text-orange-50">{branch.number}</p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-black text-orange-600 transition hover:bg-orange-50"
                  >
                    تماس فوری
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeading title="مزایای انتخاب آنلاین بار" description="با ما، اسباب‌کشی به تجربه‌ای آرام، دقیق و حرفه‌ای تبدیل می‌شود." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {homeAdvantages.map((advantage) => (
                <div key={advantage.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
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
          <SectionHeading
            title="باربری مناطق تهران"
            description="ارائه خدمات باربری در تمامی مناطق ۲۲ گانه تهران"
          />
          <div className="mt-10 space-y-6">
            {branchContacts.map((branch) => {
              const neighborhoodRows = branch.neighborhoods.reduce<string[][]>(
                (rows, neighborhood, index) => {
                  if (index % 3 === 0) rows.push([]);
                  rows[rows.length - 1].push(neighborhood);
                  return rows;
                },
                [],
              );

              return (
                <article
                  key={branch.name}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  <h3 className="bg-orange-50 px-6 py-4 text-lg font-black text-slate-900">
                    {branch.name.replace("شعبه ", "")}
                  </h3>
                  <div>
                    <table className="w-full table-fixed border-collapse text-right">
                      <tbody className="divide-y divide-slate-200">
                        {neighborhoodRows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="divide-x divide-x-reverse divide-slate-200">
                            {Array.from({ length: 3 }, (_, columnIndex) => {
                              const neighborhood = row[columnIndex];

                              return (
                                <td
                                  key={columnIndex}
                                  className="w-1/3 break-words px-2 py-3 text-xs leading-6 text-slate-700 sm:px-4 sm:py-4 sm:text-sm"
                                >
                                  {neighborhood ? `باربری ${neighborhood}` : null}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-slate-200 px-6 py-4">
                    <a
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                    >
                      تماس با {branch.name}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-[32px] bg-orange-50 px-6 py-10 text-center sm:px-10 md:flex-row md:justify-between md:text-right">
            <div className="flex flex-col items-center gap-5 md:flex-row md:text-right">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <PhoneCall className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
                  دریافت یک مشاوره رایگان برای باربری
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  همکاران ما آماده پاسخ گویی به سوالات شما در زمینه حمل بار و بسته بندی می باشد
                </p>
              </div>
            </div>
            <a
              href={`tel:${GILAN_PHONE}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              تماس با ما
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <SectionHeading title="نمونه‌کارها" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-[28px] shadow-sm">
                <img
                  src={`/nemoonekarha/${image}`}
                  alt={`تصویر نمونه‌کار باربری ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-300 ring-1 ring-white/10">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                پاسخگویی ۲۴ ساعته
              </div>
              <h2 className="mt-6 text-3xl font-black md:text-4xl">همین الان با ما تماس بگیرید</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                مشاوره رایگان و استعلام قیمت فوری
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {branchContacts.map((branch) => (
                <a
                  key={branch.name}
                  href={`tel:${branch.phone}`}
                  className="group rounded-[28px] border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-orange-400/60 hover:bg-white/10"
                >
                  <PhoneCall className="mx-auto h-7 w-7 text-orange-400" aria-hidden="true" />
                  <p className="mt-4 text-lg font-black">{branch.name}</p>
                  <p dir="ltr" className="mt-3 text-xl font-bold tracking-wide text-orange-200 transition group-hover:text-white">
                    {branch.number}
                  </p>
                  <span className="mt-5 inline-flex rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition group-hover:bg-orange-600">
                    تماس با شعبه
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
