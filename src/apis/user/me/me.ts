import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

export const getMe = async () => {
  const endpoint = FIESTA_ENDPOINTS.users.me;
  const { data } = await instance.get<UserMeResponse>(endpoint, {
    cache: "no-store",
  });

  return data;
};
