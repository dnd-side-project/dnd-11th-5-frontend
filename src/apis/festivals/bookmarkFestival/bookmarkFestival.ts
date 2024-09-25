"use server";

import debounce from "lodash/debounce";

import { ClientError } from "@/apis/error";
import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { bookmarkFestivalResponse } from "./bookmarkFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export const debouncedPatchBookmarkFestival = debounce(
  (endpoint: string) => instance.patch<bookmarkFestivalResponse>(endpoint),
  400,
);

export async function patchBookmarkFestival(festivalId: number) {
  const endpoint = ENDPOINT.bookmark(festivalId);
  try {
    const response = await instance.patch<bookmarkFestivalResponse>(endpoint);

    return response.data;
  } catch (error) {
    if (error instanceof ClientError) {
      throw new Error("Session required");
    }
    throw new Error("something went wrong");
  }
}
