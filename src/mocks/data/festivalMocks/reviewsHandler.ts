import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

import {
  FestivalReviewsResponse,
  SortOption,
} from "@/apis/review/reviews/reviewsType";
import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";

export const reviewsHandler = [
  http.get(
    `${env.NEXT_PUBLIC_BASE_URL}${FIESTA_ENDPOINTS.reviews.base}`,

    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page");
      const size = url.searchParams.get("size");
      const sort = url.searchParams.get("sort");

      return HttpResponse.json(
        GenerateReviewsHandler(Number(page), Number(size), sort as string),
      );
    },
  ),
];

const GenerateReviewsHandler = (page: number, size: number, sort: string) => {
  const data: FestivalReviewsResponse = {
    content: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  };

  for (let i = 0; i < faker.number.int({ min: 12, max: 18 }); i++) {
    const images = [];
    const numImages = faker.number.int({ min: 0, max: 3 });

    for (let j = 0; j < numImages; j++) {
      images.push({
        imageId: faker.number.int(),
        imageUrl: "/images/festival.png",
      });
    }

    data.content.push({
      reviewId: i + 1,
      festivalId: Number(faker.finance.accountNumber(4)),
      user: {
        userId: Number(faker.finance.accountNumber(4)),
        profileImage: "/images/fallbackLogo.png",
        nickname: faker.lorem.word(),
      },
      content: faker.lorem.sentence(),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.datatype.boolean()
        ? faker.date.past().toISOString()
        : undefined,
      isLiked: faker.datatype.boolean(),
      likeCount: faker.number.int({ min: 1, max: 30 }),
      rating: faker.number.int({ min: 1, max: 5 }),
      images,
      keywords: [
        {
          keywordId: faker.number.int(),
          keyword: faker.lorem.word(),
        },
        {
          keywordId: faker.number.int(),
          keyword: faker.lorem.word(),
        },
      ],
    });
  }

  data.totalElements = data.content.length;
  data.pageSize = size;
  data.totalPages = Math.ceil(data.totalElements / size);
  data.pageNumber = page - 1;

  const startIndex = page * size;
  const endIndex = startIndex + size;
  data.content = data.content.slice(startIndex, endIndex);

  if (sort === SortOption.likeCount) {
    data.content.sort((a, b) => b.likeCount - a.likeCount);
  }

  return {
    statusCode: 200,
    status: "OK",
    message: "리뷰 다건 조회 성공",
    data,
  };
};
