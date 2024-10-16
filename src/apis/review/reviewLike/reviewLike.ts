import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewLikeResponse } from "./reviewLikeType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function postReviewReport({
  reviewId,
}: {
  reviewId: string | number;
}) {
  const endpoint = ENDPOINT.like(reviewId);
  const data = await FiestaInstance.patch<ReviewLikeResponse>(endpoint);

  return data;
}
