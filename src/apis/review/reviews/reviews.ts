import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";
import { generateUrlWithParams } from "@/utils";
import { NewReviewSchemaType } from "@/validations/NewReviewSchema";
import { UpdateReviewSchemaType } from "@/validations/UpdateReviewSchema";

import {
  FestivalReviewsParameters,
  FestivalReviewsResponse,
  PostReviewResponse,
  Review,
} from "./reviewsType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function getReview(reviewId: string) {
  const endpoint = ENDPOINT.detail(reviewId);

  const data = await FiestaInstance.get<Review>(endpoint, {
    cache: "no-store",
  });

  return data;
}

export async function getReviews(params: FestivalReviewsParameters) {
  const endpoint = ENDPOINT.base;
  const data = await FiestaInstance.get<FestivalReviewsResponse>(
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

  const data = await FiestaInstance.post<PostReviewResponse>(endpoint, {
    body: formData,
  });

  return data;
}

export async function updateReview(payload: UpdateReviewSchemaType) {
  const { images, reviewId, ...rest } = payload;
  const endpoint = ENDPOINT.detail(reviewId);
  const formData = new FormData();

  formData.append(
    "data",
    new Blob([JSON.stringify(rest)], { type: "application/json" }),
  );

  images?.forEach((image: File) => {
    formData.append("images", image);
  });

  const data = await FiestaInstance.patch<PostReviewResponse>(endpoint, {
    body: formData,
  });

  return data;
}

export async function deleteReview(reviewId: string) {
  const endpoint = ENDPOINT.detail(reviewId);

  const data = await FiestaInstance.delete<Review>(endpoint);

  return data;
}
