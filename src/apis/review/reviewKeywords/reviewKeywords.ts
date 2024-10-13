import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewKeyword } from "./reviewKeywordsType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function getReviewKeywords() {
  const endpoint = ENDPOINT.keywords;
  const data = await FiestaInstance.get<Array<ReviewKeyword>>(endpoint, {
    cache: "force-cache",
    next: {
      tags: ["/reviews/keywords"],
    },
  });

  return data;
}
