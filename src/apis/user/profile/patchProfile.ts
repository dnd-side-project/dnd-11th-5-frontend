"use server";

import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

import { UserProfileRequest, UserProfileResponse } from "./profileType";

export const patchProfile = async (body: UserProfileRequest) => {
  const endpoint = FIESTA_ENDPOINTS.users.profile;
  const { data } = await instance.patch<UserProfileResponse>(endpoint, body);

  return data;
};
