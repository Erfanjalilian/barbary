import { readJsonFile, updateEntity, writeJsonFile, listPublicData } from "./storage/json-store";
import type { SiteSettings, ServiceItem, AdvantageItem, MovingBoxItem, PortfolioItem, CoverageArea, PageContent, ContactMessage } from "@/types/site";

export type CollectionKey =
  | "settings"
  | "services"
  | "advantages"
  | "movingBoxes"
  | "portfolio"
  | "coverageAreas"
  | "pages"
  | "contactMessages";

const collectionAliases: Record<string, CollectionKey> = {
  settings: "settings",
  services: "services",
  advantages: "advantages",
  "moving-boxes": "movingBoxes",
  portfolio: "portfolio",
  "coverage-areas": "coverageAreas",
  pages: "pages",
  "contact-messages": "contactMessages",
};

export function normalizeCollectionName(name: string): CollectionKey {
  const alias = collectionAliases[name] ?? name;
  if (!collectionAliases[name] && !["settings", "services", "advantages", "movingBoxes", "portfolio", "coverageAreas", "pages", "contactMessages"].includes(name)) {
    throw new Error(`Unsupported collection: ${name}`);
  }
  return alias as CollectionKey;
}

export async function getPublicData() {
  return listPublicData();
}

export async function getPublicCollection<T>(section: string): Promise<T[]> {
  const key = normalizeCollectionName(section);
  const data = await readJsonFile<T[]>(key, [] as T[]);
  return Array.isArray(data) ? data.filter((item) => (item as { isVisible?: boolean }).isVisible !== false) : [];
}

export async function getSettings(): Promise<SiteSettings> {
  const data = await readJsonFile("settings", {
    siteName: "خانه‌ساز اسباب‌کشی",
    shortIntro: "",
    phone: "",
    secondaryPhones: [],
    address: "",
    businessHours: "",
    footerText: "",
    socialLinks: {},
    heroTitle: "",
    heroDescription: "",
    heroImage: "",
    ctaText: "تماس با ما",
  } as SiteSettings);
  return data as SiteSettings;
}

export async function getPages(): Promise<PageContent[]> {
  return getPublicCollection<PageContent>("pages");
}

export async function getPageBySlug(slug: string) {
  const pages = await getPages();
  return pages.find((page) => page.slug === slug) ?? null;
}

export async function getServices(): Promise<ServiceItem[]> {
  return getPublicCollection<ServiceItem>("services");
}

export async function getAdvantages(): Promise<AdvantageItem[]> {
  return getPublicCollection<AdvantageItem>("advantages");
}

export async function getMovingBoxes(): Promise<MovingBoxItem[]> {
  return getPublicCollection<MovingBoxItem>("movingBoxes");
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  return getPublicCollection<PortfolioItem>("portfolio");
}

export async function getCoverageAreas(): Promise<CoverageArea[]> {
  return getPublicCollection<CoverageArea>("coverageAreas");
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const key = "contactMessages" as const;
  const messages = await readJsonFile<ContactMessage[]>(key, []);
  return [...messages].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function saveCollection<T>(section: string, value: T[]) {
  const key = normalizeCollectionName(section);
  await writeJsonFile(key, value);
  return value;
}

export async function updateCollectionItem<T extends { id: string }>(section: string, id: string, updater: (item: T) => T) {
  const key = normalizeCollectionName(section);
  const list = await readJsonFile<T[]>(key, [] as T[]);
  const updatedItems = list.map((item) => (item.id === id ? updater(item) : item));
  await writeJsonFile(key, updatedItems);
  return updatedItems;
}

export async function deleteCollectionItem(section: string, id: string) {
  const key = normalizeCollectionName(section);
  const list = await readJsonFile<any[]>(key, []);
  const filtered = list.filter((item) => item.id !== id);
  await writeJsonFile(key, filtered);
  return filtered;
}

export async function createCollectionItem<T>(section: string, item: T) {
  const key = normalizeCollectionName(section);
  const list = await readJsonFile<T[]>(key, [] as T[]);
  await writeJsonFile(key, [...list, item]);
  return item;
}

export async function setMessageStatus(id: string, status: ContactMessage["status"]) {
  return updateCollectionItem<ContactMessage>("contactMessages", id, (item) => ({ ...item, status, updatedAt: new Date().toISOString() }));
}
