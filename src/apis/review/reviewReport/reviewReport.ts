import FiestaInstance from "@/apis/FiestaInstance";
import { FIESTA_ENDPOINTS } from "@/config";

import { ReviewReportResponse } from "./reviewReportType";

const ENDPOINT = FIESTA_ENDPOINTS.reviews;

export async function postReviewReport(body: {
  reviewId: number;
  description: string;
}) {
  const endpoint = ENDPOINT.reports(String(body.reviewId));
  const data = await FiestaInstance.post<ReviewReportResponse>(endpoint, {
    description: body.description,
  });

  return data;
}
