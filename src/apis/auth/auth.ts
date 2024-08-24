"use server";

import instance from "@/apis/instance";
import { auth, signIn, signOut } from "@/auth";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import {
  RefreshTokenResponse,
  SocialLoginRequest,
  SocialLoginResponse,
} from "./authType";

const ENDPOINT = FIESTA_ENDPOINTS.users;

export async function postOauthLogin(body: SocialLoginRequest) {
  const endpoint = ENDPOINT.login;
  const { data } = await instance.post<SocialLoginResponse>(endpoint, body);

  return data;
}

export const postSignOut = async () => {
  await signOut();
};

export const signInWithKakao = async () => {
  const session = await signIn("kakao");

  return session;
};

export const getRefreshToken = async (refreshToken: string) => {
  const endpoint = ENDPOINT.reissue;
  return await instance
    .post<RefreshTokenResponse>(endpoint, undefined, {
      headers: {
        refreshToken: `Bearer ${refreshToken}`,
      },
    })
    .then((res) => res.data);
};

export const getServerSideSession = async () => {
  const session = await auth();
  return session;
};
