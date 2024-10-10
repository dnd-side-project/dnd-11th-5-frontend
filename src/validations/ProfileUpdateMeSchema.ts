import { z } from "zod";

import { PROFILE_SETTINGS } from "@/config/ProfileSetting";

export const ProfileMeUpdateSchema = z.object({
  nickname: z
    .string()
    .max(
      PROFILE_SETTINGS.NICKNAME_MAX,
      `최대 ${PROFILE_SETTINGS.NICKNAME_MAX}글자입니다.`,
    ),
  statusMessage: z
    .string()
    .max(
      PROFILE_SETTINGS.STATUS_MESSAGE,
      `최대 ${PROFILE_SETTINGS.STATUS_MESSAGE}글자입니다.`,
    ),
});

export type ProfileMeUpdateSchemaType = z.output<typeof ProfileMeUpdateSchema>;
