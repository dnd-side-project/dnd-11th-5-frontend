import { Metadata } from "next/types";
import { createSearchParamsCache, parseAsInteger } from "nuqs/server";

import { getHotFestival } from "@/apis/festivals/hotFestival/hotFestival";
import ServerPagination from "@/components/Pagination/ServerPagination";
import { FIESTA_ENDPOINTS } from "@/config";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";

import TrendTestView from "./view";

export const metadata: Metadata = {
  title: "핫 페스티벌",
};

const searchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(0),
  size: parseAsInteger.withDefault(6),
});

interface HotFestivalPageProps {
  searchParams: Record<string, string>;
}

export default async function HotFestivalPage({
  searchParams,
}: HotFestivalPageProps) {
  const parsedParams = searchParamsCache.parse(searchParams);
  const festivals = await getHotFestival(parsedParams);

  return (
    <div className="relative mb-[60px] mt-[44px]">
      <DefaultHeader href="/" label="HOT 페스티벌" />
      <TrendTestView festivals={festivals} />
      <ServerPagination
        currentPath={FIESTA_ENDPOINTS.festivals.mostlike}
        currentPage={parsedParams.page}
        totalPage={festivals.totalPages}
        size={parsedParams.size}
      />
    </div>
  );
}
