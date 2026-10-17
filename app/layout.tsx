import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "خانه‌ساز اسباب‌کشی | حمل و نقل حرفه‌ای",
  description: "خدمات حرفه‌ای اسباب‌کشی منزل، بسته‌بندی ایمن و حمل‌ونقل مطمئن در تهران و مناطق اطراف.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
