import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/layout";
import { GILAN_PHONE, getCoveragePhone } from "@/lib/coverage-phones";
import { getPublicData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

const branchDirections = [
  { label: "شمال تهران", direction: "شمال" },
  { label: "جنوب تهران", direction: "جنوب" },
  { label: "غرب تهران", direction: "غرب" },
  { label: "مرکز تهران", direction: "مرکز" },
] as const;

export default async function ContactPage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="relative isolate flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-slate-900 px-4 py-16 text-center sm:min-h-[500px] lg:min-h-[580px]">
            <Image
              src="/callus/8908765-1-1024x658-1.jpg"
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-slate-950/55" />
            <div className="max-w-3xl text-white">
              <h1 className="text-balance text-4xl font-black md:text-6xl">
                ارتباط با مــــــــا
              </h1>
              <p className="mt-6 text-base leading-8 text-white/90 md:text-xl">
                بهترین شرکت هستیم در این مدت شرکت ما توانسته رضایت درصد قابل
                توجهی از مشتریان گرامی را به دست بیاورد. در ابتدای فرایند،
                بسته بندی در دستور کار شرکت قرار داشت؛ اما به مرور اسباب کشی نیز
                اضافه شد.
              </p>
              <a
                href={`tel:${GILAN_PHONE}`}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-base font-bold text-white transition hover:bg-orange-600"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                جهت ارتباط با مشاورین کلیک کنید
              </a>
            </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {branchDirections.map(({ label, direction }) => {
                const phone = getCoveragePhone(
                  "تهران",
                  direction,
                  data.settings.phone,
                );

                return (
                  <a
                    key={direction}
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    تماس با شعبه {label}
                  </a>
                );
              })}
            </div>
        </section>

      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
