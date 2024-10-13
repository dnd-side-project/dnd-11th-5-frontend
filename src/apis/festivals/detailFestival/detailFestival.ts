"use server";

import FiestaInstance from "@/apis/FiestaInstance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { DetailFestivalResponse } from "./detailFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getDetailFestival(festivalId: string) {
  const endpoint = ENDPOINT.detail(festivalId);
  const response = await FiestaInstance.get<DetailFestivalResponse>(endpoint, {
    next: {
      revalidate: 86400,
      tags: [`festivals/${festivalId}`],
    },
  });

  return response;
}
