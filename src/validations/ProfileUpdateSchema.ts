import { z } from "zod";

import { ONBOARDING_SETTING } from "@/config";

const MoodsSchema = z
  .array(z.number())
  .min(ONBOARDING_SETTING.MOOD_MIN, "at least three items");

const PrioritiesSchema = z
  .array(z.number())
  .min(ONBOARDING_SETTING.PRIORITY_MIN, "at least one item");

const companionsSchema = z.array(z.number()).min(1, "at least one item");

const CategoriesSchema = z
  .array(z.number())
  .min(ONBOARDING_SETTING.CATEGORY_MIN, "at least two items");

export const ProfileUpdateSchema = z.object({
  categoryIds: CategoriesSchema,
  moodIds: MoodsSchema,
  companionIds: companionsSchema,
  priorityIds: PrioritiesSchema,
});

export type ProfileUpdateSchemaType = z.output<typeof ProfileUpdateSchema>;
