import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";
import { generateUrlWithParams } from "@/utils";

import {
  FestivalReviewsParameters,
  FestivalReviewsResponse,
} from "./reviewsType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function getReviews(params: FestivalReviewsParameters) {
  const endpoint = ENDPOINT.base;
  const { data } = await instance.get<FestivalReviewsResponse>(
    generateUrlWithParams(endpoint, params),
    {
      cache: "no-store",
    },
  );

  return data;
}
