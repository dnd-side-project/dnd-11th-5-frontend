import type { User } from "next-auth";
import { decode, type JWT } from "next-auth/jwt";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

import { getRefreshToken, postOauthLogin } from "@/apis/auth/auth";
import { SocialLoginRequest } from "@/apis/auth/authType";
import { getMe } from "@/apis/user/me/me";
import { env } from "@/env";
import { decodeToken } from "@/lib/jwt";
import type { UserMeResponse } from "@/apis/user/me/meType";

const serviceReadyRoute = ["/chat", "/map", "/calander"];
const matchersForAuth = ["/mypage"];
const matchersForSignIn = ["/auth/sign-in"];

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    KakaoProvider({
      clientId: env.AUTH_KAKAO_ID,
      clientSecret: env.AUTH_KAKAO_SECRET,
    }),
  ],
  secret: env.AUTH_SECRET,
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-in",
    error: "/auth/sign-in",
  },
  callbacks: {
    authorized: async ({ request, auth }) => {
      if (matchersForAuth.some((v) => v == request.nextUrl.pathname)) {
        return !!auth;
      }

      return true;
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith("/")) return `${baseUrl}${url}`;

      if (url) {
        const { search, origin } = new URL(url);
        const callbackUrl = new URLSearchParams(search).get("callbackUrl");
        if (callbackUrl)
          return callbackUrl.startsWith("/")
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl;
        if (origin === baseUrl) return url;
      }
      return baseUrl;
    },

    async jwt({ token, session, user, trigger, account }) {
      if (trigger === "update") {
        token.user = {
          ...session.user,
        };
      }

      if (user) {
        if (account && account.access_token) {
          const body: SocialLoginRequest = {
            id: user.id as string,
            email: user.email as string,
            accessToken: account.access_token as string,
          };

          const { accessToken, refreshToken } = await postOauthLogin(body);

          const userResponse = await getMe({
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          token.user = { ...user, ...userResponse };
          token = {
            ...token,
            refreshToken,
            accessToken,
          };

          return token;
        }
      }

      if (!token.accessToken) {
        return null;
      }

      if (!!token.accessToken) {
        const decodedJWT = decodeToken(token.accessToken);

        if (decodedJWT) {
          token.exp = decodedJWT.exp;
        }
      }

      if (
        !!token.refreshToken &&
        token?.exp &&
        token?.exp * 1000 < Date.now()
      ) {
        const { accessToken, refreshToken } = await getRefreshToken(
          token.refreshToken,
        );

        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.accessToken) {
        session.user = {
          ...session.user,
          userId: token.user.userId as number,
          email: token.user.email as string,
          nickname: token.user.nickname as string,
          statusMessage: token.user.statusMessage as string,
          profileImage: token.user.profileImage as string,
          userTypeId: token.user.userTypeId as number,
          isProfileRegistered: token.user.isProfileRegistered as boolean,
        };
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.exp = token.exp;
        session.iat = token.iat;
        session.sub = token.sub;
      }

      return session;
    },
  },

  // ? 인증 및 데이터베이스 작업에 대한 디버그 메시지를 사용하려면 디버그를 true로 설정합니다.
  // debug: process.env.NODE_ENV !== "production" ? true : false,
});

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
    providerAccountId: string;
  }
  // * 세션이 accessToken 필드값 추가 ( 필요에 따라 더 추가 )
  interface Session {
    user: User & UserMeResponse;
    accessToken?: string;
    refreshToken?: string;
    exp?: number;
    iat?: number;
    sub?: string;
  }

  interface User {
    userId: number;
    nickname: string;
    statusMessage: string;
    profileImage: string;
    isProfileRegistered: boolean;
    userTypeId: number;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      userId?: number;
      email?: string;
      nickname?: string;
      statusMessage?: string;
      profileImage?: string;
      userTypeId?: number;
      accessToken?: string;
      refreshToken?: string;
      isProfileRegistered?: boolean;
    };
    accessToken?: string;
    refreshToken?: string;
    exp?: number;
    iat?: number;
    sub?: string;
  }
}
