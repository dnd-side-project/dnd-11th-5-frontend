export const extractKeyFromArray = <T, K extends keyof T>(
  array: Array<T>,
  key: K,
): Array<T[K]> => array.map((item) => item[key]);
