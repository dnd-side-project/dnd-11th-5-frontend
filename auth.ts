// ? Reference https://github.dev/nextauthjs/next-auth-example/blob/main/app/api/protected/route.ts
// ? Reference https://www.heropy.dev/p/MI1Khc

import NextAuth, { Account, NextAuthConfig, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { ProviderType } from "next-auth/providers";
import Kakao from "next-auth/providers/kakao";

import {
  getRefreshToken,
  getServerSideSession,
  postOauthLogin,
} from "@/apis/auth/auth";
import { SocialLoginRequest } from "@/apis/auth/authType";
import { decodeToken } from "@/lib/jwt";
import { isMatchPath } from "@/utils";

const AuthRequiredPage = ["/mypage"];

const config = {
  providers: [Kakao],
  // ? 사용자 지정 로그인, 로그아웃 및 오류 페이지를 만들 때 사용할 URL을 지정합니다. 지정한 페이지는 해당 기본 제공 페이지를 재정의합니다.
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    // * protected page 설정
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;

      if (isMatchPath(pathname, AuthRequiredPage)) {
        return !!auth;
      }

      return true;
    },
    // * callbackUrl이 있다면 callbackUrl로 리다이렉트
    redirect: async ({ url, baseUrl }: { url: string; baseUrl: string }) => {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (url) {
        const { search, origin } = new URL(url);
        const callbackUrl = new URLSearchParams(search).get("callbackUrl");
        if (callbackUrl) {
          const session = await getServerSideSession();

          // 프로필 등록안했으면 onboarding으로
          if (!session?.isProfileRegistered) {
            return `${baseUrl}/onboarding`;
          }

          return callbackUrl.startsWith("/")
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl;
        }
        if (origin === baseUrl) return url;
      }
      return baseUrl;
    },
    // ? 이 콜백은 JSON 웹 토큰이 생성되거나(즉, 로그인할 때) 업데이트될 때마다(즉, 클라이언트에서 세션에 액세스할 때마다) 호출됩니다.
    // ? 여기서 반환하는 모든 내용은 JWT에 저장되어 세션 콜백으로 전달됩니다. 여기에서 클라이언트에 반환할 항목을 제어할 수 있습니다.
    // ? 그 외의 모든 내용은 프런트엔드에서 보관됩니다. JWT는 기본적으로 AUTH_SECRET 환경 변수를 통해 암호화됩니다.
    jwt: async ({
      token,
      account,
      user,
    }: {
      token: JWT;
      user?: User | AdapterUser;
      account?: Account | null;
    }) => {
      let response: JWT = token;

      // * jwt token decode
      let jwtPayload;
      if (token.accessToken) {
        jwtPayload = decodeToken(token.accessToken);
      }

      // * 로그인 시 토큰 발급
      if (account && user) {
        const body: SocialLoginRequest = {
          id: user.id as string,
          email: user.email as string,
          accessToken: account.access_token as string,
        };

        if (!Object.hasOwn(token, "isProfileRegistered")) {
          response = await postOauthLogin(body);
        }

        token.accessToken = response?.accessToken;
        token.refreshToken = response.refreshToken;
        token.isProfileRegistered = response.isProfileRegistered;
        token.email = user?.email;
        token.exp = response.exp;
        token.iat = response.iat;
        token.sub = response.sub;

        return token;
      }

      // * 토큰 재발급
      if (
        token.refreshToken &&
        jwtPayload?.exp &&
        jwtPayload.exp * 1000 < Date.now()
      ) {
        const { accessToken, refreshToken } = await getRefreshToken(
          token.refreshToken,
        );
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
        return token;
      }

      return token;
    },
    // ? 로그인한 사용자의 활성 세션입니다.
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.isProfileRegistered = token.isProfileRegistered;
        session.exp = token.exp;
        session.iat = token.iat;
        session.sub = token.sub;
      }
      return session;
    },
  },
  // ? 인증 및 데이터베이스 작업에 대한 디버그 메시지를 사용하려면 디버그를 true로 설정합니다.
  // debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig;

export const { signIn, signOut, handlers, auth } = NextAuth(config);

declare module "next-auth" {
  // * 카카오 Account 응답에 맞게 수정
  interface Account {
    access_token?: string;
    token_type?: string;
    refresh_token?: string;
    expires_in?: number;
    refresh_token_expires_in?: number;
    expires_at?: number;
    provider: string;
    type: ProviderType;
    providerAccountId: string;
  }
  // * 세션이 accessToken 필드값 추가 ( 필요에 따라 더 추가 )
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    isProfileRegistered?: boolean;
    exp?: number;
    iat?: number;
    sub?: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    isProfileRegistered?: boolean;
  }
}
