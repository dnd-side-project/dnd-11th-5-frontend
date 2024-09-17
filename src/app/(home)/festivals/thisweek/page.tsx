import { createSearchParamsCache, parseAsInteger } from "nuqs/server";

import { getThisWeekFestival } from "@/apis/festivals/thisweek/thisWeekFestival";
import ServerPagination from "@/components/Pagination/ServerPagination";
import { FIESTA_ENDPOINTS } from "@/config";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";

import ThisWeekFestivalView from "./view";

const searchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(0),
  size: parseAsInteger.withDefault(6),
});

interface TrendPageProps {
  searchParams: Record<string, string>;
}

export default async function TrendPage({ searchParams }: TrendPageProps) {
  const parsedParams = searchParamsCache.parse(searchParams);
  const festivals = await getThisWeekFestival(parsedParams);

  return (
    <div className="relative mb-[60px] mt-[44px]">
      <DefaultHeader href="/" label="이번주 페스티벌" />
      <ThisWeekFestivalView festivals={festivals} />
      <ServerPagination
        currentPath={FIESTA_ENDPOINTS.festivals.thisWeek}
        currentPage={parsedParams.page}
        totalPage={festivals.totalPages}
        size={parsedParams.size}
      />
    </div>
  );
}
