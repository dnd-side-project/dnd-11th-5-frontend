"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";
import { FC, useState } from "react";

import { getFestivalBookmark } from "@/apis/festivals/bookmarkCountFestival/bookmarkCountFestival";
import { BookmarkCountFestivalKeys } from "@/apis/festivals/bookmarkCountFestival/bookmarkCountFestivalKeys";
import { patchBookmarkFestival } from "@/apis/festivals/bookmarkFestival/bookmarkFestival";
import { DetailFestivalResponse } from "@/apis/festivals/detailFestival/detailFestivalType";
import LoginRequiredDialog from "@/components/Dialog/LoginRequiredDialog/LoginRequiredDialog";
import { ScrabIcon } from "@/components/icons";

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

  const { mutate: toggleScrab } = useMutation({
    mutationFn: patchBookmarkFestival,
    onMutate: async (festivalId) => {
      await queryClient.cancelQueries({
        queryKey: BookmarkCountFestivalKeys.byId(festival.festivalId),
      });

      const previousBookmarkData = queryClient.getQueryData(
        BookmarkCountFestivalKeys.byId(festival.festivalId),
      );

      queryClient.setQueryData(
        BookmarkCountFestivalKeys.byId(festival.festivalId),
        (
          oldQueryData: Pick<
            DetailFestivalResponse,
            "bookmarkCount" | "isBookmarked"
          >,
        ) => {
          return {
            isBookmarked: !oldQueryData.isBookmarked,
            bookmarkCount: !oldQueryData.isBookmarked
              ? oldQueryData.bookmarkCount + 1
              : oldQueryData.bookmarkCount - 1,
          };
        },
      );
      return previousBookmarkData;
    },
    onError: (_error, _toggle, context) =>
      queryClient.setQueryData(
        BookmarkCountFestivalKeys.byId(festival.festivalId),
        context,
      ),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: BookmarkCountFestivalKeys.byId(festival.festivalId),
      }),
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
