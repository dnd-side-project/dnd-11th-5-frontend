"use client";

import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { generateUrlWithParams } from "@/utils";

import { TopKeywordParameter, TopKeywords } from "./topKeywordFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function getFestivalTopKeywords({
  festivalId,
  size = 5,
}: TopKeywordParameter): Promise<TopKeywords> {
  const endpoint = ENDPOINT.topKeywords;
  const response = await instance.get<TopKeywords>(
    generateUrlWithParams(endpoint, { festivalId, size }),
    {
      cache: "no-store",
    },
  );

  return response.data;
}
