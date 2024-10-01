import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewDeleteResponse } from "./reviewDeleteType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function deleteReview(reviewId: number) {
  const endpoint = ENDPOINT.detail(String(reviewId));
  const { data } = await instance.delete<ReviewDeleteResponse>(endpoint);

  return data;
}
