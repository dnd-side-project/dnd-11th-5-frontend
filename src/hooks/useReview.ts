"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { topKeywordFestivalKeys } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalKeys";
import { reviewsKeys } from "@/apis/review/reviews/reviewKeys";
import {
  deleteReview,
  getReview,
  postReviews,
  updateReview,
} from "@/apis/review/reviews/reviews";
import { NewReviewSchemaType } from "@/validations/NewReviewSchema";
import { UpdateReviewSchemaType } from "@/validations/UpdateReviewSchema";

const useReview = (reviewId?: string, festivalId?: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: review, isLoading: isLoadingReview } = useQuery({
    queryKey: reviewsKeys.detail(Number(reviewId)),
    queryFn: () => getReview(reviewId as string),
    enabled: !!reviewId,
  });

  const { mutate: updateReviewMutate, isPending: isLoadingUpdateReview } =
    useMutation({
      mutationFn: (payload: UpdateReviewSchemaType) => updateReview(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: reviewsKeys.all });
        queryClient.invalidateQueries({ queryKey: topKeywordFestivalKeys.all });
      },
      onSettled: () => festivalId && router.replace(`/festivals/${festivalId}`),
    });

  const { mutate: postReviewsMutate, isPending: isLoadingPostReview } =
    useMutation({
      mutationFn: (data: NewReviewSchemaType) => postReviews(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: reviewsKeys.all });
        queryClient.invalidateQueries({ queryKey: topKeywordFestivalKeys.all });
      },
      onSettled: () => festivalId && router.replace(`/festivals/${festivalId}`),
    });

  const { mutate: deleteReviewMutate, isPending: isLoadingDeleteReview } =
    useMutation({
      mutationFn: async (reviewId: string) => await deleteReview(reviewId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: reviewsKeys.all });
        queryClient.invalidateQueries({ queryKey: topKeywordFestivalKeys.all });
      },
    });

  return {
    review,
    updateReviewMutate,
    postReviewsMutate,
    deleteReviewMutate,
    isLoadingReview,
    isLoadingUpdateReview,
    isLoadingPostReview,
    isLoadingDeleteReview,
  };
};

export default useReview;
