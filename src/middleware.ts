import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getServerSideSession } from "./apis/auth/auth";
import { isMatchPath } from "./utils";

const serviceReadyRoute = ["/chat", "/map", "/calander"];
const matchersForAuth = ["/mypage"];
const matchersForSignIn = ["/auth/sign-in"];

const onBoardingCheck = ["/onboarding"];

export async function middleware(request: NextRequest) {
  // * 아직 서비스 준비중인 페이지
  if (serviceReadyRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log(request.cookies.get("authjs.session-token"));

  const session = await getServerSideSession();

  if (onBoardingCheck.includes(request.nextUrl.pathname)) {
    if (session?.user.isProfileRegistered) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // * 인증이 필요한 페이지 접근 제어!
  if (isMatchPath(request.nextUrl.pathname, matchersForAuth)) {
    if (!!session && !session.user.isProfileRegistered) {
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

    if (!!session && !session?.user.isProfileRegistered) {
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    return !!session
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }
  return NextResponse.next();
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

// export { auth as middleware } from "@/auth";

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
