import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewUpdateBody, ReviewUpdateResponse } from "./reviewUpdateType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function patchReview(payload: ReviewUpdateBody) {
  const { reviewId, ...body } = payload;
  const endpoint = ENDPOINT.detail(String(reviewId));
  const data = await FiestaInstance.patch<ReviewUpdateResponse>(endpoint, {
    json: body,
  });

  return data;
}
