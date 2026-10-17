import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest } from "next/server";

const cookieName = "admin_session";
const csrfCookieName = "admin_csrf";
const secret = process.env.AUTH_SECRET || "dev-admin-secret";

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "admin123",
  };
}

export function createSessionToken(username: string) {
  const hash = createHmac("sha256", secret).update(username).digest("hex");
  return `${username}:${hash}`;
}

export function verifySessionToken(value?: string | null) {
  if (!value) return null;
  const [username, hash] = value.split(":");
  if (!username || !hash) return null;
  const expected = createHmac("sha256", secret).update(username).digest("hex");
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(hash, "hex");
  if (a.length !== b.length) return null;
  try {
    if (timingSafeEqual(a, b)) {
      return username;
    }
  } catch {
    return null;
  }
  return null;
}

export async function getSessionCookie() {
  const cookieStore = await cookies();
  return cookieStore.get(cookieName)?.value ?? null;
}

export async function getCsrfCookie() {
  const cookieStore = await cookies();
  return cookieStore.get(csrfCookieName)?.value ?? null;
}

export async function requireAdminSession() {
  const session = await getSessionCookie();
  const username = verifySessionToken(session);
  if (!username) {
    throw new Error("Unauthorized");
  }
  return username;
}

export async function requireAdminRequest(request: NextRequest) {
  const session = await getSessionCookie();
  const username = verifySessionToken(session);
  const csrf = request.headers.get("x-admin-csrf");
  const validCsrf = csrf && csrf === (await getCsrfCookie());

  if (!username || !validCsrf) {
    throw new Error("Unauthorized");
  }

  return username;
}

export async function setAdminSession(username: string) {
  const cookieStore = await cookies();
  const token = createSessionToken(username);
  const csrfToken = createHmac("sha256", secret).update(`${Date.now()}-${username}`).digest("hex");

  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  cookieStore.set(csrfCookieName, csrfToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return csrfToken;
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
  cookieStore.delete(csrfCookieName);
}

export function getRequestCsrfHeader() {
  return "x-admin-csrf";
}
