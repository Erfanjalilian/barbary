export type TehranBranchDirection = "شمال" | "جنوب" | "شرق" | "غرب" | "مرکز";

const tehranBranchPhones: Partial<Record<TehranBranchDirection, string>> = {
  شمال: "02126210683",
  جنوب: "02634200766",
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

  return tehranBranchPhones[direction] ?? defaultPhone;
}
