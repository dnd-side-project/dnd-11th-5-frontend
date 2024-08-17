"use server";

import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import instance from "../instance";
import { hotFestivalKeys } from "./hotFestivalkeys";
import { HostFestivalData, PaginationParamter } from "./types/hotFestival";

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
        revalidate: 85600,
        tags: hotFestivalKeys.all,
      },
    },
  );
  return data;
}
