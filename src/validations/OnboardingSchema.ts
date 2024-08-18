import { z } from "zod";

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

const MoodsSchema = z.array(MoodSchema).min(3, "at least three items");
const PrioritiesSchema = z.array(PrioritySchema).min(3, "at least one item");
const companionsSchema = z.array(CompanySchema).min(1, "at least one item");
const CategoriesSchema = z.array(CategorySchema).min(2, "at least two items");

export const OnBoardingSchema = z.object({
  categories: CategoriesSchema,
  moods: MoodsSchema,
  companions: companionsSchema,
  priorities: PrioritiesSchema,
});
