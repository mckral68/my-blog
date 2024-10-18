import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const loginPage = "/admin/login";
  if (!token) {
    // Eğer kullanıcı giriş sayfasındaysa, isteğe devam et
    if (req.nextUrl.pathname.startsWith(loginPage)) {
      return NextResponse.next();
    }
    
    // Eğer kullanıcı admin sayfalarındaysa, giriş sayfasına yönlendir
    if (req.nextUrl.pathname.startsWith("/admin")) {
      console.log("Token yok, giriş sayfasına yönlendiriliyor...");
      return NextResponse.redirect(new URL(loginPage, req.url));
    }
  }

  // Eğer token varsa, isteğe devam et
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware'in uygulanacağı sayfalar
};
