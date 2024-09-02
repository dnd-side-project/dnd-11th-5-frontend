import { z } from "zod";

import { CREATE_FESTIVAL_SETTING, VALIDATION_ERROR_MESSAGES } from "@/config";

const CreateFestivalSchema = z.object({
  name: z
    .string({
      message: VALIDATION_ERROR_MESSAGES.required,
    })
    .min(1, VALIDATION_ERROR_MESSAGES.required)
    .max(
      CREATE_FESTIVAL_SETTING.NAME_MAX,
      VALIDATION_ERROR_MESSAGES.maxLength(CREATE_FESTIVAL_SETTING.NAME_MAX),
    ),
  description: z
    .string({
      message: VALIDATION_ERROR_MESSAGES.required,
    })
    .min(1, VALIDATION_ERROR_MESSAGES.required)
    .max(
      CREATE_FESTIVAL_SETTING.DESCRIPTION_MAX,
      VALIDATION_ERROR_MESSAGES.maxLength(
        CREATE_FESTIVAL_SETTING.DESCRIPTION_MAX,
      ),
    ),
  images: z
    .any()
    .refine((files) => {
      const fileSize = files?.[0]?.size;
      return fileSize <= CREATE_FESTIVAL_SETTING.MAX_FILE_SIZE;
    }, VALIDATION_ERROR_MESSAGES.maxSize(10))
    .refine((files) => {
      const fileFormat = files?.[0]?.type.split("/")[1];
      return (
        CREATE_FESTIVAL_SETTING.ACCEPTED_IMAGE_TYPES.includes(fileFormat),
        VALIDATION_ERROR_MESSAGES.invalidImage
      );
    }),
  startDate: z.string().min(1, VALIDATION_ERROR_MESSAGES.required).nullable(),
  endDate: z.string().min(1, VALIDATION_ERROR_MESSAGES.required).nullable(),
  latitude: z.string(),
  longitude: z.string(),
  address: z.string().min(1, VALIDATION_ERROR_MESSAGES.required),
  sido: z.string().min(1, VALIDATION_ERROR_MESSAGES.required),
  sigungu: z.string().min(1, VALIDATION_ERROR_MESSAGES.required),
  playtime: z.string().min(10, VALIDATION_ERROR_MESSAGES.required),
  homepageUrl: z.string().url(VALIDATION_ERROR_MESSAGES.url),
  instagramUrl: z.string().url(VALIDATION_ERROR_MESSAGES.url),
  ticketLink: z.string().url(VALIDATION_ERROR_MESSAGES.url),
  fee: z.string(),
  categoryIds: z.array(z.number()),
  moodIds: z.array(z.number()),
  tip: z.string(),
});

export type CreateFestivalType = z.output<typeof CreateFestivalSchema>;

export default CreateFestivalSchema;
