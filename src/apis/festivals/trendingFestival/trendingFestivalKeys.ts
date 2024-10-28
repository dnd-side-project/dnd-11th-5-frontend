import type { PaginationParamter } from "@/apis/festival";

const defaultParams: PaginationParamter = { page: 0, size: 5 };

export const TrendingFestivalKeys = {
  all: ["trendingFestival"] as const,
  list: (params = defaultParams) => [TrendingFestivalKeys.all, params],
};
