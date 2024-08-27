"use server";

import instance from "@/apis/instance";
import { FIESTA_ENDPOINTS } from "@/config";

import { TopReview } from "./topReviewsType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function getTopReviews() {
  const endpoint = ENDPOINT.mostlike;
  const { data } = await instance.get<Array<TopReview>>(endpoint, {
    cache: "no-store",
  });

  return data;
}
