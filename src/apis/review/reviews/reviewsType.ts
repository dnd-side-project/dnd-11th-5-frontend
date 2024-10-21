export type FestivalReviewsParameters = {
  festivalId?: number | string;
  sort?: SortOption | string;
  page?: number;
  size?: number;
};

export interface FestivalReviewsResponse {
  content: Review[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface Review {
  reviewId: number;
  festivalId: number;
  user: User;
  content: string;
  createdAt: string;
  updatedAt?: string;
  isLiked: boolean;
  likeCount: number;
  rating: number;
  images: Image[];
  keywords: Keyword[];
}

export interface User {
  userId: number;
  profileImage: string | null;
  nickname: string | null;
}

export interface Image {
  imageId: number;
  imageUrl: string;
}

export interface Keyword {
  keywordId: number;
  keyword: string;
}

export enum SortOption {
  createdAt = "createdAt",
  likeCount = "likeCount",
  desc = "desc",
}

export type PostReviewResponse = {
  reviewId: number;
};
