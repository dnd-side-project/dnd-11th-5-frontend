"use server";

import instance from "@/apis/instance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";

import { CreateFestivalResponse } from "./createFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals.base;

export async function createFestival(body: FormData) {
  const { data } = await instance.post<CreateFestivalResponse>(ENDPOINT, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}
