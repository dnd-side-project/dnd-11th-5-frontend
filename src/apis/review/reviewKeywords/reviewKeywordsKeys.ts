export const reviewKeywordsKeys = {
  all: ["reviews"] as const,
  detail: (reviewId: string | number) =>
    [...reviewKeywordsKeys.all, reviewId] as const,
};
