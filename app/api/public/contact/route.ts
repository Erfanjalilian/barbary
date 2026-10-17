import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { createId, getContactMessages } from "@/lib/site-data";
import { readJsonFile, writeJsonFile } from "@/lib/storage/json-store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: parsed.error.issues[0]?.message || "ورودی نامعتبر است." }, { status: 400 });
    }

    const data = parsed.data;
    const messages = await readJsonFile("contactMessages", [] as any[]);
    const item = {
      id: createId("msg"),
      fullName: data.fullName,
      phone: data.phone,
      subject: data.subject || "",
      message: data.message,
      status: "new",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await writeJsonFile("contactMessages", [...messages, item]);
    return NextResponse.json({ message: "پیام شما با موفقیت ثبت شد.", success: true });
  } catch (error) {
    return NextResponse.json({ message: "خطای سرور در ثبت پیام." }, { status: 500 });
  }
}

export async function GET() {
  const messages = await getContactMessages();
  return NextResponse.json(messages, { status: 200 });
}
