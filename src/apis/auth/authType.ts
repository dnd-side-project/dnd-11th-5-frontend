export type SocialLoginRequest = {
  id: string;
  email: string;
  accessToken: string;
};

export type SocialLoginResponse = {
  accessToken: string;
  refreshToken: string;
  isProfileRegistered: boolean;
};

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};
