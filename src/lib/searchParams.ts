// ? https://nuqs.47ng.com/playground/pagination

import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
} from "nuqs/server";

export const renderingOptions = ["server", "client"] as const;
export type RenderingOptions = (typeof renderingOptions)[number];

export const searchParams = {
  page: parseAsInteger.withDefault(0),
  size: parseAsInteger.withDefault(6),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);
