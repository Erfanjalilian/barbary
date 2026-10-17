import { SiteHeader, SiteFooter, SectionHeading } from "@/components/site/layout";
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
          <SectionHeading title="مناطق تحت پوشش" description="یکی از محدوده‌های تهران را برای دیدن محله‌های آن انتخاب کنید یا برای تماس با گیلان شمارهٔ مربوط را ببینید." />
          <div className="mt-10">
            <CoverageSelector variant="page" phone={data.settings.phone} />
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
