import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewUpdateBody, ReviewUpdateResponse } from "./reviewUpdateType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function patchReview(payload: ReviewUpdateBody) {
  const { reviewId, ...body } = payload;
  const endpoint = ENDPOINT.detail(String(reviewId));
  const { data } = await instance.patch<ReviewUpdateResponse>(endpoint, body);

  return data;
}
