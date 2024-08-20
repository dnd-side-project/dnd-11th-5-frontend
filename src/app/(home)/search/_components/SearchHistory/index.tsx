"use client";

import { useQueryState } from "nuqs";

import { SearchHistoryChip } from "@/components/core/Chip";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useSwipingContainer } from "@/hooks/useSwipingContainer";

const SearchHistory = () => {
  const [query, setQuery] = useQueryState("query", { shallow: true });
  const { containerRef, mouseDownHandler } = useSwipingContainer();
  const { get, set, del, reset } = useSearchHistory();

  if (query) {
    return null;
  }

  return (
    <div className="flex h-auto w-full flex-col gap-[16px] py-[20px]">
      <div className="flex w-full justify-between">
        <span className="text-subtitle-semi text-gray-scale-900">
          최근 검색한 페스티벌
        </span>
        <button
          type="button"
          className="text-caption1-medium text-gray-scale-600"
          onClick={reset}
        >
          전체 삭제
        </button>
      </div>
      <div
        ref={containerRef}
        onMouseDown={mouseDownHandler}
        className="flex min-h-[32px] w-full gap-[8px] overflow-hidden"
      >
        {get.map((history: string) => (
          <SearchHistoryChip
            key={history}
            text={history}
            onClick={() => del(history)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
