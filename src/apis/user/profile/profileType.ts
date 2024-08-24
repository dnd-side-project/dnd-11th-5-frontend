export type UserProfileRequest = {
  category: number[];
  mood: number[];
  companion: number[];
  priority: number[];
};

export type UserProfileResponse = {
  userTypeId: number;
  userTypeName: string;
  userTypeImage: string;
};
