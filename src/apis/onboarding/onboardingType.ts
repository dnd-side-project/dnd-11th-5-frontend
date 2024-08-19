export type FestivalMood = {
  moodId: number;
  name: string;
};

export type FestivalCompanion = {
  companionId: number;
  companionType: string;
};

export type FestivalCategory = {
  categoryId: number;
  emoji: string;
  name: string;
};

export type FestivalPriority = {
  priorityId: number;
  priority: string;
};

export type OnboardingModel = {
  categories: Array<FestivalCategory>;
  companions: Array<FestivalCompanion>;
  priorities: Array<FestivalPriority>;
  moods: Array<FestivalMood>;
};
