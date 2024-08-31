"use server";

import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils/generateUrlWithParams";

import {
  PaginationParamter,
  RecommendFestivalResponse,
} from "./recommendFestivalType";

const defaultParams: PaginationParamter = { page: 0, size: 5 };
const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getRecommendFestival(
  params: PaginationParamter = defaultParams,
) {
  try {
    const endpoint = ENDPOINT.recommend;
    const { data } = await instance.get<RecommendFestivalResponse>(
      generateUrlWithParams(endpoint, params),
      {
        cache: "no-store",
      },
    );
    return data;
  } catch (error) {
    return null;
  }
}
