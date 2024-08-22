import { match } from "path-to-regexp";

export const isMatchPath = (pathname: string, urls: string[]) =>
  urls.some((url) => !!match(url)(pathname));
