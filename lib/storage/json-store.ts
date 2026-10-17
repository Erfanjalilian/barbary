import { promises as fs } from "node:fs";
import path from "node:path";

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");

const seedData = {
  settings: {
    siteName: "خانه‌ساز اسباب‌کشی",
    shortIntro:
      "شرکت حرفه‌ای جابه‌جایی و اسباب‌کشی منزل با تیم مجرب، بسته‌بندی اصولی و حمل‌ونقل امن.",
    phone: "+989121234567",
    secondaryPhones: ["+989121234568"],
    address: "تهران، خیابان ولیعصر، نبش کوچه ۱۲",
    businessHours: "شنبه تا پنج‌شنبه، ۸:۰۰ تا ۲۰:۰۰",
    footerText: "با خیال راحت وسایل خود را به خانه جدید منتقل کنید.",
    socialLinks: {
      instagram: "https://instagram.com",
      telegram: "https://t.me",
      whatsapp: "https://wa.me/989121234567",
    },
    heroTitle: "اسباب‌کشی آسان، مطمئن و حرفه‌ای",
    heroDescription:
      "با تیم مجرب ما، جابه‌جایی خانه، آپارتمان یا دفتر شما بدون استرس و با نظم کامل انجام می‌شود.",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    ctaText: "همین حالا تماس بگیرید",
    metaTitle: "خانه‌ساز اسباب‌کشی | خدمات حرفه‌ای حمل و نقل منزل",
    metaDescription: "اسباب‌کشی منزل با تیم مجرب، بسته‌بندی اصولی و حمل‌ونقل ایمن در تهران و مناطق اطراف.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  services: [
    {
      id: "svc-1",
      title: "اسباب‌کشی منزل",
      description: "جابه‌جایی کامل اثاثیه و وسایل منزل با برنامه‌ریزی دقیق و تیم حرفه‌ای.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      isVisible: true,
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-2",
      title: "بسته‌بندی حرفه‌ای",
      description: "استفاده از مواد مناسب و بسته‌بندی امن برای محافظت از وسایل حساس و شکستنی.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
      isVisible: true,
      order: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "svc-3",
      title: "حمل اثاثیه اداری",
      description: "انتقال لوازم اداری و تجهیزات دفتر با نظم، دقت و زمان‌بندی مناسب.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      isVisible: true,
      order: 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  advantages: [
    { id: "adv-1", title: "جابه‌جایی اصولی و ایمن", description: "حمل و نقل دقیق و ایمن وسایل با رعایت استانداردهای حرفه‌ای.", icon: "shield-check", isVisible: true, order: 1 },
    { id: "adv-2", title: "نیروهای مجرب", description: "تیم متخصص با تجربه بالا در حمل و نقل اثاثیه منزل و اداری.", icon: "users", isVisible: true, order: 2 },
    { id: "adv-3", title: "بسته‌بندی استاندارد", description: "استفاده از کارتن، نایلون و مواد محافظتی مناسب برای هر وسیله.", icon: "package-check", isVisible: true, order: 3 },
    { id: "adv-4", title: "نظم و زمان‌بندی", description: "برنامه‌ریزی دقیق برای انجام سریع و منظم اسباب‌کشی.", icon: "clock-3", isVisible: true, order: 4 },
  ],
  movingBoxes: [
    {
      id: "box-1",
      title: "بسته‌بندی عتیقه‌جات",
      description: "حفاظت ویژه برای وسایل حساس، شیشه‌ای و ارزشمند.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      isVisible: true,
      order: 1,
    },
    {
      id: "box-2",
      title: "بسته‌بندی لباس و پارچه",
      description: "استفاده از جعبه‌ها و مواد مناسب برای جلوگیری از چروک و آسیب.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      isVisible: true,
      order: 2,
    },
  ],
  portfolio: [
    {
      id: "p-1",
      title: "انتقال آپارتمان مرکزی",
      description: "اسباب‌کشی یک آپارتمان ۳ خواب در مرکز شهر با زمان‌بندی دقیق.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      isVisible: true,
      order: 1,
    },
    {
      id: "p-2",
      title: "جابجایی دفتر کاری",
      description: "انتقال تجهیزات اداری و وسایل دفتر در بازه زمانی کوتاه.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      isVisible: true,
      order: 2,
    },
  ],
  coverageAreas: [
    { id: "area-1", name: "تهران", description: "خدمات حمل اثاثیه در کل تهران و مناطق اطراف", zone: "کل تهران", isVisible: true, order: 1 },
    { id: "area-2", name: "شهرری", description: "پوشش خدماتی در مناطق شمالی و جنوبی شهرری", zone: "شهرری", isVisible: true, order: 2 },
    { id: "area-3", name: "کرج", description: "اسباب‌کشی به شهر کرج و مناطق اطراف", zone: "کرج", isVisible: true, order: 3 },
  ],
  pages: [
    {
      slug: "about",
      title: "درباره ما",
      description: "معرفی کوتاه درباره سابقه و خدمات ما",
      content:
        "شرکت خانه‌ساز با هدف ارائه خدمات اسباب‌کشی مطمئن و حرفه‌ای فعالیت می‌کند. ما با تیم مجرب، بسته‌بندی دقیق و رعایت اصول ایمنی، تجربه‌ای آرام و بدون استرس برای مشتریان خود ایجاد می‌کنیم.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      isVisible: true,
      updatedAt: new Date().toISOString(),
    },
    {
      slug: "packing",
      title: "بسته‌بندی",
      description: "فرآیند حرفه‌ای بسته‌بندی وسایل",
      content:
        "در خدمات بسته‌بندی، از کارتن‌های مقاوم، پوشش مناسب برای وسایل حساس، برچسب‌گذاری دقیق و نحوه درست چیدمان در وسیله نقلیه استفاده می‌شود تا وسایل شما ایمن و منظم جابه‌جا شوند.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
      isVisible: true,
      updatedAt: new Date().toISOString(),
    },
  ],
  contactMessages: [],
};

const fileMap: Record<string, string> = {
  settings: "settings.json",
  services: "services.json",
  advantages: "advantages.json",
  movingBoxes: "moving-boxes.json",
  portfolio: "portfolio.json",
  coverageAreas: "coverage-areas.json",
  pages: "pages.json",
  contactMessages: "contact-messages.json",
};

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function ensureSeedData() {
  await ensureDataDir();

  for (const [key, fileName] of Object.entries(fileMap)) {
    const filePath = path.join(DATA_DIR, fileName);
    try {
      await fs.access(filePath);
    } catch {
      const value = (seedData as Record<string, unknown>)[key];
      await fs.writeFile(filePath, JSON.stringify(value, null, 2), "utf-8");
    }
  }
}

export async function readJsonFile<T>(key: keyof typeof fileMap, fallback: T): Promise<T> {
  await ensureSeedData();
  const filePath = path.join(DATA_DIR, fileMap[key]);

  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as T;
  } catch {
    await fs.writeFile(filePath, JSON.stringify(fallback, null, 2), "utf-8");
    return fallback;
  }
}

export async function writeJsonFile<T>(key: keyof typeof fileMap, data: T): Promise<T> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, fileMap[key]);
  const tempPath = `${filePath}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(data, null, 2), "utf-8");
  await fs.rename(tempPath, filePath);
  return data;
}

export async function listPublicData() {
  const settings = await readJsonFile("settings", seedData.settings);
  const services = await readJsonFile("services", seedData.services);
  const advantages = await readJsonFile("advantages", seedData.advantages);
  const movingBoxes = await readJsonFile("movingBoxes", seedData.movingBoxes);
  const portfolio = await readJsonFile("portfolio", seedData.portfolio);
  const coverageAreas = await readJsonFile("coverageAreas", seedData.coverageAreas);
  const pages = await readJsonFile("pages", seedData.pages);

  return {
    settings,
    services: services.filter((item: { isVisible?: boolean }) => item.isVisible !== false),
    advantages: advantages.filter((item: { isVisible?: boolean }) => item.isVisible !== false),
    movingBoxes: movingBoxes.filter((item: { isVisible?: boolean }) => item.isVisible !== false),
    portfolio: portfolio.filter((item: { isVisible?: boolean }) => item.isVisible !== false),
    coverageAreas: coverageAreas.filter((item: { isVisible?: boolean }) => item.isVisible !== false),
    pages: pages.filter((item: { isVisible?: boolean }) => item.isVisible !== false),
  };
}

export async function updateEntity<T>(key: keyof typeof fileMap, updater: (previous: T) => T): Promise<T> {
  const current = await readJsonFile<T>(key, [] as unknown as T);
  const updated = updater(current);
  await writeJsonFile(key, updated);
  return updated;
}
