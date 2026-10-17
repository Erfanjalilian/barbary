import { ContactForm } from "@/components/site/contact-form";
import { SiteHeader, SiteFooter } from "@/components/site/layout";
import { getPublicData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl">
              <h1 className="text-3xl font-black">ارتباط با ما</h1>
              <div className="mt-8 space-y-5 text-slate-200">
                <div>
                  <div className="text-sm text-slate-400">شماره تماس اصلی</div>
                  <a href={`tel:${data.settings.phone}`} className="mt-2 block text-xl font-bold text-white">{data.settings.phone}</a>
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
            <ContactForm settings={data.settings} />
          </div>
        </section>
      </main>
      <SiteFooter settings={data.settings} />
    </>
  );
}
