export type UserProfileRequest = {
  categoryIds: number[];
  moodIds: number[];
  companionIds: number[];
  priorityIds: number[];
};

export type UserProfileResponse = {
  userTypeId: number;
  userTypeName: string;
  userTypeImage: string;
};
