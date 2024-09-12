import Link from "next/link";
import { FC, Suspense } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { PencilIcon } from "@/components/icons";

import TopKeywords from "./_components/TopKeywords/TopKeywords";
import TopKeywordsSkeleton from "./_components/TopKeywords/TopKeywordsSkeleton";
import TotalReviews from "./_components/TotalReviews/TotalReview";

interface Props {
  festivals: DetailFestivalResponse;
}

const Review: FC<Props> = ({ festivals }) => {
  return (
    <>
      <Suspense fallback={<TopKeywordsSkeleton />}>
        <TopKeywords festivalId={festivals.festivalId} />
      </Suspense>

      <Link
        href="/review/new"
        className="flex w-full items-center justify-center gap-[2px]"
      >
        <PencilIcon width={20} height={20} className="text-primary-01" />
        <span className="text-gray-scale-500">리뷰 쓰기</span>
      </Link>

      <div className="h-[11px] w-full bg-gray-scale-100" />

      <TotalReviews festivals={festivals} />
    </>
  );
};

export default Review;
