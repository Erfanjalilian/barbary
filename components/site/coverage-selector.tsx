"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowLeft, MapPin, Phone, Search, X } from "lucide-react";
import { GILAN_PHONE, getCoveragePhone, type TehranBranchDirection } from "@/lib/coverage-phones";

type CoverageSelectorProps = {
  variant?: "dropdown" | "page";
  className?: string;
  phone: string;
};

const tehranAreas: {
  label: string;
  direction: TehranBranchDirection;
  neighborhoods: string[];
}[] = [
  {
    label: "شمال تهران",
    direction: "شمال",
    neighborhoods: [
      "تجریش", "نیاوران", "قیطریه", "فرمانیه", "ولنجک", "زعفرانیه", "الهیه",
      "اقدسیه", "دارآباد", "دزاشیب", "جماران", "کامرانیه", "آجودانیه",
      "فرشته", "اوین", "درکه", "سوهانک", "ازگل", "چیذر", "دربند",
      "محمودیه", "اختیاریه", "نوبنیاد",
    ],
  },
  {
    label: "مرکز تهران",
    direction: "مرکز",
    neighborhoods: [
      "یوسف‌آباد", "امیرآباد", "فاطمی", "عباس‌آباد", "سهروردی", "بهجت‌آباد",
      "آرژانتین", "ولیعصر", "انقلاب", "فلسطین", "فردوسی", "جمهوری",
      "هفت‌تیر", "سنایی", "ایرانشهر", "باغ سپهسالار", "منیریه",
      "گاندی", "میدان ولیعصر", "طالقانی", "بهار", "کریم‌خان",
    ],
  },
  {
    label: "غرب تهران",
    direction: "غرب",
    neighborhoods: [
      "صادقیه", "جنت‌آباد شمالی", "جنت‌آباد مرکزی", "جنت‌آباد جنوبی", "پونک",
      "شهران", "بلوار فردوس", "اکباتان", "تهرانسر", "چیتگر", "وردآورد",
      "باغ فیض", "مرزداران", "ستارخان", "طرشت", "آزادی", "سازمان برنامه",
      "دهکده المپیک", "شهرک غرب", "آیت‌الله کاشانی", "شهرزیبا", "کن",
      "شاهین", "سیمون بولیوار",
    ],
  },
  {
    label: "جنوب تهران",
    direction: "جنوب",
    neighborhoods: [
      "نازی‌آباد", "جوادیه", "خزانه", "شهرری", "شوش", "مولوی", "افسریه",
      "کیانشهر", "یافت‌آباد", "عبدل‌آباد", "خانی‌آباد نو", "دولت‌آباد",
      "شهرک ولیعصر", "امامزاده حسن", "بازار", "تهران‌نو", "بریانک",
      "منطقه ۱۷", "منطقه ۱۹", "نعمت‌آباد", "مشیریه", "آذری",
    ],
  },
];

function toTelephoneHref(phone: string) {
  const normalized = phone
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[^\d+]/g, "");

  return `tel:${normalized}`;
}

export function CoverageSelector({ variant = "dropdown", className = "", phone }: CoverageSelectorProps) {
  const [isOpen, setIsOpen] = useState(variant === "page");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const selectedTehranArea = tehranAreas.find((area) => area.label === selectedArea);
  const filteredNeighborhoods = selectedTehranArea?.neighborhoods.filter((neighborhood) =>
    neighborhood.includes(search.trim()),
  ) ?? [];

  function goBack() {
    setSelectedArea(null);
    setSearch("");
  }

  const panel = (
    <div
      className={
        variant === "page"
          ? "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
          : "absolute left-0 top-full z-50 mt-3 w-[min(90vw,40rem)] rounded-3xl border border-slate-200 bg-white p-4 text-right shadow-xl sm:p-6"
      }
      dir="rtl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900">{selectedArea ?? "مناطق تحت پوشش"}</h2>
          <p className="mt-1 text-sm text-slate-500">
            {selectedTehranArea
              ? "محله‌های این محدوده را انتخاب کنید."
              : selectedArea === "گیلان"
                ? "برای تماس با گیلان از شمارهٔ زیر استفاده کنید."
                : "یکی از مناطق زیر را برای مشاهدهٔ جزئیات انتخاب کنید."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {selectedArea && (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 transition hover:border-orange-300 hover:text-orange-600"
            >
              <ArrowLeft className="h-4 w-4" />
              بازگشت
            </button>
          )}
          {variant === "dropdown" && (
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="بستن فهرست مناطق تحت پوشش"
              className="rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-orange-300 hover:text-orange-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {!selectedArea && (
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {tehranAreas.map((area) => (
            <button
              key={area.label}
              type="button"
              onClick={() => setSelectedArea(area.label)}
              className="rounded-xl border border-slate-200 px-3 py-3 text-right text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
            >
              {area.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedArea("گیلان")}
            className="rounded-xl border border-slate-200 px-3 py-3 text-right text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
          >
            گیلان
          </button>
        </div>
      )}

      {selectedTehranArea && (
        <>
          <label className="mt-5 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-orange-400">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="sr-only">جست‌وجوی محله</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="جست‌وجوی محله..."
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
            />
          </label>
          <div className="mt-5 grid max-h-[55vh] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
            {filteredNeighborhoods.map((neighborhood) => (
              <a
                key={neighborhood}
                href={toTelephoneHref(getCoveragePhone("تهران", selectedTehranArea.direction, phone))}
                aria-label={`تماس با ${selectedTehranArea.label}، محله ${neighborhood}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
              >
                <MapPin className="h-4 w-4 shrink-0 text-orange-500" />
                <span>{neighborhood}</span>
              </a>
            ))}
            {filteredNeighborhoods.length === 0 && (
              <p className="col-span-full py-6 text-center text-sm text-slate-500">محله‌ای پیدا نشد.</p>
            )}
          </div>
          <a
            href={toTelephoneHref(getCoveragePhone("تهران", selectedTehranArea.direction, phone))}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            <Phone className="h-4 w-4" />
            تماس با {selectedTehranArea.label}
          </a>
        </>
      )}

      {selectedArea === "گیلان" && (
        <a
          href={toTelephoneHref(GILAN_PHONE)}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          <Phone className="h-4 w-4" />
          تماس با گیلان: {GILAN_PHONE}
        </a>
      )}

      {variant === "dropdown" && (
        <Link
          href="/coverage"
          onClick={() => setIsOpen(false)}
          className="mt-4 block border-t border-slate-100 pt-4 text-center text-sm font-bold text-orange-600 hover:text-orange-700"
        >
          مشاهده صفحهٔ کامل مناطق تحت پوشش
        </Link>
      )}
    </div>
  );

  if (variant === "page") {
    return panel;
  }

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((open) => !open)}
        onMouseEnter={() => {
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            setIsOpen(true);
          }
        }}
        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-right text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-orange-600 lg:w-auto lg:px-0 lg:py-0"
      >
        <span>مناطق تحت پوشش</span>
        <ArrowDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>
      {isOpen && panel}
    </div>
  );
}
