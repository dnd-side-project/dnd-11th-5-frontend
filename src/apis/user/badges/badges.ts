"use server";

import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { BadgesResponse } from "./badgesType";

export const getUserBadges = async () => {
  const endpoint = FIESTA_ENDPOINTS.users.badges;
  const data = await FiestaInstance.get<BadgesResponse>(endpoint, {
    next: { revalidate: 3600 },
  });

  return data;
};
