export type TehranBranchDirection = "شمال" | "جنوب" | "شرق" | "غرب" | "مرکز";

export const GILAN_PHONE = "09115742824";

export const TEHRAN_BRANCH_PHONES: Record<TehranBranchDirection, string> = {
  شمال: "02126293698",
  جنوب: "02634200766",
  شرق: "02634200766",
  غرب: "02144387002",
  مرکز: "02188281009",
};

export function getCoveragePhone(
  city: string,
  direction: TehranBranchDirection,
  defaultPhone: string,
) {
  if (city !== "تهران") {
    return defaultPhone;
  }

  return TEHRAN_BRANCH_PHONES[direction] ?? defaultPhone;
}
