import { NextRequest, NextResponse } from "next/server";
import { adminLoginSchema } from "@/lib/validation";
import { clearAdminSession, getAdminCredentials, setAdminSession } from "@/lib/auth/admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    const data = Object.fromEntries(body.entries());
    const parsed = adminLoginSchema.safeParse(data);

    if (!parsed.success) {
      return NextResponse.json({ message: parsed.error.issues[0]?.message || "ورودی نامعتبر" }, { status: 400 });
    }

    const { username, password } = parsed.data;
    const credentials = getAdminCredentials();

    if (username !== credentials.username || password !== credentials.password) {
      return NextResponse.json({ message: "نام کاربری یا رمز عبور اشتباه است." }, { status: 401 });
    }

    await setAdminSession(username);
    return NextResponse.redirect(new URL("/admin", request.url));
  } catch (error) {
    return NextResponse.json({ message: "خطا در ورود مدیر" }, { status: 500 });
  }
}

export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ message: "خروج موفق" });
}
