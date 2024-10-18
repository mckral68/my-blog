import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const loginPage = "/admin/login";
  if (!token && req.nextUrl.pathname == "/admin/login") {
    return NextResponse.next();
  }
  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL(loginPage, req.url));
  }

  return NextResponse.next(); // İzin ver
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware'in uygulanacağı sayfalar
};
