import { PaginationParamter } from "./recommendFestivalType";
const defaultParams: PaginationParamter = { page: 0, size: 6 };

export const recommendFestivalKeys = {
  all: ["RecommendFestival"],
  user: (userId: number | string) => [...recommendFestivalKeys.all, userId],
  list: (params: PaginationParamter = defaultParams) => [
    recommendFestivalKeys.all,
    params,
  ],
} as const;
