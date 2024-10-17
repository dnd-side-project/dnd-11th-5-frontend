"use server";

import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { UserProfileRequest, UserProfileResponse } from "./profileType";

export const patchProfile = async (body: UserProfileRequest) => {
  const endpoint = FIESTA_ENDPOINTS.users.profile;
  const data = await FiestaInstance.patch<UserProfileResponse>(endpoint, {
    json: body,
  });

  return data;
};
