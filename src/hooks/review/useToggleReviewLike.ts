"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { useMemo } from "react";

import { patchReviewLike } from "@/apis/review/reviewLike/reviewLike";
import { reviewsKeys } from "@/apis/review/reviews/reviewKeys";
import {
  FestivalReviewsParameters,
  FestivalReviewsResponse,
  Review,
  SortOption,
} from "@/apis/review/reviews/reviewsType";

const useToggleReviewLike = (review: Review) => {
  const queryClient = useQueryClient();
  const [page] = useQueryState("page", parseAsInteger.withDefault(0));
  const [sort] = useQueryState("sort", {
    defaultValue: SortOption.createdAt,
  });

  const params: FestivalReviewsParameters = useMemo(
    () => ({
      festivalId: review.festivalId,
      page,
      size: 6,
      sort,
    }),
    [page, sort, review],
  );

  const queryKey = useMemo(() => reviewsKeys.list(params), [params]);

  return useMutation({
    mutationFn: patchReviewLike,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });

      const context = queryClient.getQueryData(
        queryKey,
      ) as FestivalReviewsResponse;

      const newContent = context.content.map((r) => {
        if (r.reviewId === review.reviewId) {
          return {
            ...r,
            likeCount: !review.isLiked
              ? review.likeCount + 1
              : review.likeCount - 1,
            isLiked: !review.isLiked,
          };
        }
      });
      queryClient.setQueryData(queryKey, { ...context, content: newContent });
      return { context };
    },
    onError: (_error, _variables, context) =>
      queryClient.setQueryData(queryKey, context?.context),

    onSettled: (_data, _error, _variables, _context) =>
      queryClient.invalidateQueries({ queryKey }),
  });
};

export default useToggleReviewLike;
