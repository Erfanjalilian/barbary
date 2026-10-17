import { SiteHeader, SiteFooter, SectionHeading } from "@/components/site/layout";
import { getPageBySlug, getPublicData } from "@/lib/site-data";

export default async function AboutPage() {
  const data = await getPublicData();
  const page = await getPageBySlug("about");

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading title={page?.title ?? "درباره ما"} description={page?.description ?? ""} />
          <div className="mt-10 grid gap-8 rounded-[32px] bg-white p-6 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="text-lg leading-8 text-slate-700">{page?.content ?? ""}</p>
            </div>
            <img src={page?.image ?? data.settings.heroImage} alt={page?.title ?? "درباره ما"} className="h-full min-h-[300px] w-full rounded-[28px] object-cover" />
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
