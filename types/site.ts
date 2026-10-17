export type SocialLinks = {
  instagram?: string;
  telegram?: string;
  whatsapp?: string;
  linkedin?: string;
  x?: string;
};

export type SiteSettings = {
  siteName: string;
  shortIntro: string;
  phone: string;
  secondaryPhones: string[];
  address: string;
  businessHours: string;
  footerText: string;
  socialLinks: SocialLinks;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  ctaText: string;
  contactEmail?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  isVisible: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

export type AdvantageItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  isVisible: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

export type MovingBoxItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  isVisible: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  isVisible: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

export type CoverageArea = {
  id: string;
  name: string;
  description: string;
  zone: string;
  isVisible: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ContactMessage = {
  id: string;
  fullName: string;
  phone: string;
  subject?: string;
  message: string;
  status: "new" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt?: string;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  isVisible: boolean;
  updatedAt?: string;
};

export type SiteData = {
  settings: SiteSettings;
  services: ServiceItem[];
  advantages: AdvantageItem[];
  movingBoxes: MovingBoxItem[];
  portfolio: PortfolioItem[];
  coverageAreas: CoverageArea[];
  pages: PageContent[];
  contactMessages: ContactMessage[];
};
