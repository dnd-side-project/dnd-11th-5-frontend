"use server";

import { debounce } from "es-toolkit/function";

import { ClientError } from "@/apis/error";
import FiestaInstance from "@/apis/FiestaInstance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { bookmarkFestivalResponse } from "./bookmarkFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals;

export const debouncedPatchBookmarkFestival = debounce(
  (endpoint: string) =>
    FiestaInstance.patch<bookmarkFestivalResponse>(endpoint),
  400,
);

export async function patchBookmarkFestival(festivalId: number) {
  const endpoint = ENDPOINT.bookmark(festivalId);
  try {
    const response =
      await FiestaInstance.patch<bookmarkFestivalResponse>(endpoint);

    return response;
  } catch (error) {
    if (error instanceof ClientError) {
      throw new Error("Session required");
    }
    throw new Error("something went wrong");
  }
}
