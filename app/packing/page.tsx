import { SiteHeader, SiteFooter, SectionHeading } from "@/components/site/layout";
import { getPageBySlug, getPublicData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function PackingPage() {
  const data = await getPublicData();
  const page = await getPageBySlug("packing");

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 rounded-[32px] bg-white p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <img src={page?.image ?? data.settings.heroImage} alt={page?.title ?? "بسته‌بندی"} className="h-full min-h-[350px] w-full rounded-[28px] object-cover" />
            <div>
              <SectionHeading title={page?.title ?? "بسته‌بندی"} description={page?.description ?? ""} />
              <p className="mt-6 text-lg leading-8 text-slate-700">{page?.content ?? ""}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700">بسته‌بندی ایمن</div>
                <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">ثبت‌نام دقیق وسایل</div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">تحویل منظم</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
