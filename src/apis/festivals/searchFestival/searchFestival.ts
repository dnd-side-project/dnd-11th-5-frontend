import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import {
  SearchFestival,
  SearchFestivalParameter,
  SearchFestivalResponse,
} from "./searchFestivalType";

const defaultParams: SearchFestivalParameter = { query: "" };
const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getSearchFestival(
  params: SearchFestivalParameter = defaultParams,
): Promise<Array<SearchFestival>> {
  const endpoint = ENDPOINT.search;
  const { data } = await instance.get<SearchFestivalResponse>(
    generateUrlWithParams(endpoint, params),
    {
      cache: "no-store",
    },
  );
  return data.content;
}
