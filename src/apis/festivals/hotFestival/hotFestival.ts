"use server";

import instance from "@/apis/instance";
import { REVALIDATE_DURATION } from "@/config";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import { hotFestivalKeys } from "./hotFestivalkeys";
import { HostFestivalData, PaginationParamter } from "./hotFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 6 };
const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getHotFestival(
  params: PaginationParamter = defaultParams,
) {
  const endpoint = ENDPOINT.mostlike;
  const { data } = await instance.get<HostFestivalData>(
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
