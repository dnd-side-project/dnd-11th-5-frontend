import { useMutation } from "@tanstack/react-query";

import { postReviewReport } from "@/apis/review/reviewReport/reviewReport";

const useReportReview = () => {
  const { mutate: reportReview, isPending: isReporting } = useMutation({
    mutationFn: async (body: { reviewId: number; description: string }) =>
      await postReviewReport(body),
  });

  return { reportReview, isReporting };
};

export default useReportReview;
