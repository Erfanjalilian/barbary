import { NextResponse } from "next/server";
import { getSettings } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json(await getSettings());
}
