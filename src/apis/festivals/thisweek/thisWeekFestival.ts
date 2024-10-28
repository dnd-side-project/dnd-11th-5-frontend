"use server";

import type { PaginationParamter } from "@/apis/festival";
import FiestaInstance from "@/apis/FiestaInstance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { thisWeekFestivalKeys } from "./thisWeekFestivalKeys";
import { ThisWeekFestivalData } from "./thisWeekFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 6 };

export async function getThisWeekFestival(
  params: PaginationParamter = defaultParams,
) {
  const endpoint = FIESTA_ENDPOINTS.festivals.thisWeek;
  const response = await FiestaInstance.get<ThisWeekFestivalData>(
    generateUrlWithParams(endpoint, params),
    {
      next: {
        revalidate: 10,
        tags: thisWeekFestivalKeys.all,
      },
    },
  );

  return response;
}
