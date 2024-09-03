"use server";

import { ClientError } from "@/apis/error";
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
  const endpoint = ENDPOINT.recommend;
  try {
    const response = await instance.get<RecommendFestivalResponse>(
      generateUrlWithParams(endpoint, params),
      {
        cache: "no-store",
      },
    );

    return response.data;
  } catch (error) {
    if (error instanceof ClientError) {
      throw new Error("Session required");
    }
    throw new Error("something went wrong");
  }
}
