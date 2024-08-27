import type { NextRequest } from "next/server";

import { env } from "@/env";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");

  const result = await fetch(
    "https://dapi.kakao.com/v2/local/search/address.json?query=" + query,
    {
      headers: {
        Authorization: `KakaoAK ${env.AUTH_KAKAO_ID}`,
      },
    },
  ).then((res) => res.json());

  return Response.json(result, { status: 200 });
}
