export const isMatchPath = (pathname: string, urls: string[]) =>
  urls.some((url) => pathname.includes(url));
