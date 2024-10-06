import type { User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

import { getRefreshToken, postOauthLogin } from "@/apis/auth/auth";
import { SocialLoginRequest } from "@/apis/auth/authType";
import { getMe } from "@/apis/user/me/me";
import { env } from "@/env";
import { decodeToken } from "@/lib/jwt";

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
  },
  callbacks: {
    async signIn() {
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
    async jwt(params) {
      let userResponse: UserMeResponse | null = null;

      // * 토큰 재발급
      if (
        params.token.refreshToken &&
        params.token.exp &&
        params.token.exp * 1000 < Date.now()
      ) {
        const { accessToken, refreshToken } = await getRefreshToken(
          params.token.refreshToken,
        );

        const decodedJWT = decodeToken(accessToken);

        return {
          ...params.token,
          accessToken,
          refreshToken,
          exp: decodedJWT?.exp,
        };
      }

      if (params.trigger === "update") {
        params.token = {
          ...params.token,
        };
      }

      if (params.user) {
        if (params.account && params.account.access_token) {
          const body: SocialLoginRequest = {
            id: params.user.id as string,
            email: params.user.email as string,
            accessToken: params.account.access_token as string,
          };

          params.token = await postOauthLogin(body);
          userResponse = await getMe({
            headers: {
              Authorization: `Bearer ${params.token.accessToken}`,
            },
          });
        }

        const decodedJWT = decodeToken(params.token.accessToken ?? "");

        return {
          ...params.user,
          ...userResponse,
          ...params.token,
          exp: decodedJWT?.exp,
        };
      }

      return { ...params.token, ...params.session };
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        const decodedJWT = decodeToken(token.accessToken ?? "");
        session.user = {
          ...session.user,
          userId: token.userId as number,
          email: token.email as string,
          nickname: token.nickname as string,
          statusMessage: token.statusMessage as string,
          profileImage: token.profileImage as string,
          userTypeId: token.userTypeId as number,
          isProfileRegistered: token.isProfileRegistered as boolean,
        };
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.exp = decodedJWT?.exp;
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
    isProfileRegistered?: boolean;
    exp?: number;
    iat?: number;
    sub?: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    userId?: number;
    email?: string;
    nickname?: string;
    statusMessage?: string;
    profileImage?: string;
    userTypeId?: number;
    accessToken?: string;
    refreshToken?: string;
    isProfileRegistered?: boolean;
  }
}
