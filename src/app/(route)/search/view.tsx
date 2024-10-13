import { Suspense } from "react";

import SearchFestival from "./_components/SearchFestivalList";
import SearchHistory from "./_components/SearchHistory";
import TrendingFestival from "./_components/TrendingFestival";
import TrendingFestivalSkeleton from "./_components/TrendingFestival/TrendingFestivalSkeleton";

const SearchView = () => {
  return (
    <main className="mt-[60px] flex h-full w-full flex-col gap-4 px-[16px]">
      <SearchHistory />

      <Suspense fallback={<TrendingFestivalSkeleton />}>
        <TrendingFestival />
      </Suspense>

      <SearchFestival />
    </main>
  );
};

export default SearchView;
