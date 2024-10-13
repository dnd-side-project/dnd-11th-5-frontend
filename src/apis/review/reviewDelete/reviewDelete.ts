import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewDeleteResponse } from "./reviewDeleteType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function deleteReview(reviewId: number) {
  const endpoint = ENDPOINT.detail(String(reviewId));
  const data = await FiestaInstance.delete<ReviewDeleteResponse>(endpoint);

  return data;
}
