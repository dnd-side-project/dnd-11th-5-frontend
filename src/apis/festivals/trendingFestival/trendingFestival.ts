import { staticInstance } from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { PaginationParamter } from "@/model/festivalTypes";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { TrendingFestivalResponse } from "./trendingFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 5 };
const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getTrendingFestival() {
  const endpoint = ENDPOINT.trending;
  const { data } = await staticInstance.get<TrendingFestivalResponse>(
    generateUrlWithParams(endpoint, defaultParams),
    {
      cache: "no-store",
    },
  );
  return data.content;
}
