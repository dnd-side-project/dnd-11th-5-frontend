/**
 * 주어진 값이 숫자인지 확인하고 반환합니다.
 * 값이 숫자가 아닌 경우 0을 반환합니다.
 *
 * @param value - 확인할 값입니다.
 * @returns 값이 숫자인 경우 해당 값, 그렇지 않은 경우 0을 반환합니다.
 */
export const checkNumber = (value?: number | null): number => {
  if (typeof value === "number") {
    return value;
  }

  return 0;
};
