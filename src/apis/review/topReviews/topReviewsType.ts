export interface TopReview {
  reviewId: number;
  festivalId: number;
  festivalName: string;
  content: string;
  rating: number;
  thumbnailImage?: string;
  keywords: {
    keywordId: number;
    keyword: string;
  }[];
}
