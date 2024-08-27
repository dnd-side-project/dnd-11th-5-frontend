export interface TopReview {
  reviewId: number;
  festivalId: number;
  festivalName: string;
  content: string;
  rating: number;
  images?: {
    imageId: number;
    imageUrl: string;
  };
  keywords: {
    keywordId: number;
    keyword: string;
  }[];
}
