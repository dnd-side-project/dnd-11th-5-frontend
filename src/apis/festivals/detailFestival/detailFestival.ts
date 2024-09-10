"use server";

import { ClientError } from "@/apis/error";
import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { DetailFestivalResponse } from "./detailFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getDetailFestival(festivalId: string) {
  const endpoint = ENDPOINT.detail(festivalId);
  try {
    const response = await instance.get<DetailFestivalResponse>(endpoint, {
      // cache: "no-store",
      next: {
        revalidate: 86400,
        tags: [`festivals/${festivalId}`],
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof ClientError) {
      throw new Error("Session required");
    }
    throw new Error("something went wrong");
  }
}
