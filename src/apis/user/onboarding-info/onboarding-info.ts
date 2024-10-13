"use server";

import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { OnboardingInfoResponse } from "./onboarding-infoType";

export const getUserOnboardingInfo = async () => {
  const endpoint = FIESTA_ENDPOINTS.users.onboarding_info;

  const data = await FiestaInstance.get<OnboardingInfoResponse>(endpoint, {
    cache: "no-store",
  });

  return data;
};
