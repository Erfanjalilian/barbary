import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { SiteHeader, SiteFooter, SectionHeading } from "@/components/site/layout";
import { GILAN_PHONE, TEHRAN_BRANCH_PHONES } from "@/lib/coverage-phones";
import { getPublicData } from "@/lib/site-data";

const packingBenefits = [
  "مشاوره رایگان باربری",
  "حمل بار و اثاثیه منزل",
  "فروش کارتن",
  "حمل بارهای سنگین",
  "بیمه نامه معتبر حمل کالا",
  "حمل بار به شهرستان",
];

const branchContacts = [
  { name: "شمال تهران", phone: TEHRAN_BRANCH_PHONES["شمال"] },
  { name: "غرب تهران", phone: TEHRAN_BRANCH_PHONES["غرب"] },
  { name: "مرکز تهران", phone: TEHRAN_BRANCH_PHONES["مرکز"] },
  { name: "شرق تهران", phone: TEHRAN_BRANCH_PHONES["شرق"] },
];

const portfolioImages = [
  "1-1-1.jpg",
  "c016dc3f526442af9c32ded8b0d9807c-1.jpg",
  "3.jpg",
  "12104642_992.jpg",
  "download.jpg",
  "imag1.jpg",
];

export const dynamic = "force-dynamic";

export default async function PackingPage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 rounded-[32px] bg-white p-6 shadow-sm md:grid-cols-[1fr_1fr] md:items-center md:p-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
                بسته بندی تخصصی
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-700">
                باربری آنلاین بار سال‌هاست فعالیت خود را در زمینه حمل و نقل
                باربری تهران و شهرستان آغاز نموده و رفته رفته با گذر زمان جایگاه
                ویژه ای را نزد مشتریان از آن خود ساخت. در واقع این جایگاه
                ارزشمند از طرف مشتریان را مدیون کیفیت مطلوب خدمات و مدیریت زمان
                و هزینه های مناسب خود در امر خدمت رسانی می داند.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {packingBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl bg-orange-50 px-4 py-3 text-sm font-bold text-orange-700"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/bastebandy/1.webp"
              alt="بسته‌بندی و جابه‌جایی اثاثیه"
              width={900}
              height={600}
              priority
              className="h-full min-h-[300px] w-full rounded-[28px] object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 lg:px-8">
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

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:items-center lg:px-8">
            <Image
              src="/bastebandy/carton.jpg"
              alt="کارتن‌های بسته‌بندی اثاثیه"
              width={900}
              height={600}
              className="h-full min-h-[300px] w-full rounded-[28px] object-cover"
            />
            <div>
              <SectionHeading
                title="فروش انواع کارتن"
                description="مخصوص اسباب کشی در تهران"
              />
              <p className="mt-6 text-base leading-8 text-slate-700">
                ما در آنلاین بار جهت تسهیل امور اسباب کشی شما از کارتن های
                تولید شده توسط خودمان بهره گرفته ایم تا سلامت اسباب و اثاثیه شما
                را در حین جابجایی تضمین نماییم. کارتن های تولید شده توسط ما از
                بهترین و با کیفیت ترین متریال تهیه شده و با مناسب ترین قیمت
                ارائه می شوند.
              </p>
              <a
                href={`tel:${GILAN_PHONE}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                جهت ارتباط با مشاورین کلیک کنید
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <SectionHeading title="نمونه‌کارها" />
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
