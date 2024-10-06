"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";
import { FC, useState } from "react";

import { getFestivalBookmark } from "@/apis/festivals/bookmarkCountFestival/bookmarkCountFestival";
import { BookmarkCountFestivalKeys } from "@/apis/festivals/bookmarkCountFestival/bookmarkCountFestivalKeys";
import { patchBookmarkFestival } from "@/apis/festivals/bookmarkFestival/bookmarkFestival";
import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import { bookmarksKeys } from "@/apis/user/bookmarks/bookmarksKeys";
import LoginRequiredDialog from "@/components/Dialog/LoginRequiredDialog/LoginRequiredDialog";
import { ScrabIcon } from "@/components/icons";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";

interface Props {
  festival: DetailFestivalResponse;
  session: Session | null;
}

const ScrabButton: FC<Props> = ({ festival, session }) => {
  const { data: bookmark, isLoading } = useQuery({
    queryKey: BookmarkCountFestivalKeys.byId(festival.festivalId),
    queryFn: () => getFestivalBookmark(festival.festivalId),
  });

  const queryClient = useQueryClient();

  const { mutate: toggleScrab } = useOptimisticMutation({
    mutationFn: patchBookmarkFestival,
    queryKey: BookmarkCountFestivalKeys.byId(festival.festivalId),
    setQueryData: (data) => ({
      isBookmarked: !data.isBookmarked,
      bookmarkCount: !data.isBookmarked
        ? data.bookmarkCount + 1
        : data.bookmarkCount - 1,
    }),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: BookmarkCountFestivalKeys.byId(festival.festivalId),
      }),
        queryClient.invalidateQueries({
          queryKey: bookmarksKeys.all,
        });
    },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ! debounce 적용하려면 UI가 낙관적 UI 불과, boolean값을 아마 계속 넣어줘야할 것 같음
  // const debouncedToggleScrab = useMemo(
  //   () => debounce(() => toggleScrab(festival.festivalId), 400),
  //   [festival.festivalId, toggleScrab],
  // );

  const handleBookmarkToggle = () => {
    if (!session) {
      setIsOpen(true);
      return;
    }

    toggleScrab(festival.festivalId);
  };

  if (isLoading) {
    return (
      <div className="h-[45px] w-[33px] rounded-lg bg-gray-scale-200"></div>
    );
  }

  return (
    <>
      <button
        type="button"
        className="flex cursor-pointer flex-col items-center"
        onClick={() => handleBookmarkToggle()}
      >
        <ScrabIcon
          width={30}
          height={30}
          className={
            bookmark?.isBookmarked && session
              ? "text-primary-01"
              : "text-gray-scale-200"
          }
        />
        <span className="h-auto w-auto text-caption1-medium text-gray-700">
          {bookmark?.bookmarkCount}
        </span>
      </button>
      {isOpen && (
        <LoginRequiredDialog
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        />
      )}
    </>
  );
};

export default ScrabButton;
