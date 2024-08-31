import { FieldPath } from "react-hook-form";

import { CreateFestivalType } from "@/validations/CreateFestivalSchema";

export const CREATE_FESTIVAL_SETTING = Object.freeze({
  INITIAL_STEP: 1,
  TOTAL_STEP: 2,
  NAME_MAX: 30,
  DESCRIPTION_MAX: 300,
  MAX_FILE_SIZE: 10 * 1024 * 1024,
  ACCEPTED_IMAGE_TYPES: ["jpeg", "jpg", "png", "webp"],
});

export const CREATE_FESTIVAL_VALIDATION_FIELDS: Record<
  number,
  Array<FieldPath<CreateFestivalType>>
> = {
  1: ["name", "description", "images"],
  2: [
    "startDate",
    "endDate",
    "latitude",
    "longitude",
    "address",
    "sido",
    "sigungu",
    "playtime",
    "homepageUrl",
    "instagramUrl",
    "ticketLink",
    "fee",
    "categoryIds",
    "moodIds",
    "tip",
  ],
};
