import { createSearchParamsCache, parseAsInteger } from "nuqs/server";

import { getHotFestival } from "@/apis/festivals/hotFestival";
import Pagination from "@/components/Pagination/Pagination";
import { DefaultHeader } from "@/layout/Mobile/MobileHeader";

import TrendTestView from "./view";

const searchParamsCache = createSearchParamsCache({
  page: parseAsInteger.withDefault(0),
  size: parseAsInteger.withDefault(6),
});

interface TrendPageProps {
  searchParams: Record<string, string>;
}

export default async function TrendPage({ searchParams }: TrendPageProps) {
  const parsedParams = searchParamsCache.parse(searchParams);
  const festivals = await getHotFestival(parsedParams);

  return (
    <div className="relative mb-[60px] mt-[44px]">
      <DefaultHeader href="/" label="HOT 페스티벌" />
      <TrendTestView festivals={festivals} />
      <Pagination currentPage={parsedParams.page} />
    </div>
  );
}
