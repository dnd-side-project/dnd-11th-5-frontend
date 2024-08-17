import { http, HttpResponse } from "msw";

import HotFestival from "./data/festivalMocks/HotFestival.json";
import HotFestivalPage1 from "./data/festivalMocks/HotFestival_1.json";
import HotFestivalPage2 from "./data/festivalMocks/HotFestival_2.json";
import HotFestivalPage3 from "./data/festivalMocks/HotFestival_3.json";

export const handlers = [
  http.get(
    "https://odiga.shop/api/v1/festivals/mostlike",

    async ({ request }) => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const url = new URL(request.url);
      const page = url.searchParams.get("page");

      if (!!page) {
        const pageNumber = parseInt(page);
        const pageIndex = pageNumber % 3;
        if (pageIndex === 1) {
          return HttpResponse.json(HotFestivalPage1);
        }
        if (pageIndex === 2) {
          return HttpResponse.json(HotFestivalPage2);
        }
        if (pageIndex === 0) {
          return HttpResponse.json(HotFestivalPage3);
        }
      }

      return HttpResponse.json(HotFestival);
    },
  ),
];
