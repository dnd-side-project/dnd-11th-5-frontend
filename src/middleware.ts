export { auth as middleware } from "@/auth";

// ! 일단 정상 동작 확인 Keep
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { match } from "path-to-regexp";

// import { auth } from "@/auth";

// const matchersForAuth = ["/mypage"];
// const matchersForSignIn = ["/auth/sign-in"];

// export async function middleware(request: NextRequest) {
//   const session = await getServierSideSession();

//   if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
//     return (await getServierSideSession()) // 세션 정보 확인
//       ? NextResponse.next()
//       : NextResponse.redirect(new URL("/auth/sign-in", request.url));
//   }
//   // 인증 후 회원가입 및 로그인 접근 제어!
//   if (isMatch(request.nextUrl.pathname, matchersForSignIn)) {
//     if (!session) {
//       return NextResponse.next();
//     }

//     if (!session.isProfileRegistered) {
//       return NextResponse.redirect(new URL("/onboarding", request.url));
//     }

//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// // 경로 일치 확인!
// function isMatch(pathname: string, urls: string[]) {
//   return urls.some((url) => !!match(url)(pathname));
// }
