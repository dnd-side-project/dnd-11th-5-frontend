import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

import { FIESTA_ENDPOINTS } from "@/config";
import { env } from "@/env";

export const SearchFestivalHandler = [
  http.get(
    `${env.NEXT_PUBLIC_BASE_URL}${FIESTA_ENDPOINTS.festivals.search}`,

    async ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");

      return HttpResponse.json(GenerateSearchFestivalRespone(query));
    },
  ),
];

const GenerateSearchFestivalRespone = (query: string | null) => {
  const festivals = [];

  for (let i = 0; i < 20; i++) {
    festivals.push({
      festivalId: Number(faker.finance.accountNumber(4)),
      name: faker.company.name(),
      sido: faker.person.firstName("female"),
      sigungu: faker.person.firstName("male"),
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
      isBookmarked: faker.datatype.boolean(0.5),
    });
  }

  if (!query) {
    return {
      statusCode: 200,
      status: "OK",
      message: "스크랩 다건 조회 성공",
      data: {
        content: festivals,
        offset: 1,
        pageNumber: 0,
        pageSize: 5,
        totalElements: festivals.length,
        totalPages: 8,
      },
    };
  }
  const filteredData = festivals.filter((festival) =>
    (festival.name + festival.sido + festival.sido).includes(query ?? ""),
  );

  return {
    statusCode: 200,
    status: "OK",
    message: "스크랩 다건 조회 성공",
    data: {
      content: filteredData.splice(0, 6),
      offset: 1,
      pageNumber: 0,
      pageSize: 5,
      totalElements: filteredData.length,
      totalPages: 8,
    },
  };
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
