import { PaginationParamter } from "./thisWeekFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 6 };

export const thisWeekFestivalKeys = {
  all: ["thisWeekFestival"],
  list: (params: PaginationParamter = defaultParams) => [
    thisWeekFestivalKeys.all,
    params,
  ],
};
