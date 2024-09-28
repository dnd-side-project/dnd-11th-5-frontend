import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";
import { generateUrlWithParams } from "@/utils";
import { NewReviewSchemaType } from "@/validations/NewReviewSchema";

import {
  FestivalReviewsParameters,
  FestivalReviewsResponse,
  PostReviewResponse,
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

export async function postReviews(payload: NewReviewSchemaType) {
  const endpoint = ENDPOINT.base;

  const { images, ...rest } = payload;
  const formData = new FormData();

  formData.append(
    "data",
    new Blob([JSON.stringify(rest)], { type: "application/json" }),
  );

  images?.forEach((image: File) => {
    formData.append("images", image);
  });

  const { data } = await instance.post<PostReviewResponse>(endpoint, formData);

  return data;
}
