export type ReviewUpdateResponse = {
  reviewId: number;
};

export type ReviewUpdateBody = {
  reviewId: number;
  content: string;
  rating: number;
  keywordIds: number[];
  images?: Array<File>;
};
