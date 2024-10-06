import instance, { FiestaFetchOptions } from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

export const getMe = async (options?: FiestaFetchOptions) => {
  const endpoint = FIESTA_ENDPOINTS.users.me;
  const { data } = await instance.get<UserMeResponse>(endpoint, {
    ...options,
    cache: "no-store",
  });

  return data;
};
