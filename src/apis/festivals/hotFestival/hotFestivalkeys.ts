import { PaginationParamter } from "./hotFestivalType";
const defaultParams: PaginationParamter = { page: 0, size: 6 };

export const hotFestivalKeys = {
  all: ["hostFestival"],
  list: (params: PaginationParamter = defaultParams) => ["hotFestival", params],
};
