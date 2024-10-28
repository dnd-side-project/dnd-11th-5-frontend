import type { PaginationParamter } from "@/apis/festival";

const defaultParams: PaginationParamter = { page: 0, size: 6 };

export const thisWeekFestivalKeys = {
  all: ["thisWeekFestival"],
  list: (params: PaginationParamter = defaultParams) => [
    thisWeekFestivalKeys.all,
    params,
  ],
};
