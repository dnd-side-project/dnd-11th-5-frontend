"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

import type { Review } from "@/apis/review/reviews/reviewsType";
import { IconButton } from "@/components/core/Button";
import { BasicChip } from "@/components/core/Chip";
import { DropdownMenu } from "@/components/core/Dropdown";
import { ProgressCircle } from "@/components/core/Progress";
import { FestivalRequstDialog } from "@/components/Dialog";
import { HeartIcon } from "@/components/icons";
import Ratings from "@/components/rating/Ratings";
import useReportReview from "@/hooks/useReportReview";
import useReview from "@/hooks/useReview";
import useToggleReviewLike from "@/hooks/useToggleReviewLike";
import { formatToYYYYMMDD } from "@/lib/dayjs";
import { useUserStore } from "@/store/userStore";

interface Props {
  review: Review;
}

const TotalReviewListItem: FC<Props> = ({ review }) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [isOpenReportDialog, setIsOpenReportDialog] = useState<boolean>(false);

  const { deleteReviewMutate, isLoadingDeleteReview } = useReview();
  const { reportReview, isReporting } = useReportReview();
  const { mutate: toggleReviewLike } = useToggleReviewLike(review);

  const handleReport = async (description: string) => {
    reportReview({ reviewId: review?.reviewId, description });
  };

  const handleDelete = (reviewId: number) => {
    deleteReviewMutate(String(reviewId));
  };

  const handleToggle = () => {
    toggleReviewLike({ reviewId: review?.reviewId });
  };

  const myReviewOptions = [
    {
      label: "수정하기",
      onClick: () =>
        router.push(
          `/festivals/${review?.festivalId}/review/${review?.reviewId}`,
        ),
    },
    {
      label: "삭제하기",
      onClick: () => handleDelete(review?.reviewId),
    },
  ];

  const othersReviewOptions = [
    {
      label: "신고하기",
      onClick: () => setIsOpenReportDialog(true),
    },
  ];

  return (
    <div
      key={review?.reviewId}
      className="flex flex-col gap-[8px] border-b-[1px] border-gray-scale-100 py-[20px]"
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex w-full gap-[4px] ">
          <Image
            className="rounded-full"
            src={review?.user?.profileImage ?? "/images/fallbackLogo.png"}
            alt={`${review?.reviewId}-image`}
            width={33}
            height={33}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-[4px]">
              <span className="text-body2-semi text-gray-scale-700">
                {review?.user?.nickname ?? "익명"}
              </span>
              <span className="text-caption1-regular text-gray-scale-400">
                {formatToYYYYMMDD(review?.createdAt)}
              </span>
            </div>
            <Ratings rating={review?.rating} />
          </div>
        </div>

        {!!user && (
          <DropdownMenu
            options={
              user?.userId === review?.user.userId
                ? myReviewOptions
                : othersReviewOptions
            }
          />
        )}
      </div>
      {!!review?.images.length && (
        <div className="flex w-full gap-[8px]">
          {review?.images.map((image) => (
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
        {review?.content}
      </p>
      <div className="flex w-full items-center justify-between gap-1">
        <div className="flex gap-[8px] overflow-auto scrollbar-hide">
          {review?.keywords
            .slice(0, 2)
            .map((keyword) => (
              <BasicChip key={keyword.keywordId} label={keyword.keyword} />
            ))}
        </div>
        {!!user && review?.user.userId != user?.userId && (
          <div className="flex w-[30px] items-center justify-between gap-2">
            <IconButton active={review?.isLiked} onClick={handleToggle}>
              <HeartIcon width={20} height={20} className="gap-2" />
            </IconButton>
            <span className="text-caption2-regular text-gray-scale-600">
              {review?.likeCount}
            </span>
          </div>
        )}
      </div>

      <FestivalRequstDialog
        title="신고하기"
        open={isOpenReportDialog}
        onConfirm={handleReport}
        onOpenChange={() => setIsOpenReportDialog((prev) => !prev)}
      />

      {(isLoadingDeleteReview || isReporting) && (
        <div className="flex h-[400px] w-full items-center justify-center">
          <ProgressCircle className="size-[100px]" />
        </div>
      )}
    </div>
  );
};

export default TotalReviewListItem;
