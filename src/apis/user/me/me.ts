"use server";

import instance, { FiestaFetchOptions } from "@/apis/instance";
import { unstable_update } from "@/auth";
import { FIESTA_ENDPOINTS } from "@/config";
import { ProfileMeUpdateSchemaType } from "@/validations/ProfileUpdateMeSchema";

export const getMe = async (options?: FiestaFetchOptions) => {
  const endpoint = FIESTA_ENDPOINTS.users.me;
  const { data } = await instance.get<UserMeResponse>(endpoint, {
    ...options,
    cache: "no-store",
  });

  return data;
};

export const updateMe = async (body: ProfileMeUpdateSchemaType) => {
  const endpoint = FIESTA_ENDPOINTS.users.me;
  const { data } = await instance.patch<Pick<UserMeResponse, "userId">>(
    endpoint,
    body,
  );
  const user = await getMe();
  unstable_update({ user });

  return data;
};
