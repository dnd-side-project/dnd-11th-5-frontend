import type { PaginationParamter } from "@/apis/festival";
import FiestaInstance from "@/apis/FiestaInstance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { TrendingFestivalResponse } from "./trendingFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 5 };

export async function getTrendingFestival() {
  const endpoint = FIESTA_ENDPOINTS.festivals.trending;
  const response = await FiestaInstance.get<TrendingFestivalResponse>(
    generateUrlWithParams(endpoint, defaultParams),
    {
      cache: "no-store",
    },
  );

  return response.content;
}
