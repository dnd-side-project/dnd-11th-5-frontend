"use server";
import ky from "ky";

import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";
import { getSettledValue } from "@/utils";

import { FiestaResponse } from "../instance";
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
  const data = await ky
    .get(`${env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
      cache: "force-cache",
      next: {
        tags: festivalOnBoarding.all,
      },
    })
    .json<FiestaResponse<Array<FestivalMood>>>()
    .then((res) => res.data);

  return data;
};
export const getCategories = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.categories;
  const data = await ky
    .get<Array<FestivalCategory>>(`${env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
      cache: "force-cache",
      next: {
        tags: festivalOnBoarding.all,
      },
    })
    .json<FiestaResponse<Array<FestivalCategory>>>()
    .then((res) => res.data);

  return data;
};
export const getCompanions = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.companions;
  const data = await ky
    .get<Array<FestivalCompanion>>(`${env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
      cache: "force-cache",
      next: {
        tags: festivalOnBoarding.all,
      },
    })
    .json<FiestaResponse<Array<FestivalCompanion>>>()
    .then((res) => res.data);
  return data;
};

export const getPriority = async () => {
  const endpoint = FIESTA_ENDPOINTS.festivals.priorities;
  const data = await ky
    .get<Array<FestivalPriority>>(`${env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
      cache: "force-cache",
      next: {
        tags: festivalOnBoarding.all,
      },
    })
    .json<FiestaResponse<Array<FestivalPriority>>>()
    .then((res) => res.data);

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

  const moods = getSettledValue(moodsPromise, []);
  const categories = getSettledValue(categoriesPromise, []);
  const companions = getSettledValue(companionsPromise, []);
  const priorities = getSettledValue(priorityPromise, []);

  return {
    moods,
    companions,
    priorities,
    categories,
  };
};
