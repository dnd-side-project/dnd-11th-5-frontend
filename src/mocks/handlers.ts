import { http, HttpResponse } from "msw";

import HotFestival from "./festivalMocks/HotFestival.json";
import HotFestivalPage1 from "./festivalMocks/HotFestival_1.json";
import HotFestivalPage2 from "./festivalMocks/HotFestival_2.json";
import HotFestivalPage3 from "./festivalMocks/HotFestival_3.json";

export const handlers = [
  http.get(
    "https://odiga.shop/api/v1/festivals/mostlike",

    ({ request }) => {
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
