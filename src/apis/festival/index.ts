import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import instance from "../instance";
import { HotFestivalResponse, PagenationParamter } from "./festival";

const getHotFestival = async (
  params?: PagenationParamter,
): Promise<HotFestivalResponse> => {
  const baseUrl = "/festivals/mostlike";
  const response = await instance.get<HotFestivalResponse>(
    generateUrlWithParams(baseUrl, params),
  );

  return response.data;
};

export { getHotFestival };
