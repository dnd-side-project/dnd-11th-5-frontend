import kyInstance from "@/apis/FiestaInstance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import {
  PaginationParamter,
  RecommendFestivalResponse,
} from "./recommendFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 5 };

export async function getRecommendFestival(
  params: PaginationParamter = defaultParams,
) {
  const endpoint = FIESTA_ENDPOINTS.festivals.recommend;
  const response = await kyInstance.get<RecommendFestivalResponse>(
    generateUrlWithParams(endpoint, params),
    {
      cache: "no-store",
    },
  );

  return response;
}
