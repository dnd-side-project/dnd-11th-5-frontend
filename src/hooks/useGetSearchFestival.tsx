import { keepPreviousData, useQuery } from "@tanstack/react-query";
import debounce from "lodash/debounce";
import { useEffect, useState } from "react";

import { getSearchFestival } from "@/apis/festivals/searchFestival/searchFestival";
import { SearchFestivalKeys } from "@/apis/festivals/searchFestival/searchFestivalKeys";

export const useGetSearchFestival = (query: string, delay: number = 500) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedQuery(query);
    }, delay);

    handler();

    return () => {
      handler.cancel();
    };
  }, [query, delay]);

  const { data, error, isLoading } = useQuery({
    queryKey: SearchFestivalKeys.list({ query: debouncedQuery ?? "" }),
    queryFn: () => getSearchFestival({ query: debouncedQuery ?? "" }),
    enabled: !!debouncedQuery,
    placeholderData: keepPreviousData,
  });

  return { data, error, isLoading };
};
