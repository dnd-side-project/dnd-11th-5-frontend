import { useSuspenseQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { FC, useMemo, useRef } from "react";

import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { reviewsKeys } from "@/apis/review/reviews/reviewKeys";
import { getReviews } from "@/apis/review/reviews/reviews";
import {
  FestivalReviewsParameters,
  SortOption,
} from "@/apis/review/reviews/reviewsType";
import ClientPagination from "@/components/Pagination/ClientPagination";
import { cn } from "@/utils";

import TotalReviewFallback from "./TotalReviewFallback";
import TotalReviewList from "./TotalReviewList";

interface Props {
  festivals: DetailFestivalResponse;
}

const TotalReviews: FC<Props> = ({ festivals }) => {
  const totalReviewLabelRef = useRef<HTMLSpanElement>(null);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(0));
  const [sort, setSort] = useQueryState("sort", {
    defaultValue: SortOption.createdAt,
  });

  const params: FestivalReviewsParameters = useMemo(
    () => ({
      festivalId: festivals.festivalId,
      sort,
      page,
      size: 6,
    }),
    [page, sort, festivals],
  );

  const handlePage = (page: number) => {
    setPage(page);

    if (totalReviewLabelRef.current) {
      totalReviewLabelRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data } = useSuspenseQuery({
    queryKey: reviewsKeys.list(params),
    queryFn: () => getReviews(params),
  });

  return (
    <article className="w-full p-[8px]">
      <div className="flex w-full justify-between ">
        <span
          ref={totalReviewLabelRef}
          className="text-body2-semi text-gray-scale-700"
        >{`총 ${data.totalElements}개의 리뷰`}</span>

        <div className="flex gap-[8px]">
          <button
            type="button"
            className={cn(
              "text-body2-semi",
              params.sort === SortOption.createdAt
                ? "text-primary-01"
                : "text-gray-scale-400 ",
            )}
            onClick={() => setSort(SortOption.createdAt)}
          >
            최신순
          </button>
          <button
            type="button"
            className={cn(
              "text-gray-scale-400 text-body2-semi",
              params.sort === SortOption.likeCount
                ? "text-primary-01"
                : "text-gray-scale-400 ",
            )}
            onClick={() => setSort(SortOption.likeCount)}
          >
            추천순
          </button>
        </div>
      </div>

      {data.content.length < 1 || !data ? (
        <TotalReviewFallback />
      ) : (
        <>
          <TotalReviewList reviews={data.content} />
          <ClientPagination
            currentPage={data.pageNumber + 1}
            totalPage={data.totalPages}
            onChange={handlePage}
            size={3}
          />
        </>
      )}
    </article>
  );
};

export default TotalReviews;
