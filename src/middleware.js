import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const loginPage = new URL("/admin/login", req.url).toString();

  // Eğer token yoksa kullanıcıyı giriş sayfasına yönlendir
  if (req.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(loginPage);
  }

  // Diğer sayfalara isteğe devam et
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware'in uygulanacağı sayfalar
};
