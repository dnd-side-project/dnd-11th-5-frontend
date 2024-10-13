"use client";

import { isNotNil, isString } from "es-toolkit/predicate";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

import FestivalSearchTile from "@/components/core/List/FestivalSearchTile/FestivalSearchTile";
import { ProgressCircle } from "@/components/core/Progress";
import { useGetSearchFestival } from "@/hooks/useGetSearchFestival";
import { useSearchHistory } from "@/hooks/useSearchHistory";

import SearchFestivalFallback from "./SearchFestivalFallback";

const SearchFestival = () => {
  const [query] = useQueryState("query", { shallow: true });
  const { data, isLoading } = useGetSearchFestival(query ?? "", 300);
  const { set } = useSearchHistory();

  useEffect(() => {
    if (isString(query) && isNotNil(query) && query.length > 0) {
      set(query);
    }
  }, [data]);

  const isQueryStringEmpty = query?.length === 0;
  const HasNoData = !data || data?.length === 0;

  if (isLoading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <ProgressCircle className="size-[100px]" />
      </div>
    );
  }

  if (isQueryStringEmpty) {
    return null;
  }

  if (HasNoData) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <SearchFestivalFallback />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-[4px] rounded-[8px] p-[12px]">
      {data.map((festival) => {
        return (
          <FestivalSearchTile key={festival.festivalId} festival={festival} />
        );
      })}
    </div>
  );
};

export default SearchFestival;
