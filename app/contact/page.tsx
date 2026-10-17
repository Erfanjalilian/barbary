import { SiteHeader, SiteFooter } from "@/components/site/layout";
import { GILAN_PHONE } from "@/lib/coverage-phones";
import { getPublicData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl">
              <h1 className="text-3xl font-black">ارتباط با ما</h1>
              <div className="mt-8 space-y-5 text-slate-200">
                <div>
                  <div className="text-sm text-slate-400">خط ویژه ۱۰۰۹</div>
                  <a href="tel:02188281009" dir="ltr" className="mt-2 block text-left text-xl font-bold text-white">021 8828 1009</a>
                </div>
                <div>
                  <div className="text-sm text-slate-400">تماس با گیلان</div>
                  <a href={`tel:${GILAN_PHONE}`} dir="ltr" className="mt-2 block text-left text-xl font-bold text-white">0911 574 2824</a>
                </div>
                <div>
                  <div className="text-sm text-slate-400">آدرس</div>
                  <div className="mt-2 text-base">{data.settings.address}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">ساعات پاسخ‌گویی</div>
                  <div className="mt-2 text-base">{data.settings.businessHours}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
