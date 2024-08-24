import { faker } from "@faker-js/faker";
import { delay, http, HttpResponse } from "msw";

import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";

export const topReviewsHandler = [
  http.get(
    `${env.NEXT_PUBLIC_BASE_URL}${FIESTA_ENDPOINTS.reviews.mostlike}`,

    async ({}) => {
      await delay(1000);
      return HttpResponse.json(GenerateTopReviews());
    },
  ),
];

const GenerateTopReviews = () => {
  const topReviews = [];

  for (let i = 0; i < 3; i++) {
    topReviews.push({
      reviewId: faker.number.int(),
      festivalId: faker.number.int(),
      festivalName: faker.lorem.text(),
      content: faker.lorem.sentences(3),
      rating: faker.number.int({ min: 1, max: 5 }),
      images: {
        imageId: faker.number.int(),
        imageUrl: "https://placehold.co/400.png",
      },
      keywords: [
        {
          keywordId: faker.number.int(),
          keyword: `${faker.internet.emoji()} ${faker.word.adverb(5)}`,
        },
        {
          keywordId: faker.number.int(),
          keyword: `${faker.internet.emoji()} ${faker.word.adverb(5)}`,
        },
        {
          keywordId: faker.number.int(),
          keyword: `${faker.internet.emoji()} ${faker.word.adverb(5)}`,
        },
      ],
    });
  }

  return {
    statusCode: 200,
    status: "OK",
    message: "리뷰 TOP3 조회 성공",
    data: topReviews,
  };
};
