import { z } from "zod";

import { CREATE_FESTIVAL_SETTING, VALIDATION_ERROR_MESSAGES } from "@/config";

const NewReviewSchema = z.object({
  rating: z
    .number({
      message: VALIDATION_ERROR_MESSAGES.required,
    })
    .min(0, VALIDATION_ERROR_MESSAGES.required)
    .max(5),
  content: z
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
  festivalId: z.string({
    message: VALIDATION_ERROR_MESSAGES.required,
  }),
  keywordIds: z.array(z.number()),
});

export type NewReviewSchemaType = z.output<typeof NewReviewSchema>;

export default NewReviewSchema;
