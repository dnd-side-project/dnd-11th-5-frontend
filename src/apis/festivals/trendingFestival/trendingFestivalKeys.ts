import { PaginationParamter } from "@/model/festivalTypes";

const defaultParams: PaginationParamter = { page: 0, size: 5 };

export const TrendingFestivalKeys = {
  all: ["trendingFestival"] as const,
  list: (params: PaginationParamter = defaultParams) => [
    TrendingFestivalKeys.all,
    params,
  ],
};
