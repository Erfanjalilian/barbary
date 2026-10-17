import { SiteHeader, SiteFooter, SectionHeading, CoverageGrid } from "@/components/site/layout";
import { CoverageSelector } from "@/components/site/coverage-selector";
import { getPublicData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function CoveragePage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading title="مناطق تحت پوشش" description="استان را انتخاب کنید، شهرهای آن را ببینید و ناحیهٔ موردنظر را مشخص کنید." />
          <div className="mt-10">
            <CoverageSelector variant="page" phone={data.settings.phone} />
          </div>
          <div className="mt-10">
            <SectionHeading title="محدوده‌های خدمات فعلی" description="مناطق ثبت‌شده برای خدمات فعلی ما." />
          </div>
          <div className="mt-6">
            <CoverageGrid areas={data.coverageAreas} />
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
