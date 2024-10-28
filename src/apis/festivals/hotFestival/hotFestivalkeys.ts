import type { PaginationParamter } from "@/apis/festival";

const defaultParams: PaginationParamter = { page: 0, size: 6 };

export const hotFestivalKeys = {
  all: ["hotFestival"],
  list: (params: PaginationParamter = defaultParams) => [
    hotFestivalKeys.all,
    params,
  ],
};
