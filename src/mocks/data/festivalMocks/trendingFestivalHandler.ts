import { faker } from "@faker-js/faker";
import { delay, http, HttpResponse } from "msw";

import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";

export const trendingFestivalHandler = [
  http.get(
    `${env.NEXT_PUBLIC_BASE_URL}${FIESTA_ENDPOINTS.festivals.trending}`,

    async ({ request }) => {
      await delay(1000);

      const url = new URL(request.url);
      const page = url.searchParams.get("page");
      const size = url.searchParams.get("size");

      return HttpResponse.json(
        GenerateTrendingFestivalRespone(Number(page), Number(size)),
      );
    },
  ),
];

const GenerateTrendingFestivalRespone = (
  page: number = 0,
  size: number = 5,
) => {
  const festivals = [
    {
      festivalId: faker.finance.accountNumber(5),
      name: faker.company.name(),
    },
    {
      festivalId: faker.finance.accountNumber(5),
      name: faker.company.name(),
    },
    {
      festivalId: faker.finance.accountNumber(5),
      name: faker.company.name(),
    },
    {
      festivalId: faker.finance.accountNumber(5),
      name: faker.company.name(),
    },
    {
      festivalId: faker.finance.accountNumber(5),
      name: faker.company.name(),
    },
  ];

  return {
    statusCode: 200,
    status: "OK",
    message: "스크랩 다건 조회 성공",
    data: {
      content: festivals,
      offset: 1,
      pageNumber: page,
      pageSize: size,
      totalElements: festivals.length,
      totalPages: 8,
    },
  };
};
