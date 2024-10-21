export const onboardingInfoKeys = {
  all: ["onboardingInfo"] as const,
  individual: (userId: string | number | undefined) => [
    ...onboardingInfoKeys.all,
    userId,
  ],
};
