import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";

import { getServerSideSession } from "./apis/auth/auth";

const matchersForAuth = ["/mypage"];
const matchersForSignIn = ["/auth/sign-in"];
export async function middleware(request: NextRequest) {
  // * 인증이 필요한 페이지 접근 제어!
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    const session = await getServerSideSession();

    if (!!session && !session.isProfileRegistered) {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    return (await getServerSideSession()) // 세션 정보 확인
      ? NextResponse.next()
      : NextResponse.redirect(
          new URL(`/auth/sign-in?callbackUrl=${request.url}`, request.url),
        );
  }
  // * 인증 후 회원가입 및 로그인 접근 제어!
  if (matchersForSignIn.includes(request.nextUrl.pathname)) {
    const session = await getServerSideSession();

    if (!!session && !session?.isProfileRegistered) {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    !!session
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }
  return NextResponse.next();
}

// * 경로 일치 확인!
function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => !!match(url)(pathname));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
