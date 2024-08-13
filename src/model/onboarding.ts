export type FestivalMood = {
  moodId: number;
  mood: string;
};

export type FestivalCompanion = {
  companionId: number;
  companionType: string;
};

export type FestivalCategory = {
  categoryId: number;
  categoryEmoji: string;
  category: string;
};

export type FestivalPriority = {
  priorityId: number;
  priority: string;
};

export type FestivalMoodResponse = {
  statusCode: number;
  status: string;
  message: string;
  data: FestivalMood[];
};

export type FestivalCompanionResponse = {
  statusCode: number;
  status: string;
  message: string;
  data: FestivalCompanion[];
};

export type FestivalCategoryResponse = {
  statusCode: number;
  status: string;
  message: string;
  data: FestivalCategory[];
};

export type FestivalPriorityResponse = {
  statusCode: number;
  status: string;
  message: string;
  data: FestivalPriority[];
};

export type OnboardingModel = {
  categories: Array<FestivalCategory>;
  companies: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
};
