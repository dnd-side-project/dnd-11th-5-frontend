import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { Keyword } from "../reviews/reviewsType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function getReviewKeywords() {
  const endpoint = ENDPOINT.keywords;
  const data = await FiestaInstance.get<Array<Keyword>>(endpoint, {
    cache: "force-cache",
    next: {
      tags: ["/reviews/keywords"],
    },
  });

  return data;
}
