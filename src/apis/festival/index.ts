"use server";

import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import instance from "../instance";
import { PagenationParamter } from "./festival";

const getTrendFestival = async (
  params: PagenationParamter = { page: 0, size: 6 },
) => {
  const baseUrl = "/api/v1/festivals/mostlike";
  return await instance.get(generateUrlWithParams(baseUrl, params));
};

export { getTrendFestival };
