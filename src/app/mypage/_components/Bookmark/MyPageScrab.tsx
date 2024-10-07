import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FC, useRef, useState } from "react";

import { patchBookmarkFestival } from "@/apis/festivals/bookmarkFestival/bookmarkFestival";
import { SortOption } from "@/apis/review/reviews/reviewsType";
import { getBookmarkedFestival } from "@/apis/user/bookmarks/bookmarks";
import { bookmarksKeys } from "@/apis/user/bookmarks/bookmarksKeys";
import {
  BookmarkFestivalParameter,
  BookmarksResponse,
} from "@/apis/user/bookmarks/bookmarksType";
import { TrendFestivalCard } from "@/components/core/Card";
import ClientPagination from "@/components/Pagination/ClientPagination";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";

import MypageBookmarkFallback from "./MypageBookmarkFallback";
import MypageBookmarkSkeleton from "./MypageBookmarkSkeleton";

interface Props {}

const MypageBookmark: FC<Props> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const [params, setParams] = useState<BookmarkFestivalParameter>({
    sort: SortOption.createdAt,
    page: 0,
    size: 6,
  });

  const { data, isLoading } = useQuery({
    queryKey: bookmarksKeys.list(params),
    queryFn: () => getBookmarkedFestival(params),
  });

  const { mutate: toggleBookmark } = useOptimisticMutation({
    mutationFn: patchBookmarkFestival,
    queryKey: bookmarksKeys.list(params),
    onMutate: async (festivalId) => {
      await queryClient.cancelQueries({
        queryKey: bookmarksKeys.list(params),
      });

      const previousBookmarkData = queryClient.getQueryData(
        bookmarksKeys.list(params),
      );

      queryClient.setQueryData(
        bookmarksKeys.list(params),
        (oldQueryData: BookmarksResponse) => ({
          ...oldQueryData,
          content: oldQueryData.content.filter(
            (c: { festivalId: number }) => c.festivalId !== festivalId,
          ),
        }),
      );
      return previousBookmarkData;
    },
  });

  const handlePage = (page: number) => {
    setParams((prev) => ({ ...prev, page }));

    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <MypageBookmarkSkeleton />;
  }

  if (data?.content.length === 0 || !data) {
    return <MypageBookmarkFallback />;
  }

  return (
    <div className=" flex flex-col gap-[18px]" ref={containerRef}>
      <span className="text-subtitle-bold text-gray-scale-700">
        {data.totalElements}개의 페스티벌
      </span>

      <div className="grid w-full grid-cols-2 gap-y-[24px]">
        {data.content?.map((festival, index) => (
          <TrendFestivalCard
            key={festival.festivalId + index}
            href={`/festivals/${festival.festivalId}`}
            festival={festival}
            isBookmarkAvailable
            isBookmarked={festival.isBookmarked}
            onToggle={() => toggleBookmark(festival.festivalId)}
          />
        ))}
      </div>

      <ClientPagination
        currentPage={data.pageNumber + 1}
        totalPage={data.totalPages}
        onChange={handlePage}
        size={3}
      />
    </div>
  );
};

export default MypageBookmark;
