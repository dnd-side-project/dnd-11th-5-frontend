import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

import { FestivalReviewsResponse } from "@/apis/review/reviews/reviewsType";
import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";

export const reviewsHandler = [
  http.get(
    `${env.NEXT_PUBLIC_BASE_URL}${FIESTA_ENDPOINTS.reviews.base}`,

    async ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");

      return HttpResponse.json(GenerateReviewsHandler(query));
    },
  ),
];

const GenerateReviewsHandler = (query: string | null) => {
  const data: FestivalReviewsResponse = {
    content: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  };

  for (let i = 0; i < faker.number.int({ min: 1, max: 4 }); i++) {
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
  data.pageSize = 6;
  data.totalPages = Math.round(data.content.length / 6);
  data.pageNumber = 1;

  if (!query) {
    return {
      statusCode: 200,
      status: "OK",
      message: "리뷰 다건 조회 성공",
      data,
    };
  }
};
