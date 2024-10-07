"use server";

import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

import { BadgesResponse } from "./badgesType";

export const getUserBadges = async () => {
  const endpoint = FIESTA_ENDPOINTS.users.badges;
  const { data } = await instance.get<BadgesResponse>(endpoint, {
    next: { revalidate: 3600 },
  });

  return data;
};
