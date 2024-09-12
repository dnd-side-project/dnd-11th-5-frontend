import { faker } from "@faker-js/faker";
import { delay, http, HttpResponse } from "msw";

import { TopKeywords } from "@/apis/festivals/topKeywordFestival/topKeywordFestivalType";
import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";

export const topKeywordFestivalHandler = [
  http.get(
    `${env.NEXT_PUBLIC_BASE_URL}${FIESTA_ENDPOINTS.reviews.topKeywords}`,

    async ({}) => {
      await delay(1000);
      return HttpResponse.json(GenerateTopKeywords());
    },
  ),
];

const GenerateTopKeywords = () => {
  const data: TopKeywords = {
    keywords: [],
    totalCount: 0,
  };

  for (let i = 0; i < 5; i++) {
    data.keywords.push({
      keywordId: faker.number.int({ min: 1, max: 99 }),
      keyword: `${faker.internet.emoji()} ${faker.word.adjective()}`,
      selectionCount: faker.number.int({ min: 1, max: 9 }), // 해당 키워드 선택 갯수
    });
  }

  data.totalCount = data.keywords.reduce(
    (acc, cur) => acc + cur.selectionCount,
    0,
  );

  return {
    statusCode: 200,
    status: "OK",
    message: "가장 많이 선택된 키워드 조회 성공",
    data,
  };
};
