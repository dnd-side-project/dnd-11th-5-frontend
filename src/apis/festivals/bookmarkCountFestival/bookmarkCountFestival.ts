"use server";

import { ClientError } from "@/apis/error";
import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { DetailFestivalResponse } from "../detailFestival/detailFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export async function getFestivalBookmark(festivalId: number) {
  const endpoint = ENDPOINT.detail(String(festivalId));
  try {
    const response = await instance.get<
      Pick<DetailFestivalResponse, "bookmarkCount" | "isBookmarked">
    >(endpoint, {
      cache: "no-store",
    });

    const { isBookmarked, bookmarkCount } = response.data;

    return {
      isBookmarked,
      bookmarkCount,
    };
  } catch (error) {
    if (error instanceof ClientError) {
      throw new Error("Session required");
    }
    throw new Error("something went wrong");
  }
}
