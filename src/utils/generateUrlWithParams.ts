import { generateQueryString } from "@/utils/generateQueryString";
import { isEmpty } from "@/utils/isEmpty";

export function generateUrlWithParams(
  baseURL: string,
  params?: object,
): string {
  if (!params || isEmpty(params)) {
    return baseURL;
  }

  const queryString = generateQueryString(params);
  return `${baseURL}?${queryString}`;
}
