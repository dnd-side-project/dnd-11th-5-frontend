import FiestaInstance from "@/apis/FiestaInstance";
import FIESTA_ENDPOINTS from "@/config/apiEndpoints";
import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

import { CreateFestivalResponse } from "./createFestivalType";

const ENDPOINT = FIESTA_ENDPOINTS.festivals.base;

export async function createFestival(payload: CreateFestivalType) {
  const { images, ...rest } = payload;
  const formData = new FormData();

  formData.append(
    "data",
    new Blob([JSON.stringify(rest)], { type: "application/json" }),
  );

  images?.forEach((image: File) => {
    formData.append("images", image);
  });

  const response = await FiestaInstance.post<CreateFestivalResponse>(ENDPOINT, {
    body: formData,
  });

  return response;
}
