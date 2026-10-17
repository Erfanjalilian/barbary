import Image from "next/image";
import {
  BadgeCheck,
  Headset,
  PackageCheck,
  PhoneCall,
  Truck,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/layout";
import { getPublicData } from "@/lib/site-data";

const aboutServices = [
  "مشاوره رایگان باربری",
  "حمل بار و اثاثیه منزل",
  "فروش کارتن",
  "حمل بارهای سنگین",
  "بیمه نامه معتبر حمل کالا",
  "حمل بار به شهرستان",
];

const workItems = [
  {
    title: "پشتیبانی ویژه مشتریان",
    description:
      "اتوبار ما با مجوز رسمی بصورت شبانه روزی و 24 ساعته خدمات جابه جایی وسایل را انجام میدهد",
    icon: Headset,
  },
  {
    title: "بیمه باربری",
    description:
      "ارائه خدمات بیمه کالا و اتوبار برای کلیه لوازم و اثاثیه در حین جابه جایی و حمل",
    icon: BadgeCheck,
  },
  {
    title: "بسته بندی اثاثیه منزل",
    description:
      "نیروی متخصص و کارگر بسته بندی اثاثیه و لوازم اداری, صنعتی و... از ما بخواهید.",
    icon: PackageCheck,
  },
  {
    title: "تجهیزات مدرن",
    description:
      "استفاده از جدیدترین و بهترین تجهیزات و ماشین های انتقال برای حمل بار",
    icon: Truck,
  },
];

const branchContacts = [
  { name: "شمال تهران", phone: "02126299541" },
  { name: "غرب تهران", phone: "02144597319" },
  { name: "مرکز تهران", phone: "02126299541" },
  { name: "شرق تهران", phone: "02186095100" },
];

const portfolioImages = [
  "1-1-1.jpg",
  "c016dc3f526442af9c32ded8b0d9807c-1.jpg",
  "3.jpg",
  "12104642_992.jpg",
  "download.jpg",
  "imag1.jpg",
];

export default async function AboutPage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 rounded-[32px] bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
                درباره آنلاین بار
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-700">
                باربری آنلاین بار سال‌هاست فعالیت خود را در زمینه حمل و نقل
                باربری تهران و شهرستان آغاز نموده و رفته رفته با گذر زمان جایگاه
                ویژه ای را نزد مشتریان از آن خود ساخت. در واقع این جایگاه
                ارزشمند از طرف مشتریان را مدیون کیفیت مطلوب خدمات و مدیریت زمان
                و هزینه های مناسب خود در امر خدمت رسانی می داند.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {aboutServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl bg-orange-50 px-4 py-3 text-sm font-bold text-orange-700"
                  >
                    <PackageCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/aboutus/IMG-20241129-WA0011%20(1).jpg"
              alt="خودروی باربری آنلاین بار"
              width={1020}
              height={680}
              priority
              className="h-full min-h-[300px] w-full rounded-[28px] object-cover"
            />
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
                کارهایی که انجام می دهیم
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
                آنلاین بار بعنوان شرکت حمل و نقل در تهران، با دقت کامل خدمات
                خود را در زمینه حمل بار، بسته بندی اثاثیه و لوازم اداری و …
                با کیفیت و قیمت مناسب در تهران انجام میدهد.
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
              <Image
                src="/aboutus/two-handsome-movers-transporting-cardboard-box.png"
                alt="کارگران آنلاین بار در حال جابه‌جایی کارتن"
                width={1090}
                height={1000}
                className="h-full max-h-[480px] w-full rounded-[28px] object-contain"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {workItems.map(({ title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {branchContacts.map((branch) => (
              <a
                key={branch.name}
                href={`tel:${branch.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                تماس با شعبه {branch.name}
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <h2 className="text-center text-2xl font-black text-slate-900 md:text-3xl">
            نمونه‌کارها
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src={`/nemoonekarha/${image}`}
                  alt={`تصویر نمونه‌کار باربری ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
