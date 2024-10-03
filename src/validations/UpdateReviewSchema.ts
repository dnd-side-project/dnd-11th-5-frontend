import { z } from "zod";

import { CREATE_FESTIVAL_SETTING, VALIDATION_ERROR_MESSAGES } from "@/config";

const UpdateReviewSchema = z.object({
  reviewId: z.string({ message: VALIDATION_ERROR_MESSAGES.required }),
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
    .nullable()
    .refine((files) => {
      const fileSize = files?.[0]?.size ?? 0;
      return fileSize <= CREATE_FESTIVAL_SETTING.MAX_FILE_SIZE;
    }, VALIDATION_ERROR_MESSAGES.maxSize(10))
    .refine((files) => {
      const fileFormat = files?.[0]?.type.split("/")[1].toLowerCase();
      return (
        CREATE_FESTIVAL_SETTING.ACCEPTED_IMAGE_TYPES.includes(fileFormat),
        VALIDATION_ERROR_MESSAGES.invalidImage
      );
    }),
  deletedImages: z.array(z.number()).optional(),
  keywordIds: z.array(z.number()),
});

export type UpdateReviewSchemaType = z.output<typeof UpdateReviewSchema>;

export default UpdateReviewSchema;
