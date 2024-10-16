"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useMemo, useState } from "react";

import type { Review } from "@/apis/review/reviews/reviewsType";
import { IconButton } from "@/components/core/Button";
import { BasicChip } from "@/components/core/Chip";
import { DropdownMenu } from "@/components/core/Dropdown";
import { ProgressCircle } from "@/components/core/Progress";
import { FestivalRequstDialog } from "@/components/Dialog";
import { HeartIcon } from "@/components/icons";
import Ratings from "@/components/rating/Ratings";
import useDeleteReview from "@/hooks/review/useDeleteReview";
import useReportReview from "@/hooks/review/useReportReview";
import { formatToYYYYMMDD } from "@/lib/dayjs";
import { useUserStore } from "@/store/user";

interface Props {
  review: Review;
}

const TotalReviewListItem: FC<Props> = ({ review }) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const [isOpenReportDialog, setIsOpenReportDialog] = useState<boolean>(false);

  const { deleteReviewMutate, isDeleting } = useDeleteReview(review);
  const { reportReview, isReporting } = useReportReview();

  const handleReport = async (description: string) => {
    reportReview({ reviewId: review.reviewId, description });
  };

  const handleDelete = (reviewId: number) => {
    deleteReviewMutate(reviewId);
  };

  const myReviewOptions = [
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

  const othersReviewOptions = [
    {
      label: "신고하기",
      onClick: () => setIsOpenReportDialog(true),
    },
  ];

  const isMyReviewOptions = useMemo(() => {
    return user?.userId === review.user.userId
      ? myReviewOptions
      : othersReviewOptions;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.userId, review.user.userId]);

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
      {!!review.images.length && (
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
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-[8px] overflow-auto scrollbar-hide">
          {review.keywords.slice(0, 2).map((keyword) => (
            <BasicChip key={keyword.keywordId} label={keyword.keyword} />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <IconButton active={true}>
            <HeartIcon width={20} height={20} className="gap-2" />
          </IconButton>
          <span className="text-caption2-regular text-gray-scale-600">
            {review.likeCount}
          </span>
        </div>
      </div>

      <FestivalRequstDialog
        title="신고하기"
        open={isOpenReportDialog}
        onConfirm={handleReport}
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
