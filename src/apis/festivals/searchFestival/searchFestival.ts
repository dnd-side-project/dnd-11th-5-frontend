import FiestaInstance from "@/apis/FiestaInstance";
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
  const response = await FiestaInstance.get<SearchFestivalResponse>(
    generateUrlWithParams(endpoint, params),
    {
      cache: "no-store",
    },
  );

  return response.content;
}
