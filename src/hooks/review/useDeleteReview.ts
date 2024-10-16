import { useMutation, useQueryClient } from "@tanstack/react-query";

import { topKeywordFestivalKeys } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalKeys";
import { deleteReview } from "@/apis/review/reviewDelete/reviewDelete";
import { reviewsKeys } from "@/apis/review/reviews/reviewKeys";
import type { Review } from "@/apis/review/reviews/reviewsType";

const useDeleteReview = (review: Review) => {
  const queryClient = useQueryClient();

  const { mutate: deleteReviewMutate, isPending: isDeleting } = useMutation({
    mutationFn: async (reviewId: number) => await deleteReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reviewsKeys.all });
      queryClient.invalidateQueries({
        queryKey: topKeywordFestivalKeys.list({
          festivalId: review.festivalId,
        }),
      });
    },
  });

  return { deleteReviewMutate, isDeleting };
};

export default useDeleteReview;
