import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/layout";
import { TEHRAN_BRANCH_PHONES } from "@/lib/coverage-phones";
import { tehranNeighborhoods } from "@/lib/tehran-areas";
import { getPublicData } from "@/lib/site-data";

const neighborhoodServices = [
  {
    title: "بسته بندی اثاثیه",
    description:
      "بسته بندی اثاثیه آنلاین بار همان پدیده اسباب کشی ماست که بعد از انجام کار از دیدن آن حیرت خواهید کرد",
    image: "/4taaks/tehransaadat4-320x190-1.jpg",
  },
  {
    title: "خدمات کارگری",
    description:
      "تیم حرفه‌ای آنلاین بار به شما این قول را می دهد که تجربه و ورزیدگی کارکنان را در کارتان مشاهده خواهید کرد",
    image: "/4taaks/5-320x190-1.jpg",
  },
  {
    title: "ماشین‌های مدرن",
    description:
      "ماشین‌های مدرن آنلاین بار نوید بخش باربری با امکانات بالا و سرعت مناسب را به شما عزیزان خواهد داد",
    image: "/4taaks/2-320x190-11.jpg",
  },
  {
    title: "خدمات انبارداری",
    description:
      "انجام خدمات پیشرفته انبارداری مطابق با نوع و حساسیت کالا",
    image: "/4taaks/3-320x190-1.jpg",
  },
];

const neighborhoodBranches = [
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

function getNeighborhoodName(routeValue: string) {
  let decodedValue = routeValue;

  try {
    decodedValue = decodeURIComponent(routeValue);
  } catch {
    return routeValue;
  }

  return tehranNeighborhoods.find(
    (neighborhood) => neighborhood.normalize("NFC") === decodedValue.normalize("NFC"),
  ) ?? decodedValue;
}

function NeighborhoodHero({ neighborhoodName }: { neighborhoodName: string }) {
  return (
    <section className="relative isolate flex min-h-[380px] w-full items-center justify-center overflow-hidden bg-slate-900 px-4 py-16 text-center sm:min-h-[480px] lg:min-h-[600px]">
      <Image
        src="/hero2/photo.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/45" />
      <h1 className="text-balance text-3xl font-black text-white drop-shadow-lg sm:text-4xl md:text-6xl">
        باربری {neighborhoodName}
      </h1>
    </section>
  );
}

export function generateStaticParams() {
  return tehranNeighborhoods.map((neighborhood) => ({ neighborhood }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ neighborhood: string }>;
}) {
  const { neighborhood: routeValue } = await params;
  const neighborhoodName = getNeighborhoodName(routeValue);
  return { title: `باربری ${neighborhoodName}` };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ neighborhood: string }>;
}) {
  const { neighborhood: routeValue } = await params;
  const neighborhoodName = getNeighborhoodName(routeValue);
  const data = await getPublicData();

  return (
    <>
      <SiteHeader settings={data.settings} />
      <main className="bg-slate-50">
        <NeighborhoodHero neighborhoodName={neighborhoodName} />
        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {neighborhoodServices.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={320}
                  height={190}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-black text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <article className="mx-auto max-w-5xl space-y-12 px-4 pb-16 lg:px-8">
          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              بهترین باربری در {neighborhoodName}
            </h2>
            <p className="leading-8">
              هدف ما در باربری {neighborhoodName}، ارائه خدمات حرفه‌ای حمل بار همراه
              با رعایت کامل اصول ایمنی و جلب رضایت حداکثری مشتریان است. انتخاب یک
              شرکت باربری معتبر با نیروهای آموزش‌دیده و باتجربه، مهم‌ترین اقدام برای
              جلوگیری از خسارت‌های احتمالی در اسباب‌کشی محسوب می‌شود. مجموعه ما با
              بهره‌گیری از کارگران مجرب، تجهیزات استاندارد و خودروهای مجهز، شرایطی
              را فراهم کرده است تا اسباب‌کشی شما در {neighborhoodName} با سرعت،
              دقت و امنیت کامل انجام شود.
            </p>
            <p className="leading-8">
              دفتر باربری {neighborhoodName} به صورت شبانه‌روزی آماده ارائه خدمات
              حمل اثاثیه منزل، جابه‌جایی لوازم اداری و انواع بار است. شما می‌توانید
              از طریق راه‌های ارتباطی درج‌شده در سایت، درخواست خود را ثبت کنید تا
              هماهنگی‌های لازم در کوتاه‌ترین زمان انجام شود. پس از ثبت سفارش، تیم
              اجرایی در زمان تعیین‌شده در محل حاضر شده و فرآیند بسته‌بندی و
              جابه‌جایی را به شکل اصولی و منظم آغاز می‌کند. تنها با یک تماس
              می‌توانید یک اسباب‌کشی ایمن، سریع و بدون دغدغه را تجربه کنید.
            </p>
            <p className="leading-8">
              کارشناسان باربری {neighborhoodName} آماده پاسخگویی به سوالات شما
              درباره هزینه حمل بار، مدت زمان جابه‌جایی، نوع خودروی مناسب و خدمات
              بسته‌بندی هستند. پیش از ثبت نهایی سفارش می‌توانید مشاوره تخصصی دریافت
              کنید تا با اطمینان کامل و بر اساس نیاز خود بهترین انتخاب را داشته
              باشید.
            </p>
          </section>

          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              انواع خودروهای حمل بار در باربری {neighborhoodName}
            </h2>
            <p className="leading-8">
              در خدمات باربری {neighborhoodName}، امکان انتخاب خودروی حمل بار
              متناسب با حجم، وزن و نوع اثاثیه وجود دارد. انتخاب خودروی مناسب علاوه
              بر افزایش ایمنی در حین جابه‌جایی، موجب مدیریت بهتر هزینه‌ها نیز خواهد
              شد.
            </p>
            <Image
              src="/khadamatetakhasosi/IMG-20241129-WA0011.jpg"
              alt={`خودروی حمل بار در باربری ${neighborhoodName}`}
              width={1020}
              height={680}
              className="max-h-[480px] w-full rounded-3xl object-cover"
            />
          </section>

          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              سریع‌ترین و بهترین اسباب‌کشی با باربری {neighborhoodName}
            </h2>
            <p className="leading-8">
              باربری {neighborhoodName} با ارائه تعرفه‌های منصفانه و برنامه‌ریزی
              دقیق، خدمات اسباب‌کشی را در کوتاه‌ترین زمان ممکن و با بالاترین کیفیت
              انجام می‌دهد. ما با درک اهمیت زمان برای مشتریان، فرآیند جابه‌جایی را
              به‌صورت منظم و هماهنگ اجرا می‌کنیم تا کمترین اختلال در برنامه روزانه
              شما ایجاد شود.
            </p>
            <p className="leading-8">
              این مجموعه به عنوان یک شرکت حمل‌ونقل حرفه‌ای، از نیروهای کارآزموده و
              آموزش‌دیده بهره می‌برد. تیم اجرایی ما شامل کارگران متخصص در
              بسته‌بندی، حمل اصولی اثاثیه و چیدمان منظم در مقصد است. تجربه و مهارت
              بالای کارکنان باعث می‌شود تمامی مراحل اسباب‌کشی با دقت، سرعت و ایمنی
              کامل انجام شود.
            </p>
            <p className="leading-8">
              باربری {neighborhoodName} مفتخر است با انجام جابه‌جایی‌های مطمئن و
              برنامه‌ریزی‌شده، آرامش خاطر را برای ساکنان {neighborhoodName} فراهم کند و
              تجربه‌ای متفاوت از اسباب‌کشی حرفه‌ای ارائه دهد.
            </p>
          </section>

          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              حمل بار به شهرستان از {neighborhoodName}
            </h2>
            <p className="leading-8">
              خدمات باربری در {neighborhoodName} تنها به جابه‌جایی‌های درون‌شهری
              محدود نمی‌شود. امکان حمل بار و اثاثیه منزل از این محله به تمامی
              شهرستان‌ها نیز فراهم است. این خدمات با استفاده از خودروهای مناسب
              بین‌شهری و رعایت استانداردهای ایمنی انجام می‌شود تا بار شما در سلامت
              کامل به مقصد برسد.
            </p>
            <p className="leading-8">
              رانندگان مجرب مجموعه با تسلط کامل بر مسیرهای بین‌شهری و رعایت اصول
              ایمنی، مسئولیت حمل بار شما را بر عهده می‌گیرند. تمامی مراحل بارگیری،
              مهار بار و تخلیه در مقصد با دقت انجام می‌شود تا از هرگونه آسیب احتمالی
              جلوگیری شود.
            </p>
          </section>

          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              چرا باربری {neighborhoodName} را انتخاب کنیم؟
            </h2>
            <p className="leading-8">
              باربری {neighborhoodName} با ارائه خدمات حرفه‌ای حمل‌ونقل، یکی از
              گزینه‌های قابل اعتماد برای اسباب‌کشی محسوب می‌شود. بهره‌مندی از بیمه
              باربری و فعالیت بر اساس ضوابط و مجوزهای قانونی، امنیت جابه‌جایی را
              برای مشتریان تضمین می‌کند.
            </p>
            <p className="leading-8">
              استفاده از خودروهای باربری استاندارد و مجهز، یکی از مهم‌ترین عوامل
              کیفیت خدمات ما است. همچنین حضور کارکنان باتجربه و متعهد باعث می‌شود
              فرآیند اسباب‌کشی بدون دردسر و با بهترین هزینه انجام شود. اگر به دنبال
              یک اسباب‌کشی سریع، ایمن و مقرون‌به‌صرفه هستید، می‌توانید با اطمینان
              خدمات باربری {neighborhoodName} را انتخاب کنید.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {neighborhoodBranches.map((branch) => (
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
            <Image
              src="/hero2/photo.jpg"
              alt={`ناوگان باربری آنلاین بار برای محله ${neighborhoodName}`}
              width={1000}
              height={563}
              className="max-h-[480px] w-full rounded-3xl object-cover"
            />
          </section>

          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              حمل بار با صدور بارنامه دولتی در {neighborhoodName}
            </h2>
            <p className="leading-8">
              حمل و جابه‌جایی اثاثیه در باربری {neighborhoodName} با استفاده از
              ایمن‌ترین روش‌ها و تکنیک‌های روز انجام می‌شود. یکی از مهم‌ترین خدمات
              ما، صدور بارنامه رسمی و ارائه بیمه‌نامه معتبر برای حمل بار است تا
              مشتریان با اطمینان کامل فرآیند اسباب‌کشی خود را انجام دهند.
            </p>
            <p className="leading-8">
              تمامی وسایل شما، چه کوچک و چه بزرگ، در زمان حمل تحت پوشش بیمه قرار
              می‌گیرند. در صورت بروز هرگونه خسارت احتمالی در حین جابه‌جایی، مطابق
              با شرایط بیمه، خسارت واردشده قابل پیگیری و جبران خواهد بود. صدور
              بارنامه و بیمه‌نامه، تضمینی برای امنیت اثاثیه شما و نشان‌دهنده
              فعالیت قانونی و حرفه‌ای مجموعه ما است.
            </p>
            <p className="leading-8">
              ضمانت سلامت بار، شفافیت در ارائه خدمات و رعایت اصول استاندارد
              حمل‌ونقل، از مهم‌ترین مزایای انتخاب باربری {neighborhoodName} برای
              اسباب‌کشی به شمار می‌رود.
            </p>
          </section>

          <section className="space-y-5 text-slate-700">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              اسباب‌کشی ارزان در {neighborhoodName}
            </h2>
            <p className="leading-8">
              اگر به دنبال اسباب‌کشی ارزان و در عین حال مطمئن هستید، خدمات باربری
              {" "}{neighborhoodName} می‌تواند گزینه‌ای مناسب برای شما باشد. هزینه
              حمل بار به عوامل مختلفی مانند نوع خدمات درخواستی، تعداد کارگران،
              نوع خودرو و حجم اثاثیه بستگی دارد. به همین دلیل تعرفه‌ها به صورت
              شفاف و بر اساس نیاز واقعی شما محاسبه می‌شود.
            </p>
            <p className="leading-8">
              ما تلاش می‌کنیم بهترین خدمات حمل‌ونقل را با قیمت منصفانه و
              مقرون‌به‌صرفه ارائه دهیم. پیشنهاد می‌شود خودروی باربری را متناسب با
              حجم و نوع وسایل خود انتخاب کنید تا علاوه بر افزایش ایمنی، در هزینه‌ها
              نیز صرفه‌جویی شود.
            </p>
            <p className="leading-8">
              پیش از ثبت سفارش می‌توانید با کارشناسان باربری {neighborhoodName}
              تماس بگیرید و اطلاعات لازم درباره هزینه، زمان‌بندی و نوع خدمات را
              دریافت کنید. پس از دریافت مشاوره تخصصی، می‌توانید با اطمینان کامل
              سرویس مورد نظر خود را رزرو کرده و یک اسباب‌کشی سریع، ایمن و اقتصادی
              را تجربه نمایید.
            </p>
          </section>
        </article>
        <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
          <h2 className="text-center text-2xl font-black text-slate-900 md:text-3xl">
            نمونه‌کارهای باربری {neighborhoodName}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <div key={image} className="overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src={`/nemoonekarha/${image}`}
                  alt={`نمونه‌کار باربری ${neighborhoodName} ${index + 1}`}
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
