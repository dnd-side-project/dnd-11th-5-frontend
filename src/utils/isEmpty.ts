export type EmptyString = "";
export type EmptyObject = Record<string, never>;
export type EmptyArray = never[];

export type Empty = EmptyArray | EmptyObject | EmptyString;

type EmptyResult<T> = T extends string
  ? EmptyString
  : T extends unknown[]
    ? EmptyArray
    : T extends object
      ? EmptyObject
      : never;

export function isEmpty<
  T extends string | unknown[] | object | null | undefined,
>(
  value: T | Empty | null | undefined,
): value is EmptyResult<T> | null | undefined {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}
