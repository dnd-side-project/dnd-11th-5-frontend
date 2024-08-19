import { z } from "zod";

import { ONBOARDING_SETTING } from "@/config";

const MoodSchema = z.object({
  moodId: z.number(),
  name: z.string(),
});

const PrioritySchema = z.object({
  priorityId: z.number(),
  priority: z.string(),
});

const CompanySchema = z.object({
  companionId: z.number(),
  companionType: z.string(),
});

const CategorySchema = z.object({
  categoryId: z.number(),
  emoji: z.string(),
  name: z.string(),
});

const MoodsSchema = z
  .array(MoodSchema)
  .min(ONBOARDING_SETTING.MOOD_MIN, "at least three items");
const PrioritiesSchema = z
  .array(PrioritySchema)
  .min(ONBOARDING_SETTING.PRIORITY_MIN, "at least one item");
const companionsSchema = z.array(CompanySchema).min(1, "at least one item");
const CategoriesSchema = z
  .array(CategorySchema)
  .min(ONBOARDING_SETTING.CATEGORY_MIN, "at least two items");

export const OnBoardingSchema = z.object({
  categories: CategoriesSchema,
  moods: MoodsSchema,
  companions: companionsSchema,
  priorities: PrioritiesSchema,
});
