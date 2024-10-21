import FiestaInstance from "@/apis/FiestaInstance";
import { FiestaFetchOptions } from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";
import { ProfileMeUpdateSchemaType } from "@/validations/ProfileUpdateMeSchema";

import { UserMeResponse } from "./meType";

export const getMe = async (options?: FiestaFetchOptions) => {
  const endpoint = FIESTA_ENDPOINTS.users.me;
  const data = await FiestaInstance.get<UserMeResponse>(endpoint, {
    ...options,
    cache: "no-store",
  });

  return data;
};

export const updateMe = async (body: ProfileMeUpdateSchemaType) => {
  const endpoint = FIESTA_ENDPOINTS.users.me;
  const data = await FiestaInstance.patch<Pick<UserMeResponse, "userId">>(
    endpoint,
    { json: body },
  );

  return data;
};
