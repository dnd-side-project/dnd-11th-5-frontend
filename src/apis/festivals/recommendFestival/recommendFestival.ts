"use server";

import kyInstance from "@/apis/FiestaInstance";
import { REVALIDATE_DURATION } from "@/config";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { RecommendFestivalResponse } from "./recommendFestivalType";

export async function getRecommendFestival(festivalId: number) {
  const endpoint = FIESTA_ENDPOINTS.festivals.recommend;
  const response = await kyInstance.get<RecommendFestivalResponse>(
    generateUrlWithParams(endpoint, { page: 0, size: 5 }),
    {
      next: {
        revalidate: REVALIDATE_DURATION.DAY,
        tags: [FIESTA_ENDPOINTS.festivals.recommend, String(festivalId)],
      },
    },
  );

  return response;
}
