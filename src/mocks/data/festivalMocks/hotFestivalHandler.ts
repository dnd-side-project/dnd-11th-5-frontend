import { faker } from "@faker-js/faker";
import { delay, http, HttpResponse } from "msw";

export const FestivalHandler = [
  http.get(
    "https://odiga.shop/api/v1/festivals/mostlike",

    async ({ request }) => {
      await delay(500);

      const url = new URL(request.url);
      const page = url.searchParams.get("page");
      const size = url.searchParams.get("size");

      return HttpResponse.json(
        GenerateHotFestivalRespone(Number(page), Number(size)),
      );
    },
  ),
];

const GenerateHotFestivalRespone = (page: number = 0, size: number = 6) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const festivals = [
    {
      festivalId: 1 * page + 1,
      name: faker.company.name(),
      sido: "서울",
      sigungu: "광진구",
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
    },
    {
      festivalId: 2 * page + 1,
      name: faker.company.name(),
      sido: "서울",
      sigungu: "광서구",
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
    },
    {
      festivalId: 3 * page + 1,
      name: faker.company.name(),
      sido: "부산",
      sigungu: "해운대구",
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
    },
    {
      festivalId: 4 * page + 1,
      name: faker.company.name(),
      sido: "전북",
      sigungu: "전주시",
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
    },
    {
      festivalId: 5 * page + 1,
      name: faker.company.name(),
      sido: "강원",
      sigungu: "속초시",
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
    },
    {
      festivalId: 6 * page + 1,
      name: faker.company.name(),
      sido: "제주",
      sigungu: "제주시",
      thumbnailImage: "https://placehold.co/400.png",
      startDate: formatDate(faker.date.future()),
      endDate: formatDate(faker.date.future()),
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
