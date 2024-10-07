"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";

import { topKeywordFestivalKeys } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalKeys";
import { deleteReview } from "@/apis/review/reviewDelete/reviewDelete";
import { postReviewReport } from "@/apis/review/reviewReport/reviewReport";
import { reviewsKeys } from "@/apis/review/reviews/reviewKeys";
import { Review } from "@/apis/review/reviews/reviewsType";
import { BasicChip } from "@/components/core/Chip";
import { DropdownMenu, DropdownOption } from "@/components/core/Dropdown";
import { ProgressCircle } from "@/components/core/Progress";
import { FestivalRequstDialog } from "@/components/Dialog";
import Ratings from "@/components/rating/Ratings";
import { formatToYYYYMMDD } from "@/lib/dayjs";
import { useUserStore } from "@/store/user";

interface Props {
  review: Review;
}

const TotalReviewListItem: FC<Props> = ({ review }) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [isOpenReportDialog, setIsOpenReportDialog] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { mutate: deleteReviewMutate, isPending: isDeleting } = useMutation({
    mutationFn: async (reviewId: number) => await deleteReview(reviewId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: reviewsKeys.all,
      }),
        queryClient.invalidateQueries({
          queryKey: topKeywordFestivalKeys.list({
            festivalId: review.festivalId,
          }),
        });
    },
  });

  const { mutate: postReviewMutate, isPending: isReporting } = useMutation({
    mutationFn: async (body: { reviewId: number; description: string }) =>
      await postReviewReport(body),
  });

  const handleDelete = (reviewId: number) => {
    deleteReviewMutate(reviewId);
  };

  const myReviewOptions: Array<DropdownOption> = [
    {
      label: "수정하기",
      onClick: () =>
        router.push(
          `/festivals/${review.festivalId}/review/${review.reviewId}`,
        ),
    },
    {
      label: "삭제하기",
      onClick: () => handleDelete(review.reviewId),
    },
  ];

  const othersReviewOptions: Array<DropdownOption> = [
    {
      label: "신고하기",
      onClick: () => setIsOpenReportDialog(true),
    },
  ];

  const isMyReviewOptions = useMemo(() => {
    return user?.userId === review.user.userId
      ? myReviewOptions
      : othersReviewOptions;
  }, [review]);

  return (
    <div
      key={review.reviewId}
      className="flex flex-col gap-[8px] border-b-[1px] border-gray-scale-100 py-[20px]"
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex w-full gap-[4px] ">
          <Image
            className="rounded-full"
            src={review.user.profileImage ?? "/images/fallbackLogo.png"}
            alt={review.user.nickname ?? `${review.reviewId}-image`}
            width={33}
            height={33}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-[4px]">
              <span className="text-body2-semi text-gray-scale-700">
                {review.user.nickname}
              </span>
              <span className="text-caption1-regular text-gray-scale-400">
                {formatToYYYYMMDD(review.createdAt)}
              </span>
            </div>
            <Ratings rating={review.rating} />
          </div>
        </div>

        {!!user && <DropdownMenu options={isMyReviewOptions} />}
      </div>
      {!isEmpty(review.images) && (
        <div className="flex w-full gap-[8px]">
          {review.images.map((image) => (
            <Image
              className="aspect-square"
              key={image.imageId}
              src={image.imageUrl}
              alt={`image-${image.imageId}`}
              width={62}
              height={62}
            />
          ))}
        </div>
      )}
      <p className="text-body1-regular-lh-20 text-gray-scale-700">
        {review.content}
      </p>
      <div className="flex w-full justify-between">
        <div className="flex gap-[8px] overflow-auto scrollbar-hide">
          {review.keywords.map((keyword) => (
            <BasicChip key={keyword.keywordId} label={keyword.keyword} />
          ))}
        </div>
      </div>

      <FestivalRequstDialog
        title="신고하기"
        open={isOpenReportDialog}
        onConfirm={async (description) =>
          postReviewMutate({ reviewId: review.reviewId, description })
        }
        onOpenChange={() => setIsOpenReportDialog((prev) => !prev)}
      />

      {(isDeleting || isReporting) && (
        <div className="flex h-[400px] w-full items-center justify-center">
          <ProgressCircle className="size-[100px]" />
        </div>
      )}
    </div>
  );
};

export default TotalReviewListItem;
