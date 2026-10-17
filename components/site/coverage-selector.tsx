"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, MapPin, Search, X } from "lucide-react";
import provinces from "@/data/iran-cities.json";
import { getCoveragePhone } from "@/lib/coverage-phones";

type CoverageSelectorProps = {
  variant?: "dropdown" | "page";
  className?: string;
  phone: string;
};

function toTelephoneHref(phone: string) {
  const normalized = phone
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[^\d+]/g, "");

  return `tel:${normalized}`;
}

const directions = [
  { name: "شمال", Icon: ArrowUp },
  { name: "جنوب", Icon: ArrowDown },
  { name: "شرق", Icon: ArrowRight },
  { name: "غرب", Icon: ArrowLeft },
  { name: "مرکز", Icon: MapPin },
] as const;

export function CoverageSelector({ variant = "dropdown", className = "", phone }: CoverageSelectorProps) {
  const [isOpen, setIsOpen] = useState(variant === "page");
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const currentProvince = provinces.find((province) => province.name === selectedProvince);
  const filteredProvinces = provinces.filter((province) =>
    province.name.includes(search.trim()),
  );
  const filteredCities = currentProvince?.cities.filter((city) =>
    city.includes(search.trim()),
  ) ?? [];

  function selectProvince(name: string) {
    setSelectedProvince(name);
    setSelectedCity(null);
    setSearch("");
  }

  function goBack() {
    if (selectedCity) {
      setSelectedCity(null);
    } else {
      setSelectedProvince(null);
    }
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
          <h2 className="text-lg font-black text-slate-900">
            {selectedCity
              ? `مناطق ${selectedCity}`
              : selectedProvince
                ? `شهرهای استان ${selectedProvince}`
                : "استان‌های ایران"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {selectedCity
              ? "جهت موردنظر در این شهر را انتخاب کنید."
              : selectedProvince
                ? "برای مشاهده نواحی شهر، نام شهر را انتخاب کنید."
                : "یک استان را برای مشاهده شهرهای آن انتخاب کنید."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {(selectedProvince || selectedCity) && (
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

      {!selectedCity && (
        <label className="mt-5 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-orange-400">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="sr-only">{selectedProvince ? "جست‌وجوی شهر" : "جست‌وجوی استان"}</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={selectedProvince ? "جست‌وجوی شهر..." : "جست‌وجوی استان..."}
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
          />
        </label>
      )}

      {!selectedProvince && (
        <div className="mt-5 grid max-h-[55vh] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
          {filteredProvinces.map((province) => (
            <button
              key={province.name}
              type="button"
              onClick={() => selectProvince(province.name)}
              className="rounded-xl border border-slate-200 px-3 py-3 text-right text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
            >
              {province.name}
            </button>
          ))}
          {filteredProvinces.length === 0 && (
            <p className="col-span-full py-6 text-center text-sm text-slate-500">استانی پیدا نشد.</p>
          )}
        </div>
      )}

      {selectedProvince && !selectedCity && (
        <div className="mt-5 grid max-h-[55vh] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
          {filteredCities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                setSelectedCity(city);
                setSearch("");
              }}
              className="rounded-xl border border-slate-200 px-3 py-3 text-right text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
            >
              {city}
            </button>
          ))}
          {filteredCities.length === 0 && (
            <p className="col-span-full py-6 text-center text-sm text-slate-500">شهری پیدا نشد.</p>
          )}
        </div>
      )}

      {selectedCity && (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {directions.map(({ name, Icon }) => (
            <a
              key={name}
              href={toTelephoneHref(getCoveragePhone(selectedCity, name, phone))}
              aria-label={`تماس با ${name} ${selectedCity}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-orange-100 bg-orange-50/70 px-3 py-5 text-center transition hover:border-orange-300 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <Icon className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-bold text-slate-800">{name} {selectedCity}</span>
            </a>
          ))}
        </div>
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
