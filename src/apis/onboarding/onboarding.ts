"use server";
import { FIESTA_ENDPOINTS } from "@/config";

import instance from "../instance";
import { festivalOnBoarding } from "./onboardingKeys";
import {
  FestivalCategory,
  FestivalCompanion,
  FestivalMood,
  FestivalPriority,
  OnboardingModel,
} from "./onboardingType";

export const getMoods = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.moods;
  const { data } = await instance.get<Array<FestivalMood>>(endpoint, {
    next: {
      tags: festivalOnBoarding.all,
    },
  });

  return data;
};
export const getCategories = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.categories;
  const { data } = await instance.get<Array<FestivalCategory>>(endpoint, {
    next: {
      tags: festivalOnBoarding.all,
    },
  });

  return data;
};
export const getCompanions = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.companions;
  const { data } = await instance.get<Array<FestivalCompanion>>(endpoint, {
    next: {
      tags: festivalOnBoarding.all,
    },
  });

  return data;
};
export const getPriority = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.priorities;
  const { data } = await instance.get<Array<FestivalPriority>>(endpoint, {
    next: {
      tags: festivalOnBoarding.all,
    },
  });

  return data;
};

export const getOnboardingData = async (): Promise<OnboardingModel> => {
  const [moodsPromise, categoriesPromise, companionsPromise, priorityPromise] =
    await Promise.allSettled([
      getMoods(),
      getCategories(),
      getCompanions(),
      getPriority(),
    ]);

  const moods = moodsPromise.status === "fulfilled" ? moodsPromise.value : [];
  const companions =
    companionsPromise.status === "fulfilled" ? companionsPromise.value : [];
  const priorities =
    priorityPromise.status === "fulfilled" ? priorityPromise.value : [];
  const categories =
    categoriesPromise.status === "fulfilled" ? categoriesPromise.value : [];

  return {
    moods,
    companions,
    priorities,
    categories,
  };
};
