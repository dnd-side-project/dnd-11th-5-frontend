"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { getMe } from "@/apis/user/me/me";
import { getUserOnboardingInfo } from "@/apis/user/onboarding-info/onboarding-info";
import { onboardingInfoKeys } from "@/apis/user/onboarding-info/onboarding-infoKeys";
import { patchProfile } from "@/apis/user/profile/patchProfile";
import { useUserStore } from "@/store/userStore";
import { ProfileUpdateSchemaType } from "@/validations/ProfileUpdateSchema";

export const useUserOnBoarding = () => {
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const { update } = useSession();
  const queryClient = useQueryClient();
  const { data: userOnboardingInfo } = useQuery({
    queryKey: onboardingInfoKeys.individual(user?.id),
    queryFn: () => getUserOnboardingInfo(),
  });

  const { mutate: updateUserOnboardingMutate } = useMutation({
    mutationFn: async (body: ProfileUpdateSchemaType) =>
      await patchProfile(body),
    onSettled: async () => {
      queryClient.invalidateQueries({
        queryKey: onboardingInfoKeys.all,
      });
      const user = await getMe();
      updateUser(user);
      update({ user });
    },
  });

  return {
    userOnboardingInfo,
    updateUserOnboardingMutate,
  };
};
