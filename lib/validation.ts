import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد."),
  phone: z.string().trim().min(7, "شماره تماس نامعتبر است."),
  subject: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "متن پیام باید حداقل ۱۰ کاراکتر باشد."),
});

export const adminLoginSchema = z.object({
  username: z.string().trim().min(3, "نام کاربری نامعتبر است."),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
});

export const settingsSchema = z.object({
  siteName: z.string().min(2),
  shortIntro: z.string().min(10),
  phone: z.string().min(7),
  secondaryPhones: z.array(z.string()).default([]),
  address: z.string().min(5),
  businessHours: z.string().min(3),
  footerText: z.string().min(5),
  socialLinks: z.object({
    instagram: z.string().optional(),
    telegram: z.string().optional(),
    whatsapp: z.string().optional(),
    linkedin: z.string().optional(),
    x: z.string().optional(),
  }).default({}),
  heroTitle: z.string().min(5),
  heroDescription: z.string().min(10),
  heroImage: z.string().min(1),
  ctaText: z.string().min(2),
  metaTitle: z.string().optional().or(z.literal("")),
  metaDescription: z.string().optional().or(z.literal("")),
});

export const serviceSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  image: z.string().min(1),
  isVisible: z.boolean().default(true),
  order: z.coerce.number().default(0),
});

export const advantageSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  icon: z.string().min(1),
  isVisible: z.boolean().default(true),
  order: z.coerce.number().default(0),
});

export const portfolioSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  image: z.string().min(1),
  isVisible: z.boolean().default(true),
  order: z.coerce.number().default(0),
});

export const coverageAreaSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  zone: z.string().min(2),
  isVisible: z.boolean().default(true),
  order: z.coerce.number().default(0),
});

export const pageSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  description: z.string().min(2),
  content: z.string().min(20),
  image: z.string().optional().or(z.literal("")),
  isVisible: z.boolean().default(true),
});

export const uploadFilesSchema = z.object({
  file: z.any(),
});
