"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useQueryState } from "nuqs";

import { getTrendingFestival } from "@/apis/festivals/trendingFestival/trendingFestival";
import { TrendingFestivalKeys } from "@/apis/festivals/trendingFestival/trendingFestivalKeys";
import { cn } from "@/utils";

const TrendingFestival = () => {
  const { data } = useSuspenseQuery({
    queryKey: TrendingFestivalKeys.all,
    queryFn: getTrendingFestival,
  });

  const [query] = useQueryState("query", { shallow: true });

  if (query) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col gap-[16px]">
      <div className="flex w-full justify-start gap-[4px]">
        <span className="text-subtitle-semi text-gray-scale-900">
          실시간 급상승 페스티벌
        </span>
        <span className="text-subtitle-semi text-primary-01">TOP 5</span>
      </div>

      <div className="flex w-full flex-col rounded-[8px] bg-gray-scale-50 p-[12px]">
        {data.map((festival, idx, arr) => {
          return (
            <Link
              href={`/festivals/${festival.festivalId}`}
              key={festival.festivalId}
              className={cn(
                "w-full",
                idx + 1 !== arr.length &&
                  " border-b-[1px] border-gray-scale-200",
              )}
            >
              <div className="flex h-auto w-full items-center gap-[12px] rounded-[8px] py-[16px]">
                <div className="text-subtitle-semi text-primary-01">
                  {idx + 1}
                </div>
                <div className="line-clamp-1 max-w-[90%] text-ellipsis whitespace-nowrap text-body2-medium text-gray-scale-600">
                  {festival.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingFestival;
