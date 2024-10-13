"use server";

import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS, REVALIDATE_DURATION } from "@/config";

import { TopReview } from "./topReviewsType";

export async function getTopReviews() {
  const endpoint = FIESTA_ENDPOINTS.reviews.mostlike;
  const response = await FiestaInstance.get<Array<TopReview>>(endpoint, {
    next: {
      revalidate: REVALIDATE_DURATION.SECOND * 10,
    },
  });

  return response;
}
