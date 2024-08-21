export const getSettledValue = <T>(
  result: PromiseSettledResult<T>,
  defaultValue: T,
): T => {
  return result.status === "fulfilled" ? result.value : defaultValue;
};
