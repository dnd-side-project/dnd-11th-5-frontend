"use server";

import { staticInstance } from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { thisWeekFestivalKeys } from "./thisWeekFestivalKeys";
import {
  PaginationParamter,
  ThisWeekFestivalData,
} from "./thisWeekFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 6 };
const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getThisWeekFestival(
  params: PaginationParamter = defaultParams,
) {
  const endpoint = ENDPOINT.thisWeek;
  const { data } = await staticInstance.get<ThisWeekFestivalData>(
    generateUrlWithParams(endpoint, params),
    {
      next: {
        revalidate: 10,
        tags: thisWeekFestivalKeys.all,
      },
    },
  );
  return data;
}
