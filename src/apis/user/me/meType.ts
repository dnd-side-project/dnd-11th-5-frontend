type UserMeResponse = {
  userId: number;
  email: string;
  nickname: string;
  statusMessage: string;
  profileImage: string;
  isProfileCreated?: boolean;
  isProfileRegistered: boolean;
  userTypeId: number;
};
