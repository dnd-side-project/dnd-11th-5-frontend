"use server";

import type { PaginationParamter } from "@/apis/festival";
import FiestaInstance from "@/apis/FiestaInstance";
import { REVALIDATE_DURATION } from "@/config";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { hotFestivalKeys } from "./hotFestivalkeys";
import { HostFestivalData } from "./hotFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 6 };

export async function getHotFestival(
  params: PaginationParamter = defaultParams,
) {
  const endpoint = FIESTA_ENDPOINTS.festivals.mostlike;

  const data = await FiestaInstance.get<HostFestivalData>(
    generateUrlWithParams(endpoint, params),
    {
      next: {
        revalidate: REVALIDATE_DURATION.DAY,
        tags: hotFestivalKeys.all,
      },
    },
  );

  return data;
}
